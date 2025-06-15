import user_image from "./user-image.png";
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
import profile_img from "./profile-img.png";
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
  user_image,
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
  profile_img,
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

export const careerData = [
  {
    duration: "2021.12 — 2024.2",
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
  },
];

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
    title: "TOURViS",
    title2: "Travel Agency Website",
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
    title: "PRIVIA",
    title2: "Travel Agency Website",
    description:
      "Full FE ownership of Ticket category" +
      "<br /><br />" +
      "Enhanced UX with real-time form validation and personalised discount display via pricing filters.",
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
    title: "TOURViS",
    description: `<b>Key Contributions</b><br />
· Took full ownership of development and maintenance for the Ticket category.<br />
· Highlighted features I implemented:<br />
<p style="margin-left: 1em">
  – Review summary section aggregating tags and calculating average ratings<br />
  – Calendar modal allowing users to select dates and get notified of stock arrival<br />
  – PDF voucher modal with print, download, and new tab options<br />
  – Address section integrated with Google Maps
</p>
· Implemented hybrid rendering (SSR + CSR) alongside React Server Components to improve SEO and enhance page load speed.<br />
· Actively used React Hooks to improve code reusability and maintainability across components.
`,
    techStack: "Next.js, TypeScript, React, Redux, Sass, CSS, AWS",
    collaboTools: "Bitbucket, Jira, Swagger",
    screenshots_pc: [
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fcsv6qg%2FbtsOug7JuDG%2FrJ8stNjd5kOIJQuzSMmmA1%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FclEQUM%2FbtsOtur0YnH%2FTj7L3EojEZvMBzhXqj2cZk%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbpM9pC%2FbtsOt1iJZX9%2FY1L8t94hsBrPrM1Pfk4iGk%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbGE0cE%2FbtsOuymPNNX%2FhBGQNTr7PCE2r6bOOcQqA0%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbPgCkR%2FbtsOsBk54QA%2FX1cKFaOsxKkLGBnfnLcCp1%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FFbaSX%2FbtsOuyNSVcG%2FxcAdkxKfUvU2185pSYpUc0%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F2r6VU%2FbtsOvagzeJv%2FCtmmoZzlJO7spbtXslyq7k%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbZ38rZ%2FbtsOu97K1LF%2FxQ9Yx4C4imB6YHA12TuI50%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqAFTi%2FbtsOujXKsiw%2FWiFn5sFULHD9Hep3KrICiK%2Fimg.png",
    ],
    screenshots_mo: [
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FqAFTi%2FbtsOujXKsiw%2FWiFn5sFULHD9Hep3KrICiK%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdd4K1p%2FbtsOuLe1cKa%2FEK2lSik2UyPhJFUOKKwpU1%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F9DJx5%2FbtsOxNYe6eD%2FL4FBD9HMuZd9rdMDggHTC1%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fo3sXF%2FbtsOs1Rk1gN%2FKfKEZyvkCF97zC66pCrMHk%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcHthOU%2FbtsOsBrRLBG%2FVO466WXmkKQtbrKVQ1htHK%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb5hBH0%2FbtsOt6jWClr%2FoSiToV9lgAezQBwaPQIYYk%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FtMCnJ%2FbtsOurgORZF%2FKRsFcAFgUputJ3NTrreQgK%2Fimg.png",
    ],
    link: "https://tourvis.com/activity",
  },
  {
    icon: "/privia_og.jpeg",
    title: "PRIVIA",
    description: `
<b>Key Contributions</b><br />
· Took full ownership of development and maintenance for the Ticket category.<br />
· Highlighted features I implemented:<br />
<p style="margin-left: 1em">
  - Instantly displayed adjusted prices when users selected specific cards or applied points<br />
  - Implemented banners and tooltips reflecting the best possible discounts<br />
  - Built a voucher modal adapting to each card type
</p>
· Additional features to enhance user convenience:<br />
<p style="margin-left: 1em">
- Real-time validation for traveller input forms (e.g. passport number, email, phone number)
</p>
· Migrated a few pages from Vue.js to Next.js. (Product Detail Page, Serach Results Page)<br />`,

    techStack: `Vue.js, Next.js, JavaScript, TypeScript, CSS, AWS`,
    collaboTools: "Bitbucket, Jira, Swagger",
    screenshots_pc: [
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbM1F6v%2FbtsOzj5Fidm%2FXrqZePZRdVB60EmavdoJI0%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FS9ZoG%2FbtsOAVBXCwU%2FkGVCOdmd7lEhbLku0KbXUk%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fnd5Wj%2FbtsOzFUUeJJ%2FpYyjthGG2KjPpI9B33slD0%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fx4xbF%2FbtsOzlWJRFV%2FriVVkMjct9tKsMXiHD5JNK%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FddQKLr%2FbtsOBalweWx%2FR6E2o9kparTPbB3Kak1l10%2Fimg.png",
    ],
    screenshots_mo: [
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbS46Bx%2FbtsOBmsBanB%2FHfDk3NFnWiYGK3aOtmwr20%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbisVKJ%2FbtsOzPXrgK8%2F44MAjPiYZ2Zt620ECKEdX1%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbNX5aI%2FbtsOBkhfALQ%2FcYowvuaHWOfv8EyEi63IjK%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbow4OB%2FbtsOzGfjbeG%2FrXicCfS6UhArrZlCTZQz31%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbzIv1i%2FbtsOBDOm3t0%2Ff3nlLKZJnWEfbyKcbBwXzk%2Fimg.png",
      "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FCq8lS%2FbtsOAuSBoLW%2FZT1gMt0AxQ5fvfgvqD4wCK%2Fimg.png",
    ],
    link: "https://activity.priviatravel.com",
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
  assets.react,
  assets.aws,
  assets.git,
  assets.bitbucket,
  assets.jira,
  assets.swagger,
  assets.sentry,
  assets.storybook,
  assets.tailwind,
  assets.scss,
];
