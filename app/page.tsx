import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import SidebarSection from "@/components/SidebarSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid grid-cols-1 bg-background-100 lg:grid-cols-[40%_auto]">
      {/* The fixed section on the left */}
      <SidebarSection />

      <div className="px-5 py-8 lg:px-12">
        <nav className="sticky top-6">
          <ul className="flex flex-row justify-end gap-4 [&>li]:text-base">
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#experience">Experience</Link>
            </li>
          </ul>
        </nav>

        <ProjectsSection />

        <ExperienceSection />

        <Footer />
      </div>
    </main>
  );
}
