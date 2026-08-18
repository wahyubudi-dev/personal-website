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

export const features = [
  {
    name: "Chat Room",
    route: "/chat-room",
    icon: MessageCircle,
    bgColor: "bg-rose-100",
    hoverBg: "hover:bg-rose-100",
  },
  // {
  //   name: "Mini Game",
  //   route: "/game",
  //   icon: Gamepad2,
  //   bgColor: "bg-cyan-100",
  //   hoverBg: "hover:bg-cyan-100",
  // },
] as const;

export const links = [
  {
    name: "Home",
    route: "/",
    icon: Home,
    bgColor: "bg-red-100",
    hoverBg: "hover:bg-red-100",
  },
  {
    name: "About",
    route: "/about",
    icon: TreePine,
    bgColor: "bg-blue-100",
    hoverBg: "hover:bg-blue-100",
  },
  {
    name: "Blogs",
    route: "/blog",
    icon: Notebook,
    bgColor: "bg-amber-100",
    hoverBg: "hover:bg-amber-100",
  },
  {
    name: "Projects",
    route: "/projects",
    icon: Pickaxe,
    bgColor: "bg-green-100",
    hoverBg: "hover:bg-green-100",
  },
  {
    name: "Contact",
    route: "/contact",
    icon: CircleUser,
    bgColor: "bg-violet-100",
    hoverBg: "hover:bg-violet-100",
  },
] as const;

export const directLinks = [
  {
    name: "wahyu.budi.w.b33@gmail.com",
    route: "mailto:wahyu.budi.w.b33@gmail.com",
    icon: Mail,
    bgColor: "bg-teal-100",
    hoverBg: "hover:bg-teal-100",
  },
  {
    name: "download resume",
    route: "file/cv.pdf",
    icon: Download,
    bgColor: "bg-purple-100",
    hoverBg: "hover:bg-purple-100",
  },
  {
    name: "wahyubudiutomo",
    route: "https://www.linkedin.com/in/wahyubudiutomo/",
    icon: Linkedin,
    bgColor: "bg-blue-100",
    hoverBg: "hover:bg-blue-100",
  },
] as const;

export const collapseMenuLinks = [
  {
    name: "Chat Room",
    route: "/chat-room",
    icon: MessageCircle,
    bgColor: "bg-rose-100",
    hoverBg: "hover:bg-rose-100",
  },
  {
    name: "download resume",
    route: "/file/cv.pdf",
    icon: Download,
    bgColor: "bg-purple-100",
    hoverBg: "hover:bg-purple-100",
  },
] as const;
