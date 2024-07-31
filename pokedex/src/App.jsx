import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";

//max-sm:overflow-hidden

function App() {
  return (
    <div className="w-full bg-gradient-to-r from-slate-800 to-neutral-800 flex justify-center">
      <Navbar />
      <div className="flex w-[70%] mt-[57px] bg-slate-200">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
