export default function MihoLocationSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="location">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-20">
          <p className="text-gray-500 text-sm font-medium tracking-[5px] mb-6 uppercase" style={{ fontFamily: "'Cormorant Garamond', 'Garamond', serif" }}>
            LOCATION & INFO
          </p>
          <h2 className="text-5xl lg:text-6xl font-normal text-gray-900 mb-8" style={{ letterSpacing: '-1px' }}>
            오시는 길
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            양산 미호의원으로 찾아오시는 길을 안내해 드립니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Map */}
          <div className="order-2 lg:order-1">
            <div className="bg-white rounded-none shadow-sm overflow-hidden border border-gray-200">
              <div className="aspect-[4/3] bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.123456789!2d129.123456!3d35.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDA3JzI0LjQiTiAxMjnCsDA3JzI0LjQiRQ!5e0!3m2!1sko!2skr!4v1234567890123!5m2!1sko!2skr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="미호의원 위치"
                ></iframe>
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-900 rounded-none flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">주소</p>
                    <p className="text-lg font-semibold text-gray-900 mb-2">
                      경상남도 양산시 동면 금오13길 20
                    </p>
                    <p className="text-gray-600">센텀빌딩 4층 402호</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-white rounded-none p-8 shadow-sm border border-gray-200">
              <h3 className="text-3xl font-normal text-gray-900 mb-8">연락처 정보</h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-none flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-gray-700 text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">대표전화</p>
                    <a
                      href="tel:055-363-2575"
                      className="text-xl font-bold text-gray-900 hover:text-primary transition-colors"
                    >
                      055-363-2575
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-primary text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">이메일</p>
                    <a
                      href="mailto:mihoclinic@naver.com"
                      className="text-xl font-bold text-gray-900 hover:text-primary transition-colors break-all"
                    >
                      mihoclinic@naver.com
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-global-line text-primary text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">홈페이지</p>
                    <a
                      href="https://mihoclinic.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-gray-900 hover:text-primary transition-colors"
                    >
                      mihoclinic.com
                    </a>
                  </div>
                </div>

                {/* Business Number */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-file-text-line text-primary text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">사업자번호</p>
                    <p className="text-xl font-bold text-gray-900">203-38-03837</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-none p-8 shadow-sm border border-gray-200">
              <h3 className="text-3xl font-normal text-gray-900 mb-8">소셜 미디어</h3>

              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://blog.naver.com/miho3632575"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-none hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <i className="ri-blogger-line text-white text-xl"></i>
                  </div>
                  <span className="font-semibold text-gray-900">네이버 블로그</span>
                </a>

                <a
                  href="https://www.instagram.com/miho_clinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-none hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <i className="ri-instagram-line text-white text-xl"></i>
                  </div>
                  <span className="font-semibold text-gray-900">인스타그램</span>
                </a>

                <a
                  href="http://pf.kakao.com/_Jxdixoxj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-none hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200"
                >
                  <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
                    <i className="ri-chat-3-line text-gray-900 text-xl"></i>
                  </div>
                  <span className="font-semibold text-gray-900">카카오톡</span>
                </a>

                <a
                  href="https://naver.me/FOk2dKnO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-none hover:bg-gray-100 transition-colors cursor-pointer border border-gray-200"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <i className="ri-map-pin-line text-white text-xl"></i>
                  </div>
                  <span className="font-semibold text-gray-900">네이버 지도</span>
                </a>
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-gray-50 rounded-none p-8 border border-gray-200">
              <h3 className="text-2xl font-normal text-gray-900 mb-4 flex items-center gap-3">
                <i className="ri-bus-line text-gray-700"></i>
                대중교통 이용 시
              </h3>
              <p className="text-gray-600 leading-relaxed">
                양산시 동면 금오리 센텀빌딩 4층에 위치해 있습니다.<br />
                주차 공간이 마련되어 있으니 편하게 방문해 주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
