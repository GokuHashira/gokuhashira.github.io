import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/GokuHashira',
  linkedin: 'https://www.linkedin.com/in/gokulakannan-sakthivel',
  mail: 'mailto:gkannan.sakthi03@gmail.com',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Education Page
export const EDUC: Page = {
  TITLE: 'Education',
  DESCRIPTION: 'Places I have studied.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Micro-Credit Program in Computer Science',
    institution: 'Indian Institute of Technology, Guwahati',
    link: 'https://masaischool.com/mc-iitg-cs',
    date: '2024 -2025',
    start: 'Apr 2025',
    end: 'Apr 2025',
    details:[
      'Relevant Coursework: Mathematics for Computer Science, Introduction to Computer Science and Programming, Data Structure and Algorithms, Database Systems'
    ]
  },
  {
    title: 'BTech in Chemical Engineering',
    institution: 'National Institute of Technology, Rourkela',
    link: 'https://www.nitrkl.ac.in/',
    date: '2018 - 2022',
    start: 'Apr 2025',
    end: 'Apr 2025',
    details:[
      'Relevant Coursework: Mathematics I, II (ODEs, Matrix Theory, Vector & Differential Calculus), Basic programming in C, Chemical Engineering Mathematics, Numerical Analysis'
    ]
  }
]

export const EXPERIENCE = [
  {
    company: 'Centre for Responsible AI, Indian Institute of Technology, Madras',
    location: 'Chennai, India',
    position: 'AI Engineer',
    start: 'Apr 2025',
    link: 'https://cerai.iitm.ac.in/',
    end: 'Current',
    tasks: [
      'Developing an Evaluation Framework for Indian Conversational AI Systems',
    ],
  },
  {
    company: 'ThirdAI Automation Inc',
    location: 'WFH',
    position: 'Applied Data Scientist',
    link: 'https://www.3rdaiautomation.com/',
    start: 'Jan 2025',
    end: 'Mar 2025',
    tasks: [
      'Built induvidual document processing pipelines',
      'Developed RAG based solutions',
      'Integrated the solutions using LangChain, FastAPI, AWS and Docker',
    ],
  },
  {
    company: 'Eli Lilly and Company',
    link: 'https://www.lilly.com/in/',
    location: 'Bengaluru, India',
    position: 'Senior Machine Learning Engineer',
    start: 'Jul 2022',
    end: 'Jan 2025',
    tasks: [
      'Worked as an ML Engineer leading the development of AWS CI/CD pipelines for an internal chatbot, earning multiple accolades; singlehandedly built an Azure-based chatbot in collaboration with Microsoft, receiving high praise from U.S. leadership—contributions culminated in a promotion to Senior ML Engineer.',
      'Switched roles to work as a Machine Learning Engineer for the Generative AI Team at Eli Lilly, where I assisted in building RAG-based infrastructure and LLMOps in AWS; later promoted to Engineer-I in March 2024 for leading backend development of inference and indexing pipelines, delivering full ML architectures with CI/CD, deploying multiple production applications, and improving RAG efficiency—recognized with two RISE Awards for timely execution and cross-functional collaboration across AWS, Azure, and Generative AI initiatives.',
      'Joined as an Azure Foundational Cloud Engineer, where I managed Azure infrastructure, contributed to CI/CD transitions using GitHub Actions, developed reusable Azure Bicep modules, collaborated across teams to enhance customer experience, and maintained comprehensive documentation—achievements included securing runner-up in a Generative AI Hackathon, automating JIRA–ServiceNow integration, and completing the Azure Fundamentals Certification.',
    ],
  },
  {
    company: 'University of Liverpool',
    location: 'WFH',
    position: 'Intern - Deep Learning Researcher',
    start: 'Apr 2023',
    link: 'https://procheta.github.io/sprocheta/index.html',
    end: 'July 2023',
    tasks: [
      'Investigated the ability of Language Models like GPT/Flan-T5 on task-oriented settings like dialogue conversations.',
    ],
  },
  {
    company: 'University of California Irvine',
    location: 'WFH',
    position: 'Intern - Deep Learning Researcher',
    start: 'Jun 2021',
    link: 'https://ics.uci.edu/~jingz31/',
    end: 'Jan 2022',
    tasks: [
      'Explored the effectiveness of VAES on predicting cancerous transcriptions in Genome Sequences.',
    ],
  },
  {
    company: 'Patra Research Group - IITM',
    location: 'Chennai, India',
    position: 'Intern - Machine Learning Researcher',
    start: 'May 2021',
    link: 'https://sites.google.com/smail.iitm.ac.in/prg/members/alumni?authuser=0#h.7oykp7ttx7ee',
    end: 'Aug 2021',
    tasks: [
      'Evaluated the effectiveness of dimensionality reduction techniques like PCA on predicting the critical temperature for polymer phase transitions.',
    ],
  },
  {
    company: 'BOOKII',
    location: 'Bogotá D C, Colombia',
    position: 'Software developer',
    start: '2019',
    end: '2021',
    tasks: [
      'Productive collaborationwiththebackendteamforthecreationofthe conversationalclubs',
      'Effective coding of conversational clubs following design guide lines and using the Redux statemanager',
      'Creation of the Bookii page in Spanish and change of texts in cms',
      'Generation of static posts using Gatsby and the Contentful cms for the Bookii blog',
    ],
  },
]
