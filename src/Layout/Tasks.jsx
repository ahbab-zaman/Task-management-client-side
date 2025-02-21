import { Plus } from "lucide-react";
import useTasks from "../Hooks/useTasks";
import TItle from "../SharedFiles/TItle";
import Card from "../Components/Card";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loading from "../Components/Loading";
import { Dialog, DialogPanel } from "@headlessui/react";
const Tasks = () => {
  const [allTasks, refetch] = useTasks() || [];
  const formRef = useRef(null);
  const { user, loading } = useContext(AuthContext);
  const toDo = allTasks.filter((item) => item.category === "To Do");
  const inProgress = allTasks.filter((item) => item.category === "In Progress");
  const done = allTasks.filter((item) => item.category === "Done");

  const handleAddTask = (e) => {
    e.preventDefault();
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
          refetch();
          formRef.current.reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
    document.getElementById("my_modal_4").close();
  };
  if (loading) return <Loading></Loading>;
  return (
    <>
      <section className="pt-28 w-11/12 mx-auto">
        <div className="flex lg:flex-row flex-col gap-3 justify-between">
          <TItle title="All Tasks"></TItle>
          <div>
            <button
              onClick={() => document.getElementById("my_modal_4").showModal()}
              className="bg-[#6d7070] font-bold px-4 py-2 rounded-md text-white flex items-center hover:bg-[#f1f1f1] hover:text-black transition-all duration-300"
            >
              <Plus /> Add Task
            </button>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 py-6">
          {/* To Do List */}
          <div className="space-y-2 bg-[#f1f1f1] p-4 rounded-md">
            <h2 className="text-lg font-bold">TO DO</h2>
            {toDo.length > 0 ? (
              <>
                {toDo.map((item, index) => (
                  <Card item={item} key={item._id}></Card>
                ))}
              </>
            ) : (
              <h2 className="text-xl font-bold text-center">No To Do Tasks</h2>
            )}
          </div>

          {/* In Progress List */}
          <div className="space-y-2 bg-[#f1f1f1] p-4 rounded-md">
            <h2 className="text-lg font-bold">In Progress</h2>
            {inProgress.length > 0 ? (
              <>
                {inProgress.map((item, index) => (
                  <Card item={item} key={item._id}></Card>
                ))}
              </>
            ) : (
              <h2 className="text-xl font-bold text-center">
                No In Progress Tasks
              </h2>
            )}
          </div>

          {/* Done List */}
          <div className="space-y-2 bg-[#f1f1f1] p-4 rounded-md">
            <h2 className="text-lg font-bold">Done</h2>
            {done.length > 0 ? (
              <>
                {done.map((item, index) => (
                  <Card item={item} key={item._id}></Card>
                ))}
              </>
            ) : (
              <h2 className="text-xl font-bold text-center">No Done Tasks</h2>
            )}
          </div>
        </div>
      </section>

      <form ref={formRef} onSubmit={handleAddTask}>
        <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <label className="form-control w-full">
              <div className="label mb-2">
                <span className="label-text">Title Name</span>
              </div>
              <input
                name="name"
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
                required
                placeholder="Add Your Description"
                className="w-full rounded-md h-[150px] resize-none textarea"
              ></textarea>
            </label>

            <select
              name="category"
              required
              defaultValue="Select Category"
              className="select my-4 w-full"
            >
              <option defaultValue="default">Select Category</option>
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

      {/* <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-xl max-h-fit rounded-xl bg-[#bdbdbf] p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <form className="card-body" onSubmit={handleAddTask}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-[#333333]">
                      Enter Task Title
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Title"
                    className="input input-bordered rounded-full"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-[#333333]">
                      Enter Category Image URL
                    </span>
                  </label>
                  <textarea
                    name="description"
                    required
                    placeholder="Add Your Description"
                    className="w-full rounded-md h-[150px] resize-none textarea"
                  ></textarea>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold text-[#333333]">
                      Enter Category Quantity
                    </span>
                  </label>
                  <input
                    type="num,ber"
                    name="quantity"
                    placeholder="Your Category Quantity"
                    className="input input-bordered rounded-full"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-[#a8a8a9] px-4 py-2 rounded-xl font-bold hover:bg-[#7d7d7f] hover:text-white hover:transition-colors hover:duration-300"
                  >
                    Add Task
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog> */}
    </>
  );
};

export default Tasks;
