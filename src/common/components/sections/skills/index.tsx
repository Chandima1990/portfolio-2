'use client';

import type { Skill } from '@/common/lib/types';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import SectionDivider from '@/common/components/shared/section-divider';
import SectionHeading from '@/common/components/shared/section-heading';
import { skillsData } from '@/common/lib/data';
import { useSectionInView } from '@/common/lib/hooks';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

function SkillIcon({ icon, name }: Skill) {
  if (typeof icon === 'string') {
    return (
      <Image
        src={icon}
        alt={name}
        width={24}
        height={24}
        className="mr-2 inline h-6 w-6"
      />
    );
  }

  const Icon = icon;
  return <Icon className="mr-2 inline h-6 w-6" />;
}

export default function Skills() {
  const { ref } = useSectionInView('skills');

  return (
    <section
      id="skills"
      ref={ref}
      className="flex w-full flex-col items-center justify-center py-24 pb-[150px] text-center dark:bg-darkBg dark:text-white sm:pb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="my-26 mb-[150px] flex max-w-[53rem] flex-col gap-10 px-4">
        {skillsData.map((group) => (
          <div key={group.category}>
            <h3 className="mb-4 text-xl font-semibold">{group.category}</h3>
            <ul className="flex flex-wrap items-center justify-center gap-2 text-lg text-gray-800">
              {group.skills.map((skill, index) => (
                <motion.li
                  className="borderBlack flex items-center justify-center rounded-xl bg-gray-200 px-5 py-3 dark:bg-white/10 dark:text-white/80"
                  key={skill.name}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  <SkillIcon {...skill} />
                  {skill.name}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center dark:bg-darkBg">
        <SectionDivider />
      </div>
    </section>
  );
}
