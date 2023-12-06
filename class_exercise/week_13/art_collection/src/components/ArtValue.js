import { useSelector } from "react-redux"

export default function ArtValue() {
  const totalPrice = useSelector(({ art: { data, searchTerm } }) => {
    // const filteredArt = data.filter((art) => {
    //   return art.name.toLowerCase().includes(searchTerm.toLowerCase())
    // })

    // let price = 0
    // for (let art of filteredArt){
    //   price += art.price
    // }
    // return price

    // TO RETURN THE TOTAL PRICE OF ART COLLECTIONS
    return data
      .filter((art) => {
        return art.name.toLowerCase().includes(searchTerm.toLowerCase())
      })
      .reduce((acc, art) => {
        return (acc += art.price)
      }, 0)
  })

  return (
    <div className="pr-5 flex flex-row justify-end">
      <h3 className="text-lg">Total Price: ${totalPrice}</h3>
    </div>
  )
}
