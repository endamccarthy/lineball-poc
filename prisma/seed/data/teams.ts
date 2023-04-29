import type { PrismaClient, Team } from "@prisma/client";

export const teams: Team[] = [];

export async function uploadTeams(prisma: PrismaClient) {
  const fakeData = [
    { name: "tipperary" },
    { name: "limerick" },
    { name: "cork" },
    { name: "clare" },
    { name: "kilkenny" },
    { name: "dublin" },
    { name: "galway" },
    { name: "wexford" },
  ];

  await Promise.all(
    fakeData.map(async (data) => {
      const createdItem = await prisma.team.create({
        data,
      });
      teams.push(createdItem);
    })
  );
}
