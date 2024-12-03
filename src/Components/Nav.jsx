import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white px-10 md:px-20 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo or title */}
        <Link to="/" >
          <div className="text-sm font-bold cursor-pointer">
            WORSHIP MANDATE MINISTRIES
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>

        {/* Menu Links */}
        <ul className={`hidden md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <Link to="/create-review" className="text-lg hover:text-yellow-800">
              Reviews
            </Link>
          </li>
          <li>
            <Link
              to="#buy-ticket"
              className="bg-yellow-800 text-black py-2 px-4 rounded hover:bg-yellow-800"
              scroll={false}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-black text-white p-4`}>
        <ul className="space-y-4">
          <li>
            <Link to="/create-review" className="text-lg hover:text-yellow-800">
              Reviews
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="bg-yellow-800 text-black py-2 px-4 rounded hover:bg-yellow-800"
              scroll={false}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
