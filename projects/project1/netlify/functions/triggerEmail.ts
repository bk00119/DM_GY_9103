import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";
import sgMail from '@sendgrid/mail';

const msg = {
  to: 'briankim00119@gmail.com', // Change to your recipient
  from: 'no-reply@briankim.pro', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

const handler: Handler = async function(event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(event.body) as {
    subscriberName: string;
    subscriberEmail: string;
    inviteeEmail: string;
  };

  // //automatically generated snippet from the email preview
  // //sends a request to an email handler for a subscribed email
  // await fetch(`${process.env.URL}/.netlify/functions/emails/subscribed`, {
  //   headers: {
  //     "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET as string,
  //   },
  //   method: "POST",
  //   body: JSON.stringify({
  //     // from: requestBody.inviteeEmail,
  //     // to: requestBody.subscriberEmail,
  //     // subject: "You've been subscribed",
  //     // parameters: {
  //     //   name: requestBody.subscriberName,
  //     //   email: requestBody.subscriberEmail,
  //     // },

  //     from: "brian00119@naver.com",
  //     to: "no-reply@briankim.pro",
  //     subject: "You've been subscribed",
  //     // parameters: {
  //     //   name: requestBody.subscriberName,
  //     //   email: requestBody.subscriberEmail,
  //     // },
  //   }),
  // });

  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)
  await sgMail
    .send(msg)
    .then(() => {
      // console.log('Email sent')
      return {
        statusCode: 200,
        body: JSON.stringify("Subscribe email sent!"),
      };
    })
    .catch((error) => {
      // console.error(error)
      return {
        statusCode: 400,
        body: JSON.stringify("Error"),
      };
    })

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify("Subscribe email sent!"),
  // };
};

export { handler };
