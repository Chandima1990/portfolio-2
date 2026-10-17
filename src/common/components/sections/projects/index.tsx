'use client';

import React, { useState } from 'react';

import SectionDivider from '@/common/components/shared/section-divider';
import SectionHeading from '@/common/components/shared/section-heading';
import { aiProjectsData, projectsData } from '@/common/lib/data';
import { useSectionInView } from '@/common/lib/hooks';

import Project from './_components/project';

export default function Projects() {
  const { ref } = useSectionInView('projects', 0.1);
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projectsData.filter((project) => project.featured);
  const otherProjects = projectsData.filter((project) => !project.featured);
  const visibleProjects = showAll
    ? [...featuredProjects, ...otherProjects]
    : featuredProjects;

  return (
    <section
      className="flex min-h-screen w-full scroll-mt-28 flex-col items-center justify-center dark:bg-darkBg dark:text-white"
      id="projects"
      ref={ref}
    >
      <SectionHeading>Projects</SectionHeading>
      <h3 className="mt-12 px-4 text-center text-2xl font-semibold">
        AI-Assisted Personal Projects
      </h3>
      <div className="mb-12 mt-12">
        {aiProjectsData.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
      <h3 className="px-4 text-center text-2xl font-semibold">
        Professional Projects
      </h3>
      <div className="mb-8 mt-12">
        {visibleProjects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
      {otherProjects.length > 0 && (
        <button
          type="button"
          onClick={() => setShowAll((value) => !value)}
          aria-expanded={showAll}
          className="mb-24 rounded-full bg-gray-900 px-7 py-3 text-white transition hover:scale-105 dark:bg-white/10"
        >
          {showAll
            ? 'Show fewer projects'
            : `Show ${otherProjects.length} earlier projects`}
        </button>
      )}
      <SectionDivider />
    </section>
  );
}
