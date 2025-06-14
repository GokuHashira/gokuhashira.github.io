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
  DESCRIPTION: '💼My Research and Professional Experiences.',
}

// Education Page
export const EDUC: Page = {
  TITLE: 'Education',
  DESCRIPTION: 'My academic journey',
}

// Certifications Page
export const CERT: Page = {
  TITLE: 'Certifications',
  DESCRIPTION: '🥇My achievements!',
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
    start: 'Jun 2024',
    end: 'Jun 2025',
    details:[
      'Relevant Coursework: Mathematics for Computer Science, Introduction to Computer Science and Programming, Data Structure and Algorithms, Database Systems'
    ]
  },
  {
    title: 'BTech in Chemical Engineering',
    institution: 'National Institute of Technology, Rourkela',
    link: 'https://www.nitrkl.ac.in/',
    date: '2018 - 2022',
    start: 'Jun 2018',
    end: 'Jun 2022',
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
    title: " Microsoft Azure Fundamentals",
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
    issuer: "Specialization - Deeplearning.ai"
  },
  {
    date: "July 2020",
    title: "Deep Learning Specialization",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/L3KBS2WRKLXQ",
    issuer: "Specialization - Deeplearning.ai"
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
    title: 'Mathematics in Machine Learning : Principal Component Analysis',
    url: 'https://www.coursera.org/account/accomplishments/certificate/FZ62GUT2W9SH',
    issuer: 'Imperial College London'
  },
  {
    date: 'May 2021',
    title: 'Mathematics in Machine Learning : Multi-variate Calculus',
    url: 'https://www.coursera.org/account/accomplishments/certificate/34MJUPARCKK3',
    issuer: 'Imperial College London'
  },
  {
    date: 'Apr 2021',
    title: 'Mathematics for Machine Learning : Linear Algebra',
    url: 'https://www.coursera.org/account/accomplishments/certificate/ZQ65HFFTW5MJ',
    issuer: 'Imperial College London',
  },
  {
    date: 'Apr 2021',
    title: 'Financial Planning for young adults',
    url: 'https://www.coursera.org/account/accomplishments/certificate/4Z64M65TSK2R',
    issuer: 'University of Illinois',
  },
  {
    date: 'Mar 2021',
    title: 'Problem Solving with Excel',
    url: 'https://www.coursera.org/account/accomplishments/certificate/UEB78RU7TPA3',
    issuer: 'PWC',
  },
  {
    date: 'Dec 2020',
    title: 'Build Better Generative Adversarial Networks (GANs)',
    url: 'https://www.coursera.org/account/accomplishments/certificate/7DMAUT934VA6',
    issuer: 'Deeplearning.ai',
  },
  {
    date: 'Dec 2020',
    title: 'Apply Generative Adversarial Networks (GANs)',
    url: 'https://www.coursera.org/account/accomplishments/certificate/6VPWB7Q4HWEX',
    issuer: 'Deeplearning.ai',
  },
  {
    date: 'Dec 2020',
    title: 'Build Basic Generative Adversarial Networks (GANs)',
    url: 'https://www.coursera.org/account/accomplishments/certificate/6ABG4X5XXS6B',
    issuer: 'Deeplearning.ai',
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
    issuer: 'Deeplearning.ai',
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
    issuer: 'PWC',
  },
  {
    date: 'Nov 2020',
    title: 'Data Visualization with Advanced Excel',
    url: 'https://www.coursera.org/account/accomplishments/certificate/LCSJ7U8BDRCS',
    issuer: 'PWC',
  },
  {
    date: 'Sep 2020',
    title: 'Convolutional Neural Networks in TensorFlow',
    url: 'https://www.coursera.org/account/accomplishments/certificate/DGQNJVJKGWMU',
    issuer: 'Deeplearning.ai',
  },
  {
    date: 'Jul 2020',
    title: 'Sequence Models',
    url: 'https://www.coursera.org/account/accomplishments/certificate/ZZTSX7BKNJBB',
    issuer: 'Deeplearning.ai',
  },
  {
    date: 'Jul 2020',
    title: 'Introduction to Programming with MATLAB',
    url: 'https://www.coursera.org/account/accomplishments/certificate/JA3P53Y6CN9D',
    issuer: 'Vanderbuilt University',
  },
  {
    date: 'Jun 2020',
    title: 'Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization',
    url: 'https://www.coursera.org/account/accomplishments/certificate/JL9LWMNLT59L',
    issuer: 'Deeplearning.ai',
  },
  {
    date: 'Jun 2020',
    title: 'Convolutional Neural Networks',
    url: 'https://www.coursera.org/account/accomplishments/certificate/DY22Y5CY74UK',
    issuer: 'Deeplearning.ai',
  },
  {
    date: 'Jun 2020',
    title: 'Structuring Machine Learning Projects',
    url: 'https://www.coursera.org/account/accomplishments/certificate/NKUCPHNNM78F',
    issuer: 'Deeplearning.ai',
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
    issuer: 'Deeplearning.ai',
  },
  {
    date: 'May 2020',
    title: 'Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning',
    url: 'https://www.coursera.org/account/accomplishments/certificate/WKKTBNCX69QZ',
    issuer: 'Deeplearning.ai',
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
    title: 'Online Short Term Course on Data Analytics using Python',
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
    title: 'Real-time OCR and Text Detection with Tensorflow, OpenCV and Tesseract',
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
    title: 'InstructionLLM-QnA',
    description: 'Aims on building a LLM that is task specific and helpful in QnA based tasks.',
    link: 'https://github.com/GokuHashira/InstructionLLM-QnA',
    alttext: 'InstructionLLM-QnA',
    image: `${import.meta.env.BASE_URL}InstructionQA.png`,
  },
  {
    title: 'NITRKL Syllabus bot',
    description: 'A chatbot-project based on RASA and Python to showcase the syllabus and recommended books for various subjects taught at NITR.',
    link: 'https://github.com/GokulParzival/nitrkl-syllabus-bot/blob/main/README.md',
    alttext: 'NITRKL Syllabus bot',
    image: `${import.meta.env.BASE_URL}nitri_logo.png`,
  },
  {
    title: 'Detecting the best waterfall spot in TamilNadu to set up a restuarant',
    description: 'This project involves assisting a business person or a restaurant chain to find the most potential place to set up a new restaurant or branch, respectively, near any waterfall in Tamilnadu.',
    link: 'https://github.com/GokulParzival/Detecting-the-best-waterfalls-spot-in-Tamilnadu-to-set-up-a-restaurant/blob/main/Detecting%20the%20best%20waterfalls%20spot%20in%20Tamilnadu%20to%20set%20up%20a%20restaurant.ipynb',
    alttext: 'Detecting the best waterfall spot in TamilNadu to set up a restuarant',
    image: `${import.meta.env.BASE_URL}Map.png`,
  },
  {
    title: 'Exploratory Data Analysis on Student Performances',
    description: "This project involves an in-depth analysis of the student's performances based on various factors that include Gender, Ethnicity, Parental level of education, Lunch and Test preparation course.",
    link: 'https://github.com/GokulParzival/Mini-Project-on-Data-Visualization/blob/master/Data%20Science%20Mini%20Project.ipynb',
    alttext: 'Exploratory Data Analysis on Student Performances',
    image: `${import.meta.env.BASE_URL}data_analyst.jpg`,
  },
  {
    title: 'Price Estimation of Used Cars',
    description: 'Prediction of the price of used cars based on attributes like location, lifetime etc. and training them on basic ML models.',
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
    link:"https://drive.google.com/file/d/1EVPHWUTToqSwb5pwx0mWXwAwji-p5FpX/view?usp=sharing",
    skill: "C++",
  },
  {
    link:"https://learn.deeplearning.ai/accomplishments/1cfdf90c-b92c-4fa0-8405-4f43794dc6a8",
    skill: "Langchain",
  },
  {
    link:"https://www.coursera.org/account/accomplishments/certificate/DGQNJVJKGWMU",
    skill: "Tensorflow",
  },
  {
    link:"",
    skill: "Pytorch",
  },
  {
    link:"https://www.coursera.org/account/accomplishments/certificate/WJBMNXBG4YBE",
    skill: "Machine Learning",
  },
  {
    link:"https://www.coursera.org/account/accomplishments/certificate/B25S5SW3VYDK",
    skill: "Large Learning Models",
  },
  {
    link:"",
    skill: "AI",
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
    link:"",
    skill: "Docker",
  },
  {
    link:"",
    skill: "Github Actions",
  }
]
