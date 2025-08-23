import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    // Extract fields
    const firstName = String(form.get("firstName") || "");
    const lastName = String(form.get("lastName") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const emergencyContact = String(form.get("emergencyContact") || "");
    const availability = String(form.get("availability") || "");
    const commitment = String(form.get("commitment") || "");
    const priorExperience = String(form.get("priorExperience") || "");
    const about = String(form.get("about") || "");
    const resume = form.get("resume");

    const interests: string[] = [];
    // FormData.getAll works in edge/runtime
    for (const v of form.getAll("interests")) {
      interests.push(String(v));
    }

    // TODO: Persist to a database or send an email/notification
    console.log("Volunteer submission", {
      firstName,
      lastName,
      email,
      phone,
      emergencyContact,
      availability,
      commitment,
      priorExperience,
      interests,
      about: about.slice(0, 500),
      hasResume: !!resume,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { ok: false, error: "Bad Request" },
      { status: 400 }
    );
  }
}
