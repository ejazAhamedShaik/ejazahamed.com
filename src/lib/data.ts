export const siteConfig = {
  name: 'Ejaz Ahamed Shaik',
  shortName: 'Ejaz Ahamed',
  title: 'Ejaz Ahamed — Full Stack Engineer',
  description:
    'Full Stack Engineer with 4.7+ years of enterprise experience building scalable web products with React, Next.js, TypeScript, Node.js, and MongoDB.',
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
  headline: 'Full stack engineer building scalable products with thoughtful frontend craft.',
  subheadline:
    '4.7+ years building enterprise products with React, Next.js, TypeScript, Node.js, and MongoDB. I use AI-assisted workflows to cut design-to-development time by 35–45%.',
}

export const about = {
  paragraphs: [
    "I'm a Full Stack Engineer with 4.7+ years of enterprise experience building products for multi-region users, with complex role-based access and high expectations for performance and reliability.",
    'I integrate Claude Code, Codex, and the Figma MCP server into design-to-development workflows, reducing cycle time by 35–45% while maintaining enterprise code quality. I have led frontend delivery, mentored developers, and shipped from planning through production in distributed teams.',
    "I care deeply about ownership, clean architecture, and the user on the other side of the screen. I write code as if the next engineer — and the next user — matters.",
  ],
  traits: [
    'Product-minded',
    'Enterprise experience',
    'Remote-native',
    'AI-assisted development',
    'Cross-timezone collaboration',
    'Mentoring & code reviews',
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
  {
    name: 'AI-assisted development',
    skills: ['Claude Code', 'Codex', 'Figma MCP server', 'Component generation', 'Code review workflows'],
  },
  {
    name: 'Testing & delivery',
    skills: ['Jest', 'React Testing Library', 'Storybook', 'Azure CI/CD', 'Git'],
  },
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
      'A MERN e-commerce platform focused on secure checkout, responsive product search, and real-time customer communication.',
    tech: ['Node.js', 'Express', 'MongoDB', 'React', 'WebSockets', 'JWT', 'Razorpay'],
    highlights: [
      'Applied MVC and factory patterns to improve code organization and development efficiency by ~20%.',
      'Added JWT authentication, Razorpay payments, and email OTP verification for account and transaction security.',
      'Optimized MongoDB product-search queries and added WebSocket communication for responsive customer interactions.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/ejazAhamedShaik' },
    ],
  },
  {
    name: 'Salary Management System',
    description:
      'A full-stack payroll and employee reporting tool with country-aware totals, department insights, and outlier detection across 10,000 employee records.',
    highlights: [
      'Built employee CRUD workflows and aggregation-based reports for currency-normalized payroll totals and country and department averages.',
      'Designed a focused React + Vite frontend and layered Express API for an authenticated internal tool.',
      'Added SQLite auto-reseed startup logic to keep deployments predictable on ephemeral storage.',
      'Kept changes reviewable with isolated frontend and backend tests and scoped AI-assisted development.',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/ejazAhamedShaik/ACME-Salary-Management-System' },
      { label: 'Live app', href: 'https://salary-management-system-drab.vercel.app/' },
      { label: 'Demo', href: 'https://youtu.be/G3muR_T2Oa8' },
    ],
    tech: ['React', 'Vite', 'TypeScript', 'Ant Design', 'TanStack Query', 'Node.js', 'Express', 'Drizzle ORM', 'SQLite', 'Zod'],
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
