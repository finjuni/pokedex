import { Link } from "react-router-dom";
import AddBookmark from "../bookmark/_addBookmark";

export default function VariationCard(props) {
  const { id, name, types, image } = props.props;
  const detailPokemon = { id, name, types, image };
  const convertUpperCaseName = (name) => {
    return name[0].toUpperCase() + name.slice(1);
  };

  return (
    <div className="relative w-[322px] h-[200px] bg-slate-900 rounded-md hover:shadow-md hover:shadow-slate-400 transition-all duration-300">
      <Link
        className="absolute inset-0 z-10"
        to={`/detail/pokemonDetail/${id}`}
      >
        <div className="w-full h-full flex flex-row justify-between p-3">
          <div className="flex flex-col">
            <label className="font-bold" htmlFor="">
              {convertUpperCaseName(name)}
            </label>
            <label htmlFor="">#{id}</label>
            <label htmlFor="">Types:</label>
            <label htmlFor="">{types[0]}</label>
            <label htmlFor="">{types[1]}</label>
          </div>
          <img className="w-[120px] h-[120px]" src={`${image}`} />
        </div>
      </Link>
      <div className="absolute inset-x-0 bottom-3 flex justify-center z-20">
        <AddBookmark detailPokemon={detailPokemon} />
      </div>
    </div>
  );
}
