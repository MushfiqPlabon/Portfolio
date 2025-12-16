import { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// Define Zod schema for contact form validation
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name is too long'),
  email: z.string().email('Invalid email format'),
  subject: z.string().min(1, 'Subject is required').max(200, 'Subject is too long'),
  message: z.string().min(1, 'Message is required').max(2000, 'Message is too long'),
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate using Zod schema
    const result = contactSchema.safeParse({ name, email, subject, message });

    if (!result.success) {
      const errorMessage = result.error.issues[0].message;
      return Response.json({ message: errorMessage }, { status: 400 });
    }

    // Extract validated data
    const { name: validatedName, email: validatedEmail, subject: validatedSubject, message: validatedMessage } = result.data;

    // Update variables to use validated data
    // (keeping original variable names for compatibility with rest of the function)

    // Validate required environment variables
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_HOST_USER || !process.env.EMAIL_HOST_PASSWORD || !process.env.DEFAULT_FROM_EMAIL) {
      return Response.json({ message: 'Server configuration error. Please contact the site administrator.' }, { status: 500 });
    }

    // Create transporter using SMTP settings from environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST!,
      port: process.env.EMAIL_PORT ? parseInt(process.env.EMAIL_PORT, 10) : 587,
      secure: process.env.EMAIL_USE_TLS?.toLowerCase() === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_HOST_USER!,
        pass: process.env.EMAIL_HOST_PASSWORD!,
      },
    });

    // Verify SMTP connection
    await transporter.verify();

    // Basic sanitation to prevent injection attacks
    const sanitizedName = validatedName.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    const sanitizedEmail = validatedEmail.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    const sanitizedSubject = validatedSubject.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    const sanitizedMessage = validatedMessage.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

    // Send email
    await transporter.sendMail({
      from: process.env.DEFAULT_FROM_EMAIL!,
      to: process.env.EMAIL_HOST_USER!, // Send to the same address (your email)
      replyTo: sanitizedEmail, // So you can reply directly to the sender
      subject: `${sanitizedSubject} - Portfolio Contact from ${sanitizedName}`,
      text: `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}`,
      html: `
        <h2>New message from portfolio contact form</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Subject:</strong> ${sanitizedSubject}</p>
        <h3>Message:</h3>
        <p>${sanitizedMessage}</p>
      `,
    });

    return Response.json({ message: 'Message sent successfully! I\'ll get back to you soon.' });
  } catch (error) {
    console.error('Email sending error:', error);
    // Provide more specific error messages based on the type of error
    if (error instanceof Error) {
      if (error.message.includes('ENOTFOUND') || error.message.includes('ECONNREFUSED')) {
        return Response.json({ message: 'Email service is temporarily unavailable. Please try again later.' }, { status: 503 });
      }
      if (error.message.includes('EAUTH') || error.message.includes('Authentication')) {
        return Response.json({ message: 'Service configuration error. Please contact the site administrator.' }, { status: 500 });
      }
    }
    return Response.json({ message: 'There was an error sending your message. Please try again or contact me directly.' }, { status: 500 });
  }
}