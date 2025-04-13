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

const AccountSection = ({
  bankLogo,
  bankName,
  accountNumber,
  phoneNumber,
}: {
  bankLogo: string;
  bankName: string;
  accountNumber: string;
  phoneNumber: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="space-y-2"
  >
    <div className="flex justify-center">
      <Image src={bankLogo} alt={`${bankName} Logo`} width={120} height={40} />
    </div>
    <p className="text-sm text-gray-800 font-serif">
      Silahkan transfer ke rekening <br /> a.n {bankName}
    </p>
    <p className="font-semibold text-lg tracking-wide font-serif">
      {accountNumber}
    </p>
    <div className="flex gap-2 justify-center">
      <Button
        variant="secondary"
        onClick={() => copyToClipboard(accountNumber)}
        icon={<Copy size={16} />}
      >
        Salin No. Rek
      </Button>
      <Button
        variant="secondary"
        onClick={() => window.open(`https://wa.me/${phoneNumber}`, '_blank')}
        icon={<Send size={16} />}
      >
        Konfirmasi via WA
      </Button>
    </div>
  </motion.div>
);

export default function GiftSection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/children.png')" }}
    >
      {/* Menghapus background gelap yang mengganggu */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-24 text-center space-y-8">
        {' '}
        {/* Penambahan py-24 untuk jarak lebih lebar di atas */}
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
        {/* BCA Section */}
        <AccountSection
          bankLogo="/assets/bca.png"
          bankName="Anisa Larasati Supriyati"
          accountNumber="8320596352"
          phoneNumber="6283821172388"
        />
        {/* Mandiri Section */}
        <AccountSection
          bankLogo="/assets/madniri.png"
          bankName="Indra Kurniawan"
          accountNumber="1320029683118"
          phoneNumber="6283821172388"
        />
        {/* Address Section */}
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
