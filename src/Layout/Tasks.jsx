import { Plus } from "lucide-react";
import useTasks from "../Hooks/useTasks";
import TItle from "../SharedFiles/TItle";
import Card from "../Components/Card";
const Tasks = () => {
  const [allTasks, refetch] = useTasks();
  const handleAddTask = (e) => {
    e.preventDefault();
    console.log("Form Submit");
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
      <form onSubmit={handleAddTask}>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label className="form-control w-full">
              <div className="label mb-2">
                <span className="label-text">Title Name</span>
              </div>
              <input
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
                placeholder="Add Your Description"
                className="w-full rounded-md h-[150px] resize-none textarea"
              ></textarea>
            </label>

            <select
              defaultValue="Select Category"
              className="select my-4 w-full"
            >
              <option defaultValue="default">Select Category</option>
              <option value="todo">To Do</option>
              <option value="inProgress">In Progress</option>
              <option value="done">Done</option>
            </select>

            <div className="modal-action justify-center w-full">
              <form method="dialog w-full">
                <button className="bg-[#6d7070] font-bold px-4 py-2 rounded-md text-white flex items-center hover:bg-[#f1f1f1] hover:text-black transition-all duration-300">
                  Create
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </form>
    </>
  );
};

export default Tasks;
