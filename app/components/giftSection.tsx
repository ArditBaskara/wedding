'use client';

import { motion } from 'framer-motion';
import { Copy, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import Image from 'next/image';
import toast from 'react-hot-toast';

// Copy function aman + fallback
const copyToClipboard = (text: string) => {
  if (typeof navigator !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(text).then(
      () => toast.success('Teks berhasil disalin!'),
      (err) => {
        console.error('Clipboard gagal:', err);
        fallbackCopyTextToClipboard(text);
      }
    );
  } else {
    fallbackCopyTextToClipboard(text);
  }
};

// Fallback untuk browser lama
const fallbackCopyTextToClipboard = (text: string) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    const success = document.execCommand('copy');
    if (success) {
      toast.success('Teks berhasil disalin!');
    } else {
      toast.error('Gagal menyalin teks.');
    }
  } catch (err) {
    console.error('Fallback copy gagal:', err);
    toast.error('Clipboard tidak didukung.');
  }
  document.body.removeChild(textArea);
};

export default function GiftSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/assets/children.png')" }}
      />
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-16 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold font-great text-yellow-900 mb-4">
            Kirim Hadiah
          </h1>
          <p className="text-gray-700 text-sm md:text-base">
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.
            Namun jika memberi adalah ungkapan tanda kasih Anda, Anda dapat
            memberi kado secara cashless.
          </p>
        </motion.div>

        {/* BCA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <div className="flex justify-center">
            <Image
              src="/assets/bca.png"
              alt="BCA Logo"
              width={120}
              height={40}
            />
          </div>
          <p className="text-sm text-gray-800 font-serif">
            Silahkan transfer ke rekening a.n Anisa Larasati Supriyati
          </p>
          <p className="font-semibold text-lg tracking-wide font-serif">
            8320596352
          </p>
          <div className="flex gap-2 justify-center">
            <Button
              variant="secondary"
              onClick={() => copyToClipboard('8320596352')}
              icon={<Copy size={16} />}
            >
              Salin No. Rek
            </Button>
            <Button
              variant="secondary"
              className=""
              onClick={() =>
                window.open('https://wa.me/6283821172388', '_blank')
              }
              icon={<Send size={16} />}
            >
              Konfirmasi via WA
            </Button>
          </div>
        </motion.div>

        {/* Mandiri */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-2 pt-6"
        >
          <div className="flex justify-center">
            <Image
              src="/assets/madniri.png"
              alt="Mandiri Logo"
              width={140}
              height={40}
            />
          </div>
          <p className="text-sm text-gray-800 pt-4 font-serif">
            Silahkan transfer ke rekening a.n Indra Kurniawan
          </p>
          <p className="font-semibold text-lg tracking-wide font-serif">
            1320029683118
          </p>
          <div className="flex gap-2 justify-center">
            <Button
              variant="secondary"
              className=""
              onClick={() => copyToClipboard('1320029683118')}
              icon={<Copy size={16} />}
            >
              Salin No. Rek
            </Button>
            <Button
              variant="secondary"
              className=""
              onClick={() =>
                window.open('https://wa.me/6283821172388', '_blank')
              }
              icon={<Send size={16} />}
            >
              Konfirmasi via WA
            </Button>
          </div>
        </motion.div>

        {/* Alamat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 text-center space-y-2"
        >
          <p className="text-sm text-gray-700">
            Anda Juga Bisa Mengirim Kado Fisik Ke Alamat Berikut:
          </p>
          <p className="font-medium text-gray-800 text-sm leading-relaxed">
            Jalan Sarikaso VI No.12, RT 02 RW 01,
            <br />
            Kelurahan Sarijadi, Kecamatan Sukasari,
            <br />
            Jawa Barat 40151
          </p>
          <p className="text-sm text-gray-700">Penerima: Indra Kurniawan</p>
          <div className="flex justify-center">
            <Button
              variant="primary"
              className="items-center justify-center"
              onClick={() =>
                copyToClipboard(
                  'Jalan Sarikaso VI No.12, RT 02 RW 01, Kelurahan Sarijadi, Kecamatan Sukasari, Jawa Barat 40151'
                )
              }
              icon={<Copy size={16} />}
            >
              Salin Alamat
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
