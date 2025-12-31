import { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isScrolled: boolean;
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Combine scrolled state with menu open state for styling
  const isDarkInfo = isScrolled || isMenuOpen;

  const menuItems = [
    {
      title: '미호의원',
      submenu: [
        { name: '미호의원 소개', link: '#philosophy' },
        { name: '진료 철학', link: '#philosophy' },
        { name: '원장 소개', link: '#philosophy' },
        { name: '비급여 진료비 안내', link: '/non-benefit' },
      ],
    },
    {
      title: '진료 안내',
      submenu: [
        { name: '리프팅·수분·탄력', link: '#treatments' },
        { name: '필러·보톡스', link: '#treatments' },
        { name: '점·기미·주근깨', link: '#treatments' },
        { name: '여드름·홍조', link: '#treatments' },
        { name: '피부질환', link: '#treatments' },
        { name: '제모', link: '#treatments' },
        { name: '수액클리닉', link: '#treatments' },
        { name: '기능의학센터', link: '#treatments' },
      ],
    },
    {
      title: '예약·상담',
      submenu: [
        { name: '전화 예약', link: 'tel:055-363-2575' },
        { name: '온라인 예약', link: 'https://booking.naver.com/booking/13/bizes/1093628' },
        { name: '카카오톡 상담', link: 'http://pf.kakao.com/_Jxdixoxj' },
        { name: '진료시간 안내', link: '#consultation' },
      ],
    },
    {
      title: '오시는 길',
      submenu: [
        { name: '위치 안내', link: '#location' },
        { name: '네이버 지도', link: 'https://naver.me/FOk2dKnO' },
      ],
    },
  ];

  const quickLinks = [
    { name: '블로그', link: 'https://blog.naver.com/miho3632575', icon: 'ri-blogger-line' },
    { name: '인스타그램', link: 'https://www.instagram.com/miho_clinic', icon: 'ri-instagram-line' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isDarkInfo ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      onMouseLeave={() => setIsMenuOpen(false)}
    >
      <div className="w-full relative">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center cursor-pointer">
              <img
                src={
                  isDarkInfo
                    ? '/miho/logo.svg'
                    : '/miho/logo_w.svg'
                }
                alt="미호"
                className="h-8"
              />
            </Link>

            <nav className="flex items-center gap-8">
              <div className="flex items-center gap-6 text-sm">
                <span
                  className={`whitespace-nowrap font-medium ${isDarkInfo ? 'text-gray-700' : 'text-white'
                    }`}
                >
                  <i className="ri-phone-line mr-1"></i>
                  055-363-2575
                </span>
                <div className="flex items-center gap-3">
                  {quickLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`hover:opacity-70 transition-opacity cursor-pointer ${isDarkInfo ? 'text-gray-700' : 'text-white'
                        }`}
                      title={link.name}
                    >
                      <i className={`${link.icon} text-lg`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          <nav
            className={`border-t transition-colors ${isDarkInfo ? 'border-gray-100' : 'border-white/20'}`}
            onMouseEnter={() => setIsMenuOpen(true)}
          >
            <ul className="flex items-center justify-center gap-12 py-4">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group h-full flex items-center"
                >
                  <button
                    className={`text-sm font-medium hover:opacity-70 transition-opacity whitespace-nowrap cursor-pointer py-4 ${isDarkInfo ? 'text-gray-800' : 'text-white'
                      }`}
                  >
                    <span className="relative">
                      {item.title}
                      <span className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isDarkInfo ? 'bg-gray-800' : 'bg-white'}`}></span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mega Menu Dropdown */}
        <div
          className={`absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
            }`}
        >
          <div className="max-w-[1400px] mx-auto px-6 pb-12 pt-4">
            <div className="flex justify-center gap-12">
              {menuItems.map((item, index) => (
                <div key={index} className="w-auto min-w-[100px] flex flex-col items-center">
                  <ul className="flex flex-col gap-3 text-center">
                    {item.submenu.map((sub, subIndex) => (
                      <li key={subIndex}>
                        {sub.link.startsWith('/') ? (
                          <Link
                            to={sub.link}
                            className="text-sm text-gray-500 hover:text-primary hover:font-medium transition-colors whitespace-nowrap cursor-pointer"
                          >
                            {sub.name}
                          </Link>
                        ) : (
                          <a
                            href={sub.link}
                            className="text-sm text-gray-500 hover:text-primary hover:font-medium transition-colors whitespace-nowrap cursor-pointer"
                          >
                            {sub.name}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
