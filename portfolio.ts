import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";
import { link } from "fs";

export const greetings: GreetingsType = {
  name: "Zulfiqar Ali",
  title: "Hi, I'm Zulfiqar",
  description:
    "I am a Data Scientist and Full Stack Developer, currently contributing my expertise at the Press Information Department, Government of Pakistan, as a Data Scientist/Analyst. My passion lies in crafting cutting-edge, real-time Generative AI applications, seamlessly integrating modern React UI components on the frontend with robust backend technologies like Django and FastAPI.I have a deep-seated interest in Audio-Visual processing, with a focus on applications in Healthcare, Autonomous Vehicles, and the Media Industry. My journey is driven by curiosity, innovation, and the relentless pursuit of transformative solutions.",
  resumeLink:
    "https://github.com/zulfiqarAlibalti/Resume/blob/master/Resume.pdf",
};

export const openSource = {
  githubUserName: "zulfiqarAlibalti",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:zulfiqar.ali01@utrgv.edu",
  facebook: "https://www.facebook.com/Zulfibalti/",
  instagram: "https://www.instagram.com/zulfibalti96/?hl=en",
  twitter: "https://twitter.com/Zulfiqa08762401",
  github: "https://github.com/zulfiqarAlibalti",
  linkedin: "https://www.linkedin.com/in/zulfiqar-ali592/",
};

export const skillsSection = {
  title: "Professional Expertise",
  subTitle:
    "Intelligent and innovative solutions for real-world problems using cutting-edge technologies.",
  data: [
    {
      title: "Data Anlaytics and Machine Learning",
      lottieAnimationFile: "/lottie/skills/analytics.json",
      skills: [
        emoji("👉 Biomedical Imaging & Signal Processing "),
        emoji("👉 Text, and image generation with training BERT and  Difussion models"),
        emoji("👉 Real-time analytics with multi-media modalities"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Machine Learning",
          iconifyTag: "carbon:machine-learning",
        },
        {
          skillName: "Language Modeling",
          iconifyTag: "arcticons:openai-chatgpt",
        },
        {
          skillName: "Data Structures",
          iconifyTag: "carbon:data-structured",
        },
        {
          skillName: "PyTorch",
          iconifyTag: "devicon:pytorch",
        },
        {
          skillName: "TensorFlow",
          iconifyTag: "devicon:tensorflow-wordmark",
        },
        {
          skillName: "OpenCV",
          iconifyTag: "skill-icons:opencv-dark",
        },
      ],
    },
    
    {
      title: "Full Stack Web Development",
      lottieAnimationFile: "/lottie/skills/fullstack3.json",
      skills: [
        ,
        emoji(
          "👉 Design Generative-AI Production ready application Nextjs and Python "
        ),
        emoji(
          "👉 Building Web application with RESTFull, FASTAPI as backend"
        ),
        emoji("👉 Developing Full stack Machine learning SaaS application using OpenAI, Google Gemini APIs"),
        emoji(
          "👉 Implementing Relational database to secure real-time data in server side rendering "
        ),
        
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Redux",
          iconifyTag: "logos:redux",
        },
        {
          skillName: "NPM",
          iconifyTag: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          iconifyTag: "logos:yarn",
        },
        {
          skillName: "HTML-5",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          iconifyTag: "vscode-icons:file-type-css",
        },
        
        {
          skillName: "Yarn",
          iconifyTag: "logos:yarn",
        },
        {
          skillName: "SQL Database",
          iconifyTag: "vscode-icons:file-type-sql",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "vscode-icons:file-type-mongo",
        },
      ],
    },
    {
      title: "Cloud Computing/DevOps Tools",
      lottieAnimationFile: "/lottie/skills/cloud.json",
      skills: [
        emoji("👉 AWS ECD instances for Biomedical imaging"),
        emoji(
          "👉 Dockerized systems for local and deployment"
        ),
        emoji(
          "👉 Use APIs services to make lightweight applications"
        )
      ],
      softwareSkills: [
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "IBM",
          iconifyTag: "logos:ibm",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Azure",
          iconifyTag: "logos:microsoft-azure",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "PostgreSQL",
          iconifyTag: "logos:postgresql",
        },
        
        
        {
          skillName: "Github Actions",
          iconifyTag: "logos:github-actions",
        },
        {
          skillName: "Vercel",
          iconifyTag: "logos:vercel",
        },
        {
          skillName: "Nginx",
          iconifyTag: "logos:nginx",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Machine Learning",
    progressPercentage: "95",
  },
  {
    Stack: "Research Skill",
    progressPercentage: "90",
  },

  {
    Stack: "NextJs",
    progressPercentage: "80",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Sejong University",
    subHeader: "Graduate Rsearch Assistant",
    duration: "September 2022 - February 2023",
    desc: "",
    grade: "Grade A",
    // descBullets: [
    //   "Applying deep learning to analyze clinical images.",
    //   "Build end to end application for lung nudles segmentation.",
    //   "Conducting biomedical imaging  3DNet  Algorithms.",
    //   "Training and deploying Vision Transformer (ViTs) models with an End-to-End solution.",
    // ],// Array of Strings
  },
  {
    schoolName: "COMSATS University Islamabad",
    subHeader: "Master of Science in Applied & Computational Mathematics",
    duration: "September 2017 - August 2021",
    desc: " ",
    grade: "Grade A",
    // descBullets: [
    //   "Utilized Bayesian  algorithms in muti-classification problems .",
    //   "Conducted expected maximization algorithms on large-scale datasets using state-of-the-art methodologies.",
    //   "Developed optimization algorithms, statistical machine learning, and deep neural networks.",
    // ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Data Scientist/Analyst ",
    company: "Press Information Department, Government of Pakistan",
    companyLogo: "/img/icons/common/pid.jpg",
    date: "April 2023 – Present",
    desc: "Audio-visual transcription and analysis for real-time news monitoring.",
    descBullets: [
      "Social media analytics and predictive analysis with NLP and Machine Learning.",
      "Analyzing content using Natural Language Processing and Computer Vision.",
    ],
  },
  {
    role: "Graduate Research Assistant ",
    company: "Center for Photonic Systems, Dept. of Electrical Engineering, Sejong University",
    companyLogo: "/img/icons/common/Sejong_University.png",
    date: "September 2022 - February 2023 ",
    desc: "Working on deep architecture for Light-based imaging modality capturing real-time 2D cross-sectional and 3D volumetric images with micron-scale resolution.",
    descBullets: [
      "Applying deep learning to analyze clinical images.",
      "Build end to end application for lung nudles segmentation.",
      "Conducting biomedical imaging  3DNet  Algorithms.",
      "Training and deploying Vision Transformer (ViTs) models with an End-to-End solution.",
    ],
  },
  
  {
    role: "Deep Learning Research Engineer",
    company: "NCAI SmartCity Lab",
    companyLogo: "/img/icons/common/ncai.png",
    date: "September 2021 – June 2022",
    desc: "Application of Deep Learning in autonomous vehicles for safe driving.",
    descBullets: [
      "Predicting driver behavior using computer Vision and deep learning techniques.",
      "Implementing object detection and tracking algorithms using OpenCV.",
      "Conducting headpose estimation using Tensorflow and Dlib.",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Edureka",
    companyLogo: "/img/icons/common/edureka.jpg",
    date: "June 2017 –September 2018",
    desc: "Biomedical imaging using  machine learning and deep learning.",
    descBullets: [
      "Conducting end-to-end Machine learning projects using Python API and Tensorflow.",
      "Real time PUBG data analytics.",
      "Building models using supervised learning algorithms.",
      "Hands-on projects on various kaggle datasets.",
    ],
  },
  
  {
    role: "Full Stack Developer",
    company: "Upwork",
    companyLogo: "/img/icons/common/upwork.png",
    date: "May 2020 - May 2021",
    desc: "Developing responsive static and dynamic Web Apps using nextjs  and django.",
    descBullets: [
      "Building intelligent based Applications with React.js and Python Flask and FastAPI as the backend.",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "AI-Form Builder",
    desc: "AI-based form builder application using Nextjs and Google Generative-AI API.",
    link: "https://ai-form-generation.vercel.app/"
  },
  {
    name: "Generative AI Application",
    desc: "Text to text,Text to Image, Text to Video and Audio generation SaaS Application in Nextjs using BERT, duffion model",
    link: "https://next-genai.vercel.app/"
  },
  {
    name: "Voilence Analytics",
    desc: "Web application built with Dash and Flask, which analyzes Twitter data related to violence extremism. It includes functionalities like sentiment analysis, data visualization with Plotly, word cloud generation, and geolocation mapping",

    link: "https://github.com/zulfiqarAlibalti/voilenceanalytics"
  },
  {
    name: "Bird Species Classification",
    desc: "Bird species classification using Deep Learning, Computer Vision, and Flask",
    link: "https://github.com/zulfiqarAlibalti/bird_classification"

  },
  {
    name: "AI-news Summerizer",
    desc: "AI-based news summarizer using NLP and Machine Learning.",
    link: "https://github.com/zulfiqarAlibalti/ai-newssummarizer",

  },
  {
    name: "Audio-Visual Hate Speech Recognition",
    desc: "Hate Speech recongition on real time audio visual data with end to end application",
  },
  {
    name: "Human-emotion recongition",
    desc: "Emotion recognition and clasfication using face data",
  },
  {
    name: "Biomedical Imaging",
    desc: "Segmentation and detection of lesions using Deep Convolutional Networks.",
  },
  {
    name: "Data Science with Machine Learning Problem: A Case Study",
    desc: "Classification of children's behavioral abnormalities using Machine Learning.",
    link: "https://github.com/zulfiqarAlibalti/research-projects",
  },
  {
    name: "Sentiment Analysis",
    desc: "Analysis of sentiment in Tweets using Python API.",
    link: "https://zulfiqaralibalti.github.io/sentiment-analysis-end-to-end/",
  },
  {
    name: "AgriDeepNet",
    desc: "Recommendation system for crops and fertilizers based on soil features in real-time using Deep Neural Network architecture.",
    link: "",
  },
  {
    name: "Computer Vision",
    desc: "Development of computer vision and image processing models using OpenCV and Python.",
    link: "https://example.com",
  },
  // {
  //   name: "Python Introductory Course",
  //   desc: "Created a comprehensive Python course for Data Science and Mathematicians/Statisticians.",
  //   link: "https://example.com",
  // },
  // {
  //   name: "Essential Mathematics for Machine Learning",
  //   desc: "Developed a mathematical foundation behind Machine Learning and Deep learning algorithms.",
    
	
  // },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Ajang",
    role: "Geo-Scientist",
    feedback:
      "Your analytical is more helpful for me. I learned too much from you. Your way of instruction is so gentle",
  },
  
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Zulfiqar Ali",
  description: greetings.description,
  author: "Zulfiqar Ali",
  image: "https://avatars.githubusercontent.com/u/52883632?v=4",
  url: "",
  keywords: [
    "ذوالفقار علی",
    "Zulfiqar",
    "Zulfikar",
    "Zulfikar Ali",
    "Zulfiqar Ali",
    "zulfiqar-ali592",
    "zulfiqarAlibalti",
    "Portfolio",
    "Zulfiqar Portfolio ",
    "Zulfiqar Ali Portfolio",
  ],
};
