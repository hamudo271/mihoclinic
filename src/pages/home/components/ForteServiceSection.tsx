export default function ForteServiceSection() {
  return (
    <section className="miho-service-section" id="philosophy">
      <div className="miho-container">
        <div className="miho-service-text">
          <p className="miho-service-label">MIHO CLINIC PHILOSOPHY</p>
          <h3 className="miho-service-title">미호의원 진료 철학</h3>
          <p className="miho-service-desc">
            불필요한 시술이나 치료를 권하지 않으며<br />
            개인 맞춤형 진단으로 최적의 결과를 제공합니다.
          </p>
          <p className="miho-service-subdesc">
            나의 가족에게 권하지 않는 시술이나 치료는 누구에게도<br />
            적용하지 않겠다는 초심으로 바르게 진료하겠습니다.
          </p>
        </div>
      </div>

      <div className="miho-service-grid">
        <div className="miho-service-item">
          <figure>
            {/* TODO: 나노바나나로 생성한 이미지 생성 필요 */}
            <img
              src="/images/banner_slide_1.png"
              alt="진단 중심 시술"
              loading="lazy"
            />
          </figure>
          <div className="miho-service-item-overlay">
            <h4>진단 중심 시술</h4>
            <p>겉모습이 아닌 속 구조를 먼저 봅니다</p>
          </div>
        </div>
        <div className="miho-service-item">
          <figure>
            {/* TODO: 나노바나나로 생성한 이미지 생성 필요 */}
            <img
              src="/images/banner_slide_2.png"
              alt="주치의 책임 진료"
              loading="lazy"
            />
          </figure>
          <div className="miho-service-item-overlay">
            <h4>주치의 책임 진료</h4>
            <p>한 명의 주치의가 처음부터 끝까지</p>
          </div>
        </div>
        <div className="miho-service-item">
          <figure>
            {/* TODO: 나노바나나로 생성한 이미지 생성 필요 */}
            <img
              src="/images/banner_slide_3.png"
              alt="자연스러운 안티에이징"
              loading="lazy"
            />
          </figure>
          <div className="miho-service-item-overlay">
            <h4>자연스러운 안티에이징</h4>
            <p>나답게 나이 들고 싶은 분들을 위한</p>
          </div>
        </div>
        <div className="miho-service-item">
          <figure>
            {/* TODO: 나노바나나로 생성한 이미지 생성 필요 */}
            <img
              src="/images/banner_slide_4.png"
              alt="개인별 맞춤 설계"
              loading="lazy"
            />
          </figure>
          <div className="miho-service-item-overlay">
            <h4>개인별 맞춤 설계</h4>
            <p>동일 시술 복붙이 아닌 개인별 플랜</p>
          </div>
        </div>
      </div>
    </section>
  );
}
