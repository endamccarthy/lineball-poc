import type { Prize, PrismaClient } from "@prisma/client";
import { fundraisers } from "./fundraisers";

export const prizes: Prize[] = [];

export async function uploadPrizes(prisma: PrismaClient) {
  const fakeData = [
    {
      place: 1,
      description: "€500",
      fundraiser: { connect: { id: fundraisers[0]?.id } },
    },
    {
      place: 2,
      description: "€300",
      fundraiser: { connect: { id: fundraisers[0]?.id } },
    },
    {
      place: 3,
      description: "Bale of Hay",
      fundraiser: { connect: { id: fundraisers[0]?.id } },
    },
  ];

  await Promise.all(
    fakeData.map(async (data) => {
      const createdItem = await prisma.prize.create({
        data,
      });
      prizes.push(createdItem);
    })
  );
}
