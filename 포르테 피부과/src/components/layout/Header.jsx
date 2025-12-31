import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ isMain = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1초 후 로딩 숨김
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isSitemapOpen) {
        setIsSitemapOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isSitemapOpen]);

  useEffect(() => {
    if (isSitemapOpen || isMobileNavOpen) {
      document.body.classList.add("body-fixed");
    } else {
      document.body.classList.remove("body-fixed");
    }
  }, [isSitemapOpen, isMobileNavOpen]);

  const navItems = [
    {
      title: "포르테",
      link: "/about/doctor",
      children: [
        { title: "의료진 소개", link: "/about/doctor" },
        { title: "진료안내ㆍ병원위치", link: "/about/come" },
      ],
    },
    {
      title: "프로모션",
      link: "/promotion/event",
      children: [
        { title: "이벤트", link: "/promotion/event" },
        { title: "패키지", link: "/promotion/package" },
      ],
    },
    {
      title: "리프팅ㆍ탄력",
      link: "/lifting/thermage",
      children: [
        { title: "써마지", link: "/lifting/thermage" },
        { title: "올리지오", link: "/lifting/oligio" },
        { title: "인모드", link: "/lifting/inmode" },
        { title: "울쎄라", link: "/lifting/ulthera" },
        { title: "티타늄", link: "/lifting/titanium" },
        { title: "실펌", link: "/lifting/sylfirmx" },
        { title: "실리프팅", link: "/lifting/thread-lifting" },
      ],
    },
    {
      title: "스킨부스터",
      link: "/skinbooster",
      children: [{ title: "스킨부스터", link: "/skinbooster" }],
    },
    {
      title: "쁘띠",
      link: "/petit/botox",
      children: [
        { title: "보톡스", link: "/petit/botox" },
        { title: "필러", link: "/petit/filler" },
        { title: "윤곽주사", link: "/petit/rejection" },
      ],
    },
    {
      title: "바디",
      link: "/body/bodyinmode",
      children: [
        { title: "바디인모드", link: "/body/bodyinmode" },
        { title: "지방융해주사", link: "/body/dissolving" },
      ],
    },
    {
      title: "줄기세포",
      link: "/stemcell",
      children: [
        { title: "줄기세포", link: "/stemcell" },
        { title: "PRP", link: "/stemcell/prp" },
      ],
    },
    {
      title: "상담ㆍ예약",
      link: "/reservation/counsel",
      children: [
        { title: "온라인 상담", link: "/reservation/counsel" },
        { title: "온라인 예약", link: "/reservation/inquiry" },
        { title: "예약 조회", link: "/reservation/check" },
      ],
    },
    {
      title: "커뮤니티",
      link: "/community/notice",
      children: [
        { title: "공지사항", link: "/community/notice" },
        { title: "전후사진", link: "/community/photo" },
      ],
    },
  ];

  return (
    <>
      <ul className="skip">
        <li>
          <a className="link" href="#contents">
            본문내용 바로가기
          </a>
        </li>
        <li>
          <a className="link" href="#header">
            헤더 바로가기
          </a>
        </li>
        <li>
          <a className="link" href="#footer">
            푸터 바로가기
          </a>
        </li>
      </ul>

      <header id="header" className={`header ${isMain ? "type-main" : ""} ${isScrolled ? "scrolled" : ""}`}>
        <div className="container header-wrap">
          <Link to="/" className="logo" title="메인으로">
            <img
              className="white"
              src="/images/main/logo_kor_w.svg"
              alt="포르테클리닉"
            />
            <img
              className="color"
              src="/images/main/logo_kor.svg"
              alt="포르테클리닉"
            />
          </Link>
          <div className="header-right">
            <div className="inner">
              {/* Navigation */}
              <nav className="nav">
                <ul className="nav-list nav-list--depth1">
                  {navItems.map((item, idx) => (
                    <li key={idx} className="nav-list__item depth-1">
                      <Link to={item.link} className="link">
                        {item.title}
                      </Link>
                      <ul className="nav-list nav-list--depth2">
                        {item.children.map((child, childIdx) => (
                          <li key={childIdx} className="nav-list__item depth-2">
                            <Link to={child.link} className="link">
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </nav>
              {/* Util wrap */}
              <div className="util-wrap">
                {/* 언어선택 */}
                <div
                  className={`select-lang ${isLangOpen ? "active" : ""}`}
                  onClick={() => setIsLangOpen(!isLangOpen)}
                >
                  <button type="button" className="lang-btn">
                    <i className="lang-icon"></i>
                    <i className="xi-angle-down-min arrow"></i>
                  </button>
                  <ul>
                    <li>
                      <Link to="/" className="active">
                        KOR
                      </Link>
                    </li>
                    <li>
                      <a href="#">JP</a>
                    </li>
                  </ul>
                </div>
                <Link to="/member/login" className="login-btn">
                  Login
                </Link>
                {/* 사이트맵 버튼 */}
                <button
                  type="button"
                  className="sitemap-btn"
                  onClick={() => setIsSitemapOpen(true)}
                ></button>
              </div>
            </div>
            <div className="header-depth2"></div>
          </div>
          <button
            className="nav-mobile__btn ham-btn"
            type="button"
            onClick={() => setIsMobileNavOpen(true)}
          >
            <svg
              width="50"
              height="9"
              viewBox="0 0 50 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="0.5" x2="50" y2="0.5" />
              <line y1="8.5" x2="50" y2="8.5" />
            </svg>
          </button>
        </div>
      </header>
      <div className="dimmed"></div>

      {/* Mobile Navigation */}
      <div
        className={`nav-mobile__bg ${isMobileNavOpen ? "active" : ""}`}
      ></div>
      <aside className={`nav-mobile ${isMobileNavOpen ? "active" : ""}`}>
        <div className="nav-mobile__head">
          <div className="logo-bx">
            <Link to="/" className="logo" title="메인으로">
              <img src="/images/main/logo.png" alt="포르테클리닉" />
            </Link>
            <button
              className="nav-mobile__btn"
              type="button"
              onClick={() => setIsMobileNavOpen(false)}
            >
              <svg
                width="49"
                height="20"
                viewBox="0 0 49 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1.18664"
                  y1="1.53015"
                  x2="48.1713"
                  y2="18.6312"
                  stroke="white"
                />
                <line
                  x1="0.844615"
                  y1="18.5302"
                  x2="47.8292"
                  y2="1.42915"
                  stroke="white"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="nav-mobile__body">
          <ul className="nav-list nav-list--depth1">
            {navItems.map((item, idx) => (
              <li key={idx} className="nav-list__item depth-1">
                <Link to={item.link} className="link">
                  {item.title}
                </Link>
                <ul className="nav-list nav-list--depth2">
                  {item.children.map((child, childIdx) => (
                    <li key={childIdx} className="nav-list__item depth-2">
                      <Link to={child.link} className="link">
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="util-bx">
            <ul className="select-lang">
              <li>
                <Link to="/" className="active">
                  KOR
                </Link>
              </li>
              <li>
                <a href="#">JP</a>
              </li>
            </ul>
            <Link to="/member/login" className="login-btn">
              Login
            </Link>
          </div>
        </div>
      </aside>

      {/* Sitemap */}
      <div className={`sitemap ${isSitemapOpen ? "active" : ""}`}>
        <div className="container">
          <div className="inner">
            <div className="top">
              <button
                type="button"
                className="close-sitemap"
                onClick={() => setIsSitemapOpen(false)}
              >
                <i className="xi-close-thin"></i>
                Close
              </button>
              <Link to="/" className="logo">
                <img
                  className="color"
                  src="/images/main/sitemap_logo.svg"
                  alt="포르테클리닉"
                />
              </Link>
              <div className="util-wrap">
                <div
                  className={`select-lang ${isLangOpen ? "active" : ""}`}
                  onClick={() => setIsLangOpen(!isLangOpen)}
                >
                  <button type="button" className="lang-btn">
                    <i className="lang-icon"></i>
                    <i className="xi-angle-down-min arrow"></i>
                  </button>
                  <ul>
                    <li>
                      <Link to="/" className="active">
                        KOR
                      </Link>
                    </li>
                    <li>
                      <a href="#">JP</a>
                    </li>
                  </ul>
                </div>
                <Link to="/member/login" className="login-btn">
                  Login
                </Link>
              </div>
            </div>
            <div className="list-bx">
              <nav className="nav">
                <ul className="nav-list nav-list--depth1">
                  {navItems.map((item, idx) => (
                    <li key={idx} className="nav-list__item depth-1">
                      <Link to={item.link} className="link">
                        <span className="num">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        {item.title}
                      </Link>
                      <ul className="nav-list nav-list--depth2">
                        {item.children.map((child, childIdx) => (
                          <li key={childIdx} className="nav-list__item depth-2">
                            <Link to={child.link} className="link">
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Loading image */}
      {isLoading && (
        <div className="loading-image" style={{ transition: 'opacity 0.5s', opacity: 1 }}>
          <img src="/images/icon/loading.svg" alt="loading" />
        </div>
      )}
    </>
  );
};

export default Header;
