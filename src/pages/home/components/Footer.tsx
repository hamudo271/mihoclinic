import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      {/* Upper Section: Contact & Time (Purple Design) */}
      <div className="bg-[#590099] text-white py-10">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-24">
            
            {/* Left Box: Contact & Address */}
            <div className="flex flex-col gap-3 shrink-0">
                <div className="flex items-center gap-4">
                    <span className="font-bold text-lg md:text-xl">대표전화</span>
                    <a href="tel:055-363-2575" className="font-bold text-3xl md:text-4xl hover:opacity-80 transition-opacity">055.363.2575</a>
                </div>
                <div className="flex items-start gap-4 text-sm md:text-base font-medium">
                    <span className="font-bold shrink-0 mt-0.5">오시는길</span>
                    <span>경상남도 양산시 동면 금오13길 20, 센텀빌딩 4층 402호</span>
                </div>
            </div>

            {/* Vertical Divider (Hidden on Mobile) */}
            <div className="hidden lg:block w-[1px] h-24 bg-white/30"></div>

            {/* Right Box: Hours */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-sm md:text-base">
                 <div className="font-bold text-lg md:text-xl shrink-0">진료안내</div>
                 <div className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                        <div className="space-y-2">
                             <div className="flex gap-4">
                                <span className="font-bold w-20">월 · 수</span>
                                <span>09:30 - 19:30</span>
                             </div>
                             <div className="flex gap-4">
                                <span className="font-bold w-20">화 · 금</span>
                                <span>09:30 - 18:30</span>
                             </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex gap-4">
                                <span className="font-bold w-20">목 · 토</span>
                                <span>09:30 - 14:00</span>
                             </div>
                             <div className="flex gap-4">
                                <span className="font-bold w-20">점심시간</span>
                                <span>12:30 - 14:00 (휴게시간)</span>
                             </div>
                        </div>
                    </div>
                    <div className="text-white/70 text-sm">
                        매월 첫번째 <span className="text-[#ff9d9d] font-bold">토요일 휴진</span> / 일요일 및 공휴일 휴진
                    </div>
                 </div>
            </div>
        </div>
      </div>

      {/* Bottom Section: Links & Info (Mimicking Rene's Bottom_Area) */}
      <div className="bg-[#272727] text-gray-400 py-10 text-sm">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
            
            {/* Logo */}
             <div className="shrink-0 opacity-50 grayscale">
                 <img src="/miho/logo_w.svg" alt="미호의원" className="h-12" />
             </div>

             {/* Info & Links */}
             <div className="flex-1 w-full md:w-auto">
                {/* Links */}
                <ul className="flex flex-wrap gap-x-8 gap-y-2 mb-6 border-b border-gray-600 pb-6 text-gray-300 font-medium justify-center md:justify-start">
                    <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">환자의 권리장전</a></li>
                    <li><Link to="/non-benefit" className="hover:text-white transition-colors text-white font-bold">비급여 항목</Link></li>
                </ul>

                <div className="space-y-1 text-center md:text-left leading-relaxed">
                    <p>
                        <span className="mr-4">경상남도 양산시 동면 금오13길 20, 센텀빌딩 4층 402호 (미호의원)</span>
                    </p>
                    <p>
                        <span className="mr-4">상호명 : 미호의원</span>
                        <span className="mr-4">대표자명 : 박신혜</span>
                        <span className="mr-4">상담전화 : 055.363.2575</span>
                        <span>사업자등록번호 : 203-38-03837</span>
                    </p>
                    <p className="mt-4 font-bold text-gray-500">
                        COPYRIGHT© MIHO CLINIC. ALL RIGHTS RESERVED.
                    </p>
                </div>
             </div>

             {/* SNS */}
             <div className="flex gap-3 shrink-0">
               <a
                 href="https://www.instagram.com/miho_clinic"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
                 title="인스타그램"
               >
                 <i className="ri-instagram-line text-lg text-gray-300"></i>
               </a>
               <a
                 href="https://blog.naver.com/miho3632575"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
                 title="네이버 블로그"
               >
                 <i className="ri-blogger-line text-lg text-gray-300"></i>
               </a>
               <a
                 href="http://pf.kakao.com/_Jxdixoxj"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"
                 title="카카오톡"
               >
                 <i className="ri-chat-3-line text-lg text-gray-300"></i>
               </a>
             </div>
        </div>
      </div>
    </footer>
  );
}
