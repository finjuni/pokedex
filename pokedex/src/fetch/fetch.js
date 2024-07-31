import axios from "axios";

//props
//poke name,
//poke id,
//poke weight
//poke types
//poke sprites other dream_world front_default

export async function getListPokemon() {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=12`
    );

    if (!res.data) return console.error("error occured: ", res.status);

    const results = await res.data.results;

    // console.log("results:", results);

    if (results) {
      const bulkReq = results.map(async (item) => {
        // console.log(item)
        try {
          const res = await axios.get(item.url);

          if (!res.data) console.error("res status check:", res.status);

          const data = {
            name: res?.data?.name,
            id: res?.data?.id,
            types: res?.data?.types,
            weight: res?.data?.weight,
            pokeImg: res?.data?.sprites?.other?.dream_world,
          };

          // console.log("data: ", data)

          return data;
        } catch (error) {
          console.error(error);
        }
      });

      const listData = await Promise.all(bulkReq);

      console.log("listData: ", listData);

      return listData;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getDetailPokemon(id) {
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if (!res.data) console.error("res status check:", res.status);

    const data = {
      name: res?.data?.name,
      id: res?.data?.id,
      types: res?.data?.types,
      weight: res?.data?.weight,
      pokeImg: res?.data?.sprites?.other?.dream_world,
    };

    // console.log("data: ", data)

    return data;
  } catch (error) {
    console.error(error);
  }
}