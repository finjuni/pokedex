import React, { useEffect, useState } from 'react';
import { getListPokemonVariation } from "../fetch/fetch";
import ListVariation from "../components/list/listVariation";

export default function Forms() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const data = await getListPokemonVariation();
        setPokemonData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchPokemonData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="flex flex-col p-5 gap-2">
      <label htmlFor="">Pokemon Variations</label>
      <ListVariation props={pokemonData}/>
    </div>
  )
}
