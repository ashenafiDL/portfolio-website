import Avatar from "../assets/svg/Avatar.svg";

const Hero = () => {
  return (
    <section className="relative mt-6 flex h-[90%] flex-row gap-4 px-80">
      {/* Hero section text */}
      <div className="font-sofia-sans w-full bg-gradient-to-br from-primary to-secondary px-24 py-24 text-black text-opacity-90 drop-shadow-sm">
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
          <p>
            I am a Software Engineer with a lot of passion for technology and
            innovation. I love the fact that I can use my knowledge and skill of
            Software Engineering to will impact the many lives for the good.
          </p>
        </div>

        <div className="mt-24 mb-8 flex flex-row gap-4">
          <i class="devicon-github-original colored text-3xl"></i>
          <i class="devicon-linkedin-plain text-3xl"></i>
        </div>

        <div className="flex flex-row gap-4">
          <button className="border-2 border-black bg-transparent bg-gradient-to-r from-black to-black bg-[length:0_100%] bg-no-repeat py-2 px-8 duration-200 hover:bg-[length:100%_100%] hover:text-white">
            My Resume
          </button>
          <button className="border-2 border-black bg-transparent bg-gradient-to-r from-black to-black bg-[length:0_100%] bg-no-repeat py-2 px-8 duration-200 hover:bg-[length:100%_100%] hover:text-white">
            Contact Me
          </button>
        </div>
      </div>

      {/* Hero section image */}
      <div className="absolute top-[25%] left-2/4">
        <img src={Avatar} alt="Avatar" className="h-2/3 drop-shadow-2xl" />
      </div>
    </section>
  );
};

export default Hero;
