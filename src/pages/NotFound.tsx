import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ForteHeader from "./home/components/ForteHeader";
import Footer from "./home/components/Footer";
import '../styles/miho-header.css';

export default function NotFound() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ForteHeader isScrolled={isScrolled} />
      <div className="relative flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="absolute bottom-0 text-9xl md:text-[12rem] font-black text-gray-50 select-none pointer-events-none z-0">
          404
        </h1>
        <div className="relative z-10">
          <h1 className="text-xl md:text-2xl font-semibold mt-6">페이지를 찾을 수 없습니다</h1>
          <p className="mt-2 text-base text-gray-400 font-mono">{location.pathname}</p>
          <p className="mt-4 text-lg md:text-xl text-gray-500">요청하신 페이지를 찾을 수 없습니다</p>
          <a
            href="/"
            className="inline-block mt-8 px-8 py-3 bg-[#4E0080] text-white rounded-full hover:bg-[#3a0060] transition-colors"
          >
            홈으로 돌아가기
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}