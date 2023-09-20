import React from 'react'
// import './styles.css'
// Hmmm. This looks like a reusable UI component...
// Lets discuss next class
import styles from "./RecipeCard.module.css"

export default function Card(props) {
  return <div className={styles.card}>{props.children}</div>
}
