'use client';

import { motion } from 'framer-motion';

import SectionDivider from '@/common/components/shared/section-divider';
import SectionHeading from '@/common/components/shared/section-heading';
import { aiWorkflowData } from '@/common/lib/data';

export default function AiWorkflow() {
  return (
    <section
      id="ai-workflow"
      className="flex w-full scroll-mt-28 flex-col items-center px-4 pb-8 dark:bg-darkBg dark:text-white"
    >
      <SectionHeading>How I build with AI</SectionHeading>
      <p className="mb-12 max-w-[46rem] text-center text-gray-700 dark:text-white/75">
        AI agents write a lot of my personal-project code. What makes that code
        trustworthy is the engineering around them: specs before code, one
        written contract for every agent, and automated gates that decide when
        work is done.
      </p>
      <ul className="mb-16 grid max-w-[60rem] gap-4 sm:grid-cols-2">
        {aiWorkflowData.map((item, index) => (
          <motion.li
            key={item.title}
            className="borderBlack flex flex-col gap-3 rounded-xl bg-gray-100 p-6 text-left dark:bg-white/5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * index }}
          >
            <div className="flex items-center gap-3">
              <item.icon
                aria-hidden="true"
                className="h-6 w-6 shrink-0 text-[#e29578]"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-700 dark:text-white/75">
              {item.description}
            </p>
            <p className="mt-auto text-sm italic text-gray-500 dark:text-white/50">
              In practice: {item.example}
            </p>
          </motion.li>
        ))}
      </ul>
      <SectionDivider />
    </section>
  );
}
