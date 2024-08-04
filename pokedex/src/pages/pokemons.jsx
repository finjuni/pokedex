import { useEffect, useState } from "react";
import ListPokemon from "../components/list/listPokemon";
import { getListPokemon } from "../fetch/fetch";
import Search from "../components/search/search";
import SearchResult from "../components/search/searchResult";

export default function Pokemons() {
  const [listPokemon, setListPokemon] = useState([]);
  const [detailPokemon, setDetailPokemon] = useState({});
  const [pageValue, setPageValue] = useState(0);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(async () => {
      fetchData();
      setDetailPokemon({});
    }, [2000]);

  }, [pageValue]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log(detailPokemon);

  const fetchData = async () => {
    const getResults = await getListPokemon(pageValue);

    if(pageValue === 12) {
      setListPokemon(getResults);
    } else {
      setLoading(false)
      setListPokemon((currVal) => [...currVal, ...getResults])
    }

    // console.log("listPoke: ", getResults);
  };

  async function handleSearchPokemon(data) {
    setListPokemon([]);
    setDetailPokemon(data);
  }

  const handleScroll = () => {
    // console.log("window height: ", window.innerHeight)
    // console.log(" scroll coordinate: ", document.documentElement.scrollTop)
    // console.log("doc scroll height: ", document.documentElement.scrollHeight)

    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true)
      setPageValue((currVal) => currVal + 12);
    }
  };

  return (
    <div className="flex flex-col p-5 justify-center items-center">
      <label htmlFor="">Pokemon Species</label>
      <div className="mb-4">
        <Search handleSearchPokemon={handleSearchPokemon} />
      </div>
      <div className="h-full w-full max-sm:w-[90%]">
        {listPokemon.length > 0 && <ListPokemon props={listPokemon} />}
        {Object.keys(detailPokemon).length !== 0 && (
          <div className="flex flex-col h-full text-gray-200">
            <button
              className="hover:ring-1"
              onClick={() => window.location.reload()}
            >
              Reload
            </button>
            <SearchResult detailPokemon={detailPokemon} />
          </div>
        )}
      </div>
      {loading && (<div className="h-[50px] flex justify-center text-3xl">Loading...</div>)}
    </div>
  );
}
