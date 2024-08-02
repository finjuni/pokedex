
import DeleteBookmark from "../bookmark/_deleteBookmark";
import PokemonCard from "../card/pokemonCard";
import { useLocation } from "react-router-dom";

export default function ListPokemon(props) {
  // let loopPokeCard = []

  // for(let i = 0; i < 12; i++) {
  //  loopPokeCard.push(i)
  // }

  let ableToHandle = false
  const {pathname: location} = useLocation()
  console.log("location :",location)

  const listPokemon = props.props;

  if(location === '/bookmark') {
    ableToHandle = true
  } else ableToHandle = false

  console.log("bookmark list: ", listPokemon);

  return (
    <div className="w-full h-full max-sm:justify-center justify-center flex flex-wrap gap-7">
      {listPokemon.map((item) => (
        <div className="flex flex-col gap-2" key={item?.id}>
          {ableToHandle && <DeleteBookmark id={item?.id}/>}
          <PokemonCard props={item} />
        </div>
      ))}
    </div>
  );
}
