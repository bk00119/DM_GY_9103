import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import styles from "./ContactForm.module.css"

export default function ContactForm(props){
  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    message: Yup.string()
      .required('Required')
  })

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: ''
        }}
        validationSchema={ContactSchema}
        onSubmit={async values => {
          // trigger Netlify Function to send an email to my personal email from no-reply@briankim.pro
          const res = await fetch("./.netlify/functions/triggerEmail", {
            method: "POST",
            body: JSON.stringify({
              senderName: values.name,
              senderEmail: values.email,
              message: values.message
            })
          });

          if (res.status === 200){
            props.setFormIsSent(true)
          } else if (res.status === 404){
          
          } else {
            alert("NETWORK ERROR: Your contact email is not sent. Please email me directly.")
          }

        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.formInnerContainer} name="contact" method="POST" data-netlify="true">
            <div className={styles.formTopContainer}>
              <div className={styles.nameFieldContainer}>
                <p className={styles.fieldTitle}>Name</p>
                <Field name='name' className={styles.textField} />
                {errors.name && touched.name ? (
                  <p className={styles.fieldError}>{errors.name}</p>
                ):null}

              </div>

              <div className={styles.emailFieldContainer}>
                <p className={styles.fieldTitle}>Email</p>
                <Field name='email' type='email' className={styles.textField} />
                {errors.email && touched.email ? (
                  <p className={styles.fieldError}>{errors.email}</p>
                ):null}


              </div>
            </div>
            
            <div className={styles.formBottomContainer}>
              <p className={styles.fieldTitle}>Type your message here...</p>
              <Field name='message' as='textarea' className={styles.textareaField} />
              {errors.message && touched.message ? (
                <p className={styles.fieldError}>{errors.message}</p>
              ):null}
            </div>
            <div className={styles.submitButtonContainer}>
              <button type='submit' className={styles.submitButton}>Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}