export const siteConfig = {
  name: 'Ejaz Ahamed Shaik',
  shortName: 'Ejaz Ahamed',
  title: 'Ejaz Ahamed — Full Stack Engineer',
  description:
    'Full Stack Engineer with 5 years of enterprise experience building scalable web products with React, Next.js, TypeScript, Node.js, and MongoDB.',
  url: 'https://ejaz-ahamed.dev',
  email: 'shaik.ejaz.dev@gmail.com',
  location: 'Bengaluru, India',
  linkedin: 'https://linkedin.com/in/ejaz-ahamed-shaik',
  github: 'https://github.com/ejazAhamedShaik',
  availability: 'Remote worldwide · On-site: Europe · UK · Middle East · Singapore · Australia · New Zealand · India',
}

export const hero = {
  label: 'Full Stack Engineer',
  name: 'Ejaz Ahamed',
  headline: 'I build scalable web products and ship faster with AI-augmented workflows.',
  subheadline:
    '5 years of enterprise experience across React, Next.js, TypeScript, Node.js, and MongoDB.',
}

export const about = {
  paragraphs: [
    "I'm a Full Stack Engineer who has spent the last 5 years building enterprise-grade web products — platforms that serve multi-region users, manage complex role-based access, and demand both performance and reliability.",
    'What separates my workflow is how I use AI tooling. I\'ve integrated Claude Code, Codex, and the Figma MCP server into my daily engineering process, cutting design-to-development cycles by 35–45% without sacrificing code quality. I\'ve led frontend teams, mentored developers, and delivered from greenfield to production in distributed, async environments.',
    "I care deeply about ownership, clean architecture, and the user on the other side of the screen. I write code as if the next engineer — and the next user — matters.",
  ],
  traits: [
    'Product-minded',
    'Enterprise experience',
    'Remote-native',
    'AI-augmented workflows',
    'Cross-timezone collaboration',
    'Frontend leadership',
  ],
}

export type ExperienceItem = {
  role: string
  company: string
  period: string
  current: boolean
  location: string
  tech: string[]
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Senior Engineer',
    company: 'Altimetrik',
    period: 'Jul 2024 – Present',
    current: true,
    location: 'Bengaluru, India (Remote-capable)',
    tech: ['React', 'TypeScript', 'Redux', 'Ant Design', 'Jest', 'React Testing Library', 'Claude Code', 'Codex', 'Node.js'],
    highlights: [
      'Reduced design-to-development time by ~35–45% by integrating Claude Code and Codex into the component generation pipeline and configuring the Figma MCP server in VS Code, enabling faster Figma-to-React conversion while maintaining enterprise code quality standards.',
      'Improved frontend team productivity by ~30% and cut legacy UI duplication by ~40% by defining reusable architectural patterns — masonry layouts, dynamic selects, configurable components — and refactoring monolithic interfaces into modular, testable React/TypeScript modules, enabling faster parallel development across 3+ engineers.',
      'Led end-to-end delivery of two key enterprise modules (EWS and Innovation Portal) by owning planning, role/region-based access control, Jest/RTL test baselines, code reviews, and mentoring 3 developers — improving release stability and QA pass rates across multi-region users.',
      'Improved performance across complex enterprise flows by implementing memoization, lazy loading, code splitting, Redux state optimization, and component-level rendering improvements, enhancing UX for multi-region, role-based users.',
    ],
  },
  {
    role: 'Software Development Engineer',
    company: 'Infosys',
    period: 'Nov 2021 – Jun 2024',
    current: false,
    location: 'Bengaluru, India',
    tech: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'Context API', 'Zustand', 'Azure CI/CD', 'Storybook'],
    highlights: [
      'Increased user satisfaction by ~25% by translating Figma designs into pixel-perfect, accessible React.js and Next.js interfaces using TypeScript and Tailwind CSS, reducing UI-related bug reports and improving design-development alignment.',
      'Improved development efficiency by ~40% and reduced UI defects by building a reusable component library with Storybook documentation and custom React hooks, establishing a consistent frontend standard adopted across multiple project teams.',
      'Eliminated frontend delivery blockers by developing lightweight Node.js/Express.js mock APIs for parallel frontend development and implementing real-time notifications via WebSockets, supporting on-time Azure CI/CD deployments across Dev and UAT environments.',
    ],
  },
]

export type SkillCategory = {
  name: string
  skills: string[]
}

export const skills: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['React.js', 'Next.js (SSR/SSG)', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Ant Design', 'Redux', 'Zustand', 'HTML5', 'CSS3'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'MongoDB'],
  },
  {
    name: 'Architecture & Quality',
    skills: ['Component architecture', 'State management', 'Performance optimization', 'Jest', 'React Testing Library', 'Storybook'],
  },
  // {
  //   name: 'AI Dev Tooling',
  //   skills: ['Claude Code', 'Codex', 'Figma MCP Server (VS Code)', 'AI-Assisted Component Generation', 'Code Review & Refactoring Workflows'],
  // },
  // {
  //   name: 'DevOps & Collaboration',
  //   skills: ['Git', 'Azure CI/CD', 'Async Remote Collaboration', 'Cross-Timezone Communication'],
  // },
]

export type Project = {
  name: string
  description: string
  tech: string[]
  highlights: string[]
  links?: {
    label: string
    href: string
  }[]
}

export const projects: Project[] = [
  {
    name: 'E-Commerce Full Stack App',
    description:
      'A production-grade MERN e-commerce platform with secure authentication, real-time capabilities, and a complete payment integration.',
    tech: ['Node.js', 'Express', 'MongoDB', 'React', 'WebSockets', 'JWT', 'Razorpay'],
    highlights: [
      'Architected with MVC and factory patterns — improving code organisation and development efficiency by ~20%.',
      'Implemented JWT authentication, Razorpay payment gateway, and email OTP verification for secure user access and financial transactions.',
      'Optimised MongoDB queries for product search and added WebSocket-based real-time communication for enhanced scalability.',
    ],
    links: [
      { label: 'GitHub', href: '' },
      { label: 'Live app', href: '' },
      { label: 'Demo', href: '' },
    ],
  },
  {
    name: 'Salary Management System',
    description:
      'An internal salary management platform for tracking employee records, payroll totals, and reporting across countries, built as a full-stack React and Node.js application with a focus on clean architecture and reliable deployment.',
    highlights: [
      'Designed the stack intentionally with React + Vite on the frontend and a hand-layered Express backend instead of defaults like Next.js or NestJS, keeping the architecture lightweight and well matched to an auth-gated internal tool.',
      'Built auto-reseed startup logic to make SQLite safe on Render\'s free tier, turning ephemeral storage into a predictable deployment pattern without changing databases unnecessarily.',
      'Implemented CRUD workflows plus aggregation-based reporting for currency-normalised payroll totals, department and country averages, and outlier detection across 10,000 employee records.',
      'Used test-driven, scoped AI-assisted development with isolated backend and frontend tests, no real network calls, and a disciplined commit history to keep the project maintainable and reviewable.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/ejazAhamedShaik/ACME-Salary-Management-System' },
      { label: 'Live app', href: 'https://salary-management-system-drab.vercel.app/' },
      { label: 'Demo', href: 'https://youtu.be/G3muR_T2Oa8' },
    ],
    tech: ['React', 'Vite', 'TypeScript', 'Ant Design', 'TanStack Query', 'Node.js', 'Express', 'Drizzle ORM', 'SQLite', 'Zod', 'Vercel', 'Render'],
  }
]

export type EducationItem = {
  degree: string
  institution: string
  period: string
  highlights?: string[]
}

export const education: EducationItem[] = [
  {
    degree: 'Software Engineering Professional Certificate',
    institution: 'Scaler Academy',
    period: '2022 – 2024',
    highlights: [
      'Data Structures & Algorithms',
      'Database Management Systems (MySQL)',
      'Low-Level Design',
      'High-Level Design',
      'Full-Stack Capstone Project',
    ],
  },
  {
    degree: 'Bachelor of Technology (B.Tech)',
    institution: 'JNTU Anantapur',
    period: '2017 – 2021',
  },
]

export type Certification = {
  name: string
  issuer?: string
  type: 'award' | 'certification'
}

export const certifications: Certification[] = [
  {
    name: 'Rookie of the Unit & Outstanding Performance',
    issuer: 'Infosys',
    type: 'award',
  },
  {
    name: 'Python for Data Science & AI',
    issuer: 'IBM',
    type: 'certification',
  },
  {
    name: 'Developing AI Applications with Python & Flask',
    type: 'certification',
  },
  {
    name: 'Introduction to Generative AI for Software Development',
    type: 'certification',
  },
  {
    name: 'Generative AI: Prompt Engineering Basics',
    type: 'certification',
  },
]
