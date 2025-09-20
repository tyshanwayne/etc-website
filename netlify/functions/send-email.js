const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  let data = {};

  // ✅ safer JSON parse
  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: "Invalid JSON body" }),
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      // to: "admin@empowerthroughcare.com",
      to: "kqbdgt@gmail.com", // testing email
      subject: `New ${data.FormTitle || "Form"} Submission`,
      text: JSON.stringify(data, null, 2),
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Email error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
