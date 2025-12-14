import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AIPlayground from './components/AIPlayground';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import ServiceDetail from './components/ServiceDetail';
import { servicesList } from './data/services';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'service'>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    // If we are in service view, we need to go home first, then scroll
    if (currentView === 'service') {
      setCurrentView('home');
      setSelectedServiceId(null);
      // Allow React to render Home view before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleServiceClick = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCurrentView('service');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedService = servicesList.find(s => s.id === selectedServiceId);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header onNavigate={scrollToSection} />
      
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            <div id="home">
                <Hero 
                    onCtaClick={() => scrollToSection('services')} 
                    onSecondaryCtaClick={() => scrollToSection('ai-studio')} 
                />
            </div>
            
            <ServicesSection 
              onContactClick={() => scrollToSection('contact')} 
              onServiceClick={handleServiceClick}
            />
            
            <AIPlayground />
            
            <ContactSection />
          </>
        ) : (
          selectedService && (
            <ServiceDetail 
              service={selectedService} 
              onBack={() => {
                setCurrentView('home');
                setSelectedServiceId(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
            />
          )
        )}
      </main>

      <Footer />
      
      <ChatBot />
    </div>
  );
};

export default App;
