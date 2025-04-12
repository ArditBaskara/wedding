'use client';

import { useEffect, useState } from 'react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/Button';
import { CardStack } from './ui/card-stack';
import { toast } from 'react-hot-toast';

type Message = {
  id: string;
  name: string;
  message: string;
};

export default function DoaPage() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchMessages = async () => {
    try {
      const res = await fetch('/api/messages');
      if (!res.ok) throw new Error('Gagal fetch');
      const data = await res.json();
      setMessages(data);
    } catch (err) {
      toast.error('Gagal memuat pesan.');
    }
  };

  const handleSubmit = async () => {
    if (!name.trim() || !message.trim()) {
      toast.error('Nama dan pesan wajib diisi.');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message }),
      });

      if (res.ok) {
        toast.success('Pesan terkirim!');
        setName('');
        setMessage('');
        fetchMessages();
      } else {
        toast.error('Gagal mengirim pesan.');
      }
    } catch (err) {
      toast.error('Terjadi kesalahan saat mengirim.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <section
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat flex justify-center items-center px-24"
      style={{ backgroundImage: "url('/assets/children.png')" }}
    >
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl font-great text-yellow-900 text-center mb-6">
          Ucapan & Doa
        </h1>

        <div className="space-y-2">
          <Textarea
            placeholder="Nama"
            value={name}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-base"
            onChange={(e) => setName(e.target.value)}
          />
          <Textarea
            placeholder="Tulis ucapan dan doa..."
            value={message}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-base min-h-[120px]"
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full mt-2"
          >
            {loading ? 'Mengirim...' : 'Kirim Ucapan'}
          </Button>
        </div>

        <div className="pt-8">
          {messages.length > 0 ? (
            <CardStack
              items={messages.map((msg, index) => ({
                id: index,
                name: msg.name || 'Anonim',
                designation: '',
                content: msg.message || '',
              }))}
            />
          ) : (
            <p className="text-sm text-muted-foreground text-center">
              Belum ada ucapan atau doa.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
