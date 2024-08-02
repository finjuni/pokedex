import { useEffect, useState } from "react";
import ListPokemon from "../components/list/listPokemon";
import { getListPokemon } from "../fetch/fetch";
import Search from "../components/search/search";
import SearchResult from "../components/search/searchResult";

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
    setDetailPokemon({});
  }, []);

  // console.log(detailPokemon);

  async function handleListPokemon(data) {
    setListPokemon([]);
    setDetailPokemon(data);
  }

  return (
    <div className="flex flex-col p-5 justify-center items-center">
      <label htmlFor="">Pokemon Species</label>
      <div className="mb-4">
        <Search handleListPokemon={handleListPokemon} />
      </div>
      <div className="h-full">
        {listPokemon.length > 0 && <ListPokemon props={listPokemon} />}
        {Object.keys(detailPokemon).length !== 0 && (
          <div className="flex flex-col h-full text-gray-200">
            <button onClick={() => window.location.reload()}>Reload</button>
            <SearchResult detailPokemon={detailPokemon} />
          </div>
        )}
      </div>
    </div>
  );
}
