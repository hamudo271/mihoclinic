import { useEffect, useState } from "react";
import ForteHeader from "./components/ForteHeader";
import Footer from "./components/Footer";
import '../../styles/miho-header.css';

const NonBenefitPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-suit">
      <ForteHeader isScrolled={isScrolled} />

      <div className="pt-[180px] pb-10 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
            <h1 className="text-[40px] leading-tight text-[#222] font-normal mb-8">
                미호의원 <span className="font-bold">비급여항목 안내</span>입니다.
            </h1>
            <p className="text-[15px] leading-7 text-[#555] font-light">
                본 페이지는 의료법 제45조 제1항 및 제2항과 시행규칙 제42조의 2 제1항 및 제2항에 의하여 비급여 진료비용을 고지하기 위한 화면입니다.<br/>
                비급여 진료비용은 단일 개별 항목의 1회 비용이므로 진료과정에 따라 해당 항목의 비용이 달라질 수 있습니다.
            </p>
        </div>
      </div>

      <main className="flex-grow bg-white py-12">
          <div className="max-w-[1400px] mx-auto px-6">
              
              {/* 시술 항목 */}
              <div className="overflow-x-auto border-t-2 border-[#272727]">
                  <table className="w-full border-collapse text-center table-fixed">
                      <colgroup>
                          <col className="w-[20%]" />
                          <col className="w-[50%]" />
                          <col className="w-[30%]" />
                      </colgroup>
                      <thead>
                          <tr className="bg-[#f4f4f4] text-gray-800 text-[11pt] font-semibold border-b border-[#cdcdcd]">
                              <th className="border border-[#cdcdcd] py-3">분류</th>
                              <th className="border border-[#cdcdcd] py-3">시술명</th>
                              <th className="border border-[#cdcdcd] py-3">비용(VAT별도)</th>
                          </tr>
                      </thead>
                      <tbody className="bg-white">
                          {/* 보톡스/필러 */}
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td rowSpan={4} className="border border-[#cdcdcd] py-3 bg-[#fafafa] font-medium">보톡스/필러</td>
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">국산 보툴렉스</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">40,000원~</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">수입 제오민</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">60,000원~</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">채움프리미엄</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">150,000원~</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">쥬비덤</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">300,000원~</td>
                          </tr>
                          {/* 스킨부스터 */}
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td rowSpan={9} className="border border-[#cdcdcd] py-3 bg-[#fafafa] font-medium">스킨부스터</td>
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">레디어스</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">900,000원</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">쥬베룩 볼륨</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">700,000원</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">디클래시 카하 (구, 볼라썸)</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">300,000원</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">콜라쥬</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">500,000원</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">리투오</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">700,000원</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">바이리즌</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">300,000원</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">리쥬란 힐러</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">300,000원</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">리쥬란 HB</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">300,000원</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">고우리</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">800,000원</td>
                          </tr>
                          {/* 실리프팅 */}
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td rowSpan={1} className="border border-[#cdcdcd] py-3 bg-[#fafafa] font-medium">실리프팅</td>
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">잼버/두스/블루로즈</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">100,000원</td>
                          </tr>
                          {/* 피부관리 */}
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td rowSpan={3} className="border border-[#cdcdcd] py-3 bg-[#fafafa] font-medium">피부관리</td>
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">여드름 관리</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">80,000원~</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">탄력관리</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">150,000원~</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">미백관리</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">100,000원~</td>
                          </tr>
                          {/* 레이저 */}
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td rowSpan={5} className="border border-[#cdcdcd] py-3 bg-[#fafafa] font-medium">레이저</td>
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">색소 레이저</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">150,000원~</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">리프팅 레이저</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">150,000원~</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">제모 레이저</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">50,000원~</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">혈관 레이저</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">300,000원~</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">모공 레이저</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">150,000원~</td>
                          </tr>
                          {/* 윤곽/지방분해 */}
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td rowSpan={2} className="border border-[#cdcdcd] py-3 bg-[#fafafa] font-medium">윤곽/지방분해</td>
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">안면 지방분해주사</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">100,000원~</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">바디 지방분해주사</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">130,000원~</td>
                          </tr>
                          {/* 영양수액/주사 */}
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td rowSpan={8} className="border border-[#cdcdcd] py-3 bg-[#fafafa] font-medium">영양수액/주사</td>
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">피부진정주사</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">90,000원</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">토닝주사</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">70,000원</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">디톡스주사</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">150,000원</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">대상포진예방백신</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">150,000원</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">파상풍주사</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">50,000원</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">비타민D주사</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">40,000원</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">신데렐라주사</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">50,000원</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">백옥주사</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">50,000원</td>
                          </tr>
                      </tbody>
                  </table>
              </div>

              {/* 추가 표 2: 진찰료/제증명 */}
              <div className="mt-12 overflow-x-auto border-t-2 border-[#272727]">
                  <table className="w-full border-collapse text-center table-fixed">
                      <colgroup>
                          <col className="w-[20%]" />
                          <col className="w-[25%]" />
                          <col className="w-[20%]" />
                          <col className="w-[15%]" />
                          <col className="w-[20%]" />
                      </colgroup>
                      <thead>
                          <tr className="bg-[#f4f4f4] text-gray-800 text-[11pt] font-semibold border-b border-[#cdcdcd]">
                              <th className="border border-[#cdcdcd] py-3">분류</th>
                              <th className="border border-[#cdcdcd] py-3">항목</th>
                              <th className="border border-[#cdcdcd] py-3">상세</th>
                              <th className="border border-[#cdcdcd] py-3">수량/단위</th>
                              <th className="border border-[#cdcdcd] py-3">가격</th>
                          </tr>
                      </thead>
                      <tbody className="bg-white">
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td rowSpan={4} className="border border-[#cdcdcd] py-3 bg-[#fafafa] font-medium">진찰료/제증명</td>
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">진료확인서</td>
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">(진단명X)</td>
                              <td className="border border-[#cdcdcd] py-3">1장</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">3,000원</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">진료(통원)확인서</td>
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">(진단명O)</td>
                              <td className="border border-[#cdcdcd] py-3">1장</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">5,000원</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">소견서</td>
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">-</td>
                              <td className="border border-[#cdcdcd] py-3">1회</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">5,000원</td>
                          </tr>
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">일반진단서</td>
                              <td className="border border-[#cdcdcd] py-3 text-left px-4">-</td>
                              <td className="border border-[#cdcdcd] py-3">1장</td>
                              <td className="border border-[#cdcdcd] py-3 text-right px-2">10,000원</td>
                          </tr>
                      </tbody>
                  </table>
              </div>

              <div className="mt-12 text-sm text-gray-500 bg-gray-50 p-6 rounded-lg font-pretendard">
                  <ul className="list-disc pl-5 space-y-1">
                      <li>상기 비급여 진료비용은 의료법 제45조에 의거하여 고지합니다.</li>
                      <li>진료 상황 및 환자의 상태에 따라 구체적인 진료비용은 변동될 수 있습니다.</li>
                      <li>제증명수수료는 의료법 제45조의3에 의거하여 고지합니다.</li>
                  </ul>
              </div>
          </div>
      </main>

      <Footer />
    </div>
  );
};

export default NonBenefitPage;
