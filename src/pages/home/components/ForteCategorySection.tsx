export default function ForteCategorySection() {
  const categories = [
    {
      num: '01',
      title: 'Diagnosis',
      subtitle: '진단 중심 시술',
      description: '왜 그렇게 변했는지 원인부터 파악합니다',
      image: '/images/banner_slide_1.png'
    },
    {
      num: '02',
      title: 'Primary Doctor',
      subtitle: '주치의 시스템',
      description: '한 명의 주치의가 모든 과정을 책임집니다',
      image: '/images/banner_slide_2.png'
    },
    {
      num: '03',
      title: 'Natural Beauty',
      subtitle: '자연스러운 아름다움',
      description: '예쁜 결과보다 예쁜 과정이 중요합니다',
      image: '/images/banner_slide_3.png'
    },
    {
      num: '04',
      title: 'Personalized',
      subtitle: '개인별 맞춤 설계',
      description: '각자의 얼굴 구조에 맞는 리프팅 플랜',
      image: '/images/banner_slide_4.png'
    },
    {
      num: '05',
      title: 'Long-term Care',
      subtitle: '장기 플랜 관리',
      description: '한 번의 시술이 아닌 지속적인 관리',
      image: '/images/banner_slide_5.png'
    },
    {
      num: '06',
      title: 'Premium Service',
      subtitle: '프리미엄 케어',
      description: '충분한 상담 시간과 세심한 사후관리',
      image: '/images/banner_slide_1.png'
    },
  ];

  return (
    <section className="miho-category-section">
      <div className="miho-container">
        <div className="miho-category-banner">
          {/* TODO: 나노바나나로 생성한 이미지 생성 필요 */}
          <img
            src="/images/banner_slide_5.png"
            alt="미호의원 카테고리"
            className="miho-category-banner-img"
            loading="lazy"
          />
        </div>

        <div className="miho-category-content">
          <div className="miho-category-logo">
            <h3>MIHO CLINIC</h3>
            <p>양산 미호의원</p>
          </div>

          <div className="miho-category-grid">
            {categories.map((item, index) => (
              <div
                key={index}
                className="miho-category-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="miho-category-inner">
                  <div className="miho-category-text">
                    <span className="miho-category-num">{item.num}</span>
                    <strong className="miho-category-title">{item.title}</strong>
                    <p className="miho-category-subtitle">{item.subtitle}</p>
                    <p className="miho-category-desc">{item.description}</p>
                  </div>
                  <div
                    className="miho-category-img"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
