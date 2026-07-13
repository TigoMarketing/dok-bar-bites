import Hero from '@/components/Hero';
import TasteOfDOK from '@/components/TasteOfDOK';
import FeelTheVibe from '@/components/FeelTheVibe';
import VibeGallery from '@/components/VibeGallery';
import SiteFooter from '@/components/SiteFooter';
import FloatingReserve from '@/components/FloatingReserve';

export default function Home() {
  return (
    <main>
      <Hero />
      <TasteOfDOK />
      <FeelTheVibe />
      <VibeGallery />
      <SiteFooter />
      <FloatingReserve />
    </main>
  );
}
