"use client";

import { useTranslations } from "next-intl";

const languages = ["Java", "PHP", "C#", "Python", "JavaScript"];
const frameworks = ["Spring Boot", "Laravel", "Next.js", ".NET Core"];
const tools = ["Docker", "Git / GitHub", "MySQL", "Postman"];

function SkillList({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-2 text-slate-300">
          <span className="w-1.5 h-1.5 bg-slate-600 rounded-full flex-shrink-0" />
          {item}
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl font-bold mb-16 text-center">{t("title")}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-[8px]">
            <h3 className="font-mono text-[#3abff8] mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#3abff8] rounded-full" />
              {t("languages")}
            </h3>
            <SkillList items={languages} />
          </div>

          <div className="glass-card p-8 rounded-[8px]">
            <h3 className="font-mono text-[#3abff8] mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#3abff8] rounded-full" />
              {t("frameworks")}
            </h3>
            <SkillList items={frameworks} />
          </div>

          <div className="glass-card p-8 rounded-[8px]">
            <h3 className="font-mono text-[#3abff8] mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#3abff8] rounded-full" />
              {t("tools")}
            </h3>
            <SkillList items={tools} />
          </div>
        </div>
      </div>
    </section>
  );
}
