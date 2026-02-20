import { PrismaClient } from "@prisma/client";
import "dotenv/config";

const prisma = new PrismaClient();

export const workDetailData = [
  {
    icon: "/tourvis_og.jpg",
    title: "TOURVIS",
    description: `<b class="text-base">Key Contributions</b><br />
· Took full ownership of development and maintenance for the Ticket category.<br />
· Highlighted features I implemented:<br />
<p style="margin-left: 1em">
  – Review summary section aggregating tags and calculating average ratings.<br />
  – Calendar modal allowing users to select dates and get notified of stock arrival.<br />
  – PDF voucher modal with print, download, and new tab options.<br />
  – Address section integrated with Google Maps.
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
<b class="text-base">Key Contributions</b><br />
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

async function main() {
  for (const work of workDetailData) {
    const workData = await prisma.work.create({
      data: {
        icon: work.icon,
        title: work.title,
        description: work.description,
        techStack: work.techStack,
        collaboTools: work.collaboTools,
        link: work.link,
        screenShots: {
          create: [
            ...work.screenshots_pc.map((url, index) => ({
              type: "PC",
              url,
              order: index + 1,
            })),
            ...work.screenshots_mo.map((url, index) => ({
              type: "MO",
              url,
              order: index + 1,
            })),
          ],
        },
      },
    });
    console.log("workData: ", JSON.stringify(workData));
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
