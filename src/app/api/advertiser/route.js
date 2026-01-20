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

    // 📧 HTML Email Template
    const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Request a Healthcare Announcement</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f5f5f5;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 32px; border-radius: 8px 8px 0 0; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">Request a Healthcare Announcement</h1>
              <p style="margin: 8px 0 0 0; color: #e0e7ff; font-size: 14px;">Advertiser Registration - Vaidya247</p>
            </td>
          </tr>

          <!-- Company Details Section -->
          <tr>
            <td style="padding: 32px;">
              <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 18px; font-weight: 600; border-bottom: 2px solid #667eea; padding-bottom: 8px;">
                🏢 Company Details
              </h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding: 8px 0;">
                    <span style="display: inline-block; width: 140px; color: #6b7280; font-size: 14px; font-weight: 500;">Company Name:</span>
                    <span style="color: #111827; font-size: 14px; font-weight: 600;">${companyLegalName}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <span style="display: inline-block; width: 140px; color: #6b7280; font-size: 14px; font-weight: 500;">Brand Name:</span>
                    <span style="color: #111827; font-size: 14px; font-weight: 600;">${brandName}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <span style="display: inline-block; width: 140px; color: #6b7280; font-size: 14px; font-weight: 500;">Industry:</span>
                    <span style="color: #111827; font-size: 14px;">${industry}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <span style="display: inline-block; width: 140px; color: #6b7280; font-size: 14px; font-weight: 500;">Website:</span>
                    <a href="${website}" style="color: #667eea; font-size: 14px; text-decoration: none;">${website}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <span style="display: inline-block; width: 140px; color: #6b7280; font-size: 14px; font-weight: 500;">Email:</span>
                    <a href="mailto:${officialEmail}" style="color: #667eea; font-size: 14px; text-decoration: none;">${officialEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <span style="display: inline-block; width: 140px; color: #6b7280; font-size: 14px; font-weight: 500;">Mobile:</span>
                    <span style="color: #111827; font-size: 14px;">${mobile}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Campaign Details Section -->
          <tr>
            <td style="padding: 0 32px 32px 32px;">
              <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 18px; font-weight: 600; border-bottom: 2px solid #667eea; padding-bottom: 8px;">
                🎯 Campaign Details
              </h2>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding: 8px 0;">
                    <span style="display: inline-block; width: 140px; color: #6b7280; font-size: 14px; font-weight: 500;">Target Audience:</span>
                    <span style="color: #111827; font-size: 14px;">${targetAudience.join(", ") || "Not specified"}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <span style="display: inline-block; width: 140px; color: #6b7280; font-size: 14px; font-weight: 500;">Geography:</span>
                    <span style="color: #111827; font-size: 14px;">${geography}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0;">
                    <span style="display: inline-block; width: 140px; color: #6b7280; font-size: 14px; font-weight: 500;">Campaign Period:</span>
                    <span style="color: #111827; font-size: 14px;">${startDate} → ${endDate}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Ad Content Section -->
          <tr>
            <td style="padding: 0 32px 32px 32px;">
              <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 18px; font-weight: 600; border-bottom: 2px solid #667eea; padding-bottom: 8px;">
                📝 Ad Content
              </h2>
              <div style="background-color: #f9fafb; border-left: 4px solid #667eea; padding: 16px; border-radius: 4px; margin-bottom: 16px;">
                <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Headline</p>
                <p style="margin: 0; color: #111827; font-size: 16px; font-weight: 600;">${headline}</p>
              </div>
              <div style="background-color: #f9fafb; border-left: 4px solid #667eea; padding: 16px; border-radius: 4px;">
                <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Description</p>
                <p style="margin: 0; color: #111827; font-size: 14px; line-height: 1.6;">${description}</p>
              </div>
            </td>
          </tr>

          <!-- Attachments Notice -->
          ${
            attachments.length > 0
              ? `
          <tr>
            <td style="padding: 0 32px 32px 32px;">
              <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; padding: 16px; border-radius: 4px;">
                <p style="margin: 0; color: #1e40af; font-size: 14px;">
                  📎 <strong>${attachments.length} image${attachments.length > 1 ? "s" : ""} attached:</strong> ${attachments.map((a) => a.filename).join(", ")}
                </p>
              </div>
            </td>
          </tr>
          `
              : ""
          }

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 24px 32px; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 12px; text-align: center;">
                This is an automated notification from Vaidya247 Advertising Platform
              </p>
              <p style="margin: 8px 0 0 0; color: #9ca3af; font-size: 11px; text-align: center;">
                Received on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    await resend.emails.send({
      from: "Vaidya247 Updates <notifications@updates.vaidya247.com>",
      to: [
        "djohnjonathanmoses1@gmail.com",
        "mrvijaykumar.in@gmail.com",
        "contact@yesca.in",
      ],
      subject: "New Advertiser Campaign Submission",
      html: htmlTemplate,
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
      attachments,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("ADVERTISER ERROR:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
