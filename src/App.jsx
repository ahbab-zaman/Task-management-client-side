import { Route, Routes } from "react-router";
import Navbar from "./Components/Navbar";
import Tasks from "./Layout/Tasks";

const App = () => {
  return (
    <>
      <section className="flex">
        <div className="lg:w-64 w-[50px]">
          <Navbar></Navbar>
        </div>
        <div className="w-11/12 mx-auto">
          <div className=" flex justify-between gap-2 w-full p-5">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
          <Routes>
            <Route index path="/" element={<Tasks></Tasks>}></Route>
          </Routes>
        </div>
      </section>
    </>
  );
};

export default App;
