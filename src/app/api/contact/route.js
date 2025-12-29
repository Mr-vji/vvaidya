import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { fullName, email, company, budget, message } = await req.json();

    await resend.emails.send({
      from: "VAIDYA 247 <onboarding@resend.dev>", // ✅ must be verified
      to: ["djohnjonathanmoses1@gmail.com"], // your inbox
      replyTo: email, // ✅ USER EMAIL HERE
      subject: `New VAIDYA 247 Submission`,
      text: `
Name: ${fullName}
Email: ${email}
Company: ${company}
Budget: ${budget}

Message:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
