import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubVisual from '../../components/common/SubVisual';

const Come = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <SubVisual title="포르테" backgroundImage="/images/sub/visual_1.jpg" />
      
      <main className="main" id="contents">
        {/* S : 진료안내*/}
        <section className="section section-come">	
          <div className="container">
            {/* S : 섹션 타이틀*/}
            <div className="sec-tit">
              <h2 className="tit" data-aos="fade-up">
                진료안내
              </h2>
            </div>
            {/* E : 섹션 타이틀*/}
            <div className="logo-bx text-center" data-aos="fade-up" data-aos-delay="100">
              <img src="/images/sub/come_txt.svg" alt="FORTE CLINIC" />
            </div>
            {/* S : 영업시간 정보*/}
            <ul className="info-list mt-10 mt-md-20">
              <li data-aos="fade-up" data-aos-delay="100">
                <div className="list-tit">
                  <strong>평일 진료시간</strong>
                </div>
                <div className="info-bx">
                  <div className="txt-bx">
                    <p className="txt">월요일 ~ 금요일</p>
                    <p className="tit">AM 10:00 ~ PM 7:00</p>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <div className="list-tit">
                  <strong>주말 진료시간</strong>
                </div>
                <div className="info-bx">
                  <div className="txt-bx">
                    <p className="txt">토&middot;일요일 ~ 공휴일</p>
                    <p className="tit">AM 10:00 ~ PM 7:00</p>
                  </div>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <div className="list-tit">
                  <strong>진료안내</strong>
                </div>
                <div className="info-bx">
                  <div className="txt-bx">
                    <p className="tit">휴진 없음 <span>(연중무휴)</span></p>
                  </div>
                </div>
              </li>
            </ul>
            {/* E : 영업시간 정보*/}
          </div>
        </section>
        {/* E : 진료안내*/}
        {/* S : 오시는 길*/}
        <section className="section section-come mt-15 mt-md-35" id="come">
          <div className="location">
            <div className="sec-tit">
              <h3 className="tit" data-aos="fade-up">
                오시는 길
              </h3>
            </div>
            <div className="flex-bx">
              <div className="map-bx" data-aos="fade-left">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.575156237901!2d127.02864418072613!3d37.49932906948843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1f88379ff91%3A0xefa02b990ef24395!2z7Y-s66W07YWM7J2Y7JsQKOODleOCqeODq-ODhuOCr-ODquODi-ODg-OCryk!5e0!3m2!1sko!2skr!4v1730102314464!5m2!1sko!2skr" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <ul className="addr-list">
                <li data-aos="fade-right" data-aos-delay="100">
                  <p className="tit">Address</p>
                  <strong className="des">서울특별시 강남구 테헤란로 121 6층, 601호</strong>
                </li>
                <li data-aos="fade-right" data-aos-delay="200">
                  <p className="tit">Directions</p>
                  <strong className="des">강남역 12번 출구 하차 {'>'} 도보 이동</strong>
                  <div className="btn-bx">
                    <a href="https://url.kr/tsqj5x" target="_blank" rel="noopener noreferrer" className="btn kakao">카카오 길찾기</a>
                    <a href="https://naver.me/xnhM9sPj" target="_blank" rel="noopener noreferrer" className="btn naver">네이버 길찾기</a>
                  </div>
                </li>
                <li data-aos="fade-right" data-aos-delay="300">
                  <p className="tit">TEL</p>
                  <strong className="des">02-6958-8525</strong>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* E : 오시는 길*/}
      </main>
    </>
  );
};

export default Come;
