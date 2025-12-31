import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function ForteMainVisual() {
  const slides = [
    {
      id: 1,
      // 나노바나나로 생성한 이미지 (99% 싱크로율) - 미호 + 스노우 스타일
      // TODO: 나노바나나로 생성한 이미지로 교체 필요
      image: '/images/banner_slide_1.png',
      engText: 'DIFFERENT TREATMENTS, DIFFERENT EFFECTS',
      title: '예쁘게 오래 가려면',
      subtitle: '진단이 먼저입니다',
      description: '단순 시술이 아니라, 나를 이해하고 리프팅 흐름을 설계하는 클리닉',
    },
    {
      id: 2,
      // 나노바나나로 생성한 이미지 (99% 싱크로율) - 미호 + 스노우 스타일
      // TODO: 나노바나나로 생성한 이미지로 교체 필요
      image: '/images/banner_slide_2.png',
      engText: 'PRIMARY DOCTOR SYSTEM',
      title: '주치의 책임 진료',
      subtitle: '처음부터 끝까지',
      description: '상담·시술·사후관리를 한 명의 주치의가 책임지는 시스템',
    },
    {
      id: 3,
      // 나노바나나로 생성한 이미지 (99% 싱크로율) - 미호 + 스노우 스타일
      // TODO: 나노바나나로 생성한 이미지로 교체 필요
      image: '/images/banner_slide_3.png',
      engText: 'NATURAL BEAUTY',
      title: '자연스러운 아름다움',
      subtitle: '나답게 나이 들기',
      description: '과장된 변화가 아닌, 자연스럽고 건강한 안티에이징',
    },
  ];

  return (
    <section className="miho-main-visual">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        loop={true}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}">
              <svg class="miho-arc-loader" width="30" height="30" viewBox="0 0 30 30">
                <circle cx="15" cy="15" r="14" fill="none" stroke="#ffffff" stroke-opacity="0.3" stroke-width="2"></circle>
                <circle class="miho-arc-path" cx="15" cy="15" r="14" fill="none" stroke="#ffffff" stroke-width="2"></circle>
              </svg>
            </span>`;
          },
        }}
        className="miho-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="miho-slide-item">
              <div
                className="miho-slide-bg"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="miho-slide-overlay"></div>
              </div>
              <div className="miho-slide-content">
                <div className="miho-container">
                  {slide.engText && (
                    <p className="miho-slide-eng" data-swiper-parallax="-200">
                      {slide.engText}
                    </p>
                  )}
                  <p className="miho-slide-subtitle" data-swiper-parallax="-250">
                    {slide.subtitle}
                  </p>
                  <h2 className="miho-slide-title" data-swiper-parallax="-300">
                    {slide.title}
                  </h2>
                  <p className="miho-slide-desc" data-swiper-parallax="-100">
                    {slide.description}
                  </p>
                  <div className="miho-slide-buttons" data-swiper-parallax="-400">
                    <a href="#consultation" className="miho-btn miho-btn-primary">
                      상담 예약하기
                    </a>
                    <a href="#philosophy" className="miho-btn miho-btn-outline">
                      더 알아보기
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
