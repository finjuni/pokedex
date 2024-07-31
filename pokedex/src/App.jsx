import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";

//max-sm:overflow-hidden

function App() {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-neutral-800 flex flex-col items-center">
      <div className="w-full flex-wrap h-[57px] bg-green-400">
      <Navbar />
      </div>
      <div className="flex-1 justify-center w-[70%] max-sm:w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
