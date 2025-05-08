const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config(); // Load .env variables

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(5000, () => console.log("✅ Server Running on port 5000"));

console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Pass:", process.env.EMAIL_PASS ? "Loaded ✅" : "Missing ❌");

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.error("❌ Email Transport Error:", error);
  } else {
    console.log("✅ Ready to send emails");
  }
});

router.post("/contact", (req, res) => {
    const name = `${req.body.firstName} ${req.body.lastName}`;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
  
    console.log("📥 Incoming Contact Form:", req.body); // Debug input
  
    const mail = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "📬 Contact Form Submission - Portfolio",
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };
  
    contactEmail.sendMail(mail, (error, info) => {
      if (error) {
        console.error("❌ Email send error:", error); // Check this
        res.status(500).json({ code: 500, message: "Failed to send message" });
      } else {
        console.log("✅ Email sent:", info.response);
        res.status(200).json({ code: 200, message: "Message sent successfully" });
      }
    });
  });
  