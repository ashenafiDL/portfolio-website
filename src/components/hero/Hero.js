import Avatar from "../../svg/Avatar.svg";

const Hero = () => {
  return (
    <section className="relative mt-6 flex flex-row gap-4 px-80 pb-96">
      {/* Hero section text */}
      <div className="font-sofia-sans w-full rounded bg-gradient-to-br from-primary to-secondary px-24 py-24 drop-shadow-sm">
        <div>
          <h1 className="text-3xl">Hi, I'm</h1>

          <h3 className="font-mono text-7xl">
            Ashenafi<br></br>Debella
          </h3>
        </div>
        <div>
          <span className="text-xl uppercase">
            Software Engineer & Web Developer
          </span>
        </div>
        <div className="mt-3 w-2/5">
          I'm a Software Engineer with a combined 3.5 years of work experience
          in full-stack development. I have helped companies create dynamic and
          user-friendly websites and mobile applications that have touched over
          80,000 active users. I get excited about opportunities where I get to
          turn ideas into a working mobile and web applications that anyone can
          use.
        </div>

        <div className="mt-24 mb-8 flex flex-row gap-4">
          <i class="devicon-github-original colored text-3xl"></i>
          <i class="devicon-linkedin-plain text-3xl"></i>
        </div>

        <div className="flex flex-row gap-4">
          {/* TODO - add hover effect */}
          <button className="border-2 border-black bg-transparent py-2 px-8 ">
            My Resume
          </button>
          <button className="border-2 border-black bg-transparent py-2 px-8">
            Contact Me
          </button>
        </div>
      </div>

      {/* Hero section image */}
      <div className="absolute top-52 left-2/4 rounded">
        <img
          src={Avatar}
          alt="Avatar"
          className="h-2/3 rounded-2xl drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
