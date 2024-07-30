import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
      <nav className="bg-sky-800 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-blue-400 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to="/" className={({isActive}) => isActive ? "font-bold" : ""}>Pokemons</NavLink>
          <NavLink to="/elements" className={({isActive}) => isActive ? "font-bold" : ""}>Elements</NavLink>
          <NavLink to="/egg_groups" className={({isActive}) => isActive ? "font-bold" : ""}>Egg Groups</NavLink>
          <NavLink to="/gigans" className={({isActive}) => isActive ? "font-bold" : ""}>Gigans</NavLink>
          <NavLink to="/mega" className={({isActive}) => isActive ? "font-bold" : ""}>Mega</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "font-bold" : ""}>About</NavLink>
        </div>
        
      </nav>
  );
}
