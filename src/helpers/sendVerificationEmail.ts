const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

export const sendVerificationEmail = (verifyEmail: string, userData: any) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 587,
    secure: false,
    auth: {
      user: "verifyemail@exhime.com",
      pass: "Imaverifyking@69",
    },
  });

  const token = jwt.sign(
    {
      data: userData,
    },
    process.env.JWT_SECRET,
    { expiresIn: 600 }
  );

  console.log("token sent =>", token);

  const mailConfigurations = {
    from: "verifyemail@exhime.com",

    to: verifyEmail,

    subject: "Complete your registration with exhime.com, verify your email",

    // This would be the text of email body
    html: `<html>
      <head>
        <style>
          * {
            font-family: helvetica;
            font-size: 1rem;
          }
        </style>
      </head>
      <body>
        <p>Hi,</p>
        <p>Please click on the button below to verify your email id</p>
        <br/>
        <a href="https://exhime.com/verify/${token}" style="padding: 15px; border-radius: 10px; background-color: #DB3AB6; color: white; font-weight: bold; marginTop: 20px;cursor: pointer;text-decoration: none;">Verify Your Email</a>
        <br/>
        <br/>
        <p>Best regards,</p>
        <p>Team <a href="exhime.com">exhime.com</a></p>
        
        
      </body>
    </html>
`,
  };

  transporter.sendMail(mailConfigurations, function (error, info) {
    if (error) throw Error(error);
    console.log("Verification Email Sent Successfully!");
    console.log(info);
  });
};
