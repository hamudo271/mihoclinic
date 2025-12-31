import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import AOS from 'aos';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'aos/dist/aos.css';

const Main = () => {
  const aboutSlideRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const mainSlides = [
    {
      pcImage: '/upload/banner/202411/1731988404_m0161592_20241119125324.jpg',
      mobileImage: '/upload/banner/202411/1732081279_m0254150_20241120144119.jpg',
    },
    {
      pcImage: '/upload/banner/202411/1731988383_m0110417_20241119125303.jpg',
      mobileImage: '/upload/banner/202411/1732081268_m0218600_20241120144108.jpg',
    },
  ];

  const categoryItems = [
    { num: '01', title: 'Beauty', pcImg: 'category_img_1.jpg', mImg: 'category_img_1_m.jpg' },
    { num: '02', title: 'SKIN BEAUTY', pcImg: 'category_img_2.jpg', mImg: 'category_img_2_m.jpg' },
    { num: '03', title: 'Clinic', pcImg: 'category_img_3.jpg', mImg: 'category_img_3_m.jpg' },
    { num: '04', title: 'Private room', pcImg: 'category_img_4.jpg', mImg: 'category_img_4_m.jpg' },
    { num: '05', title: 'High-end', pcImg: 'category_img_5.jpg', mImg: 'category_img_5_m.jpg' },
    { num: '06', title: 'Service', pcImg: 'category_img_6.jpg', mImg: 'category_img_6_m.jpg' },
  ];

  const aboutImages = Array.from({ length: 11 }, (_, i) => 
    `/images/main/240719_FRT_${String(i + 1).padStart(4, '0')}.jpg`
  );

  return (
    <main className="main" id="contents">
      {/* Main Visual */}
      <section className="main-visual">
        <h1 className="sr-only">메인비주얼 영역</h1>
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          loop={true}
          effect="fade"
          speed={1000}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}"><svg class="fp-arc-loader" width="30" height="30" viewBox="0 0 30 30"><circle cx="1" cy="15" r="14" fill="none" transform="rotate(-90 8 8)" stroke="#ffffff" stroke-opacity="0.5"></circle><circle class="path" cx="1" cy="15" r="14" fill="none" transform="rotate(-90 8 8)" stroke="#ffffff" stroke-opacity="1"></circle></svg></span>`;
            },
          }}
          className="swiper-container"
        >
          {mainSlides.map((slide, index) => (
            <SwiperSlide key={index} className="item">
              <a href="#" onClick={(e) => e.preventDefault()}>
                <picture className="img-bx">
                  <source media="(min-width: 768px)" srcSet={slide.pcImage} />
                  <source media="(min-width: 0px)" srcSet={slide.mobileImage} />
                  <img src={slide.mobileImage} alt="포르테의원" />
                </picture>
                <div className="txt-bx">
                  <div className="container">
                    <p className="eng-txt">DIFFERENT TREATMENTS, DIFFERENT EFFECTS.</p>
                    <h2 className="title">FORTE CLINIC</h2>
                    <p className="text">결이 다른 진료, 격이 다른 효과, 포르테 클리닉</p>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Forte Service */}
      <section className="section section-service" data-aos="fade-in">
        <div className="container">
          <div className="txt-bx">
            <h3 className="tit" data-aos="fade-left" data-aos-delay="400">
              Forte Service
            </h3>
            <p className="txt" data-aos="fade-left" data-aos-delay="500">
              불필요한 시술이나 치료를 권하지 않으며 <br />
              개인 프라이빗 룸에서 맞춤형 서비스를 진행합니다.
            </p>
            <p className="des" data-aos="fade-left" data-aos-delay="600">
              나의 가족에게 권하지 않는 시술이나 치료는 누구에게도 <br />
              적용하지 않겠다는 초심으로 바르게 진료하겠습니다.
            </p>
          </div>
        </div>
        <div className="img-wrap" data-aos="fade-in" data-aos-delay="400">
          <div className="img-item"><figure><img src="/images/main/section02-service-img01.jpg" alt="" /></figure></div>
          <div className="img-item"><figure><img src="/images/main/section02-service-img02.jpg" alt="" /></figure></div>
          <div className="img-item"><figure><img src="/images/main/section02-service-img03.jpg" alt="" /></figure></div>
          <div className="img-item"><figure><img src="/images/main/section02-service-img04.jpg" alt="" /></figure></div>
        </div>
      </section>

      {/* Category */}
      <section className="section section-category">
        <div className="container">
          <picture className="d-block banner-img" data-aos="fade-up">
            <source media="(min-width: 1200px)" srcSet="/images/main/category_banner_pc.jpg" />
            <source media="(min-width: 0px)" srcSet="/images/main/category_banner_m.jpg" />
            <img src="/images/main/category_banner_m.jpg" alt="카테고리 배너" />
          </picture>
          <div className="list-bx">
            <div className="category-logo" data-aos="fade-up">
              <img src="/images/main/category_logo.svg" alt="FORTE CLINIC" />
            </div>
            <ol className="list" data-aos="fade-up">
              {categoryItems.map((item, index) => (
                <li key={index} data-aos="fade-up" data-aos-delay={100 + index * 50}>
                  <div className="inner">
                    <div className="txt-bx">
                      <span className="num">{item.num}</span>
                      <strong className="tit">{item.title}</strong>
                    </div>
                    <picture className="img-bx">
                      <source media="(min-width: 1200px)" srcSet={`/images/main/${item.pcImg}`} />
                      <source media="(min-width: 0px)" srcSet={`/images/main/${item.mImg}`} />
                      <img src={`/images/main/${item.mImg}`} alt={item.title} />
                    </picture>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section section-about">
        {/* bx1 */}
        <div className="flex-bx bx-1">
          <div className="txt-bx">
            <p className="eng-txt" data-splitting>Delicate Hand Skills</p>
            <p className="des" data-aos="fade-left" data-aos-delay="100">전문가의 손끝에서 탄생한 작품</p>
            <h3 className="tit" data-aos="fade-left" data-aos-delay="200">
              <strong>섬세한 손 기술</strong>로 <br className="d-none d-lg-block" />
              자신 있는 결과로
            </h3>
          </div>
          <picture className="img-bx" data-aos="fade-left">
            <source media="(min-width: 1024px)" srcSet="/images/main/about_1_pc.jpg" />
            <source media="(min-width: 0px)" srcSet="/images/main/about_1_m.jpg" />
            <img src="/images/main/about_1_m.jpg" alt="Delicate Hand skills" />
          </picture>
        </div>
        {/* bx2 */}
        <div className="flex-bx bx-2">
          <div className="txt-bx">
            <p className="eng-txt" data-splitting data-aos="fade-left">Beauty Of The Skin</p>
            <p className="des" data-aos="fade-left" data-aos-delay="100">하이엔드 시술 장비</p>
            <h3 className="tit" data-aos="fade-left" data-aos-delay="200">
              <strong>피부의 아름다움</strong>이 <br className="d-none d-lg-block" />
              무한할 수 있도록
            </h3>
          </div>
          <picture className="img-bx" data-aos="fade-left">
            <source media="(min-width: 1024px)" srcSet="/images/main/about_2_pc.jpg" />
            <source media="(min-width: 0px)" srcSet="/images/main/about_2_m.jpg" />
            <img src="/images/main/about_2_m.jpg" alt="Beauty of the skin" />
          </picture>
        </div>
        {/* slide-bx */}
        <div className="slide-bx">
          <div className="txt-bx">
            <p className="des">휴식과 힐링이 되는 편안한 1인 관리실</p>
            <h4 className="tit">
              편안하게 머무를 수 있는 <br className="d-none d-md-block" />
              <strong>나만의 공간</strong>
            </h4>
          </div>
          <div className="slide-control">
            <button type="button" className="slide-prev" onClick={() => aboutSlideRef.current?.slidePrev()}>
              <i className="xi-angle-left-thin"></i>
            </button>
            <span className="hr"></span>
            <button type="button" className="slide-next" onClick={() => aboutSlideRef.current?.slideNext()}>
              <i className="xi-angle-right-thin"></i>
            </button>
          </div>
          <Swiper
            onSwiper={(swiper) => (aboutSlideRef.current = swiper)}
            modules={[Autoplay, Navigation]}
            slidesPerView={2.1}
            spaceBetween={10}
            speed={1000}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              576: { slidesPerView: 2.1, spaceBetween: 10 },
              950: { slidesPerView: 3, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1600: { slidesPerView: 4, spaceBetween: 27 },
            }}
            className="swiper-container"
          >
            {aboutImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="inner">
                  <div className="img-bx" style={{ backgroundImage: `url(${img})` }}>
                    <img src="/images/base_485x616.png" alt="클리닉 이미지" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <ul className="marquee">
            <li>Single-person treatment room</li>
            <li>Single-person treatment room</li>
          </ul>
        </div>
      </section>

      {/* Before & After */}
      <section className="section section-compare">
        <div className="txt-bx" data-aos="fade-up">
          <h3 className="tit">BEFORE & AFTER</h3>
        </div>
        <div className="slide-bx">
          <div className="shape-bx">
            <img src="/images/main/star.svg" alt="별모양" className="star star-1" data-aos="fade-in" data-aos-delay="100" />
            <img src="/images/main/star.svg" alt="별모양" className="star star-2" data-aos="fade-in" data-aos-delay="200" />
            <img src="/images/main/star.svg" alt="별모양" className="star star-3" />
            <img src="/images/main/star.svg" alt="별모양" className="star star-4" />
            <div className="rotate-txt">
              <img src="/images/main/compare_txt.svg" alt="" />
            </div>
          </div>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            slidesPerView={1.1}
            spaceBetween={10}
            centeredSlides={true}
            speed={1000}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 1.2, spaceBetween: 70 },
              1024: { slidesPerView: 1.6, spaceBetween: 100 },
              1600: { slidesPerView: 1.7, spaceBetween: 140 },
            }}
            navigation={{
              nextEl: '.section-compare .slide-next',
              prevEl: '.section-compare .slide-prev',
            }}
            pagination={{
              el: '.section-compare .swiper-pagination',
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className}"><svg class="fp-arc-loader" viewBox="0 0 30 30"><circle cx="1" cy="15" r="14" fill="none" transform="rotate(-90 8 8)" stroke="#ffffff" stroke-opacity="0.5"></circle><circle class="path" cx="1" cy="15" r="14" fill="none" transform="rotate(-90 8 8)" stroke="#ffffff" stroke-opacity="1"></circle></svg></span>`;
              },
            }}
            className="swiper-container"
            data-aos="fade-up"
          >
            {/* Slides would be dynamically loaded */}
          </Swiper>
          <div className="slide-control">
            <button type="button" className="slide-btn slide-prev"></button>
            <button type="button" className="slide-btn slide-next"></button>
          </div>
          <div className="swiper-pagination" data-aos="fade-up"></div>
        </div>
      </section>

      {/* Board Section */}
      <section className="section section-board">
        <div className="container">
          <h3 className="sec-tit" data-aos="fade-up">PACKAGE</h3>
          <div className="package-list">
            <div className="img-bx" data-aos="fade-left" style={{ backgroundImage: 'url()' }}>
              <img src="/images/base_625x713.png" alt="권장 이미지 사이즈 625x713" />
            </div>
            <div className="list-bx">
              <div className="btn-bx" data-aos="fade-right">
                <Link to="/promotion/package" className="more-btn">View More</Link>
              </div>
              <ul></ul>
            </div>
          </div>
          <div className="event-wrap">
            <h4 className="sec-tit" data-aos="fade-up">EVENT</h4>
            <div className="event-list">
              <div className="btn-bx" data-aos="fade-right">
                <Link to="/promotion/event" className="more-btn">View More</Link>
              </div>
              <ul></ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="section section-contact">
        <h3 className="sec-tit d-lg-none" data-aos="fade-up">CONTACT US</h3>
        <div className="flex-bx">
          <div className="map-bx" data-aos="fade-right">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.575156237901!2d127.02864418072613!3d37.49932906948843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1f88379ff91%3A0xefa02b990ef24395!2z7Y-s66W07YWM7J2Y7JsQKOODleOCqeODq-ODhuOCr-ODquODi-ODg-OCryk!5e0!3m2!1sko!2skr!4v1730102314464!5m2!1sko!2skr" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <address>
            <h3 className="sec-tit d-none d-lg-block" data-aos="fade-left">CONTACT US</h3>
            <div className="info-bx" data-aos="fade-left">
              <div className="bx-1">
                <p className="tit">ADDRESS</p>
                <p className="des">서울특별시 강남구 테헤란로 121 6층, 601호</p>
              </div>
              <div className="bx-2">
                <p className="tit">HOURS</p>
                <p className="des">월 ~ 금 AM 10:00 ~ PM 7:00</p>
                <p className="des">토, 일 AM 10:00 ~ PM 7:00 (휴진 없음)</p>
              </div>
            </div>
          </address>
        </div>
      </section>

      {/* Cursor */}
      <div className="cursor-bx"></div>
    </main>
  );
};

export default Main;
