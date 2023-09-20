import { useState } from "react"
import styles from "./RecipeCard.module.css"
import {ReactComponent as Star} from '@material-design-icons/svg/filled/star.svg'

export default function Ratings(){
  const [ratings, setRatings] = useState(0);
  const MIN_RATINGS = 0
  const MAX_RATINGS = 5

  function updateRatings(change_rating){
    const new_ratings = ratings + change_rating
    if(new_ratings >= MIN_RATINGS && new_ratings <= MAX_RATINGS){
      setRatings(new_ratings)
    }
  }

  return (
    <div className={styles.ratings_wrapper}>
      <button className={styles.ratings_button} onClick={()=>updateRatings(-1)}>-</button>
      {
        [...Array(ratings)].map((star, i) => {
          return(
            // <span className={styles.ratings_star} key={i}>&#9733;</span>
            <Star className={styles.ratings_star} key={i} />
          )
        })
      }
      <button className={styles.ratings_button} onClick={()=>updateRatings(+1)}>+</button>
    </div>
  )
}