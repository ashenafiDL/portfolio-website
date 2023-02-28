import Card from "./card";

// TODO - use array map method to display the projects

function Projects() {
  return (
    <div id="projects" className="py-24">
      <div className="md:px-50 mb-4 grid gap-8 sm:px-32 md:grid-cols-1 lg:grid-cols-2 lg:px-80">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Projects;
