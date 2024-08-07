
import DeleteBookmark from "../bookmark/_deleteBookmark";
import UpdateAlias from "../bookmark/_updateAlias";
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
          {ableToHandle && (
            <div className="flex flex-row w-[322px] justify-between">
              <UpdateAlias data={item}/>
              <p className="p-1 max-w-[50%] max-h-[42px] overflow-hidden text-nowrap italic text-sm">Alias: {item?.alias}</p>
              <DeleteBookmark id={item?.id}/>
            </div>
          )}
          <PokemonCard props={item} />
        </div>
      ))}
    </div>
  );
}
