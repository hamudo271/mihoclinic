export default function MihoHeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-[url('/miho/images/hero-pattern.svg')] opacity-5"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary text-lg font-light tracking-wide">
                Miho Clinic - Your Beauty Partner
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                예쁘게 오래 가려면,<br />
                <span className="text-primary">진단이 먼저입니다.</span>
              </h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              단순 시술이 아니라,<br />
              나를 이해하고 리프팅 흐름을 설계하는 클리닉.
            </p>

            <div className="pt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <i className="ri-user-heart-line text-primary text-xl"></i>
                </div>
                <p className="text-gray-700">
                  <strong className="text-gray-900">박신혜 원장</strong> - 미용의학 전문
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <i className="ri-time-line text-primary text-xl"></i>
                </div>
                <p className="text-gray-700">
                  <strong className="text-gray-900">2017년 개원</strong> - 8년차 신뢰
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="#consultation"
                className="px-8 py-4 bg-primary text-white rounded-full hover:bg-[#3A0060] transition-all shadow-lg hover:shadow-xl cursor-pointer whitespace-nowrap"
              >
                상담 예약하기
              </a>
              <a
                href="#philosophy"
                className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-full hover:bg-purple-50 transition-all cursor-pointer whitespace-nowrap"
              >
                리프팅 설계 알아보기
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&h=1000&fit=crop"
                alt="미호의원"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="ri-award-line text-primary text-3xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-600">평점</p>
                  <p className="text-2xl font-bold text-gray-900">4.6+</p>
                  <p className="text-xs text-gray-500">모두닥·캐시닥 기준</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm text-gray-500">Scroll Down</span>
        <i className="ri-arrow-down-line text-primary text-2xl"></i>
      </div>
    </section>
  );
}
