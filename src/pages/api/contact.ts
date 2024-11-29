import nodemailer from "nodemailer";
import type { APIRoute } from "astro";
import dotenv from "dotenv";

dotenv.config();

export const POST: APIRoute = async ({ request }) => {
  try {
    // Validate the Content-Type header
    if (request.headers.get("Content-Type") !== "application/json") {
      console.error("Invalid Content-Type header:", request.headers.get("Content-Type"));
      return new Response(JSON.stringify({ success: false, error: "Invalid Content-Type" }), {
        status: 400,
      });
    }

    // Parse the JSON body
    const body = await request.json();
    const { userEmail, subject, message } = body;
    // Validate required fields
    if (!userEmail || !subject || !message) {
      console.error("Missing fields in request body");
      return new Response(
        JSON.stringify({ success: false, error: "All fields are required" }),
        { status: 400 }
      );
    }

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, 
      port: parseInt(process.env.EMAIL_PORT || "2525"),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      debug: true
    });

    // Define email options
    const mailOptions = {
      from: `"Elegant Software!" <${process.env.EMAIL_USER}>`, // Match EMAIL_USER
      to: `${process.env.EMAIL_DEFAULT}`, // Receiver's email
      subject: `Contact Form: ${subject}`, // Subject
      text: `From: ${userEmail}\n\n${message}`, // Email content
    };

    // Send the email
    const emailResponse = await transporter.sendMail(mailOptions);

    console.log("Email successfully sent:", emailResponse.messageId);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error handling POST request:", error);

    // Provide a generic error message to the client
    return new Response(JSON.stringify({ success: false, error: "Failed to send email" }), {
      status: 500,
    });
  }
};
