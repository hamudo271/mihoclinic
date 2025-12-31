import { useMemo, useEffect, useState } from "react";
import ForteHeader from "./components/ForteHeader";
import Footer from "./components/Footer";
import nonBenefitData from "./data.json";
import '../../styles/miho-header.css';

interface NonBenefitItem {
  middleCategory: string;
  smallCategory: string;
  code: string;
  name: string;
  cost: string;
  minCost: string;
  maxCost: string;
  materialIncluded: string;
  drugIncluded: string;
  remarks: string;
  lastUpdated: string;
}

// Ensure the data is treated as a flat list for the table since Rene's table is one big table usually
// But our JSON is grouped by category if I recall?
// Let's check data.json structure again.
// The parser script created a list of { category: string, items: [...] }.
// But Rene's HTML is one big table.
// To implement rowspan correctly across the whole table, we might need to flatten it first or process it group by group.
// Rene's table has 'Middle Category' as the first column.
// So we should flatten everything into one list of items, then calculate rowspans.

interface FlattenedItem extends NonBenefitItem {
    middleCategoryRowSpan: number;
    smallCategoryRowSpan: number;
    printMiddleCategory: boolean;
    printSmallCategory: boolean;
}

const NonBenefitPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Flatten data
  const items: FlattenedItem[] = useMemo(() => {
      const rawGroups = nonBenefitData as { category: string, items: NonBenefitItem[] }[];
      const flat: FlattenedItem[] = [];

      rawGroups.forEach(group => {
          group.items.forEach(item => {
              flat.push({
                  ...item,
                  middleCategory: item.middleCategory || group.category, // Use group category if item's is missing
                  middleCategoryRowSpan: 0,
                  smallCategoryRowSpan: 0,
                  printMiddleCategory: false,
                  printSmallCategory: false
              });
          });
      });

      // Calculate RowSpans
      for (let i = 0; i < flat.length; i++) {
          const current = flat[i];
          
          // Middle Category RowSpan
          if (i === 0 || current.middleCategory !== flat[i - 1].middleCategory) {
              current.printMiddleCategory = true;
              let span = 1;
              for (let j = i + 1; j < flat.length; j++) {
                  if (flat[j].middleCategory === current.middleCategory) {
                      span++;
                  } else {
                      break;
                  }
              }
              current.middleCategoryRowSpan = span;
          }

          // Small Category RowSpan (scoped within Middle Category)
          if (i === 0 || current.smallCategory !== flat[i - 1].smallCategory || current.middleCategory !== flat[i-1].middleCategory) {
              current.printSmallCategory = true;
              let span = 1;
              for (let j = i + 1; j < flat.length; j++) {
                  if (flat[j].smallCategory === current.smallCategory && flat[j].middleCategory === current.middleCategory) {
                      span++;
                  } else {
                      break;
                  }
              }
              current.smallCategoryRowSpan = span;
          }
      }

      return flat;
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
              
              {/* Rene Style Table Container */}
              <div className="overflow-x-auto border-t-2 border-[#272727]">
                  <table className="w-full border-collapse text-center table-fixed">
                      <colgroup>
                          <col className="w-[10%]" />
                          <col className="w-[10%]" />
                          <col className="w-[8%]" />
                          <col className="w-[17%]" />
                          <col className="w-[10%]" />
                          <col className="w-[10%]" />
                          <col className="w-[10%]" />
                          <col className="w-[5%]" />
                          <col className="w-[5%]" />
                          <col className="w-[10%]" />
                          <col className="w-[5%]" />
                      </colgroup>
                      <thead>
                          <tr className="bg-[#f4f4f4] text-gray-800 text-[11pt] font-semibold border-b border-[#cdcdcd]">
                              <th rowSpan={2} className="border border-[#cdcdcd] py-3">중분류</th>
                              <th rowSpan={2} className="border border-[#cdcdcd] py-3">소분류</th>
                              <th colSpan={2} className="border border-[#cdcdcd] py-3">항목</th>
                              <th colSpan={5} className="border border-[#cdcdcd] py-3">진료비용 등</th>
                              <th rowSpan={2} className="border border-[#cdcdcd] py-3">특이사항</th>
                              <th rowSpan={2} className="border border-[#cdcdcd] py-3">검색</th>
                          </tr>
                          <tr className="bg-[#f4f4f4] text-gray-800 text-[11pt] font-semibold border-b border-[#cdcdcd]">
                              <th className="border border-[#cdcdcd] py-2">코드</th>
                              <th className="border border-[#cdcdcd] py-2">명칭</th>
                              <th className="border border-[#cdcdcd] py-2">비용</th>
                              <th className="border border-[#cdcdcd] py-2">최저비용</th>
                              <th className="border border-[#cdcdcd] py-2">최고비용</th>
                              <th className="border border-[#cdcdcd] py-2 text-[10pt]">치료재료대<br/>포함여부</th>
                              <th className="border border-[#cdcdcd] py-2 text-[10pt]">약제비<br/>포함여부</th>
                          </tr>
                      </thead>
                      <tbody className="bg-white">
                          {items.map((item, index) => (
                              <tr key={index} className="text-[11pt] text-gray-700 hover:bg-gray-50">
                                  {item.printMiddleCategory && (
                                      <td rowSpan={item.middleCategoryRowSpan} className="border border-[#cdcdcd] py-3 bg-[#fafafa] font-medium">
                                          {item.middleCategory}
                                      </td>
                                  )}
                                  {item.printSmallCategory && (
                                      <td rowSpan={item.smallCategoryRowSpan} className="border border-[#cdcdcd] py-3">
                                          {item.smallCategory}
                                      </td>
                                  )}
                                  <td className="border border-[#cdcdcd] py-3 text-gray-500 text-[10pt]">{item.code || '-'}</td>
                                  <td className="border border-[#cdcdcd] py-3 text-left px-4">{item.name}</td>
                                  
                                  {/* Cost Columns - Right Aligned as per Rene CSS */}
                                  <td className="border border-[#cdcdcd] py-3 text-right px-2">{item.cost ? item.cost + '원' : '-'}</td>
                                  <td className="border border-[#cdcdcd] py-3 text-right px-2">{item.minCost ? item.minCost + '원' : '-'}</td>
                                  <td className="border border-[#cdcdcd] py-3 text-right px-2">{item.maxCost ? item.maxCost + '원' : '-'}</td>
                                  
                                  <td className="border border-[#cdcdcd] py-3">{item.materialIncluded}</td>
                                  <td className="border border-[#cdcdcd] py-3">{item.drugIncluded}</td>
                                  <td className="border border-[#cdcdcd] py-3 text-left px-2 text-[10pt] whitespace-pre-wrap">{item.remarks}</td>
                                  <td className="border border-[#cdcdcd] py-3 text-[9pt] text-gray-400">{item.lastUpdated || '-'}</td>
                              </tr>
                          ))}
                      </tbody>
                  </table>
              </div>

              {/* 추가 표 1: 시술 항목 */}
              <div className="mt-12 overflow-x-auto border-t-2 border-[#272727]">
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
                          <col className="w-[10%]" />
                          <col className="w-[30%]" />
                          <col className="w-[20%]" />
                          <col className="w-[20%]" />
                          <col className="w-[20%]" />
                      </colgroup>
                      <thead>
                          <tr className="bg-[#f4f4f4] text-gray-800 text-[11pt] font-semibold border-b border-[#cdcdcd]">
                              <th rowSpan={2} className="border border-[#cdcdcd] py-3">8</th>
                              <th colSpan={4} className="border border-[#cdcdcd] py-3">진찰료/제증명</th>
                          </tr>
                          <tr className="bg-[#f4f4f4] text-gray-800 text-[11pt] font-semibold border-b border-[#cdcdcd]">
                              <th className="border border-[#cdcdcd] py-2">항목</th>
                              <th className="border border-[#cdcdcd] py-2">상세</th>
                              <th className="border border-[#cdcdcd] py-2">수량/단위</th>
                              <th className="border border-[#cdcdcd] py-2">가격</th>
                          </tr>
                      </thead>
                      <tbody className="bg-white">
                          <tr className="text-[11pt] text-gray-700 hover:bg-gray-50">
                              <td rowSpan={4} className="border border-[#cdcdcd] py-3 bg-[#fafafa] font-medium">8</td>
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
