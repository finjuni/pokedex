import { Link } from "react-router-dom"

//props
//poke name,
//poke id,
//poke type
//poke weight
//poke types
//poke sprites other dream_world front_default

export default function PokemonCard(props) {

  console.log("props poke card:", props)

  const {name, weight, types, id, pokeImg} = props.props

  console.log()

  return (
    <div className='w-[322px] h-[200px] bg-slate-400 rounded-md'>
      <Link className="" to={`/detail/pokemonDetail/${id}`}>
        <div className="w-full h-full">
          <label htmlFor="">{name}</label>
          <label htmlFor="">{weight}</label>
          <label htmlFor="">{types[0].type.name}</label>
          <img src={`${pokeImg.front_default}`} />
        </div>
      </Link>
    </div>
  )
}
