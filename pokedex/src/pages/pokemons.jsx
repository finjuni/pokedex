import { useEffect, useState } from "react";
import ListPokemon from "../components/list/listPokemon";
import { getListPokemon } from "../fetch/fetch";

export default function Pokemons() {
  const [listPokemon, setListPokemon] = useState([]);

  useEffect(() => {
    // async function fetchData() {
    //   const getResults = await getListPokemon();

    //   setListPokemon(getResults);
    //   console.log("listPoke: ", getResults);
    // }
    // fetchData();
  }, []);

  return (
    <div className="flex flex-col p-5 gap-2">
      <label htmlFor="">Pokemon Species</label>
      <div>Search</div>
      {listPokemon.length > 0 && <ListPokemon props={listPokemon} />}
    </div>
  );
}
