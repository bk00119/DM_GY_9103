import { useState } from 'react'

import Confirmation from './Confirmation'
import ContactText from './ContactText'
import ContactForm from './ContactForm'
import styles from './ContactPage.module.css'

export default function ContactPage() {
  const [formIsSent, setFormIsSent] = useState(false)

  return (
    <div className={styles.contactContainer}>
      {formIsSent ? (
        // WHEN THE FORM IS SENT
        <Confirmation setFormIsSent={setFormIsSent} />
      ):(
        // WHEN THE PAGE IS FIRST LOADED (FORM IS NOT SENT YET)
        <>
          <ContactText />
          <ContactForm setFormIsSent={setFormIsSent} />
        </>
      )}
    </div>
  )
}