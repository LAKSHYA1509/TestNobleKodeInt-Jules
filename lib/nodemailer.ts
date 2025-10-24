import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer-smtp-transport";

export const smtpEmail =process.env.GOOGLE_EMAIL 
export const  password = process.env.GOOGLE_PASSWORD
export const transport = nodemailer.createTransport(SMTPTransport({
    service: "gmail",
    auth: {
      user: smtpEmail,
      pass: password
    },


}))

