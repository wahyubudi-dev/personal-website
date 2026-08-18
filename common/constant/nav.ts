import {
  CircleUser,
  Download,
  Gamepad2,
  Home,
  Linkedin,
  Mail,
  MessageCircle,
  Notebook,
  Pickaxe,
  TreePine,
} from "lucide-react";

/** Pastel accent per nav color key — kept in one place so light/dark stay in sync everywhere they're used. */
const navAccent = {
  rose: {
    bgColor: "bg-rose-100 dark:bg-rose-500/10",
    hoverBg: "hover:bg-rose-100 dark:hover:bg-rose-500/10",
  },
  red: {
    bgColor: "bg-red-100 dark:bg-red-500/10",
    hoverBg: "hover:bg-red-100 dark:hover:bg-red-500/10",
  },
  blue: {
    bgColor: "bg-blue-100 dark:bg-blue-500/10",
    hoverBg: "hover:bg-blue-100 dark:hover:bg-blue-500/10",
  },
  amber: {
    bgColor: "bg-amber-100 dark:bg-amber-500/10",
    hoverBg: "hover:bg-amber-100 dark:hover:bg-amber-500/10",
  },
  green: {
    bgColor: "bg-green-100 dark:bg-green-500/10",
    hoverBg: "hover:bg-green-100 dark:hover:bg-green-500/10",
  },
  violet: {
    bgColor: "bg-violet-100 dark:bg-violet-500/10",
    hoverBg: "hover:bg-violet-100 dark:hover:bg-violet-500/10",
  },
  teal: {
    bgColor: "bg-teal-100 dark:bg-teal-500/10",
    hoverBg: "hover:bg-teal-100 dark:hover:bg-teal-500/10",
  },
  purple: {
    bgColor: "bg-purple-100 dark:bg-purple-500/10",
    hoverBg: "hover:bg-purple-100 dark:hover:bg-purple-500/10",
  },
} as const;

export const features = [
  {
    name: "Chat Room",
    route: "/chat-room",
    icon: MessageCircle,
    ...navAccent.rose,
  },
  // {
  //   name: "Mini Game",
  //   route: "/game",
  //   icon: Gamepad2,
  //   ...navAccent.cyan,
  // },
] as const;

export const links = [
  {
    name: "Home",
    route: "/",
    icon: Home,
    ...navAccent.red,
  },
  {
    name: "About",
    route: "/about",
    icon: TreePine,
    ...navAccent.blue,
  },
  {
    name: "Blogs",
    route: "/blog",
    icon: Notebook,
    ...navAccent.amber,
  },
  {
    name: "Projects",
    route: "/projects",
    icon: Pickaxe,
    ...navAccent.green,
  },
  {
    name: "Contact",
    route: "/contact",
    icon: CircleUser,
    ...navAccent.violet,
  },
] as const;

export const directLinks = [
  {
    name: "wahyu.budi.w.b33@gmail.com",
    route: "mailto:wahyu.budi.w.b33@gmail.com",
    icon: Mail,
    ...navAccent.teal,
  },
  {
    name: "download resume",
    route: "file/cv.pdf",
    icon: Download,
    ...navAccent.purple,
  },
  {
    name: "wahyubudiutomo",
    route: "https://www.linkedin.com/in/wahyubudiutomo/",
    icon: Linkedin,
    ...navAccent.blue,
  },
] as const;

export const collapseMenuLinks = [
  {
    name: "Chat Room",
    route: "/chat-room",
    icon: MessageCircle,
    ...navAccent.rose,
  },
  {
    name: "download resume",
    route: "/file/cv.pdf",
    icon: Download,
    ...navAccent.purple,
  },
] as const;
