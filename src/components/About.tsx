import { UserPlus, Check, Users } from "lucide-react";
import { ABOUT_ITEMS, type AboutItem } from "./constants/about";

// 아이콘 렌더링 도우미
const getIcon = (type: AboutItem["iconType"], color: string) => {
  const props = { size: 24, stroke: color, strokeWidth: 2 };
  switch (type) {
    case "user":
      return <UserPlus {...props} />;
    case "check":
      return <Check {...props} />;
    case "users":
      return <Users {...props} />;
  }
};

function AboutRow({ item }: { item: AboutItem }) {
  const { content } = item;

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full">
      {/* 아이콘 */}
      <div
        className={`shrink-0 size-12 rounded-full flex items-center justify-center ${item.iconBgColor}`}
      >
        {getIcon(item.iconType, item.iconColor)}
      </div>

      {/* 텍스트 내용 */}
      <p className="font-['Inter','Noto_Sans_KR',sans-serif] leading-7 text-[#314158] text-base sm:text-lg flex-1">
        {content.prefix}
        <span className={`font-semibold ${content.highlightColor}`}>
          {content.highlight}
        </span>
        {content.middle}
        {content.highlight2 && (
          <span className={`font-semibold ${content.highlightColor}`}>
            {content.highlight2}
          </span>
        )}
        {content.suffix}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col gap-12 items-center w-full py-12"
    >
      {/* 헤더 */}
      <div className="w-full">
        <h2 className="font-['Spinnaker',sans-serif] text-3xl sm:text-4xl font-bold text-[#0f172b] text-center tracking-tight">
          🙋🏻‍♂️ About Me
        </h2>
      </div>

      {/* 카드형 컨테이너 */}
      <div className="w-full bg-white rounded-2xl shadow-lg border border-slate-100 p-8 sm:p-12">
        <div className="flex flex-col gap-8">
          {ABOUT_ITEMS.map((item) => (
            <AboutRow key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
