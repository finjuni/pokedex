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

      const { data } = await axios.get(
        `http://localhost:3000/bookmarks/?id=${Number(detailPokemon?.id)}`
      );

      if (data.length > 0) {
        await Swal.fire({
          title: `${detailPokemon?.name} already exist`,
          icon: "warning",
        });

        return window.location.reload();
      }

      await axios.post(`http://localhost:3000/bookmarks`, detailPokemon);

      await Swal.fire({
        title: `${detailPokemon.name} Added`,
        icon: "success",
      });
    } catch (error) {
      console.error(error);
      await Swal.fire({
        title: `${error.message}`,
        icon: "error",
      });
    }
  };
  return (
    <form onSubmit={onBookmarked}>
      <button
        type="submit"
        className="bg-cyan-600 text-white rounded-lg hover:bg-white hover:text-cyan-600 border border-cyan-600 transition-colors duration-300 px-3 py-1 text-sm"
      >
        Add Bookmark
      </button>
    </form>
  );
}
