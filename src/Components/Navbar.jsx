import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md fixed w-full h-[64px] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold flex items-center">
            <img className="w-6" src={logo} alt="" /> TaskPad
          </div>

          {/* Nav Links - Large Screen */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={(isActive) =>
                isActive
                  ? "bg-blue-500 px-4 py-2 rounded-md font-semibold text-white"
                  : "bg-base-100"
              }
              onClick={closeMenu}
            >
              Tasks
            </NavLink>
          </div>

          {/* Login Button - Large Screen */}
          <div className="hidden md:block">
            {user ? (
              <Link to="/login">
                <button
                  onClick={logOut}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-[#f1f1f1] hover:text-[#222] transition-all duration-300"
                >
                  Logout
                </button>
              </Link>
            ) : (
              <Link to="login">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-[#f1f1f1] hover:text-[#222] transition-all duration-300">
                  Logout
                </button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={closeMenu}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-5 flex justify-between items-center">
          <div className="text-lg font-bold">Menu</div>
          <button onClick={toggleMenu}>
            <X size={28} />
          </button>
        </div>
        <div className="flex flex-col space-y-4 p-5">
          <Link to="/" className="hover:text-blue-500" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-500" onClick={closeMenu}>
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-blue-500"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-500"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
