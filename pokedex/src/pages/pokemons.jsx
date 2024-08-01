import { useEffect, useState } from "react";
import ListPokemon from "../components/list/listPokemon";
import { getListPokemon } from "../fetch/fetch";
import Search from "../components/search/search";
import AddBookmark from "../components/bookmark/_addBookmark";

export default function Pokemons() {
  const [listPokemon, setListPokemon] = useState([]);
  const [detailPokemon, setDetailPokemon] = useState({});

  useEffect(() => {
    async function fetchData() {
      const getResults = await getListPokemon();
      setListPokemon(getResults);
      // console.log("listPoke: ", getResults);
    }
    fetchData();
    setDetailPokemon({})
  }, []);

  // console.log(detailPokemon);

  async function handleListPokemon(data) {
    setListPokemon([]);
    setDetailPokemon(data);
  }

  return (
    <div className="flex flex-col p-5 gap-2">
      <label htmlFor="">Pokemon Species</label>
      <div>
        <Search handleListPokemon={handleListPokemon} />
      </div>
      <div className="container h-full">
        {listPokemon.length > 0 && <ListPokemon props={listPokemon} />}
        {Object.keys(detailPokemon).length !== 0 && (
          <div className="flex flex-col h-full text-gray-200">
            <button onClick={() => window.location.reload()}></button>
            <label>poke name: {detailPokemon.name}</label>
            <label>poke id: {detailPokemon.id}</label>
            <label>weight: {detailPokemon.weight}</label>
            <div>sex</div>
            <AddBookmark detailPokemon={detailPokemon}/>

            {/* <form onSubmit={onBookmarked}>
            <button type="submit" className="ring-1 p-2">
              add
            </button>
          </form> */}
          </div>
        )}
      </div>
    </div>
  );
}
