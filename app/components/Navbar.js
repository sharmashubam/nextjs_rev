import React from 'react';

const Navbar = () => {
  return ( 
    <div>
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-xl font-bold">Shubam's Portfolio</a>
        <ul className="flex space-x-4">
          <li><a href="/projects" className="text-white hover:text-gray-300">Projects</a></li>
          <li><a href="/about" className="text-white hover:text-gray-300">About</a></li>
          <li><a href="/contact" className="text-white hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;