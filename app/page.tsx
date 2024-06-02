import Avatar from "@/components/Avatar";
import CustomLink from "@/components/CustomLink";
import Link from "next/link";

const LINKS = [
  {
    href: "https://github.com/ashenafiDL",
    text: "Github",
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

export default function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-[40%_auto]">
      {/* The fixed section on the left */}
      <section className="p-6 lg:sticky lg:top-0 lg:h-screen">
        <div className="flex h-full flex-col justify-between gap-8 rounded-3xl bg-slate-200 p-8 shadow-lg md:p-12 lg:gap-0 xl:p-20">
          <div>
            <Avatar />
            <h3 className="text-3xl font-bold">ashenafiDL</h3>
            <p className="text-pretty text-lg leading-snug">
              Detail-oriented software engineer with a focus on frontend
              development. Enjoys working on challenging projects.
            </p>
          </div>

          <div>
            <ul className="[&>li]:bg-[url(/icons/chevron-right.svg)] [&>li]:bg-left [&>li]:bg-no-repeat [&>li]:pl-8 [&>li]:text-lg">
              <li>
                <Link href="/doc/resume.pdf" target="_blank">
                  My CV/Resume
                </Link>
              </li>

              <li>
                {LINKS.map((link, index) => {
                  return (
                    <>
                      <CustomLink key={index} {...link} />
                      <>{index !== LINKS.length - 1 ? ", " : ""}</>
                    </>
                  );
                })}
              </li>

              <li>
                Reach out to me at{" "}
                <CustomLink
                  href="mailto:ashenafi.debella101@gmail.com"
                  text="ashenafi.debella101@gmail.com"
                  target="_blank"
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div></div>
    </main>
  );
}
