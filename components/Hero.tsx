import React from 'react';
import { ArrowRight, Bot, Rocket } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
  onSecondaryCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick, onSecondaryCtaClick }) => {
  return (
    <div className="relative overflow-hidden bg-slate-900 pt-16 pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium mb-8 animate-fade-in">
          <Bot className="w-4 h-4 mr-2 text-accent" />
          <span>Powered by Gemini 2.5 & Veo 3.1</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 animate-slide-up">
          Scale Your Business with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Intelligent Marketing
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          We combine data-driven digital strategies with state-of-the-art AI generation to deliver growth you can see. From SEO to Video Production, we handle it all.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <button
            onClick={onCtaClick}
            className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-secondary transition-all shadow-lg hover:shadow-primary/50"
          >
            Explore Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button
            onClick={onSecondaryCtaClick}
            className="inline-flex justify-center items-center px-8 py-3 border border-slate-600 text-base font-medium rounded-lg text-white bg-slate-800 hover:bg-slate-700 transition-all"
          >
            Try AI Studio
            <Rocket className="ml-2 h-5 w-5 text-yellow-400" />
          </button>
        </div>
        
        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-slate-800 pt-8 w-full">
            {[
                { label: 'Clients', value: '200+' },
                { label: 'Projects', value: '1.5k+' },
                { label: 'AI Generated', value: '50k+' },
                { label: 'Satisfaction', value: '99%' }
            ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                    <span className="text-3xl font-bold text-white">{stat.value}</span>
                    <span className="text-slate-500 text-sm uppercase tracking-wider">{stat.label}</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
