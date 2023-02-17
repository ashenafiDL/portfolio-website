const Navigation = () => {
  return (
    <div className="my-auto flex flex-row gap-8 duration-300 ">
      <a href="#about-me" className="cursor-pointer hover:text-primary">
        About Me
      </a>
      <a href="#projects" className="cursor-pointer hover:text-primary">
        Projects
      </a>
      <a className="cursor-pointer hover:text-primary">Contact Me</a>
    </div>
  );
};

export default Navigation;
