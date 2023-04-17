import Hero from '@ui-components/Hero';
import { getHeroProps } from '@utils/getHeroProps';

async function getHeroData() {
  const res = await fetch('http://localhost:1337/api/hero-section?populate=*');
  const heroData = await res.json();
  return heroData?.data.attributes;
}

export default async function HeroSection() {
  const heroData = await getHeroData();

  const hero = getHeroProps(heroData);

  return <Hero {...hero} />;
}
