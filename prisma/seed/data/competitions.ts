import type { PrismaClient, Competition } from "@prisma/client";
import { Sport } from "@prisma/client";

export const competitions: Competition[] = [];

export async function uploadCompetitions(prisma: PrismaClient) {
  const fakeData = [
    {
      name: "Championship Challenge",
      year: 2024,
      sport: Sport.HURLING,
    },
  ];

  await Promise.all(
    fakeData.map(async (data) => {
      const createdItem = await prisma.competition.create({
        data,
      });
      competitions.push(createdItem);
    })
  );
}
