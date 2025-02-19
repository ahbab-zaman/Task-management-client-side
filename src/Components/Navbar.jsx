import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Settings, LogOut, ClipboardCheck } from "lucide-react";
import { Link } from "react-router";
import logo from "../assets/task.png"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex">
      {/* Sidebar for Large Screens */}
      <aside className="hidden md:flex flex-col text-[#222] w-[200px] h-screen p-5 border-r-2">
        {/* Logo */}
        <img className="w-12 mb-8" src={logo} alt="" />
        {/* Navigation Links */}
        <nav className="flex-1 space-y-4">
          <Link
            to="/"
            className="flex items-center space-x-3 hover:text-blue-400"
          >
            <Home size={20} /> <span>Home</span>
          </Link>
          <Link
            to="/tasks"
            className="flex items-center space-x-3 hover:text-blue-400"
          >
            <ClipboardCheck /> <span>Tasks</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-3 hover:text-blue-400"
          >
            <Settings size={20} /> <span>Settings</span>
          </Link>
        </nav>

        {/* Logout Button */}
        <button className="flex items-center space-x-3 text-red-400 hover:text-red-600">
          <LogOut size={20} /> <span>Logout</span>
        </button>
      </aside>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-4" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Sidebar for Mobile (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-64 h-screen bg-gray-900 text-white p-5 flex flex-col z-50"
          >
            {/* Close Button */}
            <button className="mb-5" onClick={() => setIsOpen(false)}>
              <X size={30} />
            </button>

            {/* Logo */}
            <h1 className="text-2xl font-bold mb-10">MyLogo</h1>

            {/* Navigation Links */}
            <nav className="flex-1 space-y-4">
              <Link
                onClick={handleClose}
                to="/"
                className="flex items-center space-x-3 hover:text-blue-400"
              >
                <Home size={20} /> <span>Home</span>
              </Link>
              <Link
                onClick={handleClose}
                to="/tasks"
                className="flex items-center space-x-3 hover:text-blue-400"
              >
                <ClipboardCheck /> <span>Tasks</span>
              </Link>
            </nav>

            {/* Logout Button */}
            <button
              onClick={handleClose}
              className="flex items-center space-x-3 text-red-400 hover:text-red-600"
            >
              <LogOut size={20} /> <span>Logout</span>
            </button>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
