import { db } from '@/app/lib/firebase';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { NextResponse } from 'next/server';

export async function GET() {
  const snapshot = await getDocs(collection(db, 'guest'));
  const messages = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return NextResponse.json(messages);
}

export async function POST(req: Request) {
  const { name, message } = await req.json();

  if (!name || !message) {
    return new NextResponse('Nama dan pesan wajib diisi.', { status: 400 });
  }

  const docRef = await addDoc(collection(db, 'guest'), {
    name,
    message,
    createdAt: serverTimestamp(),
  });

  return NextResponse.json({ id: docRef.id, name, message });
}
