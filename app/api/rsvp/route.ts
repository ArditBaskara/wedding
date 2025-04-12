import { db } from "@/app/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nama, attending } = body;

    if (!nama || typeof attending !== "boolean") {
      return new Response(
        JSON.stringify({ success: false, message: "Data tidak lengkap atau salah" }),
        { status: 400 }
      );
    }

    await addDoc(collection(db, "rsvpStatus"), {
      nama: nama.trim(),
      rsvpStatus: attending ? "yes" : "no",
      timestamp: new Date(),
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error saving RSVP:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal server error" }),
      { status: 500 }
    );
  }
}
