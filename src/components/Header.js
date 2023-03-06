const Header = () => {
  return (
    <header className="flex flex-row justify-between border border-b-gray-300 py-4 px-80">
      {/* Logo */}
      <div className="my-auto">
        <a href="/">
          <span className="text-2xl">ashenafiDL</span>
        </a>
      </div>

      {/* Navigation */}
      <div className="my-auto flex flex-row gap-8 duration-500 ">
        <a
          href="#about-me"
          className="cursor-pointer duration-200 hover:text-primary"
          p-1
        >
          About Me
        </a>
        <a
          href="#projects"
          className="cursor-pointer duration-200 hover:text-primary"
          p-1
        >
          Projects
        </a>
        <a
          href="#contact-me"
          className="cursor-pointer duration-200 hover:text-primary"
          p-1
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
