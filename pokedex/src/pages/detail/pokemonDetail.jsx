import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getDetailPokemon } from "../../fetch/fetch"
import Swal from 'sweetalert2'
import axios from "axios"

export default function PokemonDetail() {

  const [detailPokemon, setDetailPokemon] = useState({})

  const {id} = useParams()

  useEffect(() => {
    async function fetchData () {
      const getDetail = await getDetailPokemon(id)
      
      console.log("getDetail: ", getDetail)

      setDetailPokemon({...getDetail})
    }
    fetchData()
  }, [])

  const onBookmarked = async (event) => {
    event.preventDefault()

    // const task = {
    //   id: randomId(),
    //   desc: inputTask,
    //   category: category,
    //   isDone: false,
    //   createdAt: currentDate()
    // }

    if(!detailPokemon) return 

    const pokemon = detailPokemon

    try {
      
      // await axios.post('https://skillful-crawling-idea.glitch.me/tasks', task)
      // await Swal.fire({
      //   title: "To Do Added",
      //   icon: "success"
      // })

      await axios.post(`http://localhost:3000/bookmarks`, pokemon)

      await Swal.fire({
          title: "To Do Added",
          icon: "success"
        })

    } catch (error) {
      console.error(error)
      await Swal.fire({
        title: `${error.message}`,
        icon: "error"
      })
    }
  }

  return (
    <div className="flex flex-col h-full text-gray-200">
      <label>poke name: {detailPokemon.name}</label>
      <label>poke id: {detailPokemon.id}</label>
      <label>weight: {detailPokemon.weight}</label>
      <div>sex</div>

      <form onSubmit={onBookmarked}>
        <button type="submit" className="ring-1 p-2">add</button>
      </form>
    </div>
  )
}
