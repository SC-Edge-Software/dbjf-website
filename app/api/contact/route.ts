import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, subject, msg } = await request.json();
        try {
            const { data, error } = await resend.emails.send({
                from: "info@dbjfimprovements.com",
                to: ["db.jf.improvements@gmail.com"],
                subject: `[CONTACT REQUEST] ${subject}`,
                text: `From: ${name} <${email}>\n\n${msg}` 
            });

            if (error) {
                return Response.json({ error }, { status: 500 });
            }

            return Response.json(data);
        } catch (error) {
            return Response.json(error, { status: 500 });
        }
    } catch (err) {
        return NextResponse.json({ "error": "Received invalid JSON" }, { status: 400 });
    }
}
