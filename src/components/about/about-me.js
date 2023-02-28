function AboutMe() {
  const skills = [
    {
      skill_name: "React",
      logo_class: "devicon-react-original colored text-2xl",
    },
    {
      skill_name: "Node",
      logo_class: "devicon-nodejs-plain colored text-2xl",
    },
    {
      skill_name: "Flask",
      logo_class: "devicon-flask-original colored text-2xl",
    },
    {
      skill_name: "Flatter",
      logo_class: "devicon-flutter-plain colored text-2xl",
    },
    {
      skill_name: "Figma",
      logo_class:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ];
  return (
    <section id="about-me" className="py-24">
      <div className="flex w-full flex-col gap-16 bg-primary bg-opacity-20 py-20 text-center text-black">
        <div className="about mx-auto w-[25%]">
          <h3 className="mb-3 text-3xl font-bold">About Me</h3>
          <p>
            Hi, I'm Ashenafi – a software engineer and web designer/developer.
            I'm interested in design and open source softwares.
            <br />
            <br />
            I'm currently studying Software Engineering at Debre Berhan
            University.
          </p>
        </div>
        <div className="skills mx-auto">
          <h3 className="mb-3 text-3xl font-bold">Skills</h3>
          <div className="flex gap-8">
            {skills.map((skill) => {
              return (
                <div className="flex w-fit items-center gap-4 rounded-full bg-white px-4 py-2 shadow-sm duration-200 hover:-translate-y-[1px] hover:scale-105 hover:cursor-default hover:shadow-lg">
                  {/* TODO - use image instead of icon */}
                  <i class={skill.logo_class}></i>
                  <span>{skill.skill_name}</span>
                </div>
              );
            })}
          </div>
          <p className="my-4">
            I also love doing photography.{" "}
            <span>
              <u>
                <a
                  href="https://t.me/ashenafiDL_photo"
                  rel="noreferrer"
                  target="_blank"
                >
                  Check out some of my works.
                </a>
              </u>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
