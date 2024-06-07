import { promises as fs } from "fs";
import CustomLink from "./CustomLink";
import RedirectLink from "./RedirectLink";
import SectionHeader from "./SectionHeader";
import TechLogoIcon from "./TechLogoIcon";

type ProjectType = {
  title: string;
  siteLink?: string;
  githubLink?: string;
  description: string;
  tools: Array<string>;
};

export default async function ProjectsSection() {
  const file = await fs.readFile(
    process.cwd() + "/app/data/projects.json",
    "utf8",
  );
  const projects = JSON.parse(file);

  return (
    <section id="projects" className="pb-8 pt-32">
      <SectionHeader text="Projects" />

      <div className="flex flex-col gap-14">
        {projects.map((project: ProjectType, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-col items-start justify-start gap-2"
            >
              <div className="inline-flex items-end justify-start gap-6">
                <h5 className="text-base font-normal leading-normal">
                  {project.title}
                </h5>
                <div className="flex items-start justify-start gap-2">
                  {project.siteLink && (
                    <RedirectLink text="Site" href={project.siteLink} />
                  )}
                  {project.githubLink && (
                    <RedirectLink text="GitHub" href={project.githubLink} />
                  )}
                </div>
              </div>

              <p className="opacity-75 lg:w-[90%]">{project.description}</p>

              <div className="wrapper my-1 flex flex-row items-center gap-4">
                {project.tools.map((tool, index) => {
                  return <TechLogoIcon key={index} name={tool} />;
                })}
              </div>
            </div>
          );
        })}

        <div>
          Also{" "}
          <CustomLink
            href="https://t.me/+SMVct7Idt9Q2ZTJk"
            text="check out"
            target="_blank"
          />{" "}
          my photography works.
        </div>
      </div>
    </section>
  );
}
