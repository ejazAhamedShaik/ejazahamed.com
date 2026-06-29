export const siteConfig = {
  name: 'Ejaz Ahamed Shaik',
  shortName: 'Ejaz Ahamed',
  title: 'Ejaz Ahamed — Full Stack Engineer',
  description:
    'Full Stack Engineer with 4.7+ years of enterprise experience building scalable web products with React, Next.js, TypeScript, and Node.js.',
  url: 'https://ejaz-ahamed.dev',
  email: 'shaik.ejaz.dev@gmail.com',
  location: 'Bengaluru, India',
  linkedin: 'https://linkedin.com/in/ejaz-ahamed-shaik',
  github: 'https://github.com/ejazAhamedShaik',
  availability: 'Open to remote · US · Europe · Canada · Australia · Middle East · India',
}

export const hero = {
  label: 'Full Stack Engineer',
  name: 'Ejaz Ahamed',
  headline: 'I build scalable web products and ship faster with AI-augmented workflows.',
  subheadline:
    '4.7+ years of enterprise experience across React, Next.js, TypeScript, and Node.js.',
}

export const about = {
  paragraphs: [
    "I'm a Full Stack Engineer who has spent the last 4.7+ years building enterprise-grade web products — platforms that serve multi-region users, manage complex role-based access, and demand both performance and reliability.",
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
      'Cut design-to-development time by ~35–45% by integrating Claude Code, Codex, and the Figma MCP server into the component pipeline — enabling faster Figma-to-React conversion at enterprise quality.',
      'Boosted frontend team productivity by ~30% and reduced legacy UI duplication by ~40% by defining reusable architectural patterns and refactoring monolithic interfaces into modular, testable React/TypeScript modules.',
      'Led end-to-end delivery of two enterprise modules (EWS and Innovation Portal), owning planning, role/region-based access, test baselines, code reviews, and mentoring 3 developers.',
      'Improved performance across complex enterprise flows through memoization, lazy loading, code splitting, and Redux state optimization — enhancing UX for multi-region users.',
    ],
  },
  {
    role: 'Software Development Engineer',
    company: 'Infosys',
    period: 'Nov 2021 – Jun 2024',
    current: false,
    location: 'Bengaluru, India',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Zustand', 'Azure CI/CD', 'Storybook', 'WebSockets'],
    highlights: [
      'Increased user satisfaction by ~25% by translating Figma designs into pixel-perfect, accessible React/Next.js interfaces — reducing UI bug reports and tightening design-development alignment.',
      'Improved development efficiency by ~40% and reduced UI defects by building a reusable component library with Storybook docs and custom React hooks, adopted across multiple teams.',
      'Eliminated frontend delivery blockers by developing lightweight Node.js/Express mock APIs and implementing real-time WebSocket notifications, enabling on-time Azure CI/CD deployments.',
      'Recognized with the Rookie of the Unit award and Outstanding Performance rating for early impact and project delivery excellence.',
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
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Redux', 'Zustand', 'Context API', 'WebSockets', 'HTML5', 'CSS3'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'JWT', 'MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    name: 'Testing & Quality',
    skills: ['Jest', 'React Testing Library', 'Storybook', 'Unit Testing', 'Integration Testing'],
  },
  {
    name: 'AI Dev Tooling',
    skills: ['Claude Code', 'Codex', 'Figma MCP Server', 'AI Component Generation', 'AI Code Review'],
  },
  {
    name: 'DevOps & Tooling',
    skills: ['Git', 'Azure CI/CD', 'Ant Design', 'Async Collaboration'],
  },
]

export type Project = {
  name: string
  description: string
  tech: string[]
  highlights: string[]
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
  },
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
