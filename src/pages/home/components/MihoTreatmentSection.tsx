import { useState } from 'react';

interface Treatment {
  id: number;
  icon: string;
  title: string;
  description: string;
  link: string;
}

const treatments: Treatment[] = [
  {
    id: 1,
    icon: 'ri-arrow-up-line',
    title: '리프팅·수분·탄력',
    description: '피부 저항값에 따른 맞춤 리프팅 설계로 오래 가는 탄력 개선',
    link: '#treatments/lifting'
  },
  {
    id: 2,
    icon: 'ri-syringe-line',
    title: '필러·보톡스',
    description: '개인별 얼굴 구조 분석을 통한 자연스러운 볼륨 디자인',
    link: '#treatments/filler'
  },
  {
    id: 3,
    icon: 'ri-contrast-drop-line',
    title: '점·기미·주근깨',
    description: '색소 질환의 근본 원인 파악 후 맞춤 레이저 치료',
    link: '#treatments/pigmentation'
  },
  {
    id: 4,
    icon: 'ri-contrast-2-line',
    title: '여드름·홍조',
    description: '피부 타입별 원인 진단 후 체계적인 염증 관리',
    link: '#treatments/acne'
  },
  {
    id: 5,
    icon: 'ri-heart-pulse-line',
    title: '피부질환',
    description: '아토피, 건선 등 일반 피부질환의 전문적인 진료',
    link: '#treatments/skin-disease'
  },
  {
    id: 6,
    icon: 'ri-scissors-line',
    title: '제모',
    description: '안전하고 효과적인 레이저 제모 시술',
    link: '#treatments/hair-removal'
  },
  {
    id: 7,
    icon: 'ri-drop-line',
    title: '수액클리닉',
    description: '피로 회복, 면역력 강화를 위한 맞춤 수액 치료',
    link: '#treatments/iv-therapy'
  },
  {
    id: 8,
    icon: 'ri-dna-line',
    title: '기능의학센터',
    description: '근본적인 건강 개선을 위한 통합 기능의학 진료',
    link: '#treatments/functional-medicine'
  }
];

export default function MihoTreatmentSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="treatments">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wider mb-4">
            TREATMENT AREAS
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            주요 진료분야
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            피부 관리부터 쁘띠, 바디·다이어트까지<br />
            통합 미용 클리닉 지향
          </p>
        </div>

        {/* Treatment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment) => (
            <a
              key={treatment.id}
              href={treatment.link}
              className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-primary transition-all duration-300 cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredId(treatment.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  hoveredId === treatment.id
                    ? 'bg-primary scale-110'
                    : 'bg-purple-100'
                }`}>
                  <i className={`${treatment.icon} text-3xl transition-colors duration-300 ${
                    hoveredId === treatment.id ? 'text-white' : 'text-primary'
                  }`}></i>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {treatment.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {treatment.description}
                </p>

                {/* View More Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-primary transition-colors">
                  <span>상세보기</span>
                  <i className={`ri-arrow-right-line transition-transform duration-300 ${
                    hoveredId === treatment.id ? 'translate-x-1' : ''
                  }`}></i>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Special Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-user-settings-line text-primary text-4xl"></i>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">1:1 맞춤 시술</h4>
            <p className="text-gray-600 text-sm">
              개인 피부 타입에 따른 차별화된 시술 방법
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-shield-check-line text-primary text-4xl"></i>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">정품·정량 보증</h4>
            <p className="text-gray-600 text-sm">
              FDA 승인 정품 장비 및 제품만 사용
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-heart-add-line text-primary text-4xl"></i>
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">사후관리 시스템</h4>
            <p className="text-gray-600 text-sm">
              시술 후 지속적인 경과 관찰 및 케어
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
