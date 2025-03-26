import React from 'react';
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

const LandingPage: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <main>
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