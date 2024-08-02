import { Link } from "react-router-dom";

//props
//poke name,
//poke id,
//poke type
//poke weight
//poke types
//poke sprites other dream_world front_default

export default function PokemonCard(props) {
  console.log("props poke card:", props);

  const { name, weight, types, id, pokeImg } = props.props;

  console.log();

  return (
    <div className="w-[322px] h-[200px] bg-slate-900 rounded-md hover:shadow-md hover:shadow-slate-400 transition-all duration-300">
      <Link className="" to={`/detail/pokemonDetail/${id}`}>
        <div className="w-full h-full flex flex-row justify-between p-3">
          <div className="flex flex-col">
            <label className="font-bold" htmlFor="">{name}</label>
            <label htmlFor="">#{id}</label>
            <label htmlFor="">{weight}</label>
            <label htmlFor="">{types[0].type.name}</label>
          </div>
          <img
            className="w-[120px] h-[120px]"
            src={`${pokeImg.front_default}`}
          />
        </div>
      </Link>
    </div>
  );
}
