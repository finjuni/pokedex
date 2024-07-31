
import PokemonCard from '../card/pokemonCard'

export default function ListPokemon() {

  let loopPokeCard = []

  for(let i = 0; i < 12; i++) {
   loopPokeCard.push(i)
  }

  return (
    <div className='w-full h-full max-sm:justify-center flex flex-wrap gap-7'>
      {loopPokeCard.map(i => (
        <PokemonCard key={i} id={i}/>
      ))}
    </div>
  )
}
