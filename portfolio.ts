import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  // SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

// Greetings Section
export const greetings: GreetingsType = {
  name: "Zulfiqar Ali",
  title: "Hi, I'm Zulfiqar",
  description:
    "I am a passionate Data Scientist with expertise in multimodal processing, deep learning, and statistical modeling. My work focuses on transformative applications in Healthcare, Autonomous Vehicles, and the Media Industry. I thrive on innovation, curiosity, and solving real-world problems with cutting-edge technology.",
  resumeLink: "https://github.com/zulfiqarAlibalti/Resume/blob/master/Resume.pdf",
};

// Open Source Section
export const openSource = {
  githubUserName: "zulfiqarAlibalti",
};

// Contact Section
export const contact = {
  email: "zulfiqar.ali01@utrgv.edu",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Avenue, Tech City, TX 75001",
};

// Social Links Section
export const socialLinks: SocialLinksType = {
  email: "mailto:zulfiqar.ali01@utrgv.edu",
  linkedin: "https://www.linkedin.com/in/zulfiqar-ali01/",
  github: "https://github.com/zulfiqarAlibalti",
  twitter: "https://twitter.com/Zulfiqa08762401",
  facebook: "https://www.facebook.com/Zulfibalti/",
  instagram: "https://www.instagram.com/zulfibalti96/?hl=en",
  youtube: "https://www.youtube.com/@InnvoAI",
};

// // Skills Section
// export const skillsSection: SkillsSectionType = {
//   title: "What I Do",
//   subTitle: "Innovative Solutions for Real-World Problems",
//   data: [
//     {
//       title: "Data Science & Machine Learning",
//       lottieAnimationFile: "/lottie/skills/analytics.json",
//       skills: [
//         emoji("🔍 Multimodal machine learning for healthcare and autonomous systems"),
//         emoji("🧠 Diffusion models, Transformers, and advanced deep learning architectures"),
//         emoji("📊 Statistical learning and time-series analysis"),
//         emoji("🩺 Biomedical imaging and signal processing"),
//       ],
//       softwareSkills: [
//         { skillName: "Python", iconifyTag: "logos:python" },
//         { skillName: "PyTorch", iconifyTag: "devicon:pytorch" },
//         { skillName: "TensorFlow", iconifyTag: "devicon:tensorflow-wordmark" },
//         { skillName: "OpenCV", iconifyTag: "skill-icons:opencv-dark" },
//         { skillName: "Machine Learning", iconifyTag: "carbon:machine-learning" },
//         { skillName: "Data Structures", iconifyTag: "carbon:data-structured" },
//       ],
//     },
//     {
//       title: "Full Stack Development",
//       lottieAnimationFile: "/lottie/skills/fullstack3.json",
//       skills: [
//         emoji("🚀 Building Generative AI applications with Next.js and Python"),
//         emoji("🌐 Developing SaaS platforms with RESTful APIs and FastAPI"),
//         emoji("💾 Implementing relational databases for secure, real-time data handling"),
//       ],
//       softwareSkills: [
//         { skillName: "JavaScript", iconifyTag: "logos:javascript" },
//         { skillName: "React", iconifyTag: "vscode-icons:file-type-reactjs" },
//         { skillName: "Next.js", iconifyTag: "vscode-icons:file-type-light-next" },
//         { skillName: "Node.js", iconifyTag: "logos:nodejs" },
//         { skillName: "PostgreSQL", iconifyTag: "logos:postgresql" },
//         { skillName: "MongoDB", iconifyTag: "vscode-icons:file-type-mongo" },
//       ],
//     },
//     {
//       title: "Cloud & DevOps",
//       lottieAnimationFile: "/lottie/skills/cloud.json",
//       skills: [
//         emoji("☁️ Deploying scalable applications on AWS and Azure"),
//         emoji("🐳 Dockerizing applications for seamless deployment"),
//         emoji("🤖 Automating workflows with GitHub Actions"),
//       ],
//       softwareSkills: [
//         { skillName: "AWS", iconifyTag: "logos:aws" },
//         { skillName: "Docker", iconifyTag: "logos:docker-icon" },
//         { skillName: "GitHub Actions", iconifyTag: "logos:github-actions" },
//         { skillName: "Azure", iconifyTag: "logos:microsoft-azure" },
//         { skillName: "Nginx", iconifyTag: "logos:nginx" },
//       ],
//     },
//   ],
// };

// Skill Bars Section
export const SkillBars: SkillBarsType[] = [
  { Stack: "Machine Learning", progressPercentage: "95" },
  { Stack: "Research & Development", progressPercentage: "90" },
  { Stack: "Next.js", progressPercentage: "85" },
  { Stack: "Python", progressPercentage: "90" },
  { Stack: "Deep Learning", progressPercentage: "90" },
];
export const educationInfo: EducationType[] = [
  {
    schoolName: "Sejong University",
    subHeader: "Graduate Research Assistant",
    duration: "September 2022 - February 2023",
    desc: "Focused on deep learning applications for biomedical imaging and 3DNet algorithms. Developed innovative solutions for medical image analysis.",
    grade: "Grade A",
  },
  {
    schoolName: "COMSATS University Islamabad",
    subHeader: "Master of Science in Applied & Computational Mathematics",
    duration: "September 2017 - August 2021",
    desc: "Specialized in Bayesian algorithms, optimization, and statistical machine learning. Completed thesis on computational methods for biomedical signal processing.",
    grade: "Grade A",
  },
];

// Experience Section
export const experience: ExperienceType[] = [
  {
    role: "Data Scientist/Analyst",
    company: "Press Information Department, Government of Pakistan",
    companyLogo: "/img/icons/common/pid.jpg",
    date: "April 2023 – Present",
    desc: "Lead data scientist responsible for developing NLP-powered audio-visual transcription systems and social media analytics platforms. Implemented computer vision models for content moderation and public sentiment analysis.",
  },
  {
    role: "Graduate Research Assistant",
    company: "Sejong University",
    companyLogo: "/img/icons/common/Sejong_University.png",
    date: "September 2022 - February 2023",
    desc: "Developed state-of-the-art deep learning models for biomedical imaging applications. Published research on 3D volumetric analysis techniques for medical diagnostics.",
  },
  {
    role: "Deep Learning Research Engineer",
    company: "NCAI SmartCity Lab",
    companyLogo: "/img/icons/common/ncai.png",
    date: "September 2021 – June 2022",
    desc: "Engineered computer vision solutions for autonomous vehicle safety systems. Implemented driver behavior prediction models using multimodal data inputs.",
  },
  {
    role: "Machine Learning Intern",
    company: "Edureka",
    companyLogo: "/img/icons/common/edureka.jpg",
    date: "June 2017 – September 2018",
    desc: "Gained hands-on experience with supervised learning algorithms through practical projects and Kaggle competitions. Developed predictive models for various business applications.",
  },
];
// Projects Section
export const projects: ProjectType[] = [
  {
    name: "Multimodal Postpartum Depression Detection",
    desc: "Developed a deep learning framework that analyzes speech, text, and physiological data to detect postpartum depression with 92% accuracy. This project has potential applications in telehealth and mental health monitoring.",
    link: "https://github.com/zulfiqarAlibalti/Multimodal-Postpartum-Depression-Detection",
  },
  {
    name: "AI-Form Builder",
    desc: "Created an AI-powered form generation tool using Next.js and Google Generative AI APIs. The platform reduces form creation time by 70% for enterprise users.",
    link: "https://ai-form-generation.vercel.app/",
  },
  {
    name: "Generative AI SaaS Platform",
    desc: "Built a comprehensive SaaS application leveraging BERT and diffusion models for various generative AI tasks. The platform supports text-to-text, text-to-image, and text-to-video generation with customizable parameters.",
    link: "https://next-genai.vercel.app/",
  },
  {
    name: "Violence Analytics Dashboard",
    desc: "Developed a web application for analyzing Twitter data related to violence extremism. Implemented advanced NLP techniques for sentiment analysis and geolocation mapping to identify patterns and hotspots.",
    link: "https://github.com/zulfiqarAlibalti/voilenceanalytics",
  },
];

// Feedback Section
export const feedbacks: FeedbackType[] = [
  {
    name: "Ajang",
    role: "Geo-Scientist",
    feedback:
      "Zulfiqar's analytical skills and teaching methods are exceptional. I learned a lot from his insights.",
  },
  {
    name: "Dr. Sarah Kim",
    role: "Professor of Biomedical Engineering",
    feedback:
      "Zulfiqar demonstrated remarkable innovation in his approach to biomedical imaging problems. His work has significantly advanced our research capabilities.",
  },
  {
    name: "Mohammed Khan",
    role: "CTO, InnvoAI",
    feedback:
      "Zulfiqar's technical expertise and ability to deliver complex AI solutions under tight deadlines has been invaluable to our team.",
  },
];

// SEO Data Section
export const seoData: SEODataType = {
  title: "Zulfiqar Ali | Data Scientist",
  description: greetings.description,
  author: "Zulfiqar Ali",
  image: "https://avatars.githubusercontent.com/u/52883632?v=4",
  url: "https://zulfiqarali.com",
  keywords: [
    "Zulfiqar Ali",
    "Data Scientist",
    "Machine Learning",
    "Deep Learning",
    "Multimodal Processing",
    "AI Developer",
    "Portfolio",
    "Computer Vision",
    "Biomedical Imaging",
    "Full Stack Developer",
  ],
};
