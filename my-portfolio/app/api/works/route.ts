import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // 데이터베이스에서 Work 데이터 가져오기
    const works = await prisma.work.findMany({
      include: {
        screenShots: {
          orderBy: { order: "asc" }, // order 순서대로 정렬
        },
      },
    });

    // assets.js의 workDetailData 형식으로 변환
    const formattedWorks = works.map((work) => ({
      icon: work.icon,
      title: work.title,
      description: work.description,
      techStack: work.techStack,
      collaboTools: work.collaboTools,
      link: work.link,
      // PC 스크린샷만 필터링
      screenshots_pc: work.screenShots
        .filter((shot) => shot.type === "PC")
        .map((shot) => shot.url),
      // MO 스크린샷만 필터링
      screenshots_mo: work.screenShots
        .filter((shot) => shot.type === "MO")
        .map((shot) => shot.url),
    }));

    return NextResponse.json(formattedWorks);
  } catch (error) {
    console.error("Failed to fetch works:", error);
    return NextResponse.json(
      { error: "Failed to fetch works" },
      { status: 500 }
    );
  }
}
