import Banner from "@/Components/Banner";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
import ProjectsGrid from "@/Components/ProjectsGrid";
import Contact from "@/Components/Contact";

export default function Home() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Hero />
      <ProjectsGrid />
      <Contact />
    </div>
  );
}
