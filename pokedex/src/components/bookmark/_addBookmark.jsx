import Swal from 'sweetalert2'
import axios from "axios"


export default function AddBookmark(prop) {

  const {detailPokemon} = prop

  const onBookmarked = async (event) => {
    event.preventDefault()

    if(!detailPokemon) return 

    try {

      await axios.post(`http://localhost:3000/bookmarks`, detailPokemon)

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
    <form onSubmit={onBookmarked}>
        <button type="submit" className="ring-1 p-2">add</button>
      </form>
  )
}
