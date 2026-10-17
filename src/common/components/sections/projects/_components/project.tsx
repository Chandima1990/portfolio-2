'use client';

import type { ProjectItem } from '@/common/lib/types';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useId, useRef, useState } from 'react';

type ProjectProps = ProjectItem;

export default function Project({
  title,
  role,
  company,
  description,
  tags,
  imageUrl,
  icon: Icon,
  teamSize,
  responsibilities,
  startDate,
  endDate,
  status,
  liveUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const detailsId = useId();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  // useTransform to animate scale and opacity based on scroll position
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded((expanded) => !expanded);

  const hasVisual = Boolean(imageUrl || Icon);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <div className="grid justify-items-stretch">
        {/* Mouse users can click anywhere on the card; the button below is the accessible control */}
        <section
          id={detailsId}
          onClick={toggleExpand}
          className={`relative max-w-[52rem] cursor-pointer overflow-hidden rounded-lg border transition hover:bg-gray-200 dark:hover:bg-primary-foreground ${
            isExpanded ? 'h-max' : 'h-96'
          }`}
        >
          <div
            className={`flex h-full flex-col px-5 pb-7 pt-4 sm:pl-10 sm:pr-2 sm:pt-10 ${
              hasVisual ? 'sm:max-w-[50%] sm:group-even:ml-[18rem]' : 'sm:pr-10'
            }`}
          >
            {status ? (
              <span className="w-fit rounded-full bg-emerald-100 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
                {status}
              </span>
            ) : (
              <p className="text-sm">
                {startDate} to {endDate}
              </p>
            )}
            <h3 className="text-2xl font-semibold uppercase">{title}</h3>
            <i>
              {role}, {company}
            </i>
            {liveUrl && (
              <div className="mt-2">
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  onClick={(e) => e.stopPropagation()} // Prevent triggering expand/collapse
                >
                  View live site
                  <span className="sr-only">
                    {' '}
                    for {title} (opens in a new tab)
                  </span>
                  <svg
                    aria-hidden="true"
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            )}
            <p className="mt-2 leading-relaxed">{description}</p>
            {!status && (
              <i className="mt-2 leading-relaxed">Team Size: {teamSize}</i>
            )}
            <div className="mb-5 mt-4 max-w-md overflow-hidden rounded-xl shadow-md">
              <h4 className="mb-4 text-xl">
                {status ? 'Highlights' : 'Key contributions'}
              </h4>
              <ul className="space-y-4">
                {responsibilities.map((responsibility, index) => (
                  <li
                    className="flex w-fit items-center rounded-lg bg-gray-900 p-4 text-white shadow"
                    key={index}
                  >
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>

            <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="rounded-full bg-[#ffcbb4] px-3 py-1 text-[0.7rem] uppercase tracking-wider dark:bg-[#ddbea9] dark:text-black"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`Screenshot of ${title}`}
              quality={60}
              sizes="452px"
              className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
            />
          ) : (
            Icon && (
              <div
                aria-hidden="true"
                className="absolute -right-24 top-8 hidden h-80 w-[22rem] items-center justify-center rounded-2xl bg-gradient-to-br from-[#ffcbb4] via-[#e0afa0] to-[#e29578] transition group-even:-left-24 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2 dark:from-[#ddbea9] dark:via-[#b98b73] dark:to-[#6b705c] sm:flex"
              >
                <Icon className="h-28 w-28 text-white/90" />
              </div>
            )
          )}

          {!isExpanded && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-darkBg"
            />
          )}
        </section>
        <button
          type="button"
          className="justify-self-auto py-1 underline-offset-4 hover:underline"
          onClick={toggleExpand}
          aria-expanded={isExpanded}
          aria-controls={detailsId}
        >
          {isExpanded ? 'Show less' : 'Show more'}
          <span className="sr-only"> about {title}</span>
        </button>
      </div>
    </motion.div>
  );
}
