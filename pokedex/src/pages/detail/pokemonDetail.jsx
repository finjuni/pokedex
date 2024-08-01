import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDetailPokemon } from "../../fetch/fetch"
import AddBookmark from "../../components/bookmark/_addBookmark"

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
    <div className="flex flex-col h-full text-gray-200">
      <label>poke name: {detailPokemon.name}</label>
      <label>poke id: {detailPokemon.id}</label>
      <label>weight: {detailPokemon.weight}</label>
      <div>sex</div>
      <AddBookmark detailPokemon={detailPokemon} />
    </div>
  )
}
