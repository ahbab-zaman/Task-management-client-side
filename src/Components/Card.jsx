import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const Card = ({ item }) => {
  const { name, description, category } = item;
  const today = new Date();
  const date = today.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-base-100 px-6 py-3 rounded-md shadow-md  transform transition duration-300 hover:scale-95">
      <div>

        <h2 className="font-bold text-green-700">{name}</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-2 right-2 p-2 text-gray-600 hover:bg-gray-300 rounded-full transition"
        >
          <BsThreeDotsVertical></BsThreeDotsVertical>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-2 top-10 w-32 bg-white shadow-lg rounded-lg py-2 transition-opacity duration-300 animate-fade-in">
            <button
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              onClick={() => alert("Edit clicked")}
            >
              ✏️ Edit
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
              onClick={() => alert("Delete clicked")}
            >
              🗑 Delete
            </button>
          </div>
        )}
      </div>
      <div className="divider"></div>
      <p className="font-semibold text-sm ">{description}</p>
      <div className="divider"></div>
      <div className="flex items-center justify-between">
        <p
          className={`font-bold text-sm ${
            category === "Done"
              ? "text-green-800"
              : category === "In Progress"
              ? "text-blue-800"
              : "text-slate-900"
          }`}
        >
          {category}
        </p>
        <p className="font-bold text-sm">{date}</p>
      </div>
    </div>
  );
};

export default Card;
