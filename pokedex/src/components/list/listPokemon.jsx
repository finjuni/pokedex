
import PokemonCard from '../card/pokemonCard'

export default function ListPokemon(props) {

  // let loopPokeCard = []

  // for(let i = 0; i < 12; i++) {
  //  loopPokeCard.push(i)
  // }

  if(!props) return []

  return (
    <div className='w-full h-full max-sm:justify-center flex flex-wrap gap-7'>
      {props.map(item => (
        <PokemonCard key={item} item={item}/>
      ))}
    </div>
  )
}
