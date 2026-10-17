import type { ProjectItem, SkillGroup } from './types';

import {
  BicepsFlexed,
  BookOpenText,
  Bot,
  ClipboardList,
  Cog,
  Cpu,
  FileText,
  Fingerprint,
  GitFork,
  HandHelping,
  Handshake,
  Landmark,
  Megaphone,
  Network,
  Plug,
  Server,
  ShieldCheck,
  Shirt,
  Smartphone,
  Sparkles,
  SquareActivity,
  SquareTerminal,
  UserCheck,
  Users,
  Video,
  Wallet,
} from 'lucide-react';
import React from 'react';
import {
  SiAnthropic,
  SiDotnet,
  SiGithubcopilot,
  SiOpenai,
  SiPlaywright,
  SiSupabase,
} from 'react-icons/si';

import emberSurvivor from '@/../public/images/ember-survivor.png';
import finpal from '@/../public/images/finpal.webp';
import stockit from '@/../public/images/stockit.png';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Education',
    id: 'education',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'System Analyst',
    location: 'Central Provident Fund Board, Singapore',
    description: `Keep the CPF Board's member-facing applications reliable across
      products such as healthcare, housing and retirement. I investigate and fix
      critical production issues, maintain scheduled background services, monitor
      and assess security threats, and support testers and front-line staff with
      production queries.`,
    icon: React.createElement(SquareActivity),
    date: 'Jan 2024 – Now',
  },
  {
    title: 'Associate Tech Lead',
    location: 'Zone24x7, Colombo',
    description: `Helped lead a 53-person team building a security-critical banking
      and credit union platform. Introduced a new security layer, led the Angular 9
      to 16 upgrade, ran developer syncs and pull request reviews ahead of
      penetration tests and SonarQube audits, and planned AI-driven analysis of
      10 years of operational data.`,
    icon: React.createElement(GitFork),
    date: 'May 2023 – Dec 2023',
  },
  {
    title: 'Senior Software Engineer (Part-Time Contract)',
    location: 'Keen Mind Mobile Solutions, Colombo',
    description: `Part-time contract through Keen Mind Mobile Solutions to see two
      IronOne Technologies projects through to delivery: the garment printing
      management suite and the video consultation platform.`,
    icon: React.createElement(Handshake),
    date: 'May 2023 – Dec 2023',
  },
  {
    title: 'Senior Software Engineer',
    location: 'IronOne Technologies, Colombo',
    description: `Led the front-end team, and later both front-end and back-end
      teams, on a garment printing management suite for a major Sri Lankan apparel
      exporter, building Angular front ends and .NET Core services on Azure. Also
      customised Jitsi for a European video consultation platform, represented the
      team in client meetings and mentored junior engineers.`,
    icon: React.createElement(Cog),
    date: 'Oct 2021 – May 2023',
  },
  {
    title: 'Senior Software Engineer',
    location: 'Infosoft Lanka Pvt Ltd, Colombo',
    description: `Led a small front-end team on an API-based solution suite for an
      Australian client, owning design, development, testing and Azure DevOps
      deployments, and demonstrating each release to the product owner.`,
    icon: React.createElement(BicepsFlexed),
    date: 'Apr 2020 – Oct 2021',
  },
  {
    title: 'Software Engineer',
    location: 'Infosoft Lanka Pvt Ltd, Colombo',
    description: `Built .NET MVC applications, including a biometric suspect
      management system for a government body, where I designed the back end and
      front end and implemented the data security layer, and a fund management
      system for nearly 100,000 Sri Lanka Navy members.`,
    icon: React.createElement(Cog),
    date: 'Jul 2017 – Apr 2020',
  },
  {
    title: 'Associate Software Engineer',
    location: 'Infosoft Lanka Pvt Ltd, Colombo',
    description: `Joined part-time after my internship while completing my final
      university year. Developed features and fixed defects for a fund management
      system for Sri Lanka Navy officers, which had over 10,000 members at its
      first release.`,
    icon: React.createElement(HandHelping),
    date: 'Aug 2016 – Jul 2017',
  },
  {
    title: 'Software Engineering Trainee',
    location: 'Infosoft Lanka Pvt Ltd, Colombo',
    description: `Six-month academic internship. Rebuilt the company's desktop HR
      system as a web application with attendance, leave, employee lookup,
      company calendar and notice features.`,
    icon: React.createElement(BookOpenText),
    date: 'Feb 2016 – Jul 2016',
  },
] as const;

export const educationsData = [
  {
    title: 'BSc (Hons) in Information Technology',
    location: 'University of Moratuwa, Sri Lanka',
    description: `Graduated with a second-class degree in 2017, alongside a
      six-month industry internship at Infosoft Lanka.`,
    icon: React.createElement(SquareActivity),
    date: '2013 – 2017',
  },
] as const;

export const aiWorkflowData = [
  {
    title: 'Specs before code',
    icon: ClipboardList,
    description:
      'Every change starts as a written spec, plan and task list that the agent implements against, so the intent is reviewable before any code exists.',
    example:
      'FinPal has been built through 55 numbered GitHub Spec Kit features, from the MVP to production readiness.',
  },
  {
    title: 'One contract for every agent',
    icon: FileText,
    description:
      "A single AGENTS.md states the project's invariants for any agent, whether Claude Code or Codex. Lint rules and tests enforce the rules, so the agent can't simply ignore them.",
    example:
      'In StockIt, ESLint blocks direct table writes and any data access from components, and money is only ever exact minor units.',
  },
  {
    title: 'Gates decide when work is done',
    icon: ShieldCheck,
    description:
      'An agent reports what it built and the evidence for it. One command runs the same format, lint, type, test, build and security checks as CI.',
    example:
      'Ember Survivor runs 1,000 seeded simulation soaks and on-device performance gates before a milestone counts as passed.',
  },
  {
    title: 'Several agents, clear ownership',
    icon: Users,
    description:
      'When more than one agent works on a project, each owns specific paths, and decisions go into an append-only log so later sessions inherit the reasoning.',
    example:
      'On Ember Survivor, Codex owns simulation and performance while Claude Code owns presentation and leads integration merges.',
  },
  {
    title: 'Humans approve, code executes',
    icon: UserCheck,
    description:
      "Agents handle the creative and exploratory work. Anything with real-world effects stays deterministic in code and waits for a person's approval.",
    example:
      'The social media app drafts posts with agents, but publishing to Facebook happens only after explicit approval.',
  },
  {
    title: 'Local and cloud models',
    icon: Cpu,
    description:
      'I choose the tool for the job: Claude Code, Codex, Copilot and OpenCode with MCP tools, and local models through Ollama and LM Studio for private or offline work.',
    example:
      'Agentic workflows cover implementation, refactoring, debugging, testing and repository analysis.',
  },
] as const;

export const aiProjectsData: ProjectItem[] = [
  {
    title: 'Social Media Management App',
    role: 'Solo Developer',
    company: 'AI-Assisted Personal Project',
    status: 'In Development',
    description: `An AI-driven social media workflow, currently focused on Facebook Page automation:
      researching post ideas, drafting captions, generating media and approval-gated publishing and
      scheduling. Creative stages use reusable agent instructions, while publishing stages remain
      deterministic in code.`,
    tags: ['Node.js', 'OpenAI API', 'Meta Graph API', 'AI Agents'],
    icon: Bot,
    teamSize: 1,
    responsibilities: [
      'Research trends and competitor pages to pitch post ideas through reusable agent instructions',
      "Draft captions in each page's brand voice and generate images with the OpenAI API",
      'Approval gates before any content is generated or goes live',
      "Publish or schedule text, photo and video posts through the Meta Graph API at each page's best time",
      'Keep the creative stages agent-driven while the publishing stages stay deterministic in code',
    ],
  },
  {
    title: 'StockIt',
    role: 'Solo Developer',
    company: 'AI-Assisted Personal Project',
    status: 'In Testing',
    description: `A configurable, multi-tenant, mobile-first stock and sales platform with catalogue and
      supplier management, batch tracking, immutable inventory movements, branch-level stock, sales,
      receipts, reporting and role-based access control.`,
    tags: [
      'Angular 22',
      'TypeScript',
      'Angular Material',
      'Supabase',
      'PWA',
      'Playwright',
      'Docker',
    ],
    imageUrl: stockit,
    teamSize: 1,
    responsibilities: [
      'Multi-tenant stores and branches with default-deny row-level security and role-based access',
      'Configurable catalogue with dynamic item fields, suppliers and batch tracking',
      'Immutable inventory ledger for receiving, adjustments and FIFO batch allocation',
      'Mobile sale flow with idempotent confirmation, draft autosave and 80 mm/A4 receipts',
      'Operational reports for daily sales, stock levels and estimated gross profit with CSV export',
      'Release gates covering unit, database, accessibility and Playwright browser tests',
    ],
    liveUrl: 'https://stockit.chandimae.com',
  },
  {
    title: 'FinPal',
    role: 'Solo Developer',
    company: 'AI-Assisted Personal Project',
    status: 'In Testing',
    description: `A personal portfolio tracker for portfolio value, dividends, asset allocation, manual
      assets and net worth, with statement upload and manual transaction entry. The backend follows
      Clean Architecture with an Angular frontend.`,
    tags: [
      '.NET 9',
      'ASP.NET Core Web API',
      'EF Core',
      'Angular 19',
      'PostgreSQL',
      'Clean Architecture',
      'Playwright',
    ],
    imageUrl: finpal,
    teamSize: 1,
    responsibilities: [
      'Track portfolio value, unrealized gain/loss, cost basis and multi-currency cash balances',
      'Dividend income history with forward estimates, plus asset allocation breakdowns',
      'Broker statement upload with an import review step, and manual transaction entry',
      'Manual assets and net worth tracking',
      'Clean Architecture .NET 9 backend with deploy-time-only database migrations',
    ],
    liveUrl: 'https://finpalboard.com',
  },
  {
    title: 'Ember Survivor',
    role: 'Solo Developer',
    company: 'AI-Assisted Personal Project',
    status: 'In Development',
    description: `A portrait mobile action-survivor game with automatic combat, escalating waves, XP and
      upgrades. The project uses a deterministic, data-driven design where appropriate, together with
      automated tests, build checks and performance validation gates.`,
    tags: [
      'Godot 4.7',
      'GDScript',
      'Android',
      'gdUnit4',
      'Automated build/test tooling',
    ],
    imageUrl: emberSurvivor,
    teamSize: 1,
    responsibilities: [
      'One-thumb arena gameplay with automatic attacks, escalating waves, XP and upgrade choices',
      'Deterministic simulation, soak-tested with 1,000 seeded runs',
      'One command runs the tests and builds Windows plus signed Android APK/AAB artifacts',
      'On-device stress test of 500 enemies over five minutes as a performance gate',
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    title: 'Central Provident Fund Board',
    role: 'System Analyst',
    company: 'Central Provident Fund Board, Singapore',
    featured: true,
    description: `A large, multi-product platform that runs Singapore's provident
      fund, covering healthcare, housing, retirement and more. Different
      departments own each product; my team supports the whole application across
      all of them.`,
    tags: [
      '.NET Core',
      'Microservices',
      'Windows Services',
      'Azure Cloud',
      'Azure DevOps',
      'Angular',
      'MS SQL',
      'SonarQube',
    ],
    icon: Landmark,
    teamSize: 10,
    responsibilities: [
      'Investigate and fix critical production defects quickly to keep member-facing services available',
      'Maintain scheduled jobs and other background services in daily operation',
      'Monitor security threats against the system and assess their impact',
      'Fix non-production defects so internal users can test new releases without blockers',
      'Support testers, cross-functional teams and front-line staff with production queries from CPF members',
    ],
    startDate: 'Jan 2024',
    endDate: 'Now',
  },
  {
    title: 'Banking and Credit Union System',
    role: 'Associate Tech Lead',
    company: 'Zone24x7, Colombo',
    featured: true,
    description: `A security-critical platform for a banking and credit union client,
      covering appointments, lobby assistance, data analysis and detailed
      per-employee reporting. Regular penetration tests and SonarQube audits shaped
      every change.`,
    tags: [
      '.NET Core',
      'Ocelot',
      'CQRS',
      'RabbitMQ',
      'Azure DevOps',
      'Angular',
      'MS SQL',
      'SonarQube',
    ],
    icon: ShieldCheck,
    teamSize: 53,
    responsibilities: [
      'Introduced a new security layer to prevent data breaches',
      'Upgraded the front end from Angular 9 to 16, closing security gaps and giving a smoother application',
      'Implemented core business logic and supported the team leads in running a 53-person team',
      'Ran regular developer syncs and unblocked developers on the tech stack',
      'Reviewed pull requests for code quality and for issues that would fail penetration tests or security audits',
      'Planned AI-driven analysis and predictive models over about 10 years of collected data',
    ],
    startDate: 'May 2023',
    endDate: 'Dec 2023',
  },
  {
    title: 'Garment Factory Management and Printing System',
    role: 'Senior Software Engineer',
    company: 'IronOne Technologies and Keen Mind Mobile Solutions, Colombo',
    featured: true,
    description: `A cloth printing management suite for a leading Sri Lankan apparel
      exporter, covering the whole flow from designers creating artwork to the
      warehouse that prints it and sends it to distribution.`,
    tags: [
      '.NET Core',
      'Azure AD',
      'Azure Service Bus',
      'Azure Functions',
      'Azure DevOps',
      'Angular',
      'MS SQL',
    ],
    icon: Shirt,
    teamSize: 12,
    responsibilities: [
      'Led the front-end team, and later both front-end and back-end teams, including client meetings',
      'Designed the front-end architecture and state management, and built the Angular 13 front end',
      'Built .NET Core services with Azure Functions, Azure Service Bus and Swagger documentation',
      'Managed the Azure cloud resources for the project',
      'Reviewed code for junior developers and colleagues',
    ],
    startDate: 'Oct 2021',
    endDate: 'Dec 2023',
  },
  {
    title: 'Video Consultation Platform',
    role: 'Senior Software Engineer',
    company: 'IronOne Technologies and Keen Mind Mobile Solutions, Colombo',
    featured: true,
    description: `A video consultation platform for a European healthcare brand.
      Consultants run subscription-based video sessions with patients, record
      session events and progress, and manage everything from a role-based
      dashboard.`,
    tags: [
      'Node.js',
      'Cognito',
      'React',
      'Angular',
      'Docker',
      'Jitsi',
      'MySQL',
    ],
    icon: Video,
    teamSize: 9,
    responsibilities: [
      "Customised the Jitsi Meet app to the client's requirements",
      'Built a new Angular 12 dashboard for the organisational structure and business settings',
      'Debugged and fixed issues in the Node.js back end',
      'Supported the client with custom app configurations',
    ],
    startDate: 'Jan 2022',
    endDate: 'Dec 2023',
  },
  {
    title: 'Brand Ambassador Platform',
    role: 'Senior Software Engineer',
    company: 'IronOne Technologies, Colombo',
    description: `A platform for a well-known Australian beauty care brand to
      share plans and information with its brand ambassadors, assign their tasks
      and track progress.`,
    tags: ['.NET Core', 'Angular', 'Cognito', 'Flutter', 'MySQL'],
    icon: Megaphone,
    teamSize: 12,
    responsibilities: ['Built back-end features with .NET Core'],
    startDate: 'Jul 2022',
    endDate: 'Dec 2022',
  },
  {
    title: 'An API-Based Solution Collection',
    role: 'Software Engineer / Senior Software Engineer',
    company: 'Infosoft Lanka Pvt Ltd, Colombo',
    description: `A suite of API-based tools for an Australian client, including
      agriculture and farming tools, questionnaire builders, a content management
      system and healthcare tools. The API was the product; we also built an
      Angular front end for testing, proofs of concept and demos.`,
    tags: [
      '.NET Framework',
      'Azure Cloud',
      'Angular',
      'Azure DevOps',
      'OrientDB',
    ],
    icon: Network,
    teamSize: 6,
    responsibilities: [
      'Led a small front-end team and built the Angular 8 front end',
      'Handled Azure DevOps deployments for each planned release',
      'Demonstrated completed features to the client and product owner on UAT',
    ],
    startDate: 'Aug 2019',
    endDate: 'Sep 2021',
  },
  {
    title: 'Suspect Management System',
    role: 'Software Engineer',
    company: 'Infosoft Lanka Pvt Ltd, Colombo',
    description: `A web application for an authorised government body, deployed at
      sensitive locations to record and identify possible suspects with biometric
      methods, including hardware infrastructure support.`,
    tags: [
      '.NET MVC',
      'Entity Framework',
      'jQuery',
      'Semantic UI',
      'Biometrics',
      'MySQL',
    ],
    icon: Fingerprint,
    teamSize: 4,
    responsibilities: [
      'Designed and built both the back end and the front end with .NET MVC',
      'Developed the suspect recording and biometric search features',
      'Built the front end with Semantic UI and JavaScript',
      'Implemented a data security layer protecting the collected data and the infrastructure',
    ],
    startDate: 'Apr 2018',
    endDate: 'Dec 2019',
  },
  {
    title: 'Fund Management System: Large Scale',
    role: 'Associate Software Engineer / Software Engineer',
    company: 'Infosoft Lanka Pvt Ltd, Colombo',
    description: `A fund management system for the Sri Lanka Navy's other ranks,
      serving nearly 100,000 active users and their financial accounts at
      deployment. It extended the officers' system with different policy, logic
      and security requirements.`,
    tags: ['.NET MVC', 'Entity Framework', 'jQuery', 'Bootstrap', 'MS SQL'],
    icon: Wallet,
    teamSize: 10,
    responsibilities: [
      'Built application features with .NET MVC 5 and Entity Framework',
      'Delivered the financial use cases within the scope of the application',
      'Built the front end with Bootstrap and jQuery',
    ],
    startDate: 'Jan 2017',
    endDate: 'Jan 2018',
  },
  {
    title: 'Fund Management System: Medium Scale',
    role: 'Associate Software Engineer',
    company: 'Infosoft Lanka Pvt Ltd, Colombo',
    description: `A fund management system for Sri Lanka Navy officers, with over
      10,000 members registered at first release. It handled monthly and annual
      contributions, account balancing, pay records, loans and synchronisation
      with banking APIs.`,
    tags: ['.NET MVC', 'Entity Framework', 'jQuery', 'Bootstrap', 'MS SQL'],
    icon: Wallet,
    teamSize: 10,
    responsibilities: [
      'Developed features in the .NET MVC application',
      'Built the front end with Bootstrap and jQuery',
    ],
    startDate: 'Jul 2016',
    endDate: 'Jan 2017',
  },
  {
    title: 'HR Management System',
    role: 'Trainee Software Engineer',
    company: 'Infosoft Lanka Pvt Ltd, Colombo',
    description: `A compact HR management system for Infosoft Lanka, replacing an
      old desktop application with attendance, employee lookup, leave, company
      calendar, branch and notice features.`,
    tags: ['.NET MVC', 'Entity Framework', 'jQuery', 'Bootstrap', 'MS SQL'],
    icon: Users,
    teamSize: 3,
    responsibilities: [
      'Analysed the existing desktop application and its requirements',
      'Rebuilt it as a web application with .NET MVC',
      'Added new features requested by stakeholders',
    ],
    startDate: 'Feb 2016',
    endDate: 'Jul 2016',
  },
];

export const skillsData: SkillGroup[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'C#', icon: '/svgs/c--4.svg' },
      { name: 'TypeScript', icon: '/svgs/typescript-icon.svg' },
      { name: 'JavaScript', icon: '/svgs/javascript-js.svg' },
      { name: 'HTML', icon: '/svgs/html-5-svgrepo-com.svg' },
      { name: 'CSS', icon: '/svgs/file-type-css.svg' },
      { name: 'SQL', icon: '/svgs/db-table-svgrepo-com.svg' },
    ],
  },
  {
    category: 'Backend & Data',
    skills: [
      { name: '.NET / .NET Core', icon: '/svgs/dotnet.svg' },
      { name: 'Entity Framework', icon: SiDotnet },
      { name: 'MS SQL', icon: '/svgs/mssql.svg' },
      { name: 'MySQL', icon: '/svgs/MySQL.svg' },
      { name: 'PostgreSQL', icon: '/svgs/postgresql.svg' },
      { name: 'Firebase & Firestore', icon: '/svgs/firebase-1.svg' },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'Node.js', icon: '/svgs/node-js.svg' },
      { name: 'RabbitMQ', icon: '/svgs/rabbitmq-icon-svgrepo-com.svg' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'Angular', icon: '/svgs/angular-icon.svg' },
      { name: 'React', icon: '/svgs/react.svg' },
      { name: 'Material UI', icon: '/svgs/material.svg' },
      { name: 'Ant Design', icon: '/svgs/ant-design-2.svg' },
      { name: 'Semantic UI', icon: '/svgs/semantic-ui.svg' },
      { name: 'Tailwind', icon: '/svgs/tailwind-css.svg' },
      { name: 'Ionic', icon: Smartphone },
      { name: 'AEM', icon: '/svgs/adobe-experience-manager.svg' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'Azure Cloud', icon: '/svgs/azure-2.svg' },
      { name: 'Azure DevOps', icon: '/svgs/azure-1.svg' },
      { name: 'Google Cloud', icon: '/svgs/google-cloud-1.svg' },
      { name: 'Docker', icon: '/svgs/Docker.svg' },
      { name: 'Git', icon: '/svgs/git.svg' },
      { name: 'Playwright', icon: SiPlaywright },
      { name: 'VPS Management', icon: Server },
    ],
  },
  {
    category: 'AI-Assisted Development',
    skills: [
      { name: 'Claude Code', icon: SiAnthropic },
      { name: 'OpenAI Codex / ChatGPT', icon: SiOpenai },
      { name: 'GitHub Copilot', icon: SiGithubcopilot },
      { name: 'OpenCode', icon: SquareTerminal },
      { name: 'MCP Tools', icon: Plug },
      { name: 'Ollama & LM Studio', icon: Cpu },
      { name: 'Agentic Workflows', icon: Bot },
      { name: 'OpenAI API', icon: SiOpenai },
      { name: 'Generative AI', icon: Sparkles },
    ],
  },
];
