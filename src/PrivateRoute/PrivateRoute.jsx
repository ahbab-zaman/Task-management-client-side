import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loading from "../Components/Loading";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (user) return children;
  if (loading) return <Loading></Loading>;
  return (
    <>
      <Navigate to="/login" replace></Navigate>
    </>
  );
};

export default PrivateRoute;
