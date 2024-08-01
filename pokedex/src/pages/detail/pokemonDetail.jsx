import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDetailPokemon } from "../../fetch/fetch"
import AddBookmark from "../../components/bookmark/_addBookmark"

// const data = {
//   name: res?.data?.name,
//   id: res?.data?.id,
//   types: res?.data?.types,
//   weight: res?.data?.weight,
//   pokeImg: res?.data?.sprites?.other?.dream_world,
// };

export default function PokemonDetail() {

  const [detailPokemon, setDetailPokemon] = useState({})

  const {id} = useParams()

  useEffect(() => {
    async function fetchData () {
      const getDetail = await getDetailPokemon(id)
      
      console.log("getDetail: ", getDetail)

      setDetailPokemon({...getDetail})
    }
    fetchData()
  }, [])
  

  return (
    <div className="flex flex-col text-gray-200 min-h-[620px] m-5 bg-slate-500">
      {/* <label>poke name: {detailPokemon.name}</label>
      <label>poke id: {detailPokemon.id}</label>
      <label>weight: {detailPokemon.weight}</label>
      <div>sex</div>
      <AddBookmark detailPokemon={detailPokemon} /> */}

      <div className="flex flex-row max-sm:flex-col h-[400px] bg-slate-700">
        <div className="flex-1">
          test
        </div>
        <div className="flex bg-green-400 w-[25%] max-sm:w-full max-sm:h-[70px]">
          test
        </div>
      </div>
      <div className="">

      </div>
    </div>
  )
}
