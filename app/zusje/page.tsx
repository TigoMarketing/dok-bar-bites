import ZusjeHero from '@/components/ZusjeHero';
import ZusjeTrustStrip from '@/components/ZusjeTrustStrip';
import ZusjeAudience from '@/components/ZusjeAudience';
import ZusjeVenueOptions from '@/components/ZusjeVenueOptions';
import ZusjeTestimonial from '@/components/ZusjeTestimonial';
import ZusjeUSPs from '@/components/ZusjeUSPs';
import ZusjeHowItWorks from '@/components/ZusjeHowItWorks';
import ZusjeFAQ from '@/components/ZusjeFAQ';
import ZusjeCTA from '@/components/ZusjeCTA';

export default function ZusjePage() {
  return (
    <main>
      <ZusjeHero />
      <ZusjeTrustStrip />
      <ZusjeAudience />
      <ZusjeVenueOptions />
      <ZusjeTestimonial />
      <ZusjeUSPs />
      <ZusjeHowItWorks />
      <ZusjeFAQ />
      <ZusjeCTA />
    </main>
  );
}
