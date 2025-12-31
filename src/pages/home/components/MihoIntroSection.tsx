export default function MihoIntroSection() {
  return (
    <section className="py-24 bg-white" id="philosophy">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Main Title */}
        <div className="text-center mb-20">
          <p className="text-primary text-sm font-medium tracking-wider mb-4">
            MIHO CLINIC PHILOSOPHY
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            미호의원의 진료 철학
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            왜 팔자주름이 깊어졌는지, 왜 리프팅이 금방 돌아오는지,<br />
            겉모습이 아닌 <span className="text-primary font-semibold">'속 구조'</span>를 먼저 봅니다.
          </p>
        </div>

        {/* Three Column Philosophy */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
              <i className="ri-microscope-line text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              진단 중심 시술
            </h3>
            <p className="text-gray-600 leading-relaxed">
              내 얼굴이 왜 이렇게 변했는지, 그 이유를 찾고 해결 경로를 함께 설계합니다. 단순 시술이 아닌, 원인부터 파악합니다.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
              <i className="ri-user-heart-line text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              주치의 책임 진료
            </h3>
            <p className="text-gray-600 leading-relaxed">
              처음 상담부터 시술, 사후관리까지 한 명의 주치의가 전담합니다. 누적 데이터를 바탕으로 지속적인 케어가 가능합니다.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
              <i className="ri-plant-line text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              자연스러운 안티에이징
            </h3>
            <p className="text-gray-600 leading-relaxed">
              예쁜 결과보다, 예쁜 과정이 중요합니다. 나답게 나이 들고 싶은 분들을 위한 안티에이징 파트너입니다.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-purple-900 to-purple-700 rounded-3xl p-12 text-white text-center">
          <i className="ri-double-quotes-l text-5xl text-purple-300 mb-6 block"></i>
          <p className="text-2xl lg:text-3xl font-light mb-6 leading-relaxed">
            단기 예뻐짐보다,<br />
            <strong className="font-bold">오래 가는 리프팅 흐름</strong>을 설계합니다.
          </p>
          <p className="text-lg text-purple-200">
            - 미호의원 박신혜 원장
          </p>
        </div>

        {/* Doctor System */}
        <div className="grid lg:grid-cols-2 gap-16 mt-20 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              1:1 주치의 시스템
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    통합 관리 시스템
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    처음 상담 → 시술 → 사후관리까지 한 명의 주치의가 전담. 진단·설계·경과까지 누적 데이터를 한 의사가 계속 관리합니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    개인별 맞춤 설계
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    동일한 시술이라도, 환자별로 방향·강도·주기를 다르게 설계. 각자의 얼굴 구조·노화 방향을 분석한 리프팅 플랜을 제안합니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    충분한 상담 시간
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    상담 시간이 길고, 질문·설명이 많은 구조입니다. 동일 시술 복붙이 아닌, 개인별 플랜 설계를 우선합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop"
              alt="주치의 상담"
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <p className="text-sm text-gray-600 mb-2">평균 상담 시간</p>
              <p className="text-4xl font-bold text-primary mb-1">30분+</p>
              <p className="text-sm text-gray-500">철저한 진단과 설계</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
