import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-green-500 mb-4">Café Aroma</h3>
            <p className="text-gray-400 mb-4">
              Serving exceptional coffee and creating memorable experiences since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-green-500">Home</a></li>
              <li><a href="#menu" className="text-gray-400 hover:text-green-500">Menu</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-green-500">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-green-500">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 7am - 8pm</li>
              <li>Saturday - Sunday: 8am - 9pm</li>
              <li>Holiday hours may vary</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on new menu items and special offers.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none flex-grow"
              />
              <button 
                type="submit" 
                className="bg-green-800 hover:bg-green-700 px-4 py-2 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Café Aroma. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;