import { Github, Instagram, Linkedin } from "lucide-react";

export const githubAccountUrl = "https://github.com/wahyubudii";
export const instagramAccountUrl = "https://instagram.com/wahyuuu.bu";
export const linkedinAccountUrl = "https://linkedin.com/in/wahyubudiutomo";

// export const SOCIAL_MEDIA = [
//   {
//     id: "GitHub",
//     title: "Explore the code",
//     description: "Explore the source code for all my projects on GitHub.",
//     href: "https://github.com/codebayu",
//     // icon: <GithubIcon className="text-xl md:text-3xl" />,
//     classContainer:
//       "border-slate-300 from-slate-100 to-slate-200 dark:border-slate-600 dark:from-slate-900 dark:to-slate-950",
//     classText: "text-slate-800 dark:text-slate-400",
//     classLink: "bg-slate-800 dark:bg-slate-400",
//     classIcon: "bg-slate-800 dark:bg-slate-500",
//   },
//   {
//     id: "Linkedin",
//     title: "Let`s connect",
//     description:
//       "Connect for collaboration or explore my professional experience.",
//     href: "https://www.linkedin.com/in/bayu-setiawan99/",
//     // icon: <LinkedinIcon className="text-xl md:text-3xl" />,
//     classContainer:
//       "border-blue-300 from-blue-100 to-blue-200 dark:border-blue-600 dark:from-blue-900 dark:to-blue-950",
//     classText: "text-blue-600 dark:text-blue-400",
//     classLink: "bg-blue-600 dark:bg-blue-400",
//     classIcon: "bg-blue-600 dark:bg-blue-500",
//   },
//   {
//     id: "NPM",
//     title: "Open source",
//     description: "Install and contribute to my open-source projects.",
//     href: "https://www.npmjs.com/~bayu-setiawan",
//     // icon: <NpmIcon className="text-xl md:text-3xl" />,
//     classContainer:
//       "border-rose-300 from-rose-100 to-rose-200 dark:border-rose-600 dark:from-rose-900 dark:to-rose-950",
//     classText: "text-rose-700 dark:text-rose-400",
//     classLink: "bg-rose-700 dark:bg-rose-400",
//     classIcon: "bg-rose-700 dark:bg-rose-500",
//   },
//   {
//     id: "Discord",
//     title: "Chat with the community",
//     description: "Join over 1,000+ others developers on The Code Bayu Discord.",
//     href: "https://discord.gg/76UFeGdXy6",
//     // icon: <DiscordIcon className="text-xl md:text-3xl" />,
//     classContainer:
//       "border-purple-300 from-purple-100 to-purple-200 dark:border-purple-600 dark:from-purple-900 dark:to-purple-950",
//     classText: "text-purple-600 dark:text-purple-400",
//     classLink: "bg-purple-600 dark:bg-purple-400",
//     classIcon: "bg-purple-600 dark:bg-purple-500",
//   },
// ];

export const contacts = [
  {
    name: "github",
    description: "Explore the source code for all my projects on GitHub.",
    icon: Github,
    route: githubAccountUrl,
    classContainer:
      "border-slate-300 from-slate-100 to-slate-200 dark:border-slate-600 dark:from-slate-900 dark:to-slate-950",
    classText: "text-slate-800 dark:text-slate-400",
    classLink: "bg-slate-800 dark:bg-slate-400",
    classIcon: "bg-slate-800 dark:bg-slate-500",
  },
  {
    name: "linkedin",
    description:
      "Connect for collaboration or explore my professional experience.",
    icon: Linkedin,
    route: linkedinAccountUrl,
    classContainer:
      "border-blue-300 from-blue-100 to-blue-200 dark:border-blue-600 dark:from-blue-900 dark:to-blue-950",
    classText: "text-blue-600 dark:text-blue-400",
    classLink: "bg-blue-600 dark:bg-blue-400",
    classIcon: "bg-blue-600 dark:bg-blue-500",
  },
  {
    name: "instagram",
    description:
      "Connect for collaboration or explore my professional experience.",
    icon: Instagram,
    route: instagramAccountUrl,
    classContainer:
      "border-rose-300 from-rose-100 to-rose-200 dark:border-rose-600 dark:from-rose-900 dark:to-rose-950",
    classText: "text-rose-700 dark:text-rose-400",
    classLink: "bg-rose-700 dark:bg-rose-400",
    classIcon: "bg-rose-700 dark:bg-rose-500",
  },
];
