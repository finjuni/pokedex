import PokemonCard from "../card/pokemonCard";

export default function ListPokemon(props) {
  // let loopPokeCard = []

  // for(let i = 0; i < 12; i++) {
  //  loopPokeCard.push(i)
  // }

  if (!props) return [];

  const listPokemon = props.props;

  // console.log("listPoke: ", listPokemon);


  return (
    <div className="w-full h-full max-sm:justify-center flex flex-wrap gap-7">
      {listPokemon.map((item) => (
          <PokemonCard key={item.id} props={item} />
      ))}
    </div>
  );
}
