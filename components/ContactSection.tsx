import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [selectedService, setSelectedService] = useState('Other');

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Let's Grow Your Business</h2>
            <p className="text-slate-600 mb-8 text-lg">
              Ready to start your next project? Fill out the form or contact us directly via WhatsApp or Email. We respond within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Email</h3>
                  <p className="mt-1 text-slate-500">clevercoreai1@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                    <Phone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">WhatsApp</h3>
                  <p className="mt-1 text-slate-500">+923014030469</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-100 text-slate-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-slate-900">Office</h3>
                  <p className="mt-1 text-slate-500">Nankana Sahib City</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-200">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Request submitted! We will contact you shortly."); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                  <input type="text" id="name" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary py-2 px-3 border" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                  <input type="email" id="email" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary py-2 px-3 border" required />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700">Service Needed</label>
                <select 
                  id="service" 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary py-2 px-3 border"
                >
                  <option value="SEO Optimization">SEO Optimization</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Content Creation">Content Creation</option>
                  <option value="AI Image & Video">AI Image & Video</option>
                  <option value="AI Chatbots">AI Chatbots</option>
                  <option value="Workflow Automation">Workflow Automation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-primary focus:ring-primary py-2 px-3 border" required></textarea>
              </div>

              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                <Send className="w-4 h-4 mr-2" /> Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;