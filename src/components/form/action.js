"use server";

import nodemailer from "nodemailer";

export const sendMail = async (prevState, formData) => {
  try {
    const username = "hrach_and_ruzanna@outlook.com";
    const password = "BeeWeb2021!";
    const myEmail = "hrach@doejo.com";

    const name = formData.get("name");
    const reason = formData.get("reason");

    if (!name || !reason) {
      return { success: false, message: "Խնդրում ենք լրացնել բոլոր դաշտերը" };
    }

    const transporter = nodemailer.createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },

      auth: {
        user: username,
        pass: password,
      },
    });

    await transporter.sendMail({
      from: username,
      to: myEmail,
      subject: `Հրավիրատոմս`,
      html: `
        <p>Name: ${name} </p>
        <p>Reason: ${reason} </p>
        `,
    });

    return { success: true, message: "Success" };
  } catch (err) {
    return { success: false, message: "Something went wrong" };
  }
};
