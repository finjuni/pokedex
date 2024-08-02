import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailPokemon } from "../../fetch/fetch";
import { GiWeight } from "react-icons/gi";
import { CiLineHeight } from "react-icons/ci";
import { SiElement } from "react-icons/si";
import { IoSparklesSharp } from "react-icons/io5";
import AddBookmark from "../../components/bookmark/_addBookmark";

// const data = {
// name: res?.data?.name,
// id: res?.data?.id,
// stats: res?.data?.stats,
// types: res?.data?.types,
// height: res?.data?.height,
// weight: res?.data?.weight,
// abilities: res?.data?.abilities,
// pokeImg: res?.data?.sprites?.other?.dream_world,
// };

export default function PokemonDetail() {
  const [detailPokemon, setDetailPokemon] = useState({});

  const { id } = useParams();

  console.log("id params", id)

  useEffect(() => {
    async function fetchData() {
      const getDetail = await getDetailPokemon(id);

      console.log("getDetail: ", getDetail);

      setDetailPokemon({ ...getDetail });
    }
    fetchData();
  }, [id]);

  return (
    <div className="flex flex-col text-gray-200 min-h-[620px] bg-slate-400 m-5 bg-transparent">
      {/* <label>poke name: {detailPokemon.name}</label>
      <label>poke id: {detailPokemon.id}</label>
      <label>weight: {detailPokemon.weight}</label>
      <div>sex</div>
      <AddBookmark detailPokemon={detailPokemon} /> */}

      <div className="flex flex-row max-sm:flex-col h-[400px] bg-slate-900">
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full flex justify-center p-3 text-2xl tracking-wider">
            {String(detailPokemon?.name).toLocaleUpperCase()}
          </div>
          <div className="w-full h-full items-center flex justify-center">
            <img
              className="w-[250px] h-[250px] max-sm:w-[170px] max-sm:h-[170px]"
              src={detailPokemon?.pokeImg?.front_default}
              alt=""
            />
          </div>
        </div>

        <div className="flex w-[25%] max-sm:w-full max-sm:min-h-[80px] rounded-md bg-gray-800 ring-1 px-8 py-5 overflow-y-auto">
          <div className="flex flex-col w-full text-xl items-center gap-7 max-sm:gap-3">
            <div className="flex flex-row justify-between items-center gap-5">
              
            <AddBookmark detailPokem={detailPokemon} />
              <p>#{detailPokemon?.id}</p>
            </div>
            <div className="w-full flex flex-row justify-between items-center">
              <GiWeight color="black" size={40} />
              <p>{detailPokemon?.weight} Kg</p>
            </div>
            <div className="w-full flex flex-row justify-between items-center">
              <CiLineHeight color="black" size={40} />
              <p>{Number(detailPokemon?.height) / 10} m</p>
            </div>
            <div className="w-full flex flex-row justify-between pl-1 items-center">
              <SiElement color="black" size={40} />
              <div className="flex flex-col italic text-sm w-full items-end gap-1">
                {detailPokemon?.types?.map((prop) => (
                  <p className="" key={prop.slot}>
                    {prop?.type?.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-row justify-between pl-1 items-center">
              <IoSparklesSharp color="black" size={40} />
              <div className="flex flex-col italic text-sm w-full items-end gap-1">
                {detailPokemon?.abilities?.map((prop) => (
                  <p className="" key={prop.slot}>
                    {prop?.ability?.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-neutral-950 h-[220px] max-sm:min-h-[270px] w-full items-center p-5 gap-2">

        {Object.keys(detailPokemon).length > 1 && (
          <>
          {detailPokemon?.stats.map((prop, index) => (
            <div key={index} className="flex flex-row items-center w-[50%] max-sm:w-[100%] gap-2">
              <p className="w-[25%]">{prop?.stat?.name}</p>
              <meter className="w-[250px]" min={0} max={100} value={prop?.base_stat} />
              <p>{prop?.base_stat}</p>
            </div>
          ))}
          </>
        )}

      </div>
    </div>
  );
}
