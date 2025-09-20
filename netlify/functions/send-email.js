const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    function formatService(service) {
      return service
        .replace(/-/g, " ") // replace dashes with spaces
        .replace(/\b\w/g, (c) => c.toUpperCase()); // capitalize first letters
    }

    // Build HTML automatically from form fields
    const fieldsHtml = Object.entries(data)
      .filter(([key]) => key !== "FormTitle")
      .map(([key, value]) => {
        if (key === "service") {
          value = formatService(value);
        }
        const label =
          key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1");
        return `<p><strong>${label}:</strong> ${value}</p>`;
      })
      .join("");

    // Generate date-time string for FormTitle
    const now = new Date();
    const melbourneTime = now.toLocaleString("en-AU", {
      timeZone: "Australia/Melbourne",
      hour12: false,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // Format as MMDDYYYYHHMMSS
    const [datePart, timePart] = melbourneTime.split(", ");
    const [day, month, year] = datePart.split("/");
    const [hour, minute, second] = timePart.split(":");
    const dateTimeStr = `${month}${day}${year}${hour}${minute}${second}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "kqbdgt@gmail.com", // testing email
      subject: `New ${data.FormTitle} Submission - ${dateTimeStr}`,
      html: `
        <h2 style="color:#2c3e50;">${data.FormTitle}</h2>
        ${fieldsHtml}
        <hr/>
        <small>Submitted via Empower Through Care website</small>
      `,
      text: JSON.stringify(data, null, 2), // fallback plain text
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
