require('dotenv').config()

const sgMail = require('@sendgrid/mail');

const {SG_API_KEY, FROM_EMAIL, TO_EMAIL} = process.env

sgMail.setApiKey(SG_API_KEY);

export default async function handler(req, res){
    const {name, email, message} = req.body;

    const msg = {
        to: TO_EMAIL,
        from: FROM_EMAIL,
        subject: "Nextjs Contact Form",
        html: <><p><strong>Name: </strong>${name}</p>
        <p><strong>Email:</strong>${email}</p>
        <p><strong>Message: </strong>${message}</p></>
    };
    await sgMail.send(msg);
    res.json({ success: true});
}

// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }
