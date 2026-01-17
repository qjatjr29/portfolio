import { FileText, Trophy, Award, ExternalLink } from "lucide-react";
import { AWARDS, type AwardItem } from "./constants/award";

// 타입별 아이콘 매핑
const getIcon = (type: AwardItem["type"]) => {
  switch (type) {
    case "certification":
      return <FileText className="size-6 text-white" />;
    case "award":
      return <Trophy className="size-6 text-white" />;
    case "paper":
      return <Award className="size-6 text-white" />;
  }
};

function AwardCard({ item }: { item: AwardItem }) {
  return (
    <div className="group bg-white relative rounded-2xl border border-slate-200 p-6 sm:p-8 w-full hover:shadow-md transition-shadow">
      <div className="flex gap-4 sm:gap-6 items-start">
        {/* 아이콘 */}
        <div
          className="shrink-0 size-12 rounded-xl flex items-center justify-center shadow-sm"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgb(253, 199, 0) 0%, rgb(255, 105, 0) 100%)",
          }}
        >
          {getIcon(item.type)}
        </div>

        {/* 텍스트 콘텐츠 */}
        <div className="flex-1 min-w-0 flex flex-col gap-2">
          <p className="text-sm font-medium text-slate-500">{item.date}</p>

          <div className="flex items-center gap-2 flex-wrap">
            {item.link ? (
              <a
                href={item.link.url}
                target="_blank"
                rel="noreferrer"
                className="text-lg sm:text-xl font-bold text-slate-900 underline decoration-slate-300 hover:decoration-blue-500 transition-colors flex items-center gap-1"
              >
                {item.title}
                <ExternalLink size={16} className="text-slate-400" />
              </a>
            ) : (
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {item.title}
              </h3>
            )}
          </div>

          {item.role && (
            <p className="text-sm font-semibold text-blue-600">{item.role}</p>
          )}

          {item.descriptions && (
            <ul className="mt-2 space-y-1">
              {item.descriptions.map((desc, idx) => (
                <li
                  key={idx}
                  className="text-sm sm:text-base text-slate-600 leading-relaxed flex items-start gap-2"
                >
                  <span className="mt-1.5 size-1 rounded-full bg-slate-400 shrink-0" />
                  {desc}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Awards() {
  return (
    <section
      id="awards"
      className="flex flex-col gap-10 items-center w-full py-20 px-6 max-w-5xl mx-auto"
    >
      <header className="text-center space-y-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
          🏅 Awards
        </h2>
        <div className="h-1 w-25 bg-blue-500 mx-auto rounded-full" />
      </header>

      <div className="flex flex-col gap-4 w-full">
        {AWARDS.map((award) => (
          <AwardCard key={award.id} item={award} />
        ))}
      </div>
    </section>
  );
}
