import ImageItem from "./ImageItem"

export default function ImageList(props){
  const { images } = props
  return (
    <div>
      {images.map((img) => (
        <ImageItem image={img} key={img.id} />
      ))}
    </div>
  )
}