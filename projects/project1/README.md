# Project 1: Contact Form for Portfolio Websites

## Components
### ContactPage (*/src/components/ContactPage/index.js*)
- Main component for the entire contact page
- Manages useState() to manage state of variable formIsSent, a boolean variable for checking the status of contact form submission
- Renders ContactText, ContactForm, Confirmation
- Uses CSS Modules

### ContactText (*/src/components/ContactPage/ContactText.js*)
- Simple text with title, description, and methods of contact

### ContactForm (*/src/components/ContactPage/ContactForm/index.js*)
- Most important component of this project
- Calls a customized Netlify Function and SendGrid Email API to send an email from my domain's no-reply email address to my personal email address.
- Uses Formik to create a contact form with name, email, and message
- When a required field is not filled out, an error message shows up under the input box
- After the form is submitted, it waits for the response from the API.
  - if successful (status: 200), then calls setFormIsSent to set the state of formIsSent to true
  - if unsuccessful, then calls alert() to show there's an error with the API

### Confirmation (*/src/components/ContactPage/Confirmation.js*)
- Only gets loaded when formIsSent is true
- "Redo the form" button sets the state of formIsSent to false to load the form again

## API
### triggerEmail (*/netlify/functions/triggerEmail.ts*)
- Netlify Function running on AWS Lambda
- Calls the SendGrid Email API through @sendgrid/mail