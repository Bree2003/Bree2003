// badget's information
const skills = [
  {
    id: 1,
    img: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
    alt: "CSS3",
  },
  {
    id: 2,
    img: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
    alt: "HTML5",
  },
  {
    id: 3,
    img: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
    alt: "Java",
  },
  {
    id: 4,
    img: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    alt: "JavaScript",
  },
  {
    id: 5,
    img: "https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white",
    alt: "Markdown",
  },
  {
    id: 6,
    img: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    alt: "TypeScript",
  },
  {
    id: 7,
    img: "https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white",
    alt: "AWS",
  },
  {
    id: 8,
    img: "https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase",
    alt: "Firebase",
  },
  {
    id: 9,
    img: "https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white",
    alt: "GithubPages",
  },
  {
    id: 10,
    img: "https://img.shields.io/badge/glitch-%233333FF.svg?style=for-the-badge&logo=glitch&logoColor=white",
    alt: "Glitch",
  },
  {
    id: 11,
    img: "https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white",
    alt: "Vercel",
  },
  {
    id: 12,
    img: "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
    alt: "Bootstrap",
  },
  {
    id: 13,
    img: "https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white",
    alt: "Fastify",
  },
  {
    id: 14,
    img: "https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white",
    alt: "jQuery",
  },
  {
    id: 15,
    img: "https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens",
    alt: "JWT",
  },
  {
    id: 16,
    img: "https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white",
    alt: "NPM",
  },
  {
    id: 17,
    img: "https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white",
    alt: "NestJS",
  },
  {
    id: 18,
    img: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
    alt: "Next JS",
  },
  {
    id: 19,
    img: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
    alt: "NodeJS",
  },
  {
    id: 20,
    img: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
    alt: "React",
  },
  {
    id: 21,
    img: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
    alt: "TailwindCSS",
  },
  {
    id: 22,
    img: "https://img.shields.io/badge/WordPress-%23117AC9.svg?style=for-the-badge&logo=WordPress&logoColor=white",
    alt: "WordPress",
  },
  {
    id: 23,
    img: "https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white",
    alt: "Apache",
  },
  {
    id: 24,
    img: "https://img.shields.io/badge/mysql-%2300000f.svg?style=for-the-badge&logo=mysql&logoColor=white",
    alt: "MySQL",
  },
  {
    id: 25,
    img: "https://img.shields.io/badge/adobe%20photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobe%20photoshop&logoColor=white",
    alt: "Adobe Photoshop",
  },
  {
    id: 26,
    img: "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
    alt: "Figma",
  },
  {
    id: 27,
    img: "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white",
    alt: "Canva",
  },
  {
    id: 28,
    img: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
    alt: "Postman",
  },
  {
    id: 29,
    img: "https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white",
    alt: "Jira",
  },
  {
    id: 30,
    img: "https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white",
    alt: "Notion",
  },
  {
    id: 31,
    img: "https://img.shields.io/badge/Trello-%23026AA7.svg?style=for-the-badge&logo=Trello&logoColor=white",
    alt: "Trello",
  },
];

let divSkills = document.querySelector("#skills");

skills.forEach((skill) => {
  const img = document.createElement("img");
  img.src = skill.img;
  img.alt = skill.alt;
  divSkills.appendChild(img);
});
