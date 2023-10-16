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

  // const handleSubmit = async event => {
  //   event.preventDefault()
  //   const target = event.target

  //   const data = {
  //     subscriberName: target.name,
  //     subscriberEmail: target.email
  //   };

  //   //call to the Netlify Function you created
  //   fetch("../../../../netlify/functions/triggerContactEmail", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       subscriberName: data.subscriberName,
  //       subscriberEmail: data.subscriberEmail,
  //       inviteeEmail: "info@netlify.com"
  //     })
  //   });
  // };

  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: ''
        }}
        validationSchema={ContactSchema}
        onSubmit={values => {
          console.log(values)

          // fetch("../../../../netlify/functions/triggerContactEmail", {
          //   method: "POST",
          //   body: JSON.stringify({
          //     subscriberName: values.name,
          //     subscriberEmail: values.email,
          //     inviteeEmail: "info@netlify.com"
          //   })
          // });

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