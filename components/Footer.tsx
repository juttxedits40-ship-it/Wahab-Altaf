import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
             <div className="bg-primary p-1.5 rounded-lg mr-2">
                <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">CleverCore AI</span>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between text-sm">
          <p>&copy; 2024 CleverCore AI Solutions. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;