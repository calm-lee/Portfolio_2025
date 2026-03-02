import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import nextjs from "./nextjs.svg";
import react from "./react.svg";
import vuejs from "./vuejs.svg";
import aws from "./aws.svg";
import bitbucket from "./bitbucket.svg";
import jira from "./jira.svg";
import swagger from "./swagger.svg";
import vscode from "./vscode.png";
import sentry from "./sentry.svg";
import storybook from "./storybook.svg";
import figma from "./figma.png";
import git from "./git.png";
import tailwind from "./tailwind.svg";
import scss from "./scss.svg";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import download_icon from "./download-icon.png";
import download_icon_white from "./download-icon-white.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import swiper_left_arrow from "./swiper-left-arrow-icon.svg";
import swiper_right_arrow from "./swiper-right-arrow-icon.svg";
import blog_logo from "./blog-logo.svg";
import blog_logo_white from "./blog-logo-white.svg";
import github_logo from "./github-logo.svg";
import github_logo_white from "./github-logo-white.svg";
import linkedIn_logo from "./linkedIn-logo.png";
import ey_circle from "./ey_circle.png";

export const assets = {
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  nextjs,
  react,
  vuejs,
  aws,
  git,
  jira,
  bitbucket,
  swagger,
  sentry,
  storybook,
  tailwind,
  scss,
  figma,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  download_icon,
  download_icon_white,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  swiper_left_arrow,
  swiper_right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  blog_logo,
  blog_logo_white,
  github_logo,
  github_logo_white,
  linkedIn_logo,
  ey_circle,
};

export const careerData = {
  duration: "2021.12 — 2025.2",
  position: "Frontend Engineer",
  company: "TIDESQUARE",
  company_description: "Travel Agency",
  location: "Seoul, South Korea",
  description: `
· Took full FE ownership of the Ticket category at a travel agency.<br />
· Developed and maintained the two travel websites using Next.js and Vue.js each.<br />
· Improved UX by implementing features such as review summaries, stock alert, and real-time form validation etc.<br />
· Enhanced performance and maintainability by modularising components and using React Hooks.<br />
· Refactored legacy code by eliminating duplication and extracting common functions into reusable modules.<br />
`,
  tools: [
    assets.nextjs,
    assets.vuejs,
    assets.react,
    assets.aws,
    assets.bitbucket,
    assets.jira,
    assets.swagger,
    assets.sentry,
    assets.storybook,
  ],
};

export const serviceData = [
  {
    icon: "/tourvis_og.jpg",
    title: "TOURVIS",
    title2: "Online Travel Platform",
    description:
      "Full FE ownership of Ticket category" +
      "<br /><br />" +
      "Built responsive pages and improved UX with modal voucher, Google Maps, and calendar pricing features.",
    link: "",
    tools: [
      { title: "nextjs", src: assets.nextjs },
      { title: "aws", src: assets.aws },
      { title: "bitbucket", src: assets.bitbucket },
      { title: "jira", src: assets.jira },
      { title: "swagger", src: assets.swagger },
    ],
  },
  {
    icon: "/privia_og.jpeg",
    title: "PRIVIA",
    title2: "Online Travel Platform",
    description:
      "Full FE ownership of Ticket category" +
      "<br /><br />" +
      "Enhanced UX with real-time form validation and personalised discount display via pricing filters.",
    link: "",
    tools: [
      { title: "vuejs", src: assets.vuejs },
      { title: "nextjs", src: assets.nextjs },
      { title: "aws", src: assets.aws },
      { title: "bitbucket", src: assets.bitbucket },
      { title: "jira", src: assets.jira },
      { title: "swagger", src: assets.swagger },
    ],
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  { title: "nextjs", src: assets.nextjs },
  { title: "vuejs", src: assets.vuejs },
  { title: "react", src: assets.react },
  { title: "tailwind", src: assets.tailwind },
  { title: "scss", src: assets.scss },
  { title: "sentry", src: assets.sentry },
  { title: "storybook", src: assets.storybook },
  { title: "aws", src: assets.aws },
  { title: "git", src: assets.git },
  { title: "bitbucket", src: assets.bitbucket },
  { title: "jira", src: assets.jira },
  { title: "swagger", src: assets.swagger },
];
