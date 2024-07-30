import { Link } from "react-router-dom";

export default function Navbar() {
  return (
      <nav className="bg-sky-800 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-blue-400 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/">Pokemons</Link>
          <Link to="/elements">Elements</Link>
          <Link to="/egg_groups">Egg Groups</Link>
          <Link to="/gigans">Gigans</Link>
          <Link to="/mega">Mega</Link>
          <Link to="/about">About</Link>
        </div>
        
      </nav>
  );
}
