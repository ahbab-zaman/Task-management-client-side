import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import Home from "./Layout/Home";
import Tasks from "./Layout/Tasks";

const App = () => {
  return (
    <>
      <section className="flex">
        <div>
          <Navbar></Navbar>
        </div>
        <div>
          <Routes>
            <Route index element={<Home></Home>}></Route>
            <Route path="/tasks" element={<Tasks></Tasks>}></Route>
          </Routes>
        </div>
      </section>
    </>
  );
};

export default App;
