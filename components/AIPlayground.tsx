import React, { useState } from 'react';
import { generateMarketingCopy, generateAIImage, generateAIVideo } from '../services/geminiService';
import { Loader2, Type, Image as ImageIcon, Video, AlertCircle } from 'lucide-react';
import { GeneratorType } from '../types';

const AIPlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<GeneratorType>(GeneratorType.TEXT);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Text specific state
  const [textTone, setTextTone] = useState('Professional');
  const [textType, setTextType] = useState('Social Media Post');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      let output = '';
      if (activeTab === GeneratorType.TEXT) {
        output = await generateMarketingCopy(prompt, textTone, textType);
      } else if (activeTab === GeneratorType.IMAGE) {
        output = await generateAIImage(prompt);
      } else if (activeTab === GeneratorType.VIDEO) {
        output = await generateAIVideo(prompt);
      }
      setResult(output);
    } catch (err: any) {
        if (err.message === "API_KEY_REQUIRED") {
             setError("BILLING_KEY_REQUIRED");
        } else {
             setError(err.message || "Something went wrong.");
        }
    } finally {
      setLoading(false);
    }
  };

  const handleVeoKeySelect = async () => {
      try {
          const aistudio = (window as any).aistudio;
          if (aistudio) {
            await aistudio.openSelectKey();
            // Retry automatically or ask user to click generate again.
            // For UX, let's reset error and ask user to click.
            setError(null);
            alert("Key selected! Please click Generate again.");
          }
      } catch (e) {
          console.error(e);
          setError("Failed to open key selector.");
      }
  }

  return (
    <section id="ai-studio" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold tracking-wider text-sm">LIVE DEMO</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">CleverCore AI Studio</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Experience the power of our AI models. Generate copy, visuals, or videos instantly.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => { setActiveTab(GeneratorType.TEXT); setResult(null); setError(null); }}
            className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === GeneratorType.TEXT ? 'bg-primary text-white shadow-lg shadow-primary/25' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Type className="w-4 h-4 mr-2" /> Copywriter
          </button>
          <button
            onClick={() => { setActiveTab(GeneratorType.IMAGE); setResult(null); setError(null); }}
            className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === GeneratorType.IMAGE ? 'bg-primary text-white shadow-lg shadow-primary/25' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <ImageIcon className="w-4 h-4 mr-2" /> Designer
          </button>
          <button
            onClick={() => { setActiveTab(GeneratorType.VIDEO); setResult(null); setError(null); }}
            className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
              activeTab === GeneratorType.VIDEO ? 'bg-primary text-white shadow-lg shadow-primary/25' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
            }`}
          >
            <Video className="w-4 h-4 mr-2" /> Director (Veo)
          </button>
        </div>

        {/* Workspace */}
        <div className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Side */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                    {activeTab === GeneratorType.TEXT ? 'What should we write about?' : 'Describe your vision'}
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={
                    activeTab === GeneratorType.TEXT ? "e.g., A launch post for a new organic coffee blend..." :
                    activeTab === GeneratorType.IMAGE ? "e.g., A futuristic neon city with flying cars, cyberpunk style..." :
                    "e.g., A drone shot of a coastline during sunset..."
                  }
                  className="w-full h-32 bg-slate-900 border border-slate-600 rounded-lg p-4 text-white focus:ring-2 focus:ring-primary focus:border-transparent resize-none placeholder-slate-500"
                />
              </div>

              {activeTab === GeneratorType.TEXT && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Tone</label>
                    <select 
                        value={textTone}
                        onChange={(e) => setTextTone(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-600 rounded-lg p-2.5 text-white"
                    >
                      <option>Professional</option>
                      <option>Friendly</option>
                      <option>Witty</option>
                      <option>Urgent</option>
                      <option>Luxury</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Format</label>
                     <select 
                        value={textType}
                        onChange={(e) => setTextType(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-600 rounded-lg p-2.5 text-white"
                    >
                      <option>Social Media Post</option>
                      <option>Email Subject Line</option>
                      <option>Product Description</option>
                      <option>Blog Intro</option>
                    </select>
                  </div>
                </div>
              )}

              <button
                onClick={handleGenerate}
                disabled={loading || !prompt.trim()}
                className="w-full py-3 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg font-bold text-white shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Result'
                )}
              </button>
                
                {activeTab === GeneratorType.VIDEO && (
                    <p className="text-xs text-slate-500 text-center">
                        Note: Video generation (Veo) requires a paid Google Cloud Project API Key.
                    </p>
                )}
            </div>

            {/* Output Side */}
            <div className="bg-slate-900 rounded-xl border border-slate-700 min-h-[300px] flex items-center justify-center p-4 relative overflow-hidden">
               {loading && (
                   <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10 flex flex-col items-center justify-center">
                       <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                       <p className="text-slate-300 animate-pulse">Creating magic...</p>
                   </div>
               )}

               {!result && !loading && !error && (
                   <div className="text-center text-slate-500">
                       <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                            {activeTab === GeneratorType.TEXT && <Type className="w-8 h-8" />}
                            {activeTab === GeneratorType.IMAGE && <ImageIcon className="w-8 h-8" />}
                            {activeTab === GeneratorType.VIDEO && <Video className="w-8 h-8" />}
                       </div>
                       <p>Your result will appear here</p>
                   </div>
               )}
               
               {error && !loading && (
                    <div className="text-center max-w-xs">
                        {error === "BILLING_KEY_REQUIRED" ? (
                            <div className="flex flex-col items-center">
                                <AlertCircle className="w-10 h-10 text-amber-500 mb-2" />
                                <p className="text-white mb-4">Video generation requires a paid API Key.</p>
                                <button 
                                    onClick={handleVeoKeySelect}
                                    className="px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded-lg text-white text-sm font-medium"
                                >
                                    Select API Key
                                </button>
                                <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noreferrer" className="text-xs text-slate-500 mt-2 underline">Learn more about billing</a>
                            </div>
                        ) : (
                            <>
                                <AlertCircle className="w-10 h-10 text-red-500 mx-auto mb-2" />
                                <p className="text-red-400">{error}</p>
                            </>
                        )}
                    </div>
               )}

               {result && !loading && activeTab === GeneratorType.TEXT && (
                   <div className="w-full h-full overflow-y-auto text-left p-2">
                       <p className="whitespace-pre-wrap text-slate-200 leading-relaxed">{result}</p>
                   </div>
               )}

               {result && !loading && activeTab === GeneratorType.IMAGE && (
                   <img src={result} alt="AI Generated" className="max-w-full max-h-full rounded-lg shadow-lg" />
               )}

                {result && !loading && activeTab === GeneratorType.VIDEO && (
                   <video controls className="max-w-full max-h-full rounded-lg shadow-lg" src={result}>
                       Your browser does not support the video tag.
                   </video>
               )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPlayground;