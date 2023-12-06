import { useDispatch, useSelector } from "react-redux"
import { removeArt } from "../store"

export default function ArtList() {
  const dispatch = useDispatch()
  // const artList = useSelector((state) => {
  //   return state.art.data
  // })

  const {artList, name} = useSelector(({ form, art: { data, searchTerm } }) => {
    // SAME AS
    // const { art } = state
    // const { data, searchTerm } = art

    const filteredArt = data.filter((art) =>
      art.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return {
      artList: filteredArt,
      name: form.name
    }
  })

  function handleArtDelete(art) {
    dispatch(removeArt(art.id))
  }

  const rederedArt = artList.map((art) => {
    const bold = name && art.name.toLowerCase().includes(name.toLowerCase())
    return (
      <div
        key={art.id}
        className="border rounded flex flex-row justify-between items-center"
      >
        <p className={`pl-3 ${bold && 'font-bold'}`}>
          {art.name} - ${art.price}
        </p>
        <button
          className="rouded bg-red-500 p-2 text-white"
          onClick={() => handleArtDelete(art)}
        >
          Delete
        </button>
      </div>
    )
  })

  return (
    <div className="p-5">
      {/* <p>Art List</p> */}
      {rederedArt}
    </div>
  )
}
