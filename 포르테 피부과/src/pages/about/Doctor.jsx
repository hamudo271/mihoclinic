import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import AOS from 'aos';

import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';

import SubVisual from '../../components/common/SubVisual';

const Doctor = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const doctorImages = Array.from({ length: 11 }, (_, i) => 
    `/images/main/240719_FRT_${String(i + 1).padStart(4, '0')}.jpg`
  );

  return (
    <>
      <SubVisual title="포르테" backgroundImage="/images/sub/visual_1.jpg" />
      
      <main className="main pt-0" id="contents">
        {/* Section Doctor */}
        <section className="section section-doctor">	
          {/* Section Title */}
          <div className="sec-tit">
            <h2 className="tit" data-aos="fade-up">
              의료진 소개
            </h2>
          </div>

          {/* Slide Wrap */}
          <div className="slide-wrap">
            <div className="tit-bx">
              <p className="des" data-aos="fade-up" data-aos-delay="100">당신의 피부를 책임질 최고의 전문가들</p>
              <h3 className="tit" data-aos="fade-up" data-aos-delay="200">
                <strong>피부 고민,</strong> <br className="d-none d-xxl-block" />
                믿고 맡길 수 있는 <br className="d-none d-xxl-block" />
                전문팀
              </h3>
            </div>
            <div className="slide-bx" data-aos="fade-right">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1.3}
                spaceBetween={10}
                speed={1000}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                breakpoints={{
                    576: { slidesPerView: 2.2, spaceBetween: 10 },
                    1024: { slidesPerView: 3.3, spaceBetween: 20 },
                    1600: { slidesPerView: 3.3, spaceBetween: 30 },
                    2000: { slidesPerView: 5, spaceBetween: 30 },
                }}
                className="swiper-container"
              >
                {doctorImages.map((img, index) => (
                  <SwiperSlide key={index}>
                    <div className="inner">
                      <div className="img-bx" style={{ backgroundImage: `url(${img})` }}>
                        <img src="/assets/images/base_410x320.png" alt="권장 이미지 사이즈 410x320" style={{ display: 'none' }} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="container">
            <ul className="doctor-list">
              <li data-aos="fade-up">
                <div className="inner">
                  <div className="img-bx" style={{ backgroundImage: 'url(/upload/doctor/202501/1736751269_m0148232_20250113155429.png)' }}>
                    <img src="/assets/images/base_410x320.png" alt="권장 이미지 사이즈 410x320" style={{ opacity: 0 }} />
                  </div>
                  <div className="txt-bx">
                    <strong className="name">
                      김홍민 대표원장
                    </strong>
                    <div className="info">
                      <ul>
                        <li>대한비만미용체형학회 정회원<br />
                        대한미용외과학회 정회원<br />
                        대한의학레이저학회 정회원<br />
                        대한레이저피부모발학회 정회원</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up">
                <div className="inner">
                  <div className="img-bx" style={{ backgroundImage: 'url(/upload/doctor/202501/1736751291_m0178409_20250113155451.png)' }}>
                    <img src="/assets/images/base_410x320.png" alt="권장 이미지 사이즈 410x320" style={{ opacity: 0 }} />
                  </div>
                  <div className="txt-bx">
                    <strong className="name">
                      신세경 원장
                    </strong>
                    <div className="info">
                      <ul>
                        <li>대한리프팅연구회 정회원<br />
                        대한미용의학회 정회원<br />
                        대한레이저피부모발학회 정회원<br />
                        대한미용성형레이저의학회 회원<br />
                        한국피부비만성형학회 회원</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default Doctor;
