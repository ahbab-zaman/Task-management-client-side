import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useTasks = () => {
  const { user } = useContext(AuthContext);
  const {
    data: allTasks = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["task", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_URL}/tasks/${user?.email}`
      );
      return res.data;
    },
  });
  return [allTasks, refetch];
};

export default useTasks;
