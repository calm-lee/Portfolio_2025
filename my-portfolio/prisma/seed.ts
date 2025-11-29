import { PrismaClient } from "@prisma/client";
import { workDetailData } from "../assets/assets";
import { disconnect } from "process";

const prisma = new PrismaClient();

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
