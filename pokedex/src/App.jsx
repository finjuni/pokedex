import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="container h-screen max-sm:overflow-hidden bg-gradient-to-r from-indigo-900 to-blue-700 flex justify-center items-center">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
