import ProjectsSection from "@/components/ProjectsSection";
import SidebarSection from "@/components/SidebarSection";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-[40%_auto]">
      {/* The fixed section on the left */}
      <SidebarSection />

      <div className="px-12 py-6">
        <nav className="sticky top-6">
          <ul className="flex flex-row justify-end gap-4 [&>li]:text-xl">
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#experience">Experience</Link>
            </li>
          </ul>
        </nav>

        <ProjectsSection />
      </div>
    </main>
  );
}
