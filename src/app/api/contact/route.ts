import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Insert the data into the database
    const newContact = await prisma.contactForm.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        message,
      },
    });

    // Send email notification
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS, // Supports both variations
        },
      });

      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.RECEIVER_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        text: `You have received a new message from your website contact form.

Details:
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Company: ${company || 'N/A'}

Message:
${message}
`,
        html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      background-color: #f5f5f4;
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
      border: 1px solid #e7e5e4;
    }
    .header {
      background-color: #1c1917;
      padding: 32px 40px;
      text-align: center;
      border-bottom: 4px solid #d65438;
    }
    .header h1 {
      margin: 0;
      color: #ffffff;
      font-family: 'Georgia', serif;
      font-size: 24px;
      letter-spacing: 2px;
      font-weight: normal;
    }
    .header h1 span {
      color: #d65438;
    }
    .content {
      padding: 40px;
      color: #44403c;
    }
    .greeting {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 24px;
      color: #1c1917;
    }
    .details-card {
      background-color: #fafaf9;
      border: 1px solid #e7e5e4;
      border-radius: 6px;
      padding: 24px;
      margin-bottom: 32px;
    }
    .detail-row {
      margin-bottom: 12px;
      font-size: 15px;
    }
    .detail-row:last-child {
      margin-bottom: 0;
    }
    .detail-label {
      font-weight: 600;
      color: #78716c;
      width: 100px;
      display: inline-block;
      text-transform: uppercase;
      font-size: 12px;
      letter-spacing: 1px;
    }
    .detail-value {
      color: #1c1917;
      font-weight: 500;
    }
    .message-section h3 {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #78716c;
      margin-bottom: 16px;
      border-bottom: 1px solid #e7e5e4;
      padding-bottom: 8px;
    }
    .message-content {
      font-size: 15px;
      line-height: 1.6;
      color: #1c1917;
      background-color: #f5f5f4;
      padding: 24px;
      border-radius: 6px;
      border-left: 4px solid #d65438;
      white-space: pre-wrap;
    }
    .footer {
      background-color: #fafaf9;
      padding: 24px 40px;
      text-align: center;
      color: #a8a29e;
      font-size: 13px;
      border-top: 1px solid #e7e5e4;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>PENEDÈS <span>WINE TOURS</span></h1>
    </div>
    <div class="content">
      <div class="greeting">New Booking Inquiry Received</div>
      
      <div class="details-card">
        <div class="detail-row">
          <span class="detail-label">Name</span>
          <span class="detail-value">${name}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Email</span>
          <span class="detail-value"><a href="mailto:${email}" style="color: #d65438; text-decoration: none;">${email}</a></span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Phone</span>
          <span class="detail-value">${phone || 'Not provided'}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Company</span>
          <span class="detail-value">${company || 'Not provided'}</span>
        </div>
      </div>

      <div class="message-section">
        <h3>Guest Message</h3>
        <div class="message-content">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
      </div>
    </div>
    <div class="footer">
      This is an automated notification from your Penedès Wine Tours website.
    </div>
  </div>
</body>
</html>
        `,
      };

      // Send email in the background without awaiting it so the user gets an instant response
      transporter.sendMail(mailOptions).catch((emailError) => {
        console.error('Failed to send email notification in background:', emailError);
      });

    } catch (setupError) {
      console.error('Failed to setup email transporter:', setupError);
    }

    // Return the response immediately after saving to the DB
    return NextResponse.json(
      { message: 'Form submitted successfully!', data: newContact },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { error: 'Something went wrong while submitting the form.' },
      { status: 500 }
    );
  }
}
