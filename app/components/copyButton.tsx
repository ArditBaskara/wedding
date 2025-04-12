'use client';

import { useEffect, useState } from 'react';
import { Copy } from 'lucide-react';

interface CopyButtonProps {
  textToCopy: string;
  label?: string;
}

export default function CopyButton({
  textToCopy,
  label = 'Salin',
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [canCopy, setCanCopy] = useState(false);

  useEffect(() => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      setCanCopy(true);
    }
  }, []);

  const handleCopy = async () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) {
      alert('Fitur salin tidak tersedia di browser ini');
      return;
    }

    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Gagal menyalin teks', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`mt-2 px-3 py-1.5 flex items-center justify-center gap-1
    bg-pink-500 hover:bg-pink-600 text-white rounded transition`}
    >
      <Copy size={16} />
      {copied ? 'Tersalin!' : label}
    </button>
  );
}
