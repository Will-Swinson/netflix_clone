import nodeMailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const html = `
<div>
<h2>Hello please click the link below to sign up now!</h2>
<a href="http://localhost:3000/signup">Sign Up</a>
</div>
`;

async function sendEmail(user) {
  try {
    const transporter = nodeMailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: "Netflix Team <",
      to: user,
      subject: "Welcome to Netflix",
      html,
    });

    console.log("Message", info.messageId);
  } catch (error) {
    console.log(error);
  }
}

export default sendEmail;
