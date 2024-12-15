import Link from "next/link";
import Avatar from "./Avatar";
import CustomLink from "./CustomLink";
import ListItem from "./ListItem";

const LINKS = [
  {
    href: "https://github.com/ashenafiDL",
    text: "Github",
    target: "_blank",
  },
  {
    href: "https://figma.com/@ashenafiDL",
    text: "Figma",
    target: "_blank",
  },
  {
    href: "https://linkedin.com/in/ashenafiDL",
    text: "LinkedIn",
    target: "_blank",
  },
  {
    href: "https://t.me/ashenafiDL",
    text: "Telegram",
    target: "_blank",
  },
];

export default function SidebarSection() {
  return (
    <section className="p-3 lg:sticky lg:top-0 lg:h-screen lg:p-6">
      <div className="flex h-full flex-col justify-between gap-10 rounded-3xl bg-background-200 p-6 shadow-lg md:p-12 lg:gap-0 lg:p-8 xl:p-20">
        <div>
          <Avatar />
          <h3 className="text-xl font-bold">ashenafiDL</h3>
          <p className="text-pretty text-sm opacity-75 lg:text-base">
            I design and build easy-to-use and attractive systems. I enjoy learning new things and building projects that make a difference.
          </p>
        </div>

        <div>
          <ul className="[&>li]:text-xs lg:[&>li]:text-base">
            <ListItem>
              <Link href="/doc/resume.pdf" target="_blank">
                My CV/Resume
              </Link>
            </ListItem>

            <ListItem>
              {LINKS.map((link, index) => {
                return (
                  <span key={index}>
                    <CustomLink {...link} />
                    <>{index !== LINKS.length - 1 ? ", " : ""}</>
                  </span>
                );
              })}
            </ListItem>

            <ListItem>
              <div>
                Reach out to me at{" "}
                <CustomLink
                  href="mailto:ashenafi.debella101@gmail.com"
                  text="ashenafi.debella101@gmail.com"
                  target="_blank"
                />
              </div>
            </ListItem>
          </ul>
        </div>
      </div>
    </section>
  );
}
