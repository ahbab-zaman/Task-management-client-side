import { Plus } from "lucide-react";
import useTasks from "../Hooks/useTasks";
import TItle from "../SharedFiles/TItle";
import Card from "../Components/Card";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext, useRef } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Tasks = () => {
  const [allTasks, refetch] = useTasks();
  const formRef = useRef(null);
  const { user } = useContext(AuthContext);
  const handleAddTask = (e) => {
    e.preventDefault();
    console.log("Form Submit");
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const category = form.category.value;
    const today = new Date();
    const date = today.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    });
    const taskInfo = {
      name,
      description,
      category,
      date,
      email: user?.email,
    };

    axios
      .post(`${import.meta.env.VITE_URL}/addTask`, taskInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("Task Added Successfully");
        }
      })
      .catch((error) => {
        console.log(error);
        formRef.current.reset();
      });
    document.getElementById("my_modal_5").close();
  };
  return (
    <>
      <section className="p-6 w-11/12 mx-auto">
        <div className="flex lg:flex-row flex-col gap-3 justify-between">
          <TItle title="All Tasks"></TItle>
          <div>
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="bg-[#6d7070] font-bold px-4 py-2 rounded-md text-white flex items-center hover:bg-[#f1f1f1] hover:text-black transition-all duration-300"
            >
              <Plus /> Add Task
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
          {allTasks.map((item) => (
            <Card item={item} key={item._id}></Card>
          ))}
        </div>
      </section>
      <form ref={formRef} onSubmit={handleAddTask}>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label className="form-control w-full">
              <div className="label mb-2">
                <span className="label-text">Title Name</span>
              </div>
              <input
                name="name"
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>

            <label className="form-control w-full">
              <div className="label mb-2">
                <span className="label-text">Description</span>
              </div>
              <textarea
                name="description"
                placeholder="Add Your Description"
                className="w-full rounded-md h-[150px] resize-none textarea"
              ></textarea>
            </label>

            <select
              name="category"
              defaultValue="Select Category"
              className="select my-4 w-full"
            >
              <option defaultValue="default">Select Category</option>
              <option value="todo">To Do</option>
              <option value="inProgress">In Progress</option>
              <option value="done">Done</option>
            </select>

            <div className="modal-action justify-center w-full">
              <div method="dialog w-full">
                <button className="bg-[#6d7070] font-bold px-4 py-2 rounded-md text-white flex items-center hover:bg-[#f1f1f1] hover:text-black transition-all duration-300">
                  Create
                </button>
              </div>
            </div>
          </div>
        </dialog>
      </form>
    </>
  );
};

export default Tasks;
