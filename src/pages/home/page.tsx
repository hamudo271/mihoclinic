import { useEffect, useState } from 'react';
import ForteHeader from './components/ForteHeader';
import ForteMainVisual from './components/ForteMainVisual';
import ForteServiceSection from './components/ForteServiceSection';
import ForteCategorySection from './components/ForteCategorySection';
import ForteTreatmentSection from './components/ForteTreatmentSection';
import MihoReservationSection from './components/MihoReservationSection';
import MihoLocationSection from './components/MihoLocationSection';
import Footer from './components/Footer';
import QuickCounsel from './components/QuickCounsel';
import '../../styles/miho-header.css';
import '../../styles/miho-main.css';


export default function HomePage() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <ForteHeader isScrolled={isScrolled} />
      <ForteMainVisual />
      <ForteServiceSection />
      <ForteCategorySection />
      <ForteTreatmentSection />
      <MihoReservationSection />
      <MihoLocationSection />
      <Footer />
      <QuickCounsel />

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all z-40 cursor-pointer"
        aria-label="맨 위로"
      >
        <i className="ri-arrow-up-line text-2xl text-gray-700"></i>
      </button>


    </div>
  );
}
