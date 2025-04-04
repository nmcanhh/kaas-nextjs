import React, { useEffect } from 'react';
import Navbar from './Header/Navbar';
import HeroSection from './Header/HeroSection';
import MarqueeText from './Header/MarqueeText';
import KaasKeyFeatures from './KaasKeyFeatures';
import WhyChooseKaas from './WhyChooseKaas';
import HowIstWorks from './HowIstWorks/HowItWorks';
import MakeMoneyMove from './MakeMoneyMove';
import StrategicPartners from './StrategicPartners/StrategicPartners';
import Partner from './Partner';
import KaasStableCoin from './KaasStableCoin';
import KaasServes from './KaasServer/KaasServes';
import CompanyShowcase from './TechBuilder/CompanyShowcase';
import FeaturesHero from './Features/HeroSection';
import Footer from './Footer/Footer';
import { useSection } from '@/contexts/SectionContext';

const LandingPage: React.FC = () => {
  const { setActiveSection } = useSection();

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveSection]);

  return (
    <div className="w-full overflow-hidden font-poppins">
      <Navbar />
      <main className='pt-[6rem] bg-[#D6D7E0]'>
        {/* Main Hero Section */}
        <HeroSection />

        {/* Features and Benefits */}
        <KaasKeyFeatures />
        <WhyChooseKaas />
        <HowIstWorks />
        <MakeMoneyMove />

        {/* Partners and Integration */}
        <StrategicPartners />
        <Partner />
        <KaasStableCoin />
        <KaasServes />
        <CompanyShowcase />

        {/* Call to Action */}
        <FeaturesHero />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage; 