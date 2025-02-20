import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Plus } from "lucide-react";

const Tasks = () => {
  const { data: newTasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.post(`${import.meta.env.VITE_URL}/tasks`);
      console.log();
      return res.data;
    },
  });
  return (
    <>
      <section className="p-6 w-11/12 mx-auto">
        <div className="flex justify-end">
          <button className="bg-[#6d7070] font-bold px-4 py-2 rounded-md text-white flex items-center hover:bg-[#f1f1f1] hover:text-black transition-all duration-300">
            {" "}
            <Plus /> Add Task
          </button>
        </div>
        <div className="mt-6"></div>
      </section>
    </>
  );
};

export default Tasks;
