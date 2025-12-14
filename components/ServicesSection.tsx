import React from 'react';
import { servicesList } from '../data/services';

interface ServicesSectionProps {
  onContactClick: () => void;
  onServiceClick: (serviceId: string) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onContactClick, onServiceClick }) => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Our Professional Services</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your brand presence and operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div key={service.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden group flex flex-col h-full">
              <div className="p-8 flex-grow">
                <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-500">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-8 pb-8 mt-auto">
                 <button 
                  onClick={() => onServiceClick(service.id)}
                  className="w-full py-2 px-4 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
