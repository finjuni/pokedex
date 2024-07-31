import { Link } from "react-router-dom"

//props
//poke name,
//poke id,
//poke type
//poke weight
//poke types
//poke sprites other dream_world front_default

export default function PokemonCard(props) {

  const {name, id, types, weight} = props

  return (
    <div className='w-[322px] h-[200px] bg-slate-400 rounded-md'>
      <Link className="" to={`/detail/pokemonDetail/${id}`}>
        <div className="w-full h-full">
          <label htmlFor="">{name}</label>
          <label htmlFor="">{weight}</label>
          <label htmlFor="">{types[0].type.name}</label>
          
        </div>
      </Link>
    </div>
  )
}
