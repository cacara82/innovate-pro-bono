import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  // useStates
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // navItems array
  const navItems = [
    { name: '¿Quiénes somos?', href: '/' },
    { name: 'Nuestra misión', href: '/mission' },
    { name: 'Nuestra visión', href: '/vision' },
  ];
 
  return (
    <nav className="bg-[#031f3d] w-full relative">
      {/* WIDE SCREENS */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 flex items-center justify-center rounded">
              <span className="text-xs text-gray-700"><img src='logo-blanco.png'></img></span>
            </div>
          </div>
          
          {/* Navigation items - center */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-300">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Empty div to balance the flex layout */}
          <div className="hidden md:block flex-shrink-0 w-8"></div>
         
          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
              {isOpen ? (<X size={24} />) : (<Menu size={24} />)}
            </button>
          </div>
        </div>
      </div>
     
      {/* MOBILE SCREENS */}
      {isOpen && (
        <div className="md:hidden absolute w-full left-0 bg-[#031f3d] shadow-lg z-50">
          <div className="flex flex-col items-center space-y-1 pb-3 pt-2">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-300 w-full text-center">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}