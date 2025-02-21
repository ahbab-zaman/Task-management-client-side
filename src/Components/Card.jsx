import axios from "axios";
import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import useTasks from "../Hooks/useTasks";
import showDeleteToast from "./showDeleteToast";
import toast from "react-hot-toast";
const Card = ({ item }) => {
  const [, refetch] = useTasks();
  const { name, description, category, _id } = item;
  const today = new Date();
  const date = today.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  // Edit Task
  const handleEdit = (e) => {
    document.getElementById("my_modal_5").showModal();
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const category = form.category.value;
    const updatedInfo = { name, description, category };
    axios
      .put(`${import.meta.env.VITE_URL}/tasks/${_id}`, updatedInfo)
      .then((res) => {
        document.getElementById("my_modal_5").close();
        console.log(res.data);
        refetch();
      })
      .catch((error) => {
        console.log(error);
      });
    closeMenu();
  };

  // Delete Task
  const handleDelete = () => {
    showDeleteToast(() => {
      axios
        .delete(`${import.meta.env.VITE_URL}/tasks/${_id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            toast.success("Task Deleted Successfully");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      closeMenu();
    });
  };

  return (
    <div className="bg-base-100 px-6 py-3 rounded-md shadow-md  transform transition duration-300 hover:scale-95">
      <div>
        <h2 className="font-bold text-green-700">{name}</h2>
        <button
          onClick={toggleMenu}
          className="absolute top-2 right-2 p-2 text-gray-600 hover:bg-gray-300 rounded-full transition"
        >
          <BsThreeDotsVertical></BsThreeDotsVertical>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-2 top-10 w-32 bg-white shadow-lg rounded-lg py-2 transition-opacity duration-300 animate-fade-in">
            <button
              onClick={handleEdit}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center gap-2 font-bold"
            >
              <CiEdit className="text-lg"></CiEdit> Edit
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center font-bold gap-2 text-lg"
            >
              <MdDeleteOutline></MdDeleteOutline> Delete
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
      <form onSubmit={handleEdit}>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label className="form-control w-full">
              <div className="label mb-2">
                <span className="label-text">Title Name</span>
              </div>
              <input
                name="name"
                defaultValue={name}
                type="text"
                placeholder="Type Title"
                required
                className="input input-bordered w-full"
              />
            </label>

            <label className="form-control w-full">
              <div className="label mb-2">
                <span className="label-text">Description</span>
              </div>
              <textarea
                name="description"
                defaultValue={description}
                required
                placeholder="Add Your Description"
                className="w-full rounded-md h-[150px] resize-none textarea"
              ></textarea>
            </label>

            <select
              name="category"
              defaultValue={category}
              required
              className="select my-4 w-full"
            >
              <option disabled>Select Category</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>

            <div className="modal-action justify-center w-full modal-backdrop">
              <div method="dialog w-full ">
                <button className="bg-[#6d7070] font-bold px-4 py-2 rounded-md text-white flex items-center hover:bg-[#f1f1f1] hover:text-black transition-all duration-300">
                  Create
                </button>
              </div>
            </div>
          </div>
        </dialog>
      </form>
    </div>
  );
};

export default Card;
