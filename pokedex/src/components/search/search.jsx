// import React, { useState } from "react";
import { useState } from "react";
import { searchPokemon } from "../../fetch/fetch";

export default function Search(props) {

  const [input, setInput] = useState('')

  console.log("search: ", props.props)

  const {handleListPokemon} = props

  async function handleFormSearch(event) {
    event.preventDefault();

    try {
      const getResult = await searchPokemon(input)

      await handleListPokemon(getResult)

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className="flex flex-row" onSubmit={handleFormSearch}>
      <div className="flex flex-col">
        <input
          className="text-gray-800 w-[300px] h-[32px] max-sm:w-[150px] bg-transparent focus:bg-cyan-500 rounded-lg"
          type="text"
          placeholder="find pokemon name or ID"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </div>

      <button
        className="ml-2 px-4 py-2 rounded-lg text-sm bg-cyan-600 hover:bg-cyan-800 transition-all duration-200"
        type="submit"
      >
        search
      </button>
    </form>
  );
}
