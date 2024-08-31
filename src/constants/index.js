import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am currently a final-year student majoring in Information Technology.
My short-term goal is to become a skilled and experienced Fullstack developer, proficient in crafting robust and scalable web applications.
My long-term goal is to become a Project Manager who can leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const EDUCATION = {
  university: "HaNoi University of Science and Technology",
  major: "Vietnam-Japan Information Technology (HEDSPI)",
  cpa: "3.03",
  graduationDate: "07/2025",
};

export const LANGUAGE_PROFICIENCY = {
  japanese: "N3 (07/2023)",
  english: "Document comprehension and basic communication",
};

export const OTHER_CERTIFICATIONS = {
  spring: "[Udemy] Spring Boot 3, Spring 6 & Hibernate for Beginners",
  mysql: "[Udemy] The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
  problem_solving: "[HackerRank] Problem Solving (Intermediate)",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/quyetdaika",
  slack: "https://app.slack.com/client/T02QFU9TCTD/D05JL21JNT0",
};

export const EXPERIENCES = [
  {
    year: "06/2024 - Present",
    role: "Intern Full Stack Developer",
    company: "Koolsoft Inc.",
    description: `Participate in the development of a University management project . Build the interface on the client-side and write algorithms and APIs on the server-side. Modules involved: class division, admission statistics, exam score sheet,...`,
    technologies: ["GWT", "Spring", "Bootstrap", "Google Datastore"],
  },
  
];

export const PROJECTS = [
  {
    title: "Book Store",
    image: project1,
    type: "Personal Project",
    description:
      "A multiple functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "JavaScript", "JSP", "Servlet", "MySQL"],
    detail: "https://github.com/quyetdaika/BookStore",
  },
  {
    title: "Portfolio Website",
    type: "Personal Project",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    detail: "",
  },
  {
    title: "KPI Management App",
    type: "UIUX Course Project. Role: Team lead - design desktop version",
    image: project3,
    description:
      "Design UI&UX of an application for managing tasks and KPI, with features such as task creation, assignment, and progress tracking. Project for UIUX course. Proficient in using prominent features of Figma such as Auto Layout, Variants, Instances,...",
    technologies: ["Figma"],
    detail: "https://www.figma.com/proto/pJxpn5bQurKmz1DARUmHKG/Colored?node-id=876-8553&t=tXeoy9V7MDKaR24G-1&scaling=contain&content-scaling=fixed&page-id=60%3A2&starting-point-node-id=876%3A8553&show-proto-sidebar=1"
  },
  {
    title: "Collecting and Analyzing NFTs",
    type: "OOP Course Project. Role: Team lead - design packages, crawl data, handle data.",
    image: project4,
    description:
      "Collect data on NFTs and articles related to them, from which statistics and analysis are derived. Purpose : Practice object-oriented programming skills",
    technologies: ["Java", "Java Swing", "Selelium", "GSon"],
    detail: "https://github.com/quyetdaika/OOP_Project_Group2_new"
  },
];

export const CONTACT = {
  address: "Thanh Xuan, Hanoi, Vietnam",
  phoneNo: "+84 888 29 04 03 ",
  email: "official.nvq@gmail.com",
};
