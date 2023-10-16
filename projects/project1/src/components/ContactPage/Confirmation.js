import styles from './ContactPage.module.css'

export default function Confirmation(props){
  function resetForm(){
    props.setFormIsSent(false)
  }

  return (
    <div className={styles.confirmationContainer}>
      <p className={styles.textTitle}>Thank you</p>
      <p className={styles.textContent}>I will get back to you as soon as possible.</p>
      <button onClick={resetForm} className={styles.resetFormButton}>Redo the form</button>
    </div>
  )
}