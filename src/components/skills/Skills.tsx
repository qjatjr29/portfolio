import { SKILL_CATEGORIES } from "../constants/skills";
import { SkillCard } from "./SkillCard";

export default function Skills() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto w-full" id="skills">
      <header className="mb-12 text-center">
        <div>
          <h2 className="text-[28px] sm:text-[36px] font-bold text-[#0f172b]">
            🤖 Skills
          </h2>
          <div className="h-1 w-25 bg-blue-500 mx-auto rounded-full" />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_CATEGORIES.map((category) => (
          <SkillCard key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}
