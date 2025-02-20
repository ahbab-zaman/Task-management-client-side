import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTasks = () => {
  const { data: allTasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_URL}/tasks`);
      return res.data;
    },
  });
  return [allTasks, refetch];
};

export default useTasks;
