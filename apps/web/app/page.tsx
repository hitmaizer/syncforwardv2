import HeroSection from '@components/HeroSection';

export default async function HomePage() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <HeroSection />
    </div>
  );
}
