import { Plus } from "lucide-react";
import useTasks from "../Hooks/useTasks";
import TItle from "../SharedFiles/TItle";
import Card from "../Components/Card";
import axios from "axios";
import toast from "react-hot-toast";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loading from "../Components/Loading";
import { Dialog, DialogPanel } from "@headlessui/react";
import DropArea from "../Components/DropArea";
const Tasks = () => {
  const [allTasks, refetch] = useTasks() || [[], () => {}];
  const [tasks, setTasks] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
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

  const onDrop = (status, position) => {
    console.log(
      `${activeCard} is going into the ${status} at the position of ${position}`
    );
    if (activeCard == null || activeCard === undefined) return;

    const taskIndex = tasks.findIndex((task) => task.id === activeCard);
    if (taskIndex === -1) return;

    const taskToMove = { ...tasks[taskIndex], status };
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);

    updatedTasks.splice(position, 0, taskToMove);
    setTasks(updatedTasks);
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
          <div className="space-y-2 bg-base-200 p-4 rounded-md">
            <h2 className="text-lg font-bold">TO DO</h2>
            {toDo.length > 0 ? (
              <>
                <DropArea onDrop={() => onDrop(status, 0)}></DropArea>
                {toDo.map((item, index) => (
                  <React.Fragment key={item._id}>
                    <Card
                      item={item}
                      setActiveCard={setActiveCard}
                      index={index}
                    ></Card>
                    <DropArea
                      onDrop={() => onDrop(status, index + 1)}
                    ></DropArea>
                  </React.Fragment>
                ))}
              </>
            ) : (
              <h2 className="text-xl font-bold text-center">No To Do Tasks</h2>
            )}
          </div>

          {/* In Progress List */}
          <div className="space-y-2 bg-base-200 p-4 rounded-md">
            <h2 className="text-lg font-bold">In Progress</h2>
            {inProgress.length > 0 ? (
              <>
                <DropArea onDrop={() => onDrop(status, 0)}></DropArea>
                {inProgress.map((item, index) => (
                  <React.Fragment key={item._id}>
                    <Card
                      item={item}
                      setActiveCard={setActiveCard}
                      index={index}
                    ></Card>
                    <DropArea
                      onDrop={() => onDrop(status, index + 1)}
                    ></DropArea>
                  </React.Fragment>
                ))}
              </>
            ) : (
              <h2 className="text-xl font-bold text-center">
                No In Progress Tasks
              </h2>
            )}
          </div>

          {/* Done List */}
          <div className="space-y-2 bg-base-200 p-4 rounded-md">
            <h2 className="text-lg font-bold">Done</h2>
            {done.length > 0 ? (
              <>
                <DropArea onDrop={() => onDrop(status, 0)}></DropArea>
                {done.map((item, index) => (
                  <React.Fragment key={item._id}>
                    <Card
                      item={item}
                      key={item._id}
                      setActiveCard={setActiveCard}
                      index={index}
                    ></Card>
                    <DropArea
                      onDrop={() => onDrop(status, index + 1)}
                    ></DropArea>
                  </React.Fragment>
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
    </>
  );
};

export default Tasks;
