import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
