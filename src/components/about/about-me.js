function AboutMe() {
  return (
    <div id="about-me" className="py-24">
      <div className="flex w-full flex-col gap-16 bg-primary bg-opacity-20 py-20 text-center text-black">
        <div className="about mx-auto w-[25%]">
          <h3 className="mb-2 text-3xl font-bold">About Me</h3>
          <p>
            Hi, I'm Denis – UX/UI designer from Minsk. I'm interested in design
            and everything connected with it.
            <br />
            <br />
            I'm studying at courses "Web and mobile design interfaces" in
            IT-Academy.
            <br />
            <br />
            Ready to implement excellent projects with wonderful people.
          </p>
        </div>
        <div className="skills mx-auto">
          <h3 className="mb-2 text-3xl font-bold">Skills</h3>
          <ul className="flex flex-row gap-8">
            <li>React</li>
            <li>Node</li>
            <li>Flask</li>
            <li>Flutter</li>
            <li>Figma</li>
            <li className="border-l-2 border-black"></li>
            <li>Photography</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
