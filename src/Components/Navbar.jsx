import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  LogOut,
  ClipboardCheck,
  Loader,
  CalendarCheck2,
  BookOpenCheck,
} from "lucide-react";
import { Link } from "react-router";
import logo from "../assets/task.png"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <div className="flex">
      {/* Sidebar for Large Screens */}
      <aside className="hidden md:flex flex-col text-[#222] w-56 h-screen p-4 shadow-2xl bg-[#f1f1f1f1] font-semibold">
        {/* Logo */}
        <h2 className="mb-8 bg-[#0f204f45] p-3 text-center rounded-md flex items-center font-bold">
          <img className="w-8" src={logo} alt="" />
          Ahbab's Tasks
        </h2>
        {/* Navigation Links */}
        <nav className="flex-1 space-y-4">
          <Link
            to="/tasks"
            className="flex items-center space-x-3 p-3 rounded-md hover:bg-[#0f204f45] transition-colors duration-300"
          >
            <ClipboardCheck /> <span>All Tasks</span>
          </Link>

          <Link
            to="/todo"
            className="flex items-center rounded-md space-x-3 p-3 hover:bg-[#0f204f45] transition-colors duration-300"
          >
            <BookOpenCheck /> <span>To Do</span>
          </Link>

          <Link
            to="/progress"
            className="flex items-center rounded-md space-x-3 p-3 hover:bg-[#0f204f45] transition-colors duration-300"
          >
            <Loader /> <span>In Progress</span>
          </Link>

          <Link
            to="/done"
            className="flex items-center rounded-md space-x-3 p-3 hover:bg-[#0f204f45] transition-colors duration-300"
          >
            <CalendarCheck2 /> <span>Done</span>
          </Link>
        </nav>

        {/* Logout Button */}
        <button className="flex items-center p-3 rounded-md space-x-3 text-red-400 hover:bg-[#0f204f45] transition-colors duration-300">
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
            className="fixed top-0 left-0 w-64 h-screen bg-[#f1f1f1f1] p-5 flex flex-col z-50"
          >
            {/* Close Button */}
            <button className="mb-5" onClick={() => setIsOpen(false)}>
              <X size={30} />
            </button>

            {/* Logo */}
            <h1 className="text-2xl font-bold mb-10 p-3 bg-[#0f204f45] rounded-md flex items-center"> <img className="w-8" src={logo} alt="" />Ahbab's Tasks</h1>

            {/* Navigation Links */}
            <nav className="flex-1 space-y-4">
              <Link
                onClick={handleClose}
                to="/tasks"
                className="flex items-center space-x-3 p-3 rounded-md hover:bg-[#0f204f45] transition-colors duration-300"
              >
                <ClipboardCheck /> <span>All Tasks</span>
              </Link>

              <Link
                onClick={handleClose}
                to="/todo"
                className="flex items-center rounded-md space-x-3 p-3 hover:bg-[#0f204f45] transition-colors duration-300"
              >
                <BookOpenCheck /> <span>To Do</span>
              </Link>

              <Link
                onClick={handleClose}
                to="/progress"
                className="flex items-center rounded-md space-x-3 p-3 hover:bg-[#0f204f45] transition-colors duration-300"
              >
                <Loader /> <span>In Progress</span>
              </Link>

              <Link
                onClick={handleClose}
                to="/done"
                className="flex items-center rounded-md space-x-3 p-3 hover:bg-[#0f204f45] transition-colors duration-300"
              >
                <CalendarCheck2 /> <span>Done</span>
              </Link>
            </nav>

            {/* Logout Button */}
            <button
              onClick={handleClose}
              className="flex items-center space-x-3 text-red-400 hover:bg-[#0f204f45] transition-colors duration-300 p-3 rounded-md"
            >
              <LogOut size={20} /> <span>Logout</span>
            </button>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
