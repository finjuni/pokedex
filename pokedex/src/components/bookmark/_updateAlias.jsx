// import { useState } from "react"
import Swal from "sweetalert2";
import axios from "axios";

export default function UpdateAlias(props) {

  // const [open, setOpen] = useState(false)

  const {data} = props

  async function openUpdate(props) {
    try {
      const { value: text } = await Swal.fire({
        input: "textarea",
        inputLabel: "Update Alias:",
        inputPlaceholder: "Type Pokemon Alias",
        inputValue: props?.alias,
        inputAttributes: {
          "aria-label": "Type your message here",
        },
        showCancelButton: true,
      });

      // console.log("props: ", { ...props });
      // console.log("text: ", text);
      if (text) {
        // Swal.fire(text);
        // console.log("text send with msg: ", text)
        await axios.put(`https://near-chivalrous-pet.glitch.me/bookmarks/${Number(props.id)}`, {
          ...props,
          alias: text,
        });

        await Swal.fire({
          title: "Update Alias Success",
          icon: "success",
        });

        window.location.reload();
      } else {
        await Swal.fire({
          title: "No Update",
          icon: "info",
        });
      }
    } catch (error) {
      console.error("error: ", error);

      await Swal.fire({
        title: `${error.message}`,
        icon: "error",
      });
    }
  }

  return (
    <button onClick={() => openUpdate(data)}>edit</button>
  )
}
