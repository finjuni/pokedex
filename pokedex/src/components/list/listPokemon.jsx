
import PokemonCard from '../card/pokemonCard'

export default function ListPokemon() {

  let loopPokeCard = []

  for(let i = 0; i < 15; i++) {
   loopPokeCard.push(i)
  }

  return (
    <div className='w-full h-full flex flex-wrap gap-7'>
      {loopPokeCard.map(i => (
        <PokemonCard key={i} id={i}/>
      ))}
    </div>
  )
}
