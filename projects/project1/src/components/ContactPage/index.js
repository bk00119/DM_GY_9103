import { useState } from 'react'

import ContactForm from './ContactForm'
import styles from './ContactPage.module.css'

export default function ContactPage() {
  const [formIsSent, setFormIsSent] = useState(false)

  return (
    <div className={styles.contactContainer}>
      <div className={styles.textContainer}>
        <p className={styles.textTitle}>Let's talk</p>
        <p className={styles.textContent}>about my passion, food, and anything in between.</p>
        <p className={styles.emailTitle}>EMAIL</p>
        <a className={styles.textContent} href="mailto:hyunjun.kim@nyu.edu">hyunjun.kim@nyu.edu</a>
      </div>
      <ContactForm setFormIsSent={setFormIsSent} />
    </div>
  )
}