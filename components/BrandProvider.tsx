'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { usePathname, useRouter } from 'next/navigation';

export type Brand = 'dok' | 'zusje';

interface BrandContextValue {
  brand: Brand;
  setBrand: (brand: Brand) => void;
}

const BrandContext = createContext<BrandContextValue | null>(null);

export function useBrand() {
  const ctx = useContext(BrandContext);
  if (!ctx) throw new Error('useBrand must be used within BrandProvider');
  return ctx;
}

function brandFromPath(pathname: string | null): Brand | null {
  if (pathname?.startsWith('/zusje')) return 'zusje';
  if (pathname === '/') return 'dok';
  return null;
}

export default function BrandProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [brand, setBrandState] = useState<Brand>(
    () => brandFromPath(pathname) ?? 'dok'
  );

  // The route is the source of truth on brand-specific pages (/, /zusje).
  // On neutral pages (e.g. /contact) fall back to the last saved preference.
  useEffect(() => {
    const fromPath = brandFromPath(pathname);
    if (fromPath) {
      setBrandState(fromPath);
      return;
    }
    const stored = window.localStorage.getItem('dok-brand');
    if (stored === 'dok' || stored === 'zusje') {
      setBrandState(stored);
    }
  }, [pathname]);

  useEffect(() => {
    window.localStorage.setItem('dok-brand', brand);
  }, [brand]);

  function setBrand(next: Brand) {
    setBrandState(next);
    router.push(next === 'zusje' ? '/zusje' : '/');
  }

  return (
    <BrandContext.Provider value={{ brand, setBrand }}>
      <div data-brand={brand} className="contents">
        {children}
      </div>
    </BrandContext.Provider>
  );
}
