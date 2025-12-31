import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ForteHeaderProps {
  isScrolled: boolean;
}

export default function ForteHeader({ isScrolled }: ForteHeaderProps) {
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSitemapOpen) {
        setIsSitemapOpen(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isSitemapOpen]);

  useEffect(() => {
    if (isSitemapOpen || isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSitemapOpen, isMobileNavOpen]);

  const navItems = [
    {
      title: '미호의원',
      link: '#philosophy',
      children: [
        { title: '미호의원 소개', link: '#philosophy' },
        { title: '진료 철학', link: '#philosophy' },
        { title: '비급여 진료비 안내', link: '/non-benefit' },
      ],
    },
    {
      title: '진료 안내',
      link: '#treatments',
      children: [
        { title: '리프팅·수분·탄력', link: '#treatments' },
        { title: '필러·보톡스', link: '#treatments' },
        { title: '점·기미·주근깨', link: '#treatments' },
        { title: '여드름·홍조', link: '#treatments' },
        { title: '피부질환', link: '#treatments' },
        { title: '제모', link: '#treatments' },
        { title: '수액클리닉', link: '#treatments' },
        { title: '기능의학센터', link: '#treatments' },
      ],
    },
    {
      title: '예약·상담',
      link: '#consultation',
      children: [
        { title: '전화 예약', link: 'tel:055-363-2575' },
        { title: '온라인 예약', link: 'https://booking.naver.com/booking/13/bizes/1093628' },
        { title: '카카오톡 상담', link: 'http://pf.kakao.com/_Jxdixoxj' },
        { title: '진료시간 안내', link: '#consultation' },
      ],
    },
    {
      title: '오시는 길',
      link: '#location',
      children: [
        { title: '위치 안내', link: '#location' },
        { title: '네이버 지도', link: 'https://naver.me/FOk2dKnO' },
      ],
    },
  ];

  return (
    <>
      <header className={`miho-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="miho-header-container">
          <Link to="/" className="miho-logo" title="메인으로">
            <img
              className="logo-white"
              src="/miho/logo_w.svg"
              alt="미호의원"
            />
            <img
              className="logo-color"
              src="/miho/logo.svg"
              alt="미호의원"
            />
          </Link>

          <div className="miho-header-right">
            <div className="miho-header-inner">
              <nav className="miho-nav">
                <ul className="miho-nav-list">
                  {navItems.map((item, idx) => (
                    <li key={idx} className="miho-nav-item">
                      <a href={item.link} className="miho-nav-link">
                        {item.title}
                      </a>
                      <ul className="miho-nav-submenu">
                        {item.children.map((child, childIdx) => (
                          <li key={childIdx}>
                            {child.link.startsWith('/') ? (
                              <Link to={child.link} className="miho-nav-sublink">
                                {child.title}
                              </Link>
                            ) : (
                              <a
                                href={child.link}
                                className="miho-nav-sublink"
                                target={child.link.startsWith('http') ? '_blank' : undefined}
                                rel={child.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              >
                                {child.title}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="miho-util-wrap">
                <a href="tel:055-363-2575" className="miho-tel-btn">
                  <i className="ri-phone-line"></i>
                  <span className="miho-tel-text">055-363-2575</span>
                </a>
                <button
                  type="button"
                  className="miho-sitemap-btn"
                  onClick={() => setIsSitemapOpen(true)}
                  aria-label="전체메뉴"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
            <div className="miho-header-depth2"></div>
          </div>

          <button
            className="miho-mobile-btn"
            type="button"
            onClick={() => setIsMobileNavOpen(true)}
            aria-label="모바일 메뉴"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`miho-mobile-bg ${isMobileNavOpen ? 'active' : ''}`}
        onClick={() => setIsMobileNavOpen(false)}
      ></div>

      <aside className={`miho-mobile-nav ${isMobileNavOpen ? 'active' : ''}`}>
        <div className="miho-mobile-head">
          <Link to="/" className="miho-mobile-logo">
            <img src="/miho/logo.svg" alt="미호의원" />
          </Link>
          <button
            className="miho-mobile-close"
            onClick={() => setIsMobileNavOpen(false)}
            aria-label="닫기"
          >
            <i className="ri-close-line"></i>
          </button>
        </div>

        <div className="miho-mobile-body">
          <ul className="miho-mobile-list">
            {navItems.map((item, idx) => (
              <li key={idx} className="miho-mobile-item">
                <a href={item.link} className="miho-mobile-title">
                  {item.title}
                </a>
                <ul className="miho-mobile-sublist">
                  {item.children.map((child, childIdx) => (
                    <li key={childIdx}>
                      {child.link.startsWith('/') ? (
                        <Link to={child.link} className="miho-mobile-sublink">
                          {child.title}
                        </Link>
                      ) : (
                        <a
                          href={child.link}
                          className="miho-mobile-sublink"
                          target={child.link.startsWith('http') ? '_blank' : undefined}
                          rel={child.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {child.title}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          <div className="miho-mobile-footer">
            <a href="tel:055-363-2575" className="miho-mobile-tel">
              <i className="ri-phone-line"></i>
              055-363-2575
            </a>
            <div className="miho-mobile-sns">
              <a href="https://www.instagram.com/miho_clinic" target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-line"></i>
              </a>
              <a href="https://blog.naver.com/miho3632575" target="_blank" rel="noopener noreferrer">
                <i className="ri-blogger-line"></i>
              </a>
              <a href="http://pf.kakao.com/_Jxdixoxj" target="_blank" rel="noopener noreferrer">
                <i className="ri-chat-3-line"></i>
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Sitemap */}
      <div className={`miho-sitemap ${isSitemapOpen ? 'active' : ''}`}>
        <div className="miho-sitemap-container">
          <div className="miho-sitemap-header">
            <Link to="/" className="miho-sitemap-logo">
              <img src="/miho/logo.svg" alt="미호의원" />
            </Link>
            <button
              type="button"
              className="miho-sitemap-close"
              onClick={() => setIsSitemapOpen(false)}
            >
              <i className="ri-close-line"></i>
              <span>Close</span>
            </button>
          </div>

          <div className="miho-sitemap-body">
            <nav className="miho-sitemap-nav">
              <ul className="miho-sitemap-list">
                {navItems.map((item, idx) => (
                  <li key={idx} className="miho-sitemap-item">
                    <a href={item.link} className="miho-sitemap-title">
                      <span className="miho-sitemap-num">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      {item.title}
                    </a>
                    <ul className="miho-sitemap-sublist">
                      {item.children.map((child, childIdx) => (
                        <li key={childIdx}>
                          {child.link.startsWith('/') ? (
                            <Link to={child.link} className="miho-sitemap-sublink">
                              {child.title}
                            </Link>
                          ) : (
                            <a
                              href={child.link}
                              className="miho-sitemap-sublink"
                              target={child.link.startsWith('http') ? '_blank' : undefined}
                              rel={child.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {child.title}
                            </a>
                          )}
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
    </>
  );
}
