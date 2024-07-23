// src/components/Header.jsx
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#1F261E]/60 shadow-md backdrop-blur-xl relative top-0 w-full	 z-50 p-4">
      <div className="container mx-auto flex justify-between items-center px-[5%] md:px-[10%] lg:px-[14%]">
        <nav className="hidden md:flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12">
          <a href="#home" className="text-white hover:text-gray-300">Home</a>
          <a href="#services" className="text-white hover:text-gray-300">Serviços</a>
          <a href="#about" className="text-white hover:text-gray-300">Sobre</a>
          <a href="#contact" className="text-white hover:text-gray-300">Contato</a>
        </nav>
        <button className="hidden md:flex items-center justify-center gap-x-2 bg-gradient-to-r from-[#7e784e] to-[#6c714b] text-white border-white border rounded-full  w-auto px-4 py-1">
          Entre em contato <FaArrowRight className='text-white' />
        </button>
        <div className="md:hidden flex items-center justify-between w-full">
        <button className="flex items-center  gap-x-2 bg-gradient-to-r from-[#7e784e] to-[#6c714b] text-white border-white border rounded-full  w-auto px-4 py-1">
          Entre em contato <FaArrowRight className='text-white' />
        </button>
          <button onClick={toggleMenu} className="text-white flex  focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden absolute bg-[#1F261E]/90  backdrop-blur-3xl w-full top-[63px] left-0 z-50">
          <nav className="flex flex-col space-y-4 mt-4 px-[5%] py-2 z-40 ">
            <a href="#home" className="text-white hover:text-gray-300">Home</a>
            <a href="#services" className="text-white hover:text-gray-300">Serviços</a>
            <a href="#about" className="text-white hover:text-gray-300">Sobre</a>
            <a href="#contact" className="text-white hover:text-gray-300">Contato</a>
            
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
