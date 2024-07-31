import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDetailPokemon } from "../../fetch/fetch"


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
    <div className="">
      <label>poke name: {detailPokemon.name}</label>
      <label>poke id: {detailPokemon.id}</label>
      <div>weight: {detailPokemon.weight}</div>
      <div>sex</div>
    </div>
  )
}
