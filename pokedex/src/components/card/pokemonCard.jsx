import { Link } from "react-router-dom";
import { GiWeight } from "react-icons/gi";
//props
//poke name,
//poke id,
//poke type
//poke weight
//poke types
//poke sprites other dream_world front_default

export default function PokemonCard(props) {
  // console.log("props poke card:", props);

  const { name, weight, types, id, pokeImg } = props.props;

  console.log();

  return (
    <div className="w-[322px] h-[200px] bg-slate-900 rounded-md hover:shadow-md hover:shadow-slate-400 transition-all duration-300">
      <Link className="" to={`/detail/pokemonDetail/${id}`}>
        <div className="w-full h-full flex flex-row justify-between p-3">
          <div className="flex flex-col gap-5">
            <label className="font-bold" htmlFor="">
              {String(name).toLocaleUpperCase()}
            </label>
            <label htmlFor="">#{id}</label>
            <div className="flex flex-row gap-2 items-center">
              <GiWeight color="gray" size={25} />
              <label htmlFor="">{weight} kg</label>
            </div>

            <div className="flex flex-row gap-2">
              {types.map((prop) => (
                <div key={prop}>
                  <p className="italic font-light">
                  {prop?.type?.name}
                  </p>
                </div>
              ))}
            </div>
            {/* <label htmlFor="">{types[0].type.name}</label> */}
          </div>
          <img
            className="w-[130px] h-[130px]"
            src={`${pokeImg.front_default}`}
          />
        </div>
      </Link>
    </div>
  );
}
