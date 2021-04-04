const sendgrid = require("@sendgrid/mail");

class Mailer {
  constructor({ subject, recipients }, content) {
    sendgrid.setApiKey(process.env.SENDGRID_EMAIL_KEY);

    this.message = {
      to: recipients.map(({ email }) => email),
      from: "sarojvarshney20@gmail.com",
      subject,
      html: content,
      trackingSettings: { enable_text: true, enable: true },
    };
  }

  async send() {
    const res = await sendgrid.send(this.message);
    return res;
  }
}

module.exports = Mailer;
