import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("Received request body:", body);

    const { notes } = body;
    if (!notes || typeof notes !== "string") {
      return NextResponse.json({ error: "Invalid or missing 'notes'" }, { status: 400 });
    }

    // Example dummy doctor suggestion logic
    const suggestedDoctor = {
      id: "doc123",
      name: "Dr. A.I. Healer",
      specialization: "General Physician",
    };

    return NextResponse.json(suggestedDoctor);
  } catch (error) {
    console.error("API error in /api/suggest-doctors:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
