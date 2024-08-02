// import React, { useState } from "react";
import { useState } from "react";
import { getDetailPokemon} from "../../fetch/fetch";
import { FaSearch } from "react-icons/fa";


export default function Search(props) {

  const [input, setInput] = useState('')

  // console.log("search: ", props.props)

  const {handleListPokemon} = props

  async function handleFormSearch(event) {
    event.preventDefault();

    try {
      const getResult = await getDetailPokemon(input)

      await handleListPokemon(getResult)

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className="flex flex-row w-full" onSubmit={handleFormSearch}>
      <div className="flex flex-col">
        <input
          className="text-gray-800 font-semibold w-[300px] h-[42px] max-sm:w-[200px] bg-slate-900 focus:bg-gray-400 px-2 focus:outline-none rounded-lg"
          type="text"
          placeholder="Search Pokemon's Name or ID"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </div>

      <button
        className="ml-2 px-2 py-2 rounded-lg text-sm bg-cyan-600 hover:bg-cyan-800 transition-all duration-200"
        type="submit"
      >
        <FaSearch size={18} />
      </button>
    </form>
  );
}
