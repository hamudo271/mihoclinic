import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer__wrap">
          <div className="footer__logo">
            <img src="/images/main/footer_logo.svg" alt="포르테클리닉" />
          </div>
          <div className="footer__info">
            <ul className="policy-list">
              <li>
                <Link to="/policy/privacy" className="popup-link">개인정보처리방침</Link>
              </li>
              <li>
                <Link to="/policy/email" className="popup-link">이메일무단수집거부</Link>
              </li>
              <li>
                <Link to="/about/come#come">오시는 길</Link>
              </li>
            </ul>

            <div className="footer__addr">
              <div className="bx-wrap">
                <div className="bx">
                  <span className="tit">OWNER</span>
                  <span className="txt">김홍민</span>
                </div>
                <div className="bx">
                  <span className="tit">ADDRESS</span>
                  <span className="txt">서울특별시 강남구 테헤란로 121 6층, 601호</span>
                </div>
                <div className="bx">
                  <span className="tit">TEL</span>
                  <span className="txt">02-6958-8525</span>
                </div>
                <div className="bx">
                  <span className="tit">HOURS</span>
                  <span className="txt">
                    월~금 AM 10:00 ~ PM 07:00 <br />
                    토,일 AM 10:00 ~ PM 07:00 (휴진 : 없음)
                  </span>
                </div>
              </div>
              <p className="footer-copyright">
                © 2024. FORTE CLINIC. All Right Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
