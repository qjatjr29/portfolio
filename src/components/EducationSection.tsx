import { Book, Cloud, GraduationCap } from "lucide-react";
import { EDUCATION_DATA, type EducationItem } from "./constants/education";

// 아이콘 매핑 함수
const getEducationIcon = (type: EducationItem["type"]) => {
  const iconProps = { className: "size-6 text-white", strokeWidth: 2 };
  switch (type) {
    case "bootcamp":
      return <Book {...iconProps} />;
    case "community":
      return <Cloud {...iconProps} />;
    case "university":
      return <GraduationCap {...iconProps} />;
  }
};

function EducationCard({ data }: { data: EducationItem }) {
  return (
    <div
      className="relative rounded-2xl w-full border border-slate-200 overflow-hidden transition-all hover:shadow-md"
      style={{
        backgroundImage: "linear-gradient(161deg, #f8faff 0%, #eff6ff 100%)",
      }}
    >
      <div className="p-6 sm:p-8 flex flex-col gap-6">
        {/* 상단 헤더 영역 */}
        <div className="flex gap-4 sm:gap-6 items-start">
          <div
            className="shrink-0 size-12 rounded-xl flex items-center justify-center shadow-lg"
            style={{
              backgroundImage: `linear-gradient(135deg, ${data.gradient.from} 0%, ${data.gradient.to} 100%)`,
            }}
          >
            {getEducationIcon(data.type)}
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-500 mb-1">
              {data.period}
            </p>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight tracking-tight">
              {data.title}
            </h3>
          </div>
        </div>

        {/* 하단 상세 리스트 */}
        <ul className="space-y-2.5 sm:ml-18">
          {data.items.map((item, index) => (
            <li key={index} className="flex gap-3 text-slate-600">
              <span className="text-blue-500 font-bold shrink-0">•</span>
              <p className="text-sm sm:text-base leading-relaxed font-['Inter',sans-serif]">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function EducationSection() {
  return (
    <section
      id="education"
      className="flex flex-col gap-10 items-center w-full py-16 px-6 max-w-5xl mx-auto"
    >
      <header className="text-center">
        <h2 className="text-[28px] sm:text-4xl font-bold text-slate-900 tracking-tight">
          🎓 Education
        </h2>
        <div className="h-1 w-24 bg-blue-500 mx-auto mt-4 rounded-full" />
      </header>

      <div className="flex flex-col gap-6 w-full">
        {EDUCATION_DATA.map((edu) => (
          <EducationCard key={edu.id} data={edu} />
        ))}
      </div>
    </section>
  );
}
