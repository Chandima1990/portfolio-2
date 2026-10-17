import About from '@/common/components/sections/about';
import AiWorkflow from '@/common/components/sections/ai-workflow';
import Articles from '@/common/components/sections/articles';
import Contact from '@/common/components/sections/contact';
import Education from '@/common/components/sections/education';
import Experience from '@/common/components/sections/experience';
import Hero from '@/common/components/sections/hero';
import Projects from '@/common/components/sections/projects';
import Skills from '@/common/components/sections/skills';

// Rebuild the page at most once a day so the Medium articles stay current
export const revalidate = 86400;

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-0">
      <Hero />
      <About />
      <Projects />
      <AiWorkflow />
      <Experience />
      <Education />
      <Skills />
      <Articles />
      <Contact />
    </main>
  );
}
