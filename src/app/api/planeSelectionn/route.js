// pages/api/submit-announcement.js or app/api/submit-announcement/route.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const formData = await req.formData();

    // Extract company details
    const organizationName = formData.get("organizationName");
    const organizationType = formData.get("organizationType");
    const contactPerson = formData.get("contactPerson");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const website = formData.get("website");

    // Extract announcement details
    const announcementType = formData.get("announcementType");
    const urgencyLevel = formData.get("urgencyLevel");
    const visibility = formData.get("visibility");
    const targetAudience = formData.get("targetAudience");
    const briefDescription = formData.get("briefDescription");
    const additionalNotes = formData.get("additionalNotes");

    // Extract compliance data
    const complianceData = JSON.parse(formData.get("complianceData") || "{}");

    // 📎 Handle Attachments
    const attachments = [];
    const fileAttachment = formData.get("attachments");

    if (fileAttachment && fileAttachment.size > 0) {
      const arrayBuffer = await fileAttachment.arrayBuffer();
      attachments.push({
        filename: fileAttachment.name,
        content: Buffer.from(arrayBuffer),
      });
    }

    // Validate compliance before sending
    if (
      !complianceData.medicalClaims ||
      !complianceData.contentCompliance ||
      !complianceData.policyAgreement
    ) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "All compliance requirements must be accepted",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Send email with Resend
    const emailResponse = await resend.emails.send({
      from: "Vaidya247 Updates <notifications@updates.vaidya247.com>",
      to: ["djohnjonathanmoses1@gmail.com", "mrvijaykumar.in@gmail.com"],
      replyTo: email,
      subject: `🏥 New Healthcare Announcement - ${organizationName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            
            <h1 style="color: #ff8600; border-bottom: 3px solid #ff8600; padding-bottom: 15px; margin: 0 0 30px 0;">
              🏥 New Healthcare Announcement Request
            </h1>

            <!-- COMPANY DETAILS -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">📋 Company Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px; font-weight: 600; color: #666; width: 35%; background: #f9f9f9;">Organization:</td>
                  <td style="padding: 12px; color: #333;">${organizationName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px; font-weight: 600; color: #666; background: #f9f9f9;">Type:</td>
                  <td style="padding: 12px; color: #333;">${organizationType}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px; font-weight: 600; color: #666; background: #f9f9f9;">Contact Person:</td>
                  <td style="padding: 12px; color: #333;">${contactPerson}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px; font-weight: 600; color: #666; background: #f9f9f9;">Email:</td>
                  <td style="padding: 12px; color: #333;"><a href="mailto:${email}" style="color: #ff8600; text-decoration: none;">${email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px; font-weight: 600; color: #666; background: #f9f9f9;">Phone:</td>
                  <td style="padding: 12px; color: #333;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; font-weight: 600; color: #666; background: #f9f9f9;">Website:</td>
                  <td style="padding: 12px; color: #333;"><a href="${website}" style="color: #ff8600; text-decoration: none;">${website}</a></td>
                </tr>
              </table>
            </div>

            <!-- ANNOUNCEMENT DETAILS -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">📢 Announcement Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px; font-weight: 600; color: #666; width: 35%; background: #f9f9f9;">Type:</td>
                  <td style="padding: 12px; color: #333;">${announcementType}</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px; font-weight: 600; color: #666; background: #f9f9f9;">Urgency:</td>
                  <td style="padding: 12px; color: #333;">
                    <span style="background: ${
                      urgencyLevel === "immediate" ? "#ff8600" : "#ffd9b3"
                    }; color: white; padding: 6px 14px; border-radius: 20px; font-weight: 600; display: inline-block;">
                      ${urgencyLevel.toUpperCase()}
                    </span>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px; font-weight: 600; color: #666; background: #f9f9f9;">Duration:</td>
                  <td style="padding: 12px; color: #333;">${visibility} days</td>
                </tr>
                <tr style="border-bottom: 1px solid #eee;">
                  <td style="padding: 12px; font-weight: 600; color: #666; background: #f9f9f9;">Audience:</td>
                  <td style="padding: 12px; color: #333;">${targetAudience}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; font-weight: 600; color: #666; background: #f9f9f9; vertical-align: top;">Description:</td>
                  <td style="padding: 12px; color: #333; line-height: 1.6;">${briefDescription.replace(
                    /\n/g,
                    "<br />"
                  )}</td>
                </tr>
              </table>
            </div>

            <!-- ADDITIONAL NOTES -->
            ${
              additionalNotes
                ? `
              <div style="margin-bottom: 30px;">
                <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">📝 Additional Notes</h2>
                <div style="color: #666; background: #f9f9f9; padding: 15px; border-left: 4px solid #ff8600; border-radius: 4px; line-height: 1.6;">
                  ${additionalNotes.replace(/\n/g, "<br />")}
                </div>
              </div>
            `
                : ""
            }

            <!-- COMPLIANCE STATUS -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #333; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">✅ Compliance Status</h2>
              <div style="background: #fff5f0; padding: 20px; border-radius: 8px; border-left: 4px solid #ff8600;">
                <p style="margin: 10px 0; font-size: 14px;">
                  <strong style="color: #28a745; font-size: 16px;">✓</strong>
                  &nbsp; Medical Claims Compliant: <strong>YES</strong>
                </p>
                <p style="margin: 10px 0; font-size: 14px;">
                  <strong style="color: #28a745; font-size: 16px;">✓</strong>
                  &nbsp; Content Compliance: <strong>YES</strong>
                </p>
                <p style="margin: 10px 0; font-size: 14px;">
                  <strong style="color: #28a745; font-size: 16px;">✓</strong>
                  &nbsp; Policy Agreement: <strong>YES</strong>
                </p>
              </div>
            </div>

            <!-- FOOTER -->
            <div style="margin-top: 40px; padding-top: 20px; border-top: 2px solid #eee; text-align: center; color: #999; font-size: 12px;">
              <p style="margin: 5px 0;">This is an automated email from Vaidya247 Healthcare Announcement System</p>
              <p style="margin: 5px 0;">⏱️ Review Time: Within 1 business day</p>
              <p style="margin: 5px 0; font-size: 11px; color: #bbb;">© 2024 Vaidya247. All rights reserved.</p>
            </div>
          </div>
        </div>
      `,
      text: `
=====================================
HEALTHCARE ANNOUNCEMENT SUBMISSION
=====================================

COMPANY DETAILS
---------------
Organization Name: ${organizationName}
Organization Type: ${organizationType}
Contact Person: ${contactPerson}
Email: ${email}
Phone: ${phone}
Website: ${website}

ANNOUNCEMENT DETAILS
--------------------
Announcement Type: ${announcementType}
Urgency Level: ${urgencyLevel.toUpperCase()}
Visibility Duration: ${visibility} days
Target Audience: ${targetAudience}

Description:
${briefDescription}

${additionalNotes ? `\nAdditional Notes:\n${additionalNotes}` : ""}

COMPLIANCE STATUS
-----------------
All compliance requirements have been accepted by the submitter.

Review Time: Within 1 business day
=====================================
      `,
      attachments,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "✓ Announcement submitted successfully!",
        emailId: emailResponse.id,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("❌ HEALTHCARE ANNOUNCEMENT ERROR:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Failed to submit announcement",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
