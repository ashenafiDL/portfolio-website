import { promises as fs } from "fs";
import SectionHeader from "./SectionHeader";

type ExperienceType = {
  companyName: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
};

export default async function ExperienceSection() {
  const file = await fs.readFile(
    process.cwd() + "/app/data/experience.json",
    "utf8",
  );
  const experiences = JSON.parse(file);

  return (
    <section id="experience" className="pb-8 pt-32">
      <SectionHeader text="Experience" />

      <div className="flex flex-col gap-14">
        {experiences.map((experience: ExperienceType, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-col items-start justify-start gap-2"
            >
              <h5 className="text-base font-normal leading-normal">
                {`${experience.companyName} - ${experience.role}`}
              </h5>
              <p className="w-[90%] opacity-75">{experience.description}</p>
              <span>{`${experience.startDate} - ${experience.endDate}`}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
