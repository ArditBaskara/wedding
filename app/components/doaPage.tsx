'use client';

import { useEffect, useState } from 'react';
import { Textarea } from './ui/textarea';
import { Button } from './ui/Button';
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
      className="relative w-full bg-cover bg-center bg-no-repeat flex justify-center"
      style={{
        backgroundImage: "url('/assets/children.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%', // Adjust height to not be too high
      }}
    >
      <div className="w-full max-w-sm flex flex-col">
        <div className="flex-1 px-8 py-20">
          {/* Page title */}
          <h1 className="text-3xl font-great text-brown-600 text-center mb-8">
            Ucapan &amp; Doa
          </h1>

          {/* Form section */}
          <div className="mb-10">
            <h2 className="text-xl font-medium text-brown-700 mb-4">
              Kirim Ucapan
            </h2>

            <div className="space-y-4">
              <Textarea
                placeholder="Nama"
                value={name}
                className="w-full bg-white border border-yellow-300 focus:border-yellow-500 focus:ring-0 rounded-md px-4 py-3 text-sm"
                onChange={(e) => setName(e.target.value)}
              />

              <Textarea
                placeholder="Tulis ucapan dan doa..."
                value={message}
                className="w-full bg-white border border-yellow-300 focus:border-yellow-500 focus:ring-0 rounded-md px-4 py-3 text-sm min-h-[100px]"
                onChange={(e) => setMessage(e.target.value)}
              />

              <Button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-md text-sm font-medium"
              >
                {loading ? 'Mengirim...' : 'Kirim Ucapan'}
              </Button>
            </div>
          </div>

          {/* Messages section */}
          <div>
            <h2 className="text-xl font-medium text-brown-700 mb-4">
              Ucapan Terbaru
            </h2>

            {messages.length > 0 ? (
              <div className="mb-8">
                <CustomMessageCard messages={messages} />
              </div>
            ) : (
              <p className="text-center text-sm text-gray-500 mt-4 mb-8">
                Belum ada ucapan atau doa.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function CustomMessageCard({ messages }: { messages: Message[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [messages.length]);

  const activeMessage = messages[activeIndex];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 min-h-[120px] flex flex-col justify-between">
      <div className="mb-4 text-sm text-gray-700 overflow-y-auto max-h-[150px] pr-2">
        {activeMessage.message}
      </div>
      <div className="text-right text-sm font-medium text-gray-600">
        {activeMessage.name}
      </div>
    </div>
  );
}
