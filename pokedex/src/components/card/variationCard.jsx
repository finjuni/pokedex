import { Link } from "react-router-dom"


export default function VariationCard(props) {
  const {id} = props

  return (
    <div className='w-[322px] h-[200px] bg-slate-400 rounded-md'>
      <Link className="" to={`/detail/pokemonDetail/${id}`}>
        <div className="w-full h-full">
          test
        </div>
      </Link>
    </div>
  )
}
