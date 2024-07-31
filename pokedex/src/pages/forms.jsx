import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListVariation from "../components/list/listVariation";

export default function Forms() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon-form/');
        const fetches = response.data.results.map(async p => {
          const details = await axios.get(p.url);
          const { id, name, sprites, types } = details.data;
          return {
            id,
            name,
            types: types.map(typeInfo => typeInfo.type.name),
            image: sprites.front_default
          };
        });
        const data = await Promise.all(fetches);
        console.log(data);
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
    <div>
      <ListVariation />
    </div>
  )
}
