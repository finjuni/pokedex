import { Link } from "react-router-dom";

export default function Navbar() {
  return (
      <nav className="p-2 border-b-2 border-violet-300 flex justify-center text-gray-600">
        <Link className="font-normal hover:font-bold focus:font-bold tracking-wider" to="/">To Do List</Link>
        <Link className="font-normal hover:font-bold focus:font-bold tracking-wider" to="/edit">Edit</Link>
      </nav>
  );
}
