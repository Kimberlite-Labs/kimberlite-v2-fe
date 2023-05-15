import { Web3Button } from "@web3modal/react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full">
      <div className="px-4 pt-6 mx-auto sm:px-6 ">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="mr-16 text-lg font-semibold text-gray-800">
              <img src="/images/logo.png" alt="Logo" width={100} height={100} />
            </a>
          </div>
          <div className="z-50 items-center hidden md:flex ">
            <div className="flex items-baseline ml-auto space-x-4 font-mono text-xl font-bold text-white">
              <Link to="/">
                <button className=" hover:text-gray-800">Home</button>
              </Link>
              <button className=" hover:text-gray-800">Whitepaper</button>
              <button className=" hover:text-gray-800">Explore Safe</button>
              <Link to="/connectWallet">
                <button className=" hover:text-gray-800">
                  Pre-registration
                </button>
              </Link>
              <Web3Button />
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
            <Link to="/">
              <button className="z-50 block px-3 py-2 text-base font-medium rounded-md hover:text-gray-800">
                Home
              </button>
            </Link>
            <Link to="/">
              <button className="z-50 block px-3 py-2 text-base font-medium rounded-md hover:text-gray-800">
                Whitepaper
              </button>
            </Link>
            <button className="z-50 px-3 py-2 text-base font-medium rounded-md only:block hover:text-gray-800">
              Explore Safe
            </button>
            <Link to="/connectWallet">
              <button className="z-50 block px-3 py-2 text-base font-medium rounded-md hover:text-gray-800">
                Pre-registration
              </button>
            </Link>
            <Web3Button />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Index;
