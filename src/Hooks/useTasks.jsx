import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useTasks = () => {
  const { user } = useContext(AuthContext);
  const { data: allTasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_URL}/tasks/${user?.email}`
      );
      console.log(res.data)
      return res.data;
    },
  });
  return [allTasks, refetch];
};

export default useTasks;
