import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import nextjs from "./nextjs.svg";
import aws from "./aws.svg";
import bitbucket from "./bitbucket.svg";
import jira from "./jira.svg";
import swagger from "./swagger.svg";
import vuejs from "./vuejs.svg";
import vscode from "./vscode.png";
import figma from "./figma.png";
import git from "./git.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
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
import blog_logo from "./blog-logo.png";
import github_logo from "./github-logo.svg";
import linkedIn_logo from "./linkedIn-logo.png";
import ey_circle from "./ey_circle.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  nextjs,
  aws,
  bitbucket,
  jira,
  swagger,
  vuejs,
  figma,
  git,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
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
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  blog_logo,
  github_logo,
  linkedIn_logo,
  ey_circle,
};

export const workData = [
  {
    title: "Tourvis",
    bgImage: "/tourvis_tnt_main.png",
  },
  // {
  //   title: "Geo based app",
  //   description: "Mobile App",
  //   bgImage: "/work-2.png",
  // },
  // {
  //   title: "Photography site",
  //   description: "Web Design",
  //   bgImage: "/work-3.png",
  // },
  // {
  //   title: "UI/UX designing",
  //   description: "UI/UX Design",
  //   bgImage: "/work-4.png",
  // },
];

export const serviceData = [
  {
    icon: "/tourvis_og.jpg",
    title: "Tourvis",
    description:
      "Full FE ownership of Ticket category" +
      "<br /><br />" +
      "Built responsive pages and improved UX with modal voucher, Google Maps, and calendar pricing features.",
    link: "",
    tools: [
      assets.nextjs,
      assets.aws,
      assets.bitbucket,
      assets.jira,
      assets.swagger,
    ],
  },
  {
    icon: "/privia_og.jpeg",
    title: "Privia",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
    tools: [
      assets.vuejs,
      assets.nextjs,
      assets.aws,
      assets.bitbucket,
      assets.jira,
      assets.swagger,
    ],
  },
];

export const workDetailData = [
  {
    icon: "/tourvis_og.jpg",
    title: "Tourvis",
    description:
      "<b>Key Contributions</b>" +
      "<br />" +
      "· Developed PC & Mobile web page with responsive design." +
      "<br />" +
      "· Improved UX with convenient features:" +
      "<br />" +
      "<div style='margin-left: 1em'>– Displayed PDF voucher in modal, integrated Google Maps, added price view on calendar,<br />– Built review section with ratings and tags, toast-style error messages.</div>" +
      "<br />" +
      "· Implemented hybrid rendering (SSR + CSR) alongside React Server Components to improve SEO and enhance page load speed." +
      "<br />" +
      "· Actively used React Hooks to improve code reusability and maintainability across components.",
    link: "",
  },
  {
    icon: "/privia_og.jpeg",
    title: "Privia",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
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
  assets.nextjs,
  assets.vuejs,
  assets.aws,
  assets.bitbucket,
  assets.jira,
  assets.swagger,
  assets.git,
];
