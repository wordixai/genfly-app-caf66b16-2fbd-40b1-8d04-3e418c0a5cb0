import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-green-800">Café Aroma</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-800 font-medium">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-green-800 font-medium">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-green-800 font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-green-800 font-medium">Contact</a>
            <Button className="bg-green-800 hover:bg-green-900">Order Online</Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-800 font-medium">Home</a>
            <a href="#menu" className="block px-3 py-2 text-gray-700 hover:text-green-800 font-medium">Menu</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-800 font-medium">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-800 font-medium">Contact</a>
            <Button className="w-full bg-green-800 hover:bg-green-900 mt-2">Order Online</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;