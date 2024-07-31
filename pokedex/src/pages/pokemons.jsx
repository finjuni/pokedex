import ListPokemon from "../components/list/listPokemon";

export default function Pokemons() {
  return (
    <div className="flex flex-col p-5 gap-2">
      <label htmlFor="">Pokemon Species</label>
      <div>Search</div>
      <ListPokemon />
    </div>
  )
}
