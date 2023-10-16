import styles from './ContactPage.module.css'

export default function ContactText(){
  return (
    <div className={styles.textContainer}>
      <p className={styles.textTitle}>Let's talk</p>
      <p className={styles.textContent}>about my passion, food, and anything in between.</p>
      <p className={styles.emailTitle}>Email</p>
      <a className={styles.textContent} href="mailto:hyunjun.kim@nyu.edu">hyunjun.kim@nyu.edu</a>
      <p className={styles.SocialemailTitle}> Media</p>
      <a className={styles.textContent} href="https://www.linkedin.com/in/briankim00119/" target="_blank" rel="noreferrer">Direct message on LinkedIn</a>
    </div>
  )
}