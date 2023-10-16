import { useState } from 'react'

import ContactForm from './ContactForm'
import styles from './ContactPage.module.css'

export default function ContactPage() {
  const [formIsSent, setFormIsSent] = useState(false)

  function resetForm(){
    setFormIsSent(false)
  }

  return (
    <div className={styles.contactContainer}>
      {formIsSent ? (
        <div className={styles.confirmationContainer}>
          <p className={styles.textTitle}>Thank you</p>
          <p className={styles.textContent}>I will get back to you as soon as possible.</p>
          <button onClick={resetForm} className={styles.resetFormButton}>Redo the form</button>
        </div>
      ):(
        <>
          <div className={styles.textContainer}>
            <p className={styles.textTitle}>Let's talk</p>
            <p className={styles.textContent}>about my passion, food, and anything in between.</p>
            <p className={styles.emailTitle}>Email</p>
            <a className={styles.textContent} href="mailto:hyunjun.kim@nyu.edu">hyunjun.kim@nyu.edu</a>
            <p className={styles.emailTitle}>Social Media</p>
            <a className={styles.textContent} href="https://www.linkedin.com/in/briankim00119/" target="_blank" rel="noreferrer">Direct message on LinkedIn</a>
          </div>
          <ContactForm setFormIsSent={setFormIsSent} />
        </>
      )}
    </div>
  )
}