export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between py-6">
      {/* Logo */}
      <div>
        <a href="/#">
          <span className="text-2xl font-semibold">ashenafiDL</span>
        </a>
      </div>

      {/* Navigation */}
      <div className="flex flex-row gap-10 text-lg [&>a]:cursor-pointer hover:[&>a]:underline">
        <a href="#about-me">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact-me">Contact Me</a>
      </div>
    </header>
  );
}
