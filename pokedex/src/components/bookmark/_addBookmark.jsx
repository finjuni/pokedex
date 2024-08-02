import Swal from "sweetalert2";
import axios from "axios";

export default function AddBookmark(prop) {
  const { detailPokemon } = prop;

  
  // console.log("detail id :", detailPokemon?.id)

  const onBookmarked = async (event) => {
    event.preventDefault();

    if (!detailPokemon) return;

    try {
      const checkId = await axios.get(
        `http://localhost:3000/bookmarks/?id=${detailPokemon?.id}}`
      );

      const {data} = await axios.get(`http://localhost:3000/bookmarks/?id=${Number(detailPokemon?.id)}`)

      if(data.length > 0) {
         await Swal.fire({
          title: `${detailPokemon?.name} already exist`,
          icon: "warning",
        });

        return window.location.reload();
      }

      await axios.post(`http://localhost:3000/bookmarks`, detailPokemon);

      await Swal.fire({
          title: `${detailPokemon.name} Added`,
          icon: "success"
        })

    } catch (error) {
      console.error(error);
      await Swal.fire({
        title: `${error.message}`,
        icon: "error",
      });
    }
  };
  return (
    <form className='bg-blue-950 hover:bg-blue-600 rounded-md' onSubmit={onBookmarked}>
        <button type="submit" className="ring-1 p-2 rounded-md">Add</button>
    </form>
  );
}
