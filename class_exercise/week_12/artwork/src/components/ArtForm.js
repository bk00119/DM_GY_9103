import { useDispatch, useSelector } from "react-redux"
import { changeName, changePrice, addArt } from "../store"

export default function ArtForm() {
  const dispatch = useDispatch()
  const { name, price } = useSelector((state) => {
    return {
      name: state.form.name,
      price: state.form.price,
    }
  })

  function handleNameChange(event) {
    dispatch(changeName(event.target.value))
  }

  function handlePriceChange(event) {
    const artPrice = parseInt(event.target.value) || 0 // if empty --> 0
    dispatch(changePrice(artPrice))
  }

  function handleSubmit(event) {
    event.preventDefault()
    // dispatch(addArt({
    //   name: name,
    //   price: price.
    // }))
    // SAME AS
    dispatch(
      addArt({
        name,
        price,
      })
    )
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
              value={price || ''}
              onChange={handlePriceChange}
              type="number"
            />
          </div>
        </div>
      </form>
    </div>
  )
}
