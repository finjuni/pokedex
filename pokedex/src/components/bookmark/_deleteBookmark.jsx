import axios from "axios"
import Swal from "sweetalert2";

export default function DeleteBookmark(prop) {

  console.log("prop id: ", prop?.id)

  async function handleDelete (event) {
    event.preventDefault()

    console.log("ondelete, prop id: ", prop?.id)

    try {
      const res = await axios.delete(`https://near-chivalrous-pet.glitch.me/bookmarks/${Number(prop?.id)}`)

      if (!res.data) {
        await Swal.fire("Delete Fail", "", "error");
        window.location.reload();
      }

      await Swal.fire("Delete Success", "", "success");
      window.location.reload();

    } catch (error) {
      console.error(error)
      await Swal.fire("Delete Fail", `${error.message}`, "error");
    }

  }

  return (
    <form onSubmit={handleDelete} action="">
      <button type="submit" className="self-end px-2 rounded-full bg-slate-900 hover:ring-1 hover:bg-red-600">X</button>
    </form>
  )
}
