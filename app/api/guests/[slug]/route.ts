import { db } from "@/app/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function GET(
  request: Request,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;

  const docRef = doc(db, "guests", slug);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return new Response(JSON.stringify({ error: "Not found" }), { status: 404 });
  }

  return new Response(JSON.stringify(docSnap.data()), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
