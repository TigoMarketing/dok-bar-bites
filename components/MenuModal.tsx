'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface MenuModalProps {
  menu: { src: string; alt: string } | null;
  onClose: () => void;
}

export default function MenuModal({ menu, onClose }: MenuModalProps) {
  useEffect(() => {
    if (!menu) return;

    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menu, onClose]);

  return (
    <AnimatePresence>
      {menu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 md:p-10"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="relative h-full max-h-[90vh] w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={menu.src}
              alt={menu.alt}
              fill
              sizes="(min-width: 768px) 640px, 100vw"
              className="object-contain"
            />
          </motion.div>

          <button
            type="button"
            aria-label="Sluiten"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={22} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
