import { getListBookmarked } from "../fetch/fetch";
import { useEffect } from "react";
import { useState } from "react";
import ListPokemon from "../components/list/listPokemon";

export default function Bookmark() {
  const [listPokemon, setListPokemon] = useState([]);
  // const [detailPokemon, setDetailPokemon] = useState({});

  useEffect(() => {
    async function fetchData() {
      const getResults = await getListBookmarked();
      setListPokemon(getResults);
      // console.log("bookmark: ", getResults);
    }
    fetchData();
    // setDetailPokemon({});
  }, []);

  // console.log(detailPokemon);

  return (
    <div className="flex flex-col p-5 gap-5">
      <label htmlFor="">Bookmarked Pokemons</label>
      <div className="h-full">
        {listPokemon.length > 0 && <ListPokemon props={listPokemon} />}
      </div>
    </div>
  );
}
