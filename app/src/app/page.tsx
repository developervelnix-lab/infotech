import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Solutions from '@/components/sections/Solutions';
import WhyInfotech from '@/components/sections/WhyInfotech';
import CaseStudies from '@/components/sections/CaseStudies';
import InteractiveTools from '@/components/sections/InteractiveTools';
import Careers from '@/components/sections/Careers';
import Testimonials from '@/components/sections/Testimonials';
import BlogPreview from '@/components/sections/BlogPreview';

export const metadata: Metadata = {
  title: 'Infotech | Build Smarter. Scale Faster. Grow with Infotech.',
  description:
    'Infotech is your digital growth partner — AI-powered web development, automation, CRM, and growth marketing for modern businesses.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Solutions />
      <WhyInfotech />
      <CaseStudies />
      <InteractiveTools />
      <Careers />
      <Testimonials />
      <BlogPreview />
    </>
  );
}
