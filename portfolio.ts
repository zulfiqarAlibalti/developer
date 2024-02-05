import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  // FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Zulfiqar Ali",
  title: "Greetings, I'm Zulfiqar",
  description:
    "An adept Data Scientist with a robust foundation in Applied and Computational Mathematics. My expertise spans Machine Learning, Deep Learning, Image Processing, and Signal Processing. I leverage Natural Language Processing to optimize outcomes and excel in developing End-to-End Machine Learning and Computer Vision applications.",
  resumeLink:
    "https://github.com/zulfiqarAlibalti/cv/blob/master/CV.pdf",
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
    "Hands-on Experience in Explainable XAI with End to End Application in Healthcare, Autonmous Vehicle and Media Industry",
  data: [
    {
      title: "Artificial Intelligence & Deep Learning",
      lottieAnimationFile: "/lottie/skills/analytics.json",
      skills: [
        emoji(
          "⚡Building Compelete System using Generative AI in media Industry"
        ),
        emoji("⚡Building End to End system with real time analytics"),
        emoji(
          "⚡Application of Transformer model in Autonoums Vehicles and Healthcare "
        ),
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
          skillName: "Machine Leanrning",
          iconifyTag: "carbon:machine-learning",
        },
        {
          skillName: "Laguage Modeling",
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
          "⚡ Creating responsive web apps using HTML, CSS, and Bootstrap4, JQueryb, Netlify, and Heroku."
        ),
        emoji(
          "⚡ Building responsive Single-Page Apps (SPA) and Progressive Web Apps (PWA) in React.js."
        ),
        emoji("⚡ Developing responsive static websites using Next.js."),
        emoji(
          "⚡ Implementing Django REST Framework and building RESTful APIs."
        ),
        emoji(
          "⚡ Utilizing WordPress to create educational websites."
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
          skillName: "WordPress",
          iconifyTag: "logos:wordpress-icon",
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
        emoji("⚡ Working on various cloud platforms to build and train Deep Learning and Computer Vision models."),
        emoji(
          "⚡ Deploying websites, hosting, and integrating databases on virtual machine instances."
        ),
        emoji(
          "⚡ Utilizing Github, Netlify, and Heroku to construct CI/CD pipelines for automated testing and deployment."
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
          skillName: "Cloudinary",
          iconifyTag: "logos:cloudinary",
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
    Stack: "Backend in Python",
    progressPercentage: "95",
  },
  {
    Stack: "Research Skill",
    progressPercentage: "90",
  },
 
  {
    Stack: "DevOps Tools",
    progressPercentage: "80",
  },
  
  {
    Stack: "Analytical Skill",
    progressPercentage: "100",
  },

  {
    Stack: "Frontend",
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
    descBullets: [
      "Conducting biomedical image analysis using Deep Learning Algorithms.",
      "Implementing Explainable Artificial Intelligence in Image reconstruction.",
      "Training and deploying Vision Transformer (ViTs) models with an End-to-End solution.",
    ], // Array of Strings
  },
  {
    schoolName: "COMSATS University Islamabad",
    subHeader: "Master of Science in Applied & Computational Mathematics",
    duration: "September 2017 - August 2021",
    desc: "Graduate Research Assistant.",
    grade: "Grade A",
    descBullets: [
      "Utilized Machine Learning algorithms for future prediction and automation in various domains.",
      "Conducted missing value analysis of large-scale datasets using state-of-the-art methodologies.",
      "Developed optimization algorithms, statistical machine learning, and deep neural networks.",
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Data Scientist/Analyst ",
    company: "Press Information Department, Government of Pakistan",
    companyLogo: "/img/icons/common/pid.jpg",
    date: "April 2023 – Present",
    desc: "Automating and processing media information using Artificial Intelligence.",
    descBullets: [
      "Conducting sentiment analysis.",
      "Analyzing content using Natural Language Processing & Machine Learning approaches.",
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
      "Conducting machine learning-based image analysis.",
    ],
  },
  {
    role: "Data Scientist & Deep Learning Researcher",
    company: "NCAI SmartCity Lab",
    companyLogo: "/img/icons/common/ncai.png",
    date: "September 2021 – June 2022",
    desc: "Application of Deep Learning in autonomous vehicles for safe driving.",
    descBullets: [
      "Predicting driver behavior using Computer Vision and Deep Learning techniques.",
      "Implementing object detection and tracking algorithms using OpenCV.",
      "Conducting headpose estimation using Tensorflow and Dlib.",
    ],
  },
  {
    role: "Graduate Research Assistant ",
    company: "Department  of Applied Mathematics Comsats University",
    companyLogo: "/img/icons/common/comsats.png",
    date: "September 2017 - August 2021 ",
    desc: "Optimization of Deep learning algorithms",
    descBullets: [
      "Principal Compenent Analysis use care in healthcare",
      "Boosting algorthms in Biosignal processing",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Edureka",
    companyLogo: "/img/icons/common/edureka.jpg",
    date: "June 2019 – Oct 2020",
    desc: "Completed projects on different open-source data using Machine Learning and Deep Learning.",
    descBullets: [
      "Conducting end-to-end Machine learning projects using Python API and Tensorflow.",
      "Analyzing PUBG Data using Python for data analysis.",
      "Building models using Supervised Learning Algorithms.",
      "Hands-on projects on various Kaggle datasets.",
    ],
  },
  
  {
    role: "Front-End Developer",
    company: "Upwork",
    companyLogo: "/img/icons/common/upwork.png",
    date: "May 2020 - May 2021",
    desc: "Developing responsive static and dynamic Web Apps using JavaScript and Python frameworks.",
    descBullets: [
      "Building Machine Learning and Computer Vision Web Applications using React.js as the frontend and Python Flask and FastAPI as the backend.",
    ],
  },
];

export const projects: ProjectType[] = [
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
  {
    name: "Python Introductory Course",
    desc: "Created a comprehensive Python course for Data Science and Mathematicians/Statisticians.",
    link: "https://example.com",
  },
  {
    name: "Essential Mathematics for Machine Learning",
    desc: "Developed a mathematical foundation behind Machine Learning and Deep learning algorithms.",
    
	
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "",
    role: "",
    feedback:
      "",
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
    "Zulfiqar",
    "Zulfiqar Ali",
    "zulfiqar-ali592",
    "zulfiqarAlibalti",
    "Portfolio",
    "Zulfiqar Portfolio ",
    "Zulfiqar Ali Portfolio",
  ],
};
