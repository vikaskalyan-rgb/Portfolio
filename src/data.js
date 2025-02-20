import html from "../public/images/skills/html.png";
import css from "../public/images/skills/css.png";
import javaScript from "../public/images/skills/javascript.png";
import reactImg from "../public/images/skills/react.png";
import java from "../public/images/skills/java.png";
import cpp from "../public/images/skills/cpp.png";
import JUnit from "../public/images/skills/Junit.png";
import Jenkins from "../public/images/skills/Jenkins.png";
import git from "../public/images/skills/git.png";
import springboot from "../public/images/skills/springboot.png";
import Figma from "../public/images/skills/Figma.png";
import Rest from "../public/images/skills/Rest.png";
import chaos from "../public/images/projects/chaos.jpeg";
import dogwalk from "../public/images/projects/DogWalk.jpg";
export const mail = "vikaskalyan1811@gmail.com";
export const aboutData = [
  "Experienced Backend developer with 3+ years of hands-on experience in building and integrating RESTful API services and front-end components in Guardian Life. Proficient in developing scalable web applications, optimizing code, and ensuring seamless integration between the backend and frontend layers. Adept at collaborating with cross-functional teams to deliver user-centric solutions.",
  "Strong understanding of both backend and frontend development principles. Demonstrated ability to deliver high-quality code and meet project deadlines. Experienced in building and integrating RESTful APIs. Committed to continuous learning and staying updated with the latest technologies. Proven track record of successful project delivery and teamwork."
];
export const experience = [
  {
    id: 1,
    companyName: "Comcast",
    role: "Software Development Engineer 2",
    period: "June 2024 - Present",
    address: "Chennai, TN",
    points: [
      "Designed and developed OpenAPIs for the Freewheel MRM application, enabling external approval and QC workflows for Partner Tag Creatives using Spring Boot and MYSQL.",
      "Extended the functionality of the existing Programmatic Creative API to support listing, retrieving and updating Partner Tag Creatives, tailored to meet specific business requirements.",
      "Implemented secure and scalable backend services using spring boot, ensuring seamless API integration for external systems and publishers.",
      "Developed and executed comprehensive JUnit test cases to validate API endpoints, enhancing reliability and performance of the system.",
      "Utilized Postman for testing and documenting APIs, streamlining the development process and ensuring efficient communication with external stakeholders.",
      "Contributed to the optimization of API response times and data handling, ensuring efficient processing of marketplace orders at scale"
    ],
  },
  {
    id: 2,
    companyName: "Guardian Life",
    role: "Engineer",
    period: "Jan 2024 - June 2024",
    address: "Chennai, TN",
    points: [
      "Developed API functionalities for accurate customer validation and retrieving client information.",
      "Enhanced compatibility by refactoring code from Dot Net to Java, ensuring efficient customer verification and data retrieval.",
      "Implemented secure user authentication for the broker-security portal and facilitated integration with Employee Navigator for group management.",
      "Implemented API calls from client to server and then from server to backend java application to retrieve and update data based on user actions, ensuring real-time synchronization.",
      "Orchestrated frontend-backend communication to synchronize data changes in real-time via API calls.",
      "Enabled brokers to efficiently link and unlink groups, ensuring seamless interaction between frontend and systems."
    ],
  },
  {
    id: 3,
    companyName: "Guardian Life",
    role: "Graduate Engineer",
    period: "Sep 2023 - Dec 2023",
    address: "Chennai, TN",
    points: [
      "Led the UI/UX design with Figma, creating an intuitive dashboard for leveraging the data manipulation of the batch processes.",
      "Developed responsive components in ReactJS using glic–ui-components to visualize batch process metrics.",
      "Streamlined file reprocessing with Amazon s3 integration, facilitating efficient backend interaction via API calls.",
      "Developed the backend Java API for reprocessing the file in amazon S3 bucket based on user actions from the front end."
    ],
  },
  {
    id: 4,
    companyName: "Guardian Life",
    role: "Graduate Engineer Trainee",
    period: "April 2022 - Aug 2023",
    address: "Chennai, TN",
    points: [
      "Developed a robust backend system for generating ID cards, integrating seamlessly with CDX for automated mail sending.",
      "Orchestrated communication with CDX ensuring smooth and timely delivery to customers while implementing rigorous testing procedures for accuracy and reliability.",
      "Led implementation of batch processes, modifying contact preferences of customers in Customer Hub database.",
      "Utilized Amazon S3 for efficient processing of customer lists, enhancing system reliability and scalability while improving compliance and customer experience."
    ],
  },
  {
    id: 5,
    companyName: "Ernst & Young",
    role: "Summer Intern",
    period: "Sept 2021 - Nov 2021",
    address: "Chennai, TN",
    points: [
      "Collaborated closely with backend developers to ensure the seamless integration of UI changes with existing functionality.",
      "Worked on managing and resolving bugs, providing timely resolutions for enhanced stability.",
    ],
  },
];

export const skills = [
  {
    name: "Java",
    image: java,
  },
  {
    name: "Spring Boot",
    image: springboot,
  },
  {
    name: "Rest API",
    image: Rest,
  },
  {
    name: "JUnit",
    image: JUnit,
  },
  {
    name: "C++",
    image: cpp,
  },
  {
    name: "HTML",
    image: html,
  },
  {
    name: "CSS",
    image: css,
  },
  {
    name: "JavaScript",
    image: javaScript,
  },
  {
    name: "React",
    image: reactImg,
  },
  {
    name: "Git",
    image: git,
  },
  {
    name: "Jenkins",
    image: Jenkins,
  },
  {
    name: "Figma",
    image: Figma,
  },
  
];

export const projectsData = [
  
  {
    title: "Chaos",
    demo_link: "https://github.com/vikaskalyan-rgb/Chaos",
    github_link: "https://github.com/vikaskalyan-rgb/Chaos",
    image: chaos,
    isFeatured: true,
    summary:
      "Chaos: Python and OpenCV computer vision software for Windows OS control using finger gestures, eyeball tracking, and a voice assistant. Enhances accessibility for disabled users.This software helps the blind and disabled people to use windows OS in ease.",
  },
  {
    title: "Fureva",
    demo_link: "https://www.behance.net/gallery/186545367/Fureva-CaseStudy",
    github_link: "https://www.behance.net/gallery/186545367/Fureva-CaseStudy",
    image: dogwalk,
    isFeatured: false,
    summary:
      "Fureva: The ultimate solution for pet owners seeking reliable and caring caretakers for their furry friends during their absence. Our app not only provides peace of mind for pet owners but also creates a rewarding opportunity for passionate individuals to earn income.",
  },
];
