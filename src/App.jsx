import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import Tasks from "./Layout/Tasks";

const App = () => {
  return (
    <>
      <section className="flex">
        <div className="w-64">
          <Navbar></Navbar>
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/tasks" element={<Tasks></Tasks>}></Route>
          </Routes>
        </div>
      </section>
    </>
  );
};

export default App;
