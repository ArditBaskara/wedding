'use client';

import { useState } from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function RSVPPage() {
  const [nama, setNama] = useState('');
  const [attending, setAttending] = useState<'' | 'yes' | 'no'>('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!nama.trim() || attending === '') {
      toast.error('Nama dan pilihan kehadiran wajib diisi.');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nama,
          attending: attending === 'yes',
        }),
      });

      if (res.ok) {
        toast.success('RSVP berhasil dikirim!');
        setNama('');
        setAttending('');
      } else {
        toast.error('Gagal mengirim RSVP.');
      }
    } catch (err) {
      toast.error('Terjadi kesalahan.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative  h-screen overflow-hidden">
      {/* Background image full screen */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-inherit -mx-20 bg-no-repeat"
        style={{ backgroundImage: "url('/assets/children.png')" }}
      />

      {/* RSVP form container */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-14 py-12">
        <motion.div
          className="bg-white bg-opacity-90 rounded-xl shadow-xl p-6 w-full max-w-md sm:max-w-lg lg:max-w-md xl:max-w-lg space-y-6 text-center backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-great text-yellow-800">RSVP</h1>
          <p className="text-sm text-gray-600">
            Mohon konfirmasi kehadiran Anda
          </p>

          <input
            type="text"
            placeholder="Nama lengkap"
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />

          <div className="flex flex-col sm:flex-row justify-center gap-4 text-left sm:text-center">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="radio"
                name="attending"
                value="yes"
                checked={attending === 'yes'}
                onChange={() => setAttending('yes')}
                className="accent-yellow-600"
              />
              Saya akan hadir
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="radio"
                name="attending"
                value="no"
                checked={attending === 'no'}
                onChange={() => setAttending('no')}
                className="accent-yellow-600"
              />
              Saya tidak bisa hadir
            </label>
          </div>

          <Button onClick={handleSubmit} disabled={loading} className="w-full">
            {loading ? 'Mengirim...' : 'Kirim RSVP'}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
