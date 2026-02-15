export type Project = {
  name: string;
  description: string;
  href: string;
};

export type Experience = {
  company: string;
  roleSummary: string;
};

export const portfolioContent = {
  name: "Abhishek Tumula",
  bio: "I design and build smart web applications and AI-driven tools using Python, React, and modern technologies. Passionate about clean UI, scalable systems, and solving real-world problems through code.",
  skills: [
    "Next js",
    "React",
    "Python",
    "Java",
    "Typescript",
    "Node js",
    "bun",
    "Prisma",
    "Postgresql",
  ],
  projects: [
    {
      name: "Comet",
      href: "https://github.com/abhishektumula/comet.git",
      description:
        "Comet is an AI-powered call agent designed to automate customer outreach and convert leads into paying customers. It intelligently interacts with users, evaluates responses, and generates detailed reports for administrators, helping businesses boost sales and drive growth through smart automation.",
    },
    {
      name: "s2Chat",
      href: "https://github.com/abhishektumula/s2.git",
      description:
        "S2 is a privacy-focused real-time chat application built using WebSockets, designed for secure one-to-one communication. It emphasizes user privacy and simplicity, allowing anyone to clone the repository and deploy a personal chat instance for private conversations.",
    },
    {
      name: "AI Companion",
      href: "https://github.com/abhishektumula/AI-Companion-2025",
      description:
        "AI Companion is a supportive digital assistant built to provide a safe, non-judgmental environment where users can freely express their thoughts and emotions. It focuses on empathetic conversations, helping users feel heard and understood while ensuring privacy and comfort.",
    },
  ] as Project[],
  sideProjects: [
    {
      name: "tweetbox",
      href: "https://github.com/abhishektumula/TweetBox.git",
    },
    { name: "funProject", href: "https://github.com/abhishektumula/funP.git" },
    {
      name: "Interior design freelance project",
      href: "https://github.com/abhishektumula/FLP-1.git",
    },
  ],
  experiences: [
    {
      company: "HCL Tech",
      roleSummary:
        "Worked as a Frontend Engineer, developing responsive and user-friendly web applications with a strong focus on performance and clean design. Collaborated with cross-functional teams to implement new features, optimize UI components, debug issues, and improve overall user experience. Ensured code quality through reusable components, modern frontend practices, and consistent design implementation.",
    },
    {
      company: "Slash Mark",
      roleSummary:
        "Worked as a Data Science Intern, assisting in data cleaning, preprocessing, and basic analysis to support model development. Contributed to training and testing simple machine learning models while learning core concepts of data science and AI workflows. Supported the team in organizing datasets, improving data quality, and understanding model performance metrics.",
    },
  ] as Experience[],
};
