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
      name: "Project 1",
      href: "#",
      description:
        "I design and build smart web applications and AI-driven tools using Python, React, and modern technologies. Passionate about clean UI, scalable systems, and solving real-world problems through code.",
    },
    {
      name: "Project 2",
      href: "#",
      description:
        "I design and build smart web applications and AI-driven tools using Python, React, and modern technologies. Passionate about clean UI, scalable systems, and solving real-world problems through code.",
    },
    {
      name: "Project 3",
      href: "#",
      description:
        "I design and build smart web applications and AI-driven tools using Python, React, and modern technologies. Passionate about clean UI, scalable systems, and solving real-world problems through code.",
    },
  ] as Project[],
  sideProjects: [
    { name: "project 4", href: "#" },
    { name: "project 5", href: "#" },
    { name: "project 6", href: "#" },
  ],
  experiences: [
    {
      company: "Company 1",
      roleSummary:
        "Worked as a Front-end Developer intern, building responsive and user-friendly web interfaces using modern technologies. Collaborated with the team to improve UI performance, implement new features, and deliver clean, scalable code for real-world applications.",
    },
    {
      company: "Company 1",
      roleSummary:
        "Worked as a Front-end Developer intern, building responsive and user-friendly web interfaces using modern technologies. Collaborated with the team to improve UI performance, implement new features, and deliver clean, scalable code for real-world applications.",
    },
  ] as Experience[],
};
