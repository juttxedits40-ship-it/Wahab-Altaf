import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, Send, Share2, Mail, Twitter, Linkedin } from 'lucide-react';
import { Service } from '../types';
import ContactSection from './ContactSection';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  const handleShare = (platform: 'email' | 'twitter' | 'linkedin') => {
    const url = window.location.href;
    const text = `Check out ${service.title} on CleverCore AI!`;
    
    let shareLink = '';
    switch (platform) {
      case 'email':
        shareLink = `mailto:?subject=${encodeURIComponent(service.title)}&body=${encodeURIComponent(text + '\n' + url)}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }
    window.open(shareLink, '_blank');
    setIsShareOpen(false);
  };

  return (
    <div className="animate-fade-in">
      {/* Top Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <button 
            onClick={onBack}
            className="flex items-center text-slate-600 hover:text-primary font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </button>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-slate-900 text-white py-20 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
           <div className="w-96 h-96 bg-primary rounded-full blur-3xl absolute -top-10 right-20"></div>
           <div className="w-80 h-80 bg-accent rounded-full blur-3xl absolute bottom-0 right-0"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <service.icon className="w-16 h-16 text-primary" />
            </div>
            <div className="flex-1">
              <span className="text-accent font-medium tracking-wider text-sm uppercase">{service.category}</span>
              <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">{service.title}</h1>
              
              {/* Share Button & Dropdown */}
              <div className="relative mb-6">
                 <button 
                    onClick={() => setIsShareOpen(!isShareOpen)}
                    className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors border border-white/10 text-sm font-medium"
                 >
                    <Share2 className="w-4 h-4" />
                    <span>Share Service</span>
                 </button>
                 
                 {isShareOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-20 animate-fade-in">
                        <button 
                            onClick={() => handleShare('email')} 
                            className="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-center text-slate-700 transition-colors"
                        >
                            <Mail className="w-4 h-4 mr-3 text-slate-500" /> Email
                        </button>
                        <button 
                            onClick={() => handleShare('twitter')} 
                            className="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-center text-slate-700 transition-colors"
                        >
                            <Twitter className="w-4 h-4 mr-3 text-blue-400" /> Twitter
                        </button>
                        <button 
                            onClick={() => handleShare('linkedin')} 
                            className="w-full text-left px-4 py-3 hover:bg-slate-50 flex items-center text-slate-700 transition-colors"
                        >
                            <Linkedin className="w-4 h-4 mr-3 text-blue-700" /> LinkedIn
                        </button>
                    </div>
                 )}
              </div>

              <p className="text-xl text-slate-300 max-w-2xl">{service.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 pb-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Description & Features */}
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">About this Service</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              <div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Features</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </div>
                    ))}
                 </div>
              </div>
            </div>

            {/* Right Column: Benefits & Quick Summary */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 relative z-10">Why Choose Us?</h3>
                <ul className="space-y-4 relative z-10">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-blue-50 p-1 rounded-full mr-3 mt-0.5">
                         <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-slate-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-white text-center">
                <h3 className="text-xl font-bold mb-4">Need something custom?</h3>
                <p className="text-slate-300 mb-6 text-sm">
                  We tailor our strategies to your specific business goals. Let's talk about a custom plan.
                </p>
                <button 
                  onClick={() => document.getElementById('service-request-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-3 bg-primary hover:bg-secondary text-white font-bold rounded-lg transition-colors"
                >
                  Contact Us
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Dedicated Request Form */}
      <div id="service-request-form" className="bg-slate-50 pb-20">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden relative">
                {/* Decorative top bar */}
                <div className="h-2 bg-gradient-to-r from-primary to-accent w-full absolute top-0 left-0"></div>
                
                <div className="p-8 md:p-12">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-slate-900 flex items-center justify-center gap-3">
                            <service.icon className="w-8 h-8 text-primary" />
                            <span>Request {service.title}</span>
                        </h2>
                        <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
                            Fill out the details below to kickstart your project. Our team will review your request and get back to you with a proposal.
                        </p>
                    </div>

                    <form onSubmit={(e) => { e.preventDefault(); alert("Request submitted successfully!"); }} className="max-w-2xl mx-auto space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                <input 
                                    type="text" 
                                    className="w-full rounded-lg border-slate-300 border px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" 
                                    placeholder="John Doe"
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                <input 
                                    type="email" 
                                    className="w-full rounded-lg border-slate-300 border px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" 
                                    placeholder="john@company.com"
                                    required 
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
                            <textarea 
                                rows={4} 
                                className="w-full rounded-lg border-slate-300 border px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" 
                                placeholder={`I'm looking for help with ${service.title}...`} 
                                required
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-primary/30 flex justify-center items-center text-lg"
                        >
                            <Send className="w-5 h-5 mr-2" />
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>
         </div>
      </div>

      {/* Embedded Contact Section */}
      <div className="border-t border-slate-200">
        <ContactSection initialService={service.title} />
      </div>
    </div>
  );
};

export default ServiceDetail;