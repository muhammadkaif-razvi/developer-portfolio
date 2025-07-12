"use server";
type ContactFormState = {
  success: boolean;
  error?: string;
};

const initialState: ContactFormState = {
  success: false,
};


export async function sendContactEmail(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const { name, subject, message, email } = Object.fromEntries(formData);

  try {
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "muhammadkaifrazwi@gmail.com",
      subject: `Portfolio Message: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: "Failed to send email. Please try again later.",
    };
  }
}
