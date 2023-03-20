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
  {
    title: "Sentiment Analysis for Amharic Language",
    techs: ["Tensorflow", "Flask", "Tailwindcss"],
    description:
      "A machine learning model trained to label Amharic texts as positive, negative or neutral",
  },
  {
    title: "Goal Based Launcher",
    techs: ["Flutter", "Material-UI"],
    description:
      "Android phone launcher that aims to reduce screen time and help achieve goals",
  },
];

function Projects() {
  return (
    <div id="projects" className="py-24">
      <div className="mb-8">
        <hr className="mx-80 border border-gray-300" />
        <h1 className="m-auto w-fit -translate-y-6 bg-white px-8 text-4xl">
          Projects
        </h1>
      </div>
      <div className="md:px-50 mb-4 grid gap-8 sm:px-32 md:grid-cols-1 lg:grid-cols-2 lg:px-80">
        {projects.map((project) => {
          return <Card project={project} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
