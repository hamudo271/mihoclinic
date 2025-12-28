import { useEffect, useState, useRef } from 'react';

export default function BrandValueSection() {
  const [counts, setCounts] = useState({
    years: 2007,
    branches: 0,
    visitors: 0,
    reservations: 0,
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounts();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounts = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        years: Math.floor(2007 + (2012 - 2007) * progress),
        branches: Math.floor(34 * progress),
        visitors: Math.floor(450 * progress),
        reservations: Math.floor(25125 * progress),
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts({
          years: 2012,
          branches: 34,
          visitors: 450,
          reservations: 25125,
        });
      }
    }, interval);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-[#F5F1E8]" id="value-section">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">BRAND VALUE</h3>
          <p className="text-lg text-gray-700">대한민국 대표 피부 클리닉, 미호</p>
        </div>

        <p className="text-center text-gray-700 mb-16 leading-relaxed">
          미호 피부 클리닉은 정형화된 외모보다는 자연스럽고 건강한 아름다움을 생각하며,
          <br />
          나에게 맞는 아름다움과 어려보이는 피부를 완성해 드립니다.
        </p>

        <div className="grid grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">미호 SINCE</p>
            <div className="text-5xl font-bold text-primary mb-2">{counts.years}</div>
            <span className="text-gray-600">years</span>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">전국 지점 수</p>
            <div className="text-5xl font-bold text-primary mb-2">{counts.branches}</div>
            <span className="text-gray-600">branches</span>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">전지점 홈페이지 방문자수</p>
            <div className="text-5xl font-bold text-primary mb-2">{counts.visitors}k+</div>
            <span className="text-gray-600">people</span>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">실시간 예약자 수</p>
            <div className="text-5xl font-bold text-primary mb-2">
              {counts.reservations.toLocaleString()}
            </div>
            <span className="text-gray-600">people</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 text-center mb-12">
          · 미호 홈페이지 최근 한 달 기준 데이터입니다.
        </p>

        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://placehold.co/800x600?text=Map"
              alt="전국 지점 지도"
              className="w-full"
            />
          </div>

          <div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-primary text-xl mt-1"></i>
                <span className="text-gray-700">국내 최초로 정품, 정량 보증제 도입</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-primary text-xl mt-1"></i>
                <span className="text-gray-700">
                  나의 얼굴을 분석하여 최적의 시술만을 제안하는 쁘띠 스타일리스트
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-primary text-xl mt-1"></i>
                <span className="text-gray-700">
                  정기적인 원장 세미나 및 전 직원 교육으로 시술 노하우를 공유
                </span>
              </li>
              <li className="flex items-start gap-3">
                <i className="ri-check-line text-primary text-xl mt-1"></i>
                <span className="text-gray-700">
                  풍부한 시술 경험을 바탕으로 부작용을 줄이고 시술 만족도를 높이는 숙련된 의료진
                </span>
              </li>
            </ul>

            <a
              href="/brandReservation.php"
              className="inline-block px-8 py-4 bg-primary text-white rounded-full hover:bg-[#3A0060] transition-all cursor-pointer whitespace-nowrap"
            >
              미호 전지점 <strong>바로가기</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
