import Card from "./Card";

const projects = [
  {
    title: "EBA Books",
    techs: ["React", "Tailwindcss"],
    description: "The biggest online bookstore in Ethiopia.",
  },
  {
    title: "Weather-app",
    techs: ["Flask", "Tailwindcss"],
    description: "A simple weather app implemented using React.",
  },
];

function Projects() {
  return (
    <div id="projects" className="py-24">
      <div className="md:px-50 mb-4 grid gap-8 sm:px-32 md:grid-cols-1 lg:grid-cols-2 lg:px-80">
        {projects.map((project) => {
          return <Card project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
