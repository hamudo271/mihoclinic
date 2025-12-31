export default function MihoReservationSection() {
  const schedule = [
    { day: '월요일·수요일', time: '09:30 ~ 19:30' },
    { day: '화요일·금요일', time: '09:30 ~ 18:30' },
    { day: '목요일', time: '09:30 ~ 14:00', note: '필수 예약제' },
    { day: '토요일', time: '09:30 ~ 14:00', note: '매달 첫째 주 토요일 휴진' },
    { day: '일요일·공휴일', time: '휴진' },
    { day: '휴게시간', time: '12:30 ~ 14:00' },
  ];

  return (
    <section className="py-24 bg-white" id="consultation">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-20">
          <p className="text-gray-500 text-sm font-medium tracking-[5px] mb-6 uppercase" style={{ fontFamily: "'Cormorant Garamond', 'Garamond', serif" }}>
            RESERVATION & HOURS
          </p>
          <h2 className="text-5xl lg:text-6xl font-normal text-gray-900 mb-8" style={{ letterSpacing: '-1px' }}>
            예약 및 운영 안내
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            하루 상담 건수 제한으로,<br />
            희망 날짜가 있다면 여유 있게 예약해 주세요.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Schedule */}
          <div>
            <h3 className="text-3xl font-normal text-gray-900 mb-10 flex items-center gap-3">
              <i className="ri-calendar-line text-primary"></i>
              진료시간
            </h3>

            <div className="bg-white rounded-none border border-gray-200 overflow-hidden shadow-sm">
              {schedule.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-6 ${
                    index !== schedule.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div>
                    <span className="text-lg font-semibold text-gray-900">{item.day}</span>
                    {item.note && (
                      <span className="ml-3 text-sm text-primary font-medium">
                        ({item.note})
                      </span>
                    )}
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{item.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
              <div className="flex items-start gap-3">
                <i className="ri-information-line text-yellow-600 text-xl mt-1"></i>
                <div>
                  <p className="text-sm text-yellow-900 font-semibold mb-1">
                    예약 안내
                  </p>
                  <p className="text-sm text-yellow-800 leading-relaxed">
                    목요일은 필수 예약제로 운영됩니다. 기껏 오셨다가 돌아가는 일이 없도록 예약을 권장합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div>
            <h3 className="text-3xl font-normal text-gray-900 mb-10 flex items-center gap-3">
              <i className="ri-customer-service-line text-primary"></i>
              예약 방법
            </h3>

            <div className="space-y-4">
              {/* Phone */}
                <a
                href="tel:055-363-2575"
                className="flex items-center gap-6 p-6 bg-white border border-gray-200 rounded-none hover:border-gray-400 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-none flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                  <i className="ri-phone-line text-3xl text-gray-700 group-hover:text-white transition-colors"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">전화 예약</p>
                  <p className="text-2xl font-bold text-gray-900">055-363-2575</p>
                </div>
              </a>

              {/* Naver Booking */}
              <a
                href="https://booking.naver.com/booking/13/bizes/1093628"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 bg-white border border-gray-200 rounded-none hover:border-gray-400 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-none flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                  <i className="ri-calendar-check-line text-3xl text-gray-700 group-hover:text-white transition-colors"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">네이버 예약</p>
                  <p className="text-xl font-bold text-gray-900">온라인 예약하기</p>
                </div>
              </a>

              {/* Kakao */}
              <a
                href="http://pf.kakao.com/_Jxdixoxj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 bg-white border border-gray-200 rounded-none hover:border-gray-400 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-none flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                  <i className="ri-chat-3-line text-3xl text-gray-700 group-hover:text-white transition-colors"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">카카오톡 상담</p>
                  <p className="text-xl font-bold text-gray-900">1:1 채팅 상담</p>
                </div>
              </a>

              {/* Naver Map */}
              <a
                href="https://naver.me/FOk2dKnO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 bg-white border border-gray-200 rounded-none hover:border-gray-400 hover:shadow-md transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-none flex items-center justify-center group-hover:bg-gray-900 transition-colors">
                  <i className="ri-map-pin-line text-3xl text-gray-700 group-hover:text-white transition-colors"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">네이버 지도</p>
                  <p className="text-xl font-bold text-gray-900">오시는 길 확인</p>
                </div>
              </a>
            </div>

            {/* Email */}
            <div className="mt-6 p-6 bg-gray-50 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <i className="ri-mail-line text-gray-600"></i>
                <p className="text-sm text-gray-600">이메일 문의</p>
              </div>
              <a
                href="mailto:mihoclinic@naver.com"
                className="text-lg font-semibold text-gray-900 hover:text-primary transition-colors"
              >
                mihoclinic@naver.com
              </a>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="mt-16 p-10 bg-gray-900 rounded-none text-white">
          <div className="flex items-start gap-6">
            <i className="ri-alert-line text-4xl text-gray-400 flex-shrink-0"></i>
            <div>
              <h4 className="text-2xl font-normal mb-4">중요 안내</h4>
              <ul className="space-y-3 text-gray-300 font-light">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line mt-1"></i>
                  <span>상담 시간이 길고 질문·설명이 많은 구조이므로, 충분한 시간을 확보해 주세요.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line mt-1"></i>
                  <span>동일 시술 복붙이 아닌 개인별 플랜 설계를 우선하므로 초진 시간이 소요됩니다.</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line mt-1"></i>
                  <span>실제 방문 전에는 블로그·인스타그램 또는 전화로 최신 시간을 확인해 주세요.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
