import { useDispatch, useSelector } from "react-redux"
import { changeName, changePrice } from "../store"
import { addArt } from "../store"

export default function ArtForm() {
  const dispatch = useDispatch()
  // destructure out the name and cost being returned from our selector function
  const { name, price } = useSelector((state) => {
    return {
      name: state.form.name,
      price: state.form.price,
    }
  })

  const handleNameChange = (event) => {
    // event.target.value
    dispatch(changeName(event.target.value))
  }

  const handlePriceChange = (event) => {
    // event.target.value is going to be a string, we want it to be a number!
    // the NaN check is fixed with the || 0
    const artPrice = parseInt(event.target.value) || 0
    dispatch(changePrice(artPrice))
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(addArt({ name, price }))
  }

  return (
    <div className="my-5">
      <h3>Add Artwork</h3>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <label>Name(artist, title)</label>
            <input
              className="border border-2 rounded border-slate-500"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className="flex flex-col">
            <label>Price</label>
            <input
              className="border border-2 rounded border-slate-500"
              // the || '' is so we can delete the value 0 and enter another value!
              value={price || ""}
              onChange={handlePriceChange}
              type="number"
            />
          </div>

          <div className="flex flex-col justify-end ml-3">
            <button className="px-3 py-1 rounded bg-slate-500 text-white">
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
