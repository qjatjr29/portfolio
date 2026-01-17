import { EXPERIENCES, type ExperienceItem } from "./constants/experience";

function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  return (
    <article className="w-full bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
      <div className="p-8 sm:p-10">
        {/* Company Header */}
        <header className="flex flex-col sm:flex-row gap-5 items-start mb-10">
          <div className="shrink-0 size-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 p-3">
            <img
              src={experience.logo}
              alt={experience.company}
              className="w-full object-contain"
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-[#0f172b] tracking-tight">
              {experience.company}
            </h3>
            <p className="text-lg text-[#45556c] font-medium leading-snug">
              {experience.role}
            </p>
            <time className="block text-sm text-slate-400 font-medium">
              {experience.period}
            </time>
          </div>
        </header>

        {/* Detailed Points */}
        <div className="space-y-8">
          {experience.details.map((detail, idx) => {
            const Icon = detail.icon;
            return (
              <div key={idx} className="flex gap-4 items-start group">
                <div
                  className={`shrink-0 size-10 rounded-full flex items-center justify-center ${detail.iconBg}`}
                >
                  <Icon size={18} color={detail.iconColor} strokeWidth={2.5} />
                </div>

                <div className="flex-1 space-y-1.5 pt-1">
                  {detail.badge ? (
                    <div className="inline-flex items-center px-3 py-1 rounded-lg bg-linear-to-r from-orange-400 to-orange-500 shadow-sm">
                      <span className="text-sm font-bold text-white tracking-wide">
                        {detail.badge}: {detail.title}
                      </span>
                    </div>
                  ) : (
                    <>
                      <h4 className="text-base sm:text-lg text-[#314158] font-medium leading-relaxed">
                        {detail.title}
                      </h4>
                      {detail.content && (
                        <p className="text-sm sm:text-base text-[#64748b] leading-relaxed">
                          • {detail.content}
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default function ExperienceSection() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto w-full" id="experience">
      <header className="mb-12 text-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172b] tracking-tight">
            💡 Experience
          </h2>
          <div className="h-1 w-25 bg-orange-500  mx-auto rounded-full" />
        </div>
      </header>

      <div className="space-y-12">
        {EXPERIENCES.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
}
