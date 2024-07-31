import VariationCard from "../card/variationCard"

export default function ListVariation() {
  let loopPokeCard = []

  for(let i = 0; i < 35; i++) {
   loopPokeCard.push(i)
  }

  return (
    <div className='w-full h-full max-sm:justify-center flex flex-wrap gap-7'>
      {loopPokeCard.map(i => (
        <VariationCard key={i} id={i}/>
      ))}
    </div>
  )
}
