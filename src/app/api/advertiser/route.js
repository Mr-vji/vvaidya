import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const formData = await req.formData();

    const companyLegalName = formData.get("companyLegalName");
    const brandName = formData.get("brandName");
    const industry = formData.get("industry");
    const website = formData.get("website");
    const officialEmail = formData.get("officialEmail");
    const mobile = formData.get("mobile");

    const targetAudience = JSON.parse(formData.get("targetAudience") || "[]");
    const geography = formData.get("geography");
    const startDate = formData.get("startDate");
    const endDate = formData.get("endDate");

    const headline = formData.get("headline");
    const description = formData.get("description");

    const squareImage = formData.get("squareImage");
    const landscapeImage = formData.get("landscapeImage");

    // 📎 Attachments
    const attachments = [];

    if (squareImage && squareImage.size > 0) {
      attachments.push({
        filename: squareImage.name,
        content: Buffer.from(await squareImage.arrayBuffer()),
      });
    }

    if (landscapeImage && landscapeImage.size > 0) {
      attachments.push({
        filename: landscapeImage.name,
        content: Buffer.from(await landscapeImage.arrayBuffer()),
      });
    }

    await resend.emails.send({
      from: "Advertiser Form <onboarding@resend.dev>",
      to: ["djohnjonathanmoses1@gmail.com"],
      replyTo: officialEmail,
      subject: "New Advertiser Campaign Submission",
      text: `
COMPANY DETAILS
---------------
Company: ${companyLegalName}
Brand: ${brandName}
Industry: ${industry}
Website: ${website}
Email: ${officialEmail}
Mobile: ${mobile}

CAMPAIGN
--------
Audience: ${targetAudience.join(", ")}
Geography: ${geography}
Start Date: ${startDate}
End Date: ${endDate}

AD CONTENT
----------
Headline: ${headline}
Description: ${description}
      `,
      attachments, // ✅ images attached
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("ADVERTISER ERROR:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
