export default function ImageItem(props){
  console.log(props.image)
  return (
    <div>
      <img src={props.image.urls.small} alt={props.image.id}/>
    </div>
  )
}