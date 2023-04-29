import type { PrismaClient, Group } from "@prisma/client";
import { competitions } from "./competitions";

export const groups: Group[] = [];

export async function uploadGroups(prisma: PrismaClient) {
  const fakeData = [
    {
      name: "Munster",
      competition: { connect: { id: competitions[0]?.id } },
    },
    {
      name: "Leinster",
      competition: { connect: { id: competitions[0]?.id } },
    },
  ];

  await Promise.all(
    fakeData.map(async (data) => {
      const createdItem = await prisma.group.create({
        data,
      });
      groups.push(createdItem);
    })
  );
}
