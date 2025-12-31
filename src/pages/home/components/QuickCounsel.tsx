import { useState } from 'react';

export default function QuickCounsel() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    phone: '',
    gender: '',
    memo: '',
    privacyAgree: false,
    marketingAgree: false,
  });

  const handleSubmit = () => {
    if (!formData.privacyAgree) {
      alert('개인정보 제공에 동의해주세요.');
      return;
    }

    if (!formData.date || !formData.time || !formData.name || !formData.phone || !formData.gender) {
      alert('필수 항목을 모두 입력해주세요.');
      return;
    }

    alert('상담 신청이 완료되었습니다.');
    setIsOpen(false);
    setStep(1);
    setFormData({
      date: '',
      time: '',
      name: '',
      phone: '',
      gender: '',
      memo: '',
      privacyAgree: false,
      marketingAgree: false,
    });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-8 top-1/2 -translate-y-1/2 bg-primary text-white px-6 py-4 rounded-l-full shadow-lg hover:bg-[#3A0060] transition-all z-50 cursor-pointer whitespace-nowrap"
      >
        빠른 상담 문의
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                미호
                <br />
                빠른 상담 문의
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-medium mb-4">
                  STEP <span className="font-bold">01</span>
                </div>

                {/* 미호의원 주소 정보 */}
                <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
                  <div className="flex items-start gap-3">
                    <i className="ri-map-pin-line text-primary text-xl mt-0.5"></i>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">미호의원</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        경상남도 양산시 동면 금오13길 20<br />
                        센텀빌딩 4층 402호
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    희망 날짜 <span className="text-primary">*</span>
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    희망 시간 <span className="text-primary">*</span>
                  </label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full py-3 bg-primary text-white rounded-lg hover:bg-[#3A0060] transition-all cursor-pointer whitespace-nowrap"
                >
                  다음
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-medium mb-4">
                  STEP <span className="font-bold">02</span>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    이름 <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="이름"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    연락처 <span className="text-primary">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="연락처"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    성별 <span className="text-primary">*</span>
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  >
                    <option value="">성별</option>
                    <option value="male">남자</option>
                    <option value="female">여자</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    상담 요청 내용
                  </label>
                  <textarea
                    value={formData.memo}
                    onChange={(e) => setFormData({ ...formData, memo: e.target.value })}
                    placeholder="상담 요청 내용"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary resize-none"
                  ></textarea>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all cursor-pointer whitespace-nowrap"
                  >
                    이전
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 py-3 bg-primary text-white rounded-lg hover:bg-[#3A0060] transition-all cursor-pointer whitespace-nowrap"
                  >
                    다음
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div className="space-y-3">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.privacyAgree && formData.marketingAgree}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          privacyAgree: e.target.checked,
                          marketingAgree: e.target.checked,
                        })
                      }
                      className="mt-1 cursor-pointer"
                    />
                    <span className="text-sm font-medium">전체 동의</span>
                  </label>

                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.privacyAgree}
                      onChange={(e) =>
                        setFormData({ ...formData, privacyAgree: e.target.checked })
                      }
                      className="mt-1 cursor-pointer"
                    />
                    <span className="text-sm">
                      <span className="text-primary">[필수]</span> 서비스 이용 및 예약 신청을 위한
                      개인정보 제공에 동의{' '}
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline cursor-pointer"
                      >
                        이용약관
                      </a>
                    </span>
                  </label>

                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.marketingAgree}
                      onChange={(e) =>
                        setFormData({ ...formData, marketingAgree: e.target.checked })
                      }
                      className="mt-1 cursor-pointer"
                    />
                    <span className="text-sm">
                      <span className="text-gray-500">[선택]</span> 마케팅 활용에 대한 동의{' '}
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline cursor-pointer"
                      >
                        이용약관
                      </a>
                    </span>
                  </label>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all cursor-pointer whitespace-nowrap"
                  >
                    이전
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 py-3 bg-primary text-white rounded-lg hover:bg-[#3A0060] transition-all cursor-pointer whitespace-nowrap"
                  >
                    상담 신청
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
