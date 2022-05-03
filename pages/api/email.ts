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
      from: process.env.EMAIL,
      to: email,
      subject: "SinCity Banditz - Team Request",
      html: `
      <main>
        <h1 style="color:#dc2626;">Hi ${username} thank you for your team request!</h1>
        <table style="color: #1a1616; border-collapse: collapse;">
          <tr>
            <th style="border: 1px solid #1a1616;">Username</th>
            <th style="border: 1px solid #1a1616;">Age</th>
            <th style="border: 1px solid #1a1616;">Experience</th>
          </tr>
          <tr>
            <td style="border: 1px solid #1a1616;">${username}</td>
            <td style="border: 1px solid #1a1616;">${age}</td>
            <td style="border: 1px solid #1a1616;">${experience}</td>
          </tr>
        </table>
        <p style="color:#1a1616;">We will answer as soon as possible.</p>
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
