import type { NextPage } from 'next';
import LandingPage from '../components/LandingPage';
import { SectionProvider } from '@/contexts/SectionContext';

const Home: NextPage = () => {
  return <SectionProvider><LandingPage /></SectionProvider>;
};

export default Home; 