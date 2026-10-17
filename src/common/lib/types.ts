import type { StaticImageData } from 'next/image';
import type { ComponentType } from 'react';

import { links } from './data';

export type SectionName = (typeof links)[number]['id'];

export type ProjectItem = {
  title: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
  imageUrl?: StaticImageData;
  // Shown instead of a screenshot when there is no image
  icon?: ComponentType<{ className?: string }>;
  // Shown before the "Show all projects" toggle
  featured?: boolean;
  teamSize: number | string;
  responsibilities: string[];
  startDate?: string;
  endDate?: string;
  status?: string;
  liveUrl?: string;
};

export type Skill = {
  name: string;
  // A path under /public, or an icon component
  icon: string | ComponentType<{ className?: string }>;
};

export type SkillGroup = {
  category: string;
  skills: Skill[];
};
