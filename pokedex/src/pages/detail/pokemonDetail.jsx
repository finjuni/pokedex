import { useParams } from "react-router-dom"


export default function PokemonDetail() {

  const {id} = useParams()

  return (
    <div className="container">
      <label>poke name</label>
      <label>poke id: {id}</label>
      <div>weight</div>
      <div>sex</div>
    </div>
  )
}
