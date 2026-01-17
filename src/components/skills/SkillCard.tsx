import { type SkillCategory } from "../constants/skills";

export const SkillCard = ({ category }: { category: SkillCategory }) => {
  const Icon = category.icon;

  return (
    <article className="flex flex-col p-6 rounded-2xl border border-slate-100 bg-linear-to-br from-slate-50 to-blue-50 shadow-sm transition-transform hover:scale-[1.02]">
      <div
        className={`flex items-center justify-center size-12 rounded-xl bg-linear-to-br ${category.gradient} shadow-md`}
      >
        <Icon className="size-7 text-white" />
      </div>

      <h3 className="mt-5 text-lg sm:text-xl font-semibold text-[#0f172b]">
        {category.title}
      </h3>

      <div className="flex flex-wrap gap-2 mt-5">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            className={`
              px-3 py-1 rounded-full border text-[13px] sm:text-[14px] transition-colors
              ${
                skill.isMain
                  ? "bg-white border-blue-200 text-[#155dfc] font-bold shadow-sm"
                  : "bg-white/60 border-slate-200 text-[#475569] font-medium"
              }
            `}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </article>
  );
};
