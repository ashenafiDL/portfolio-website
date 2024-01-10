import Avatar from "../assets/svg/Avatar.svg";
import Button from "./Button";

export default function Hero() {
  return (
    <section>
      {/* Hero section text */}
      <div className="py-40">
        <div className="space-y-2">
          <h1 className="text-2xl">Hi, 👋. I'm</h1>

          <h3 className="text-6xl">Ashenafi Debella</h3>

          <div className="text-xl uppercase">
            Software Engineer & Web Developer
          </div>
        </div>
        <div className="mt-6 w-[40%] text-lg text-black text-opacity-60">
          <p>
            I am a Software Engineer with a lot of passion for technology and
            innovation. I love the fact that I can use my knowledge and skill of
            Software Engineering to impact many lives for good.
          </p>
        </div>

        {/* Social media logos */}
        <div className="mt-24 mb-8 flex flex-row gap-4">
          <i class="devicon-github-original text-3xl"></i>
          <i class="devicon-linkedin-plain text-3xl"></i>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-row gap-4">
          <Button text={"My Resume"} />
          <Button text={"Contact Me"} />
        </div>
      </div>

      {/* Hero section image */}
      <div className="absolute top-[30%] right-80">
        <img
          src={Avatar}
          alt="ashenafi wearing a glass"
          className="rounded-lg drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
