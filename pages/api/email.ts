import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: req.body.email,
      to: process.env.EMAIL,
      subject: "Team request",
      html: `
        <main>
            <strong>Username</strong>
            <p>${req.body.username}</p>
            <strong>Email</strong>
            <p>${req.body.email}</p>
            <strong>Age</strong>
            <p>${req.body.age}</p>
            <strong>Experience</strong>
            <p>${req.body.experience}</p>
        </main>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.end();
  }
};

export default handler;
