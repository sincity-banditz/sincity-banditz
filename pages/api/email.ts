import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { username, age, email, experience } = req.body;

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
        <p>${username}</p>
        <strong>Age</strong>
        <p>${age}</p>
        <strong>Email</strong>
        <p>${email}</p>
        <strong>Experience</strong>
        <p>${experience}</p>
      </main>
      `,
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        res.status(500).end();
      } else {
        res.end();
      }
    });
  } else {
    res.status(404).end();
  }
};

export default handler;
