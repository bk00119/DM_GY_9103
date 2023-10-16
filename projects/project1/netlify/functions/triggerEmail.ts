import type { Handler } from "@netlify/functions";
import sgMail from '@sendgrid/mail';

const handler: Handler = async function(event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  const requestBody = JSON.parse(event.body) as {
    senderName: string;
    senderEmail: string;
    message: string;
  };

  const msg = {
    to: 'briankim00119@gmail.com',
    from: 'no-reply@briankim.pro',
    // from: 'no-reply@briankim.pr',
    subject: `Contact from ${requestBody.senderName}`,
    html: `<strong>Email: ${requestBody.senderEmail}<br><br>[Message]</strong><br><div style="white-space: pre-wrap;" >${requestBody.message}</div>`,
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)
  return await sgMail
    .send(msg)
    .then(() => {
      return {
        statusCode: 200,
        body: JSON.stringify("Contact email sent!"),
      };
    })
    .catch((error) => {
      console.error(error);
      return {
        statusCode: 400,
        body: JSON.stringify("ERROR: Email is not sent"),
      };
    });
};

export { handler };
