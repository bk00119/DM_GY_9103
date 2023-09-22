// Component for rating recipes. 

import { useState, useEffect } from 'react'
import {ReactComponent as Star} from '@material-design-icons/svg/filled/star.svg'
import {ReactComponent as Add} from '@material-design-icons/svg/filled/add.svg'
import {ReactComponent as Remove} from '@material-design-icons/svg/filled/remove.svg'

import styles from "./Ratings.module.css"

export default function RecipeRatings() {
  const [ratings, setRatings] = useState(0)
  const [isMax, setIsMax] = useState(false)
  const [isMin, setIsMin] = useState(true)

  // Called everytime ratings is modified
  useEffect(()=> {
    // TO AVOID CALLING setIsMax() EVERYTIME RATINGS DECREMENT
    if (ratings === 5){
      setIsMax(true)
    }

    // TO AVOID CALLING setIsMin() EVERYTIME RATINGS INCREMENT 
    if (ratings === 0){
      setIsMin(true)
    }
  },[ratings])

  function incrementRating(){
    if (ratings < 5) {
      setRatings(ratings+1)

      // TO AVOID CALLING setIsMin() EVERYTIME RATINGS INCREMENT 
      if (isMin) {
        setIsMin(false)
      }
    }
  }

  function decrementRating(){
    if (ratings > 0){
      setRatings(ratings-1)

      // TO AVOID CALLING setIsMax() EVERYTIME RATINGS DECREMENT
      if (isMax){
        setIsMax(false)
      }
    }
  }

  return (
    <div className={styles.recipe_ratings_container}>
      {/* Button for decrementing ratings(stars) */}
      <button 
        className={isMin ? styles.recipe_ratings_button_hidden : styles.recipe_ratings_button}
        onClick={decrementRating}
      >
        <Remove />
      </button>

      {/* Representation of ratings in star icons */}
      {[...Array(ratings)].map((star, i) => {
        return (
          <Star className={styles.ratings_star} key={i} />
        )
      })}

      {/* Button for incrementing ratings(stars) */}
      <button 
        className={isMax ? styles.recipe_ratings_button_hidden : styles.recipe_ratings_button}
        onClick={incrementRating}
      >
        <Add className={styles.recipe_ratings_button_icon} />
      </button>
    </div>
  )
}