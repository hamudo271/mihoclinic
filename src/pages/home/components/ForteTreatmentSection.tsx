import { useState } from 'react';

export default function ForteTreatmentSection() {
  const [activeTab, setActiveTab] = useState(0);

  const treatments = [
    {
      id: 1,
      category: '리프팅·수분·탄력',
      icon: 'ri-arrow-up-circle-line',
      items: [
        { name: '울쎄라', desc: '고강도 집속 초음파', image: '/images/banner_slide_1.png' },
        { name: '써마지', desc: 'RF 리프팅', image: '/images/banner_slide_2.png' },
        { name: '인모드', desc: '프랙셔널 RF', image: '/images/banner_slide_3.png' },
      ]
    },
    {
      id: 2,
      category: '필러·보톡스',
      icon: 'ri-syringe-line',
      items: [
        { name: '보톡스', desc: '주름 개선', image: '/images/banner_slide_4.png' },
        { name: '필러', desc: '볼륨 개선', image: '/images/banner_slide_5.png' },
        { name: '윤곽주사', desc: '얼굴 라인 정리', image: '/images/banner_slide_1.png' },
      ]
    },
    {
      id: 3,
      category: '색소·여드름',
      icon: 'ri-contrast-drop-line',
      items: [
        { name: '레이저 토닝', desc: '색소 치료', image: '/images/banner_slide_2.png' },
        { name: '피코레이저', desc: '점·기미·주근깨', image: '/images/banner_slide_3.png' },
        { name: '여드름 치료', desc: '피부 진정', image: '/images/banner_slide_4.png' },
      ]
    },
    {
      id: 4,
      category: '특화 진료',
      icon: 'ri-star-line',
      items: [
        { name: '제모', desc: '레이저 제모', image: '/images/banner_slide_5.png' },
        { name: '수액클리닉', desc: '피로 회복', image: '/images/banner_slide_1.png' },
        { name: '기능의학', desc: '통합 건강관리', image: '/images/banner_slide_2.png' },
      ]
    },
  ];

  return (
    <section className="miho-treatment-section" id="treatments">
      <div className="miho-container">
        <div className="miho-treatment-header">
          <p className="miho-treatment-label">TREATMENT AREAS</p>
          <h3 className="miho-treatment-title">주요 진료분야</h3>
          <p className="miho-treatment-desc">
            피부 관리부터 쁘띠, 바디·다이어트까지 통합 미용 클리닉
          </p>
        </div>

        <div className="miho-treatment-tabs">
          {treatments.map((treatment, index) => (
            <button
              key={treatment.id}
              className={`miho-tab-btn ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <i className={treatment.icon}></i>
              <span>{treatment.category}</span>
            </button>
          ))}
        </div>

        <div className="miho-treatment-content">
          {treatments.map((treatment, index) => (
            <div
              key={treatment.id}
              className={`miho-treatment-panel ${activeTab === index ? 'active' : ''}`}
            >
              <div className="miho-treatment-grid">
                {treatment.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="miho-treatment-card"
                    style={{ animationDelay: `${itemIndex * 0.1}s` }}
                  >
                    <div
                      className="miho-treatment-card-img"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="miho-treatment-card-overlay"></div>
                    </div>
                    <div className="miho-treatment-card-content">
                      <h4>{item.name}</h4>
                      <p>{item.desc}</p>
                      <a href="#consultation" className="miho-treatment-card-link">
                        상담 예약 <i className="ri-arrow-right-line"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="miho-treatment-features">
          <div className="miho-feature-item">
            <div className="miho-feature-icon">
              <i className="ri-user-settings-line"></i>
            </div>
            <h4>1:1 맞춤 시술</h4>
            <p>개인 피부 타입에 따른 차별화된 시술</p>
          </div>
          <div className="miho-feature-item">
            <div className="miho-feature-icon">
              <i className="ri-shield-check-line"></i>
            </div>
            <h4>정품·정량 보증</h4>
            <p>FDA 승인 정품 장비 및 제품</p>
          </div>
          <div className="miho-feature-item">
            <div className="miho-feature-icon">
              <i className="ri-heart-add-line"></i>
            </div>
            <h4>사후관리 시스템</h4>
            <p>시술 후 지속적인 경과 관찰</p>
          </div>
        </div>
      </div>
    </section>
  );
}
