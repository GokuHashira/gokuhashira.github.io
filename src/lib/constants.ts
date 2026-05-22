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
  TITLE: 'Experience',
  DESCRIPTION: '💼 My research and professional experience.',
}

// Education Page
export const EDUC: Page = {
  TITLE: 'Education',
  DESCRIPTION: 'My academic journey',
}

// Certifications Page
export const CERT: Page = {
  TITLE: 'Awards & Certifications',
  DESCRIPTION: '🥇My achievements!',
}

// Publications Page
export const PUBS: Page = {
  TITLE: 'Publications',
  DESCRIPTION: 'My research publications',
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

export const PUBLICATIONS = [
  {
    title: 'Detecting and quantifying overparametrization in RNA language models with REDIAL',
    venue: 'bioRxiv',
    url: 'https://www.biorxiv.org/content/10.64898/2026.05.11.724344v1',
    date: 'May 2026',
    summary:
      'RNA foundation models are increasingly used for structure prediction and design, but downstream benchmarks can blur genuine biological learning with task-specific memorization. REDIAL addresses this with a zero-shot, unsupervised diagnostic that extracts coevolutionary signals directly from RNA language model embeddings. By probing models layer by layer, it reveals what they have internalized about RNA structure, showing that current RNA LMs are often overparameterized for available sequence diversity while structure-guided pretraining improves learned base-pair coupling signals.',
  },
  // add more...
]

// Study Page
export const STUDIES = [
  {
    title: "Master's in Applied Machine Learning",
    institution: 'University of Maryland, College Park',
    link: 'https://cmns.umd.edu/graduate/science-academy/machine-learning',
    date: '2025 - 2026',
    start: 'Aug 2025',
    end: 'Dec 2026',
    details:[
      'Relevant Coursework: Probability and Statistics, Principles of Data Science, Principles of Machine Learning'
    ]
  },
  {
    title: 'B.Tech. in Chemical Engineering',
    institution: 'National Institute of Technology, Rourkela',
    link: 'https://www.nitrkl.ac.in/',
    date: '2018 - 2022',
    start: 'Jun 2018',
    end: 'Jun 2022',
    details:[
      'Relevant Coursework: Mathematics I, II (ODEs, Matrix Theory, Vector and Differential Calculus), basic programming in C, Chemical Engineering Mathematics, Numerical Analysis'
    ]
  }
]

export const EXPERIENCE = [
  {
    company: 'Institute for Physical Science and Technology, UMD',
    location: 'College Park, USA',
    position: 'Graduate Student Assistant',
    start: 'Oct 2025',
    link: 'https://sites.google.com/site/pratyushtiwary/group#h.p_FymIi7P6-8JC',
    end: 'Ongoing',
    tasks: [
      'Working on AI for RNA.',
    ],
  },
  {
    company: 'Centre for Responsible AI, Indian Institute of Technology, Madras',
    location: 'Chennai, India',
    position: 'AI Engineer',
    start: 'Apr 2025',
    link: 'https://cerai.iitm.ac.in/',
    end: 'Aug 2025',
    tasks: [
      'Led development of "Evaluation Framework for Indian Conversational AI Applications" funded by Bill and Melinda Gates Foundation, creating the first comprehensive evaluation pipeline specifically tailored for Indian language contexts covering 100+ metrics across safety, performance, and cultural dimensions.',
      'Worked under the supervision of Sudarsun Santhiappan and collaborated with AI4Bharat for development of the framework.',
      'Designed and implemented a scalable hybrid evaluation architecture by analyzing 15+ existing frameworks and developing modular strategies that combine deterministic algorithms with LLM-as-judge approaches for superior evaluation coverage.',
      'Presented research findings at WSAI Annual Research Showcase 2025.',
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
      'Built individual document processing pipelines.',
      'Developed RAG-based solutions.',
      'Integrated the solutions using LangChain, FastAPI, AWS, and Docker.',
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
      'Worked as an ML Engineer leading the development of AWS CI/CD pipelines for an internal chatbot, earning multiple accolades; singlehandedly built an Azure-based chatbot in collaboration with Microsoft, receiving high praise from U.S. leadership. Contributions culminated in a promotion to Senior ML Engineer.',
      'Switched roles to work as a Machine Learning Engineer for the Generative AI Team at Eli Lilly, where I assisted in building RAG-based infrastructure and LLMOps in AWS; later promoted to Engineer-I in March 2024 for leading backend development of inference and indexing pipelines, delivering full ML architectures with CI/CD, deploying multiple production applications, and improving RAG efficiency. Recognized with two RISE Awards for timely execution and cross-functional collaboration across AWS, Azure, and Generative AI initiatives.',
      'Joined as an Azure Foundational Cloud Engineer, where I managed Azure infrastructure, contributed to CI/CD transitions using GitHub Actions, developed reusable Azure Bicep modules, collaborated across teams to enhance customer experience, and maintained comprehensive documentation. Achievements included securing runner-up in a Generative AI Hackathon, automating JIRA/ServiceNow integration, and completing the Azure Fundamentals Certification.',
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
      'Investigated the ability of language models such as GPT and Flan-T5 to perform task-oriented dialogue tasks.',
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
      'Explored the effectiveness of VAEs in predicting cancer-related transcription patterns in genome sequences.',
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
    company: 'Indian Space Research Organisation',
    location: 'WFH',
    position: 'Deep Learning Intern',
    start: 'Jun 2020',
    end: 'Feb 2021',
    link: 'https://www.isro.gov.in/Training.html',
    tasks: [
      'Used U-Net to build an image segmentation model to detect the land use and land cover of a region using satellite images.',
    ],
  },
]

export const CERTIFICATIONS = [
  {
    date: "Apr 2026",
    title: "Bitcamp 2026: Best Champion of Open Source w/ Featherless - Featherless",
    url: `https://devpost.com/software/agastiya`,
    issuer: "Bitcamp 2026",
  },
  {
    date: "Nov 2025",
    title: "Technica 2025: The First Light: Best Startup Track Hack Winner",
    url: `https://devpost.com/software/majka`,
    issuer: "Technica 2025",
  },
  {
    date: "May 2025",
    title: "Generative AI: Math Foundations to Multimodal Modeling",
    url: `${import.meta.env.BASE_URL}AUKBC_Certificate.pdf`,
    issuer: "AUKBC MIT",
  },
  {
    date: "May 2025",
    title: "Introduction to Large Language Models",
    url: "https://drive.google.com/file/d/1SPB-V_9xNpuNfzv6QOg4xBX4EU_G_jLB/view?usp=sharing",
    issuer: "NPTEL",
  },
  {
    date: "Nov 2024",
    title: "Credit Linked Program in Computer Science - Trimester 1",
    url: "https://drive.google.com/file/d/1EVPHWUTToqSwb5pwx0mWXwAwji-p5FpX/view?usp=sharing",
    issuer: "IIT Guwahati",
  },
  {
    date: "Sep 2024",
    title: "RISE Award Winner - Teams - Q3 2024",
    url: "",
    issuer: "Eli Lilly and Company",
  },
  {
    date: "Jun 2024",
    title: "RISE Award Winner - Teams - Q2 2024",
    url: "",
    issuer: "Eli Lilly and Company",
  },
  {
    date: "Mar 2024",
    title: "RISE Award Winner - Individual - Q1 2024",
    url: "",
    issuer: "Eli Lilly and Company",
  },
  {
    date: "Nov 2023",
    title: "Generative AI with Large Language Models",
    url: "https://www.coursera.org/account/accomplishments/certificate/B25S5SW3VYDK",
    issuer: "Amazon Web Services",
  },
  {
    date: "Jun 2023",
    title: "Generative AI Hackathon Runner Up",
    url: "https://drive.google.com/file/d/1H8OHXOHNyd9H2PJc6RWzmH-CAl72cyff/view?usp=sharing",
    issuer: "Eli Lilly and Company",
  },
  {
    date: "Dec 2022",
    title: "Microsoft Azure Fundamentals",
    url: "https://www.credly.com/badges/125d592d-4b4f-434b-8120-7271ce0e05ca",
    issuer: "Microsoft",
  },
  {
    date: "Dec 2022",
    title: "ICAgile Certified Professional",
    url: "https://www.icagile.com/credentials/9a54fc48-d5cb-48cd-93e3-1a3e975400bc",
    issuer: "ICAgile"
  },
  {
    date: "May 2021",
    title: "Mathematics in Machine Learning",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/NDCGVMJ9W8WL",
    issuer: "Specialization - Imperial College London"
  },
  {
    date: "Dec 2020",
    title: "Generative Adversarial Networks",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/7A4ZUV6RAQPA",
    issuer: "Specialization - DeepLearning.AI"
  },
  {
    date: "July 2020",
    title: "Deep Learning Specialization",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/L3KBS2WRKLXQ",
    issuer: "Specialization - DeepLearning.AI"
  },
  {
    date: "Jun 2020",
    title: "IBM Data Science Specialization",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/ZUA7K9WWR6VE",
    issuer: "Specialization - IBM"
  },
  {
    date: "Apr 2020",
    title: "Data Engineering with Google Cloud Specialization",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/KK5Q5AFFUWJ7",
    issuer: "Specialization - Google Cloud"
  },
  {
    date: 'May 2021',
    title: 'Mathematics in Machine Learning: Principal Component Analysis',
    url: 'https://www.coursera.org/account/accomplishments/certificate/FZ62GUT2W9SH',
    issuer: 'Imperial College London'
  },
  {
    date: 'May 2021',
    title: 'Mathematics in Machine Learning: Multivariate Calculus',
    url: 'https://www.coursera.org/account/accomplishments/certificate/34MJUPARCKK3',
    issuer: 'Imperial College London'
  },
  {
    date: 'Apr 2021',
    title: 'Mathematics for Machine Learning: Linear Algebra',
    url: 'https://www.coursera.org/account/accomplishments/certificate/ZQ65HFFTW5MJ',
    issuer: 'Imperial College London',
  },
  {
    date: 'Apr 2021',
    title: 'Financial Planning for Young Adults',
    url: 'https://www.coursera.org/account/accomplishments/certificate/4Z64M65TSK2R',
    issuer: 'University of Illinois',
  },
  {
    date: 'Mar 2021',
    title: 'Problem Solving with Excel',
    url: 'https://www.coursera.org/account/accomplishments/certificate/UEB78RU7TPA3',
    issuer: 'PwC',
  },
  {
    date: 'Dec 2020',
    title: 'Build Better Generative Adversarial Networks (GANs)',
    url: 'https://www.coursera.org/account/accomplishments/certificate/7DMAUT934VA6',
    issuer: 'DeepLearning.AI',
  },
  {
    date: 'Dec 2020',
    title: 'Apply Generative Adversarial Networks (GANs)',
    url: 'https://www.coursera.org/account/accomplishments/certificate/6VPWB7Q4HWEX',
    issuer: 'DeepLearning.AI',
  },
  {
    date: 'Dec 2020',
    title: 'Build Basic Generative Adversarial Networks (GANs)',
    url: 'https://www.coursera.org/account/accomplishments/certificate/6ABG4X5XXS6B',
    issuer: 'DeepLearning.AI',
  },
  {
    date: 'Dec 2020',
    title: 'Recommendation Systems with TensorFlow on GCP',
    url: 'https://www.coursera.org/account/accomplishments/certificate/RXP625NK8WUY',
    issuer: 'Google Cloud',
  },
  {
    date: 'Dec 2020',
    title: 'SQL for Data Science',
    url: 'https://www.coursera.org/account/accomplishments/certificate/DCUBM7FT9LWL',
    issuer: 'UC Davis',
  },
  {
    date: 'Dec 2020',
    title: 'Sequences, Time Series and Prediction',
    url: 'https://www.coursera.org/account/accomplishments/certificate/4AD8MU8D6HNN',
    issuer: 'DeepLearning.AI',
  },
  {
    date: 'Nov 2020',
    title: 'Introduction to Git and GitHub',
    url: 'https://www.coursera.org/account/accomplishments/certificate/S8XQTRJGA86K',
    issuer: 'Google Cloud',
  },
  {
    date: 'Nov 2020',
    title: 'Data-driven Decision Making',
    url: 'https://www.coursera.org/account/accomplishments/certificate/QGPUSARQ7YPA',
    issuer: 'PwC',
  },
  {
    date: 'Nov 2020',
    title: 'Data Visualization with Advanced Excel',
    url: 'https://www.coursera.org/account/accomplishments/certificate/LCSJ7U8BDRCS',
    issuer: 'PwC',
  },
  {
    date: 'Sep 2020',
    title: 'Convolutional Neural Networks in TensorFlow',
    url: 'https://www.coursera.org/account/accomplishments/certificate/DGQNJVJKGWMU',
    issuer: 'DeepLearning.AI',
  },
  {
    date: 'Jul 2020',
    title: 'Sequence Models',
    url: 'https://www.coursera.org/account/accomplishments/certificate/ZZTSX7BKNJBB',
    issuer: 'DeepLearning.AI',
  },
  {
    date: 'Jul 2020',
    title: 'Introduction to Programming with MATLAB',
    url: 'https://www.coursera.org/account/accomplishments/certificate/JA3P53Y6CN9D',
    issuer: 'Vanderbilt University',
  },
  {
    date: 'Jun 2020',
    title: 'Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization',
    url: 'https://www.coursera.org/account/accomplishments/certificate/JL9LWMNLT59L',
    issuer: 'DeepLearning.AI',
  },
  {
    date: 'Jun 2020',
    title: 'Convolutional Neural Networks',
    url: 'https://www.coursera.org/account/accomplishments/certificate/DY22Y5CY74UK',
    issuer: 'DeepLearning.AI',
  },
  {
    date: 'Jun 2020',
    title: 'Structuring Machine Learning Projects',
    url: 'https://www.coursera.org/account/accomplishments/certificate/NKUCPHNNM78F',
    issuer: 'DeepLearning.AI',
  },
  {
    date: 'Jun 2020',
    title: 'Data Analysis with Python',
    url: 'https://www.coursera.org/account/accomplishments/certificate/ZJVUM7UUZLK4',
    issuer: 'IBM',
  },
  {
    date: 'Jun 2020',
    title: 'Applied Data Science Capstone',
    url: 'https://www.coursera.org/account/accomplishments/certificate/G2DR9PABRXX7',
    issuer: 'IBM',
  },
  {
    date: 'Jun 2020',
    title: 'Data Visualization with Python',
    url: 'https://www.coursera.org/account/accomplishments/certificate/WJEYMSMX3H43',
    issuer: 'IBM',
  },
  {
    date: 'Jun 2020',
    title: 'Machine Learning with Python',
    url: 'https://www.coursera.org/account/accomplishments/certificate/WJBMNXBG4YBE',
    issuer: 'IBM',
  },
  {
    date: 'May 2020',
    title: 'Databases and SQL for Data Science',
    url: 'https://www.coursera.org/account/accomplishments/certificate/HJ2P4ZPPM3AE',
    issuer: 'IBM',
  },
  {
    date: 'May 2020',
    title: 'Python for Data Science and AI',
    url: 'https://www.coursera.org/account/accomplishments/certificate/QD4PAMMMFUFX',
    issuer: 'IBM',
  },
  {
    date: 'May 2020',
    title: 'Data Science Methodology',
    url: 'https://www.coursera.org/account/accomplishments/certificate/4QDW9FHU385L',
    issuer: 'IBM',
  },
  {
    date: 'May 2020',
    title: 'Tools for Data Science',
    url: 'https://www.coursera.org/account/accomplishments/certificate/UHGE2HRH87GW',
    issuer: 'IBM',
  },
  {
    date: 'May 2020',
    title: 'Neural Networks and Deep Learning',
    url: 'https://www.coursera.org/account/accomplishments/certificate/PL8CW9DR5PLL',
    issuer: 'DeepLearning.AI',
  },
  {
    date: 'May 2020',
    title: 'Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning',
    url: 'https://www.coursera.org/account/accomplishments/certificate/WKKTBNCX69QZ',
    issuer: 'DeepLearning.AI',
  },
  {
    date: 'Apr 2020',
    title: 'AWS Computer Vision: Getting Started with GluonCV',
    url: 'https://www.coursera.org/account/accomplishments/certificate/TYXLVBABHGRX',
    issuer: 'AWS',
  },
  {
    date: 'Apr 2020',
    title: 'Introduction to Data Science in Python',
    url: 'https://www.coursera.org/account/accomplishments/certificate/3ZME5TLBJ6M3',
    issuer: 'IBM',
  },
  {
    date: 'Apr 2020',
    title: 'What is Data Science?',
    url: 'https://www.coursera.org/account/accomplishments/certificate/TJGGCNGXT6UF',
    issuer: 'IBM',
  },
  {
    date: 'Apr 2020',
    title: 'Modernizing Data Lakes and Data Warehouses with GCP',
    url: 'https://www.coursera.org/account/accomplishments/certificate/L5MUTDQLGXZ9',
    issuer: 'Google Cloud',
  },
  {
    date: 'Apr 2020',
    title: 'Building Resilient Streaming Analytics Systems on GCP',
    url: 'https://www.coursera.org/account/accomplishments/certificate/P5HAT5LDMDD2',
    issuer: 'Google Cloud',
  },
  {
    date: 'Apr 2020',
    title: 'Building Batch Data Pipelines on GCP',
    url: 'https://www.coursera.org/account/accomplishments/certificate/8F7JHAXKG9KJ',
    issuer: 'Google Cloud',
  },
  {
    date: 'Apr 2020',
    title: 'Preparing for the Google Cloud Professional Data Engineer Exam',
    url: 'https://www.coursera.org/account/accomplishments/certificate/QTQFCVGBVDPL',
    issuer: 'Google Cloud',
  },
  {
    date: 'Apr 2020',
    title: 'Smart Analytics, Machine Learning, and AI on GCP',
    url: 'https://www.coursera.org/account/accomplishments/certificate/62GJPRAA8EQN',
    issuer: 'Google Cloud',
  },
  {
    date: 'Apr 2020',
    title: 'Google Cloud Platform Big Data and Machine Learning Fundamentals',
    url: 'https://www.coursera.org/account/accomplishments/certificate/JLJE4XUHEQZQ',
    issuer: 'Google Cloud',
  },
  {
    date: 'Oct 2021 - July 2022',
    title: 'Foundations of Modern Machine Learning',
    url: 'https://drive.google.com/file/d/1C-4Uw6dhaGik9G584lxwUhZx0GDnOLmE/view?usp=sharing',
    issuer: 'iHub Data - IIIT Hyderabad',
  },
  {
    date: 'Feb 2021',
    title: 'Online Short-Term Course on Data Analytics Using Python',
    url: 'https://drive.google.com/file/d/1SCC4qDiZyv_97QGOHYKFy9e8v7VRj4rI/view',
    issuer: 'National Institute of Technology, Warangal',
  },
  {
    date: '2020-2022',
    title: 'Credly Badges',
    url: 'https://www.credly.com/users/gokulakannan-sakthivel/badges',
    issuer: 'Credly',
  },
  {
    date: '2021',
    title: 'Qwiklabs - GCP',
    url: 'https://www.cloudskillsboost.google/public_profiles/fd9616ee-3e1b-425a-a806-eda63181c6a3',
    issuer: 'Google Cloud',
  },
  {
    date: '2020-2021',
    title: 'Qwiklabs - GCP',
    url: 'https://www.cloudskillsboost.google/public_profiles/29c19523-d5a6-43b5-a332-51560434fbc4',
    issuer: 'Google Cloud',
  },
  {
    date: 'Dec 2020',
    title: 'Movie Recommendation System using Collaborative Filtering',
    url: 'https://www.coursera.org/account/accomplishments/certificate/64LV574PW6ED',
    issuer: 'Coursera',
  },
  {
    date: 'Dec 2020',
    title: 'Building Recommendation System Using MXNET on AWS Sagemaker',
    url: 'https://www.coursera.org/account/accomplishments/certificate/HFQJ42HR9XXH',
    issuer: 'Coursera',
  },
  {
    date: 'Dec 2020',
    title: 'Traffic Sign Classification Using Deep Learning in Python/Keras',
    url: 'https://www.coursera.org/account/accomplishments/certificate/ANXLE6JBRVTX',
    issuer: 'Coursera',
  },
  {
    date: 'Dec 2020',
    title: 'Real-time OCR and Text Detection with TensorFlow, OpenCV, and Tesseract',
    url: 'https://www.coursera.org/account/accomplishments/certificate/9TU7LRE7NNW4',
    issuer: 'Coursera',
  },
  {
    date: 'Dec 2020',
    title: 'Create Your First Web App with Python and Flask',
    url: 'https://www.coursera.org/account/accomplishments/certificate/L9AFRBMX9WY8',
    issuer: 'Coursera',
  },
  {
    date: 'Dec 2020',
    title: 'Web Scraping with Python + BeautifulSoup',
    url: 'https://www.coursera.org/account/accomplishments/certificate/63PLPW27G7SL',
    issuer: 'Coursera',
  },
  {
    date: 'Dec 2020',
    title: 'Video Basics with OpenCV and Python',
    url: 'https://www.coursera.org/account/accomplishments/certificate/WAQA2AJ3PS9E',
    issuer: 'Coursera',
  },
  {
    date: 'Dec 2020',
    title: 'Computer Vision - Object Tracking with OpenCV and Python',
    url: 'https://www.coursera.org/account/accomplishments/certificate/R2E8RD6N9TCZ',
    issuer: 'Coursera',
  },
  {
    date: 'Dec 2020',
    title: 'Computer Vision - Image Basics with OpenCV and Python',
    url: 'https://www.coursera.org/account/accomplishments/certificate/NZGHRRXXLBAH',
    issuer: 'Coursera',
  },
  {
    date: 'Nov 2020',
    title: 'Postman - Intro to APIs',
    url: 'https://www.coursera.org/account/accomplishments/certificate/XS9J393CRJ4A',
    issuer: 'Coursera',
  }
]

export const PROJECTS_LIST = [
  {
    title: 'Routing Fidelity',
    description: 'Routing Fidelity as a Systems Metric: Characterizing Optimization-Induced Drift in MoEs',
    link: 'https://github.com/GokuHashira/RoutingDrift',
    alttext: 'Routing Fidelity as a Systems Metric',
    image: `${import.meta.env.BASE_URL}RoutingDrift.png`,
  },
  {
    title: 'Majka',
    description: 'Majka is a full-stack companion app that helps new mothers rebuild strength, track intake, and receive AI-assisted guidance.',
    link: 'https://github.com/nydhy/majka',
    alttext: 'Majka - Postpartum Companion',
    image: `${import.meta.env.BASE_URL}Majka.png`,
  },
  {
    title: 'Song Mood Detection using Spotify Dataset',
    description: 'This project uses audio features to determine the mood of songs.',
    link: 'https://github.com/GokuHashira/SpotifyProject',
    alttext: 'SongMoodDetection',
    image: `${import.meta.env.BASE_URL}SongMoodDetection.png`,
  },
  {
    title: 'SplitSmart',
    description: 'An application that helps you track expenses through natural language.',
    link: 'https://github.com/GokuHashira/GeminiHack',
    alttext: 'SplitSmart',
    image: `${import.meta.env.BASE_URL}SmartSplit.png`,
  },
  {
    title: 'AIEvaluationTool',
    description: 'AIEvaluationTool is a comprehensive, end-to-end framework designed to automate the evaluation of Indian Conversational AI systems.',
    link: 'https://github.com/cerai-iitm/AIEvaluationTool',
    alttext: 'AIEvaluationTool',
    image: `${import.meta.env.BASE_URL}Arch.jpg`,
  },
  {
    title: 'InstructionLLM-QnA',
    description: 'This project aims to build a task-specific LLM for Q&A-based tasks.',
    link: 'https://github.com/GokuHashira/InstructionLLM-QnA',
    alttext: 'InstructionLLM-QnA',
    image: `${import.meta.env.BASE_URL}InstructionQA.png`,
  },
  {
    title: 'NITRKL Syllabus Bot',
    description: 'A chatbot project based on RASA and Python that showcases the syllabus and recommended books for various subjects taught at NITR.',
    link: 'https://github.com/GokulParzival/nitrkl-syllabus-bot/blob/main/README.md',
    alttext: 'NITRKL Syllabus Bot',
    image: `${import.meta.env.BASE_URL}nitri_logo.png`,
  },
  {
    title: 'Detecting the Best Waterfall Spot in Tamil Nadu to Set Up a Restaurant',
    description: 'This project helps a business owner or restaurant chain find the most suitable location to set up a new restaurant or branch near waterfalls in Tamil Nadu.',
    link: 'https://github.com/GokulParzival/Detecting-the-best-waterfalls-spot-in-Tamilnadu-to-set-up-a-restaurant/blob/main/Detecting%20the%20best%20waterfalls%20spot%20in%20Tamilnadu%20to%20set%20up%20a%20restaurant.ipynb',
    alttext: 'Detecting the best waterfall spot in Tamil Nadu to set up a restaurant',
    image: `${import.meta.env.BASE_URL}Map.png`,
  },
  {
    title: 'Exploratory Data Analysis on Student Performance',
    description: "This project analyzes student performance across factors such as gender, ethnicity, parental level of education, lunch, and test preparation course.",
    link: 'https://github.com/GokulParzival/Mini-Project-on-Data-Visualization/blob/master/Data%20Science%20Mini%20Project.ipynb',
    alttext: 'Exploratory Data Analysis on Student Performance',
    image: `${import.meta.env.BASE_URL}data_analyst.jpg`,
  },
  {
    title: 'Price Estimation of Used Cars',
    description: 'Predicts used-car prices based on attributes such as location and vehicle age using basic ML models.',
    link: 'https://github.com/GokulParzival/Price-Estimation-of-Used-Cars',
    alttext: 'Price Estimation of Used Cars',
    image: `${import.meta.env.BASE_URL}used_car.jpg`,
  }
]

export const SKILLS = [
  {
    link:"https://www.coursera.org/account/accomplishments/certificate/QD4PAMMMFUFX",
    skill: "Python",
  },
  {
    link:"https://www.coursera.org/account/accomplishments/certificate/B25S5SW3VYDK",
    skill: "AWS",
  },
  {
    link:"https://www.credly.com/badges/125d592d-4b4f-434b-8120-7271ce0e05ca",
    skill: "Azure",
  },
  {
    link:"https://www.coursera.org/account/accomplishments/certificate/B25S5SW3VYDK",
    skill: "Large Language Models",
  },
  {
    link:`${import.meta.env.BASE_URL}AUKBC_Certificate.pdf`,
    skill: "Generative AI",
  },
  {
    link:"https://learn.deeplearning.ai/accomplishments/1cfdf90c-b92c-4fa0-8405-4f43794dc6a8",
    skill: "LangChain",
  },
  {
    link:"",
    skill: "PyTorch",
  },
  {
    link:"",
    skill: "Hugging Face",
  },
  {
    link:"https://www.coursera.org/account/accomplishments/certificate/DGQNJVJKGWMU",
    skill: "TensorFlow",
  },
  {
    link:"https://www.coursera.org/account/accomplishments/certificate/WJBMNXBG4YBE",
    skill: "Machine Learning",
  },
  {
    link:"",
    skill: "SQL",
  },
  {
    link:"",
    skill: "MongoDB",
  },
  {
    link:"",
    skill: "DevOps",
  },
  {
    link:"",
    skill: "Docker",
  },
  {
    link:"https://www.coursera.org/account/accomplishments/certificate/S8XQTRJGA86K",
    skill: "Git",
  },
  {
    link:"",
    skill: "GitHub Actions",
  },
  {
    link:"",
    skill: "DevOps",
  },
  {
    link:"https://drive.google.com/file/d/1EVPHWUTToqSwb5pwx0mWXwAwji-p5FpX/view?usp=sharing",
    skill: "C++",
  }
]
