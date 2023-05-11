import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full">
      <div className="px-4 pt-10 mx-auto sm:px-6 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="mr-16 text-lg font-semibold text-gray-800">
              <img src="/images/logo.png" alt="Logo" width={100} height={100} />
            </a>
          </div>
          <div className="z-50 items-center hidden md:flex ">
            <div className="flex items-baseline ml-auto space-x-4 font-mono text-xl font-bold text-white">
              <button className=" hover:text-gray-800">Whitepaper</button>
              <button className=" hover:text-gray-800">Explore Safe</button>
              <button className=" hover:text-gray-800">Pre-registration</button>
            </div>
          </div>

          <div className="flex -mr-2 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="z-50 inline-flex items-center justify-center p-2 text-white rounded-md hover:text-gray-600 focus:outline-none"
            >
              {isOpen ? (
                <FiX className="block w-6 h-6" />
              ) : (
                <FiMenu className="block w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className=" md:hidden">
          <div className="flex flex-col justify-center px-2 pt-2 pb-3 space-y-1 text-center text-white cursor-pointer">
            <button className="z-50 block px-3 py-2 text-base font-medium rounded-md hover:text-gray-800">
              Whitepaper
            </button>
            <button className="z-50 px-3 py-2 text-base font-medium rounded-md only:block hover:text-gray-800">
              Explore Safe
            </button>
            <button className="z-50 block px-3 py-2 text-base font-medium rounded-md hover:text-gray-800">
              Pre-registration
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Index;
