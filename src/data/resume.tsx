import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "ThanhDat",
  initials: "CaMup",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "<>I'm a student who likes to be a fullstack developer. If you want, you can contact me</>",
  summary:
    "In 2022, I started learning programming and creating applications from programming languages. In 2023, I started teaching myself programming",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "C++",
    "TailwindCSS",
    "Shadcn/n",
    "Docker",
    "Github",
    "Figma",
    "Photoshop",
    "Premier",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "thanhdatttg2508@gmail.com",
    tel: "0966490030",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ThanhDatt25",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/th%C3%A0nh-%C4%91%E1%BA%A1t-nguy%E1%BB%85n-62b57a24b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
      facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/T.Dat2/",
        icon: Icons.facebook,

        navbar: true,
      },
      steam: {
        name: "Facebook",
        url: "https://steamcommunity.com/id/TDat2/",
        icon: Icons.steam,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "NasazShop",
      href: "https://www.facebook.com/nasazshop",
      badges: [],
      location: "HaNoi, VietNam",
      title: "Netflix, spotify seller",
      logoUrl: "/nasaz.png",
      start: "2019",
      end: "2024",
      description: "Coding a website to sell netflix sportify services !",
    },
    {
      company: "UCC - USTH CODER CLUB",
      href: "https://www.facebook.com/USTH.Coders.Club",
      badges: [],
      location: "HaNoi, VietNam",
      title: "Coder",
      logoUrl: "/UCC.jpg",
      start: "2023",
      end: "???",
      description: "Developing applications with club members !",
    },
  ],
  education: [
    {
      school: "USTH - TRƯỜNG ĐẠI HỌC KHOA HỌC VÀ CÔNG NGHỆ HÀ NỘI",
      href: "https://usth.edu.vn/",
      degree: "s1",
      logoUrl: "usth.png",
      start: "2023",
      end: "2026",
    },
  ],
  projects: [],
  hackathons: [
    {
      title:
        "Automatic Exam Monitoring System utilizing Artificial Intelligence",
      dates: "June 23rd - 25th, 2024",
      location: "HaNoi, VietNam",
      description:
        "Context/background, statement of problem, hypothesis, significance of this inovative idea, and motivation for the implementation",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
