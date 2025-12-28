import { useState } from 'react';

export default function BranchSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { name: '전체', count: 42 },
    { name: '보톡스/필러', count: 8 },
    { name: '리프팅', count: 6 },
    { name: '피부관리', count: 8 },
    { name: '색소/미백', count: 6 },
    { name: '여드름/흉터', count: 6 },
    { name: '제모/비만', count: 8 },
  ];

  const procedures = [
    // 보톡스/필러
    { name: '사각턱보톡스', category: '보톡스/필러' },
    { name: '주름보톡스', category: '보톡스/필러' },
    { name: '바디보톡스', category: '보톡스/필러' },
    { name: '더모톡신', category: '보톡스/필러' },
    { name: '윤곽주사', category: '보톡스/필러' },
    { name: '입술필러', category: '보톡스/필러' },
    { name: '코필러', category: '보톡스/필러' },
    { name: '이마필러', category: '보톡스/필러' },

    // 리프팅
    { name: '슈링크 유니버스', category: '리프팅' },
    { name: '인모드', category: '리프팅' },
    { name: '울쎄라', category: '리프팅' },
    { name: '실리프팅', category: '리프팅' },
    { name: '에어젯', category: '리프팅' },
    { name: '올리지오', category: '리프팅' },

    // 피부관리
    { name: '아쿠아필', category: '피부관리' },
    { name: 'LDM 물방울', category: '피부관리' },
    { name: '크라이오', category: '피부관리' },
    { name: '스킨부스터', category: '피부관리' },
    { name: '리쥬란힐러', category: '피부관리' },
    { name: '쥬베룩', category: '피부관리' },
    { name: '엑소좀', category: '피부관리' },
    { name: '물광주사', category: '피부관리' },

    // 색소/미백
    { name: '피코토닝', category: '색소/미백' },
    { name: '레이저토닝', category: '색소/미백' },
    { name: 'IPL', category: '색소/미백' },
    { name: '백옥주사', category: '색소/미백' },
    { name: '신데렐라주사', category: '색소/미백' },
    { name: '점빼기', category: '색소/미백' },

    // 여드름/흉터
    { name: '아그네스', category: '여드름/흉터' },
    { name: '프락셀', category: '여드름/흉터' },
    { name: 'PDT', category: '여드름/흉터' },
    { name: '알라딘필링', category: '여드름/흉터' },
    { name: '여드름압출', category: '여드름/흉터' },
    { name: '염증주사', category: '여드름/흉터' },

    // 제모/비만
    { name: '겨드랑이제모', category: '제모/비만' },
    { name: '종아리제모', category: '제모/비만' },
    { name: '팔/다리제모', category: '제모/비만' },
    { name: '브라질리언', category: '제모/비만' },
    { name: '걸그룹주사', category: '제모/비만' },
    { name: '삭센다', category: '제모/비만' },
    { name: '비만처방전', category: '제모/비만' },
    { name: '카복시', category: '제모/비만' },
  ];

  const getProceduresByTab = (tabIndex: number) => {
    if (tabIndex === 0) return procedures;
    const category = tabs[tabIndex].name;
    return procedures.filter(p => p.category === category);
  };

  return (
    <section className="py-20 bg-white" id="procedure-section">
      <div className="max-w-[1400px] mx-auto px-6">
        <h3 className="text-5xl font-light text-center mb-12 text-gray-800">MIHO PROGRAM</h3>

        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-1 bg-gray-100 rounded-lg p-1">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${activeTab === index
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {getProceduresByTab(activeTab).map((proc, index) => (
            <div
              key={index}
              className="px-6 py-4 text-center border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-all cursor-pointer bg-white hover:shadow-sm"
            >
              {proc.name}
            </div>
          ))}
        </div>

        <a
          href="/reservation"
          className="flex items-center justify-center gap-3 max-w-md mx-auto px-8 py-4 bg-primary text-white rounded-full hover:bg-[#3A0060] transition-all cursor-pointer"
        >
          <span className="font-medium whitespace-nowrap">온라인 예약 바로가기</span>
          <i className="ri-calendar-check-line text-xl"></i>
        </a>
      </div>
    </section>
  );
}
