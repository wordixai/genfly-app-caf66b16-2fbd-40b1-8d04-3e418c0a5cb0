import { Button } from "./ui/button";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Us</h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to see you! Stop by for a coffee, a chat, or just to enjoy our cozy atmosphere.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
              alt="Cafe exterior" 
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="flex items-start mb-6">
                <MapPin className="text-amber-800 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">123 Coffee Street, Downtown<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Clock className="text-amber-800 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 7am - 8pm<br />Saturday - Sunday: 8am - 9pm</p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Phone className="text-amber-800 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-amber-800 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">hello@cafearoma.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button className="w-full bg-amber-800 hover:bg-amber-900">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;