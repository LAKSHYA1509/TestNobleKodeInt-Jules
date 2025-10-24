import { NextResponse, NextRequest } from "next/server";
const resend = new Resend('re_bcrPdYbE_Mvh5q5G6FqsfRatnNLuRJXwA');
import { Resend } from 'resend';

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    // console.log("Received data:", data);
    const { fullName, email, project, phone } = data;
    // Create a proper HTML email template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Inquiry from ${fullName}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
            border-radius: 10px 10px 0 0;
          }
          .content {
            background: #f9f9f9;
            padding: 30px;
            border-radius: 0 0 10px 10px;
          }
          .field {
            margin-bottom: 20px;
          }
          .label {
            font-weight: bold;
            color: #555;
            display: block;
            margin-bottom: 5px;
          }
          .value {
            background: white;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #667eea;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            color: #666;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Project Inquiry</h1>
          <p>You have received a new inquiry from your website</p>
        </div>
        
        <div class="content">
          <div class="field">
            <span class="label">Full Name:</span>
            <div class="value">${fullName || 'Not provided'}</div>
          </div>
          
          <div class="field">
            <span class="label">Email Address:</span>
            <div class="value">${email || 'Not provided'}</div>
          </div>
          
          <div class="field">
            <span class="label">Phone Number:</span>
            <div class="value">${phone || 'Not provided'}</div>
          </div>
          
          <div class="field">
            <span class="label">Project Description:</span>
            <div class="value">${project || 'No description provided'}</div>
          </div>
        </div>
        
        <div class="footer">
          <p>This inquiry was submitted from your website contact form.</p>
          <p>Please respond to the customer at: <a href="mailto:${email}">${email}</a></p>
        </div>
      </body>
      </html>
    `;

    await resend.emails.send({
      from: "NobleKode <hello@noblekode.com>",
      to: 'contact@noblekode.com',
      subject: `New Inquiry from ${fullName}`,
      html: emailHtml
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in /api/sendmail:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
    
  }
};
