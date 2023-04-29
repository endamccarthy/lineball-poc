import type { Fundraiser, PrismaClient } from "@prisma/client";
import { competitions } from "./competitions";
import { organisations } from "./organisations";
import { type UserId } from "../seed";

export const fundraisers: Fundraiser[] = [];

export async function uploadFundraisers(prisma: PrismaClient, userId: UserId) {
  const fakeData = [
    {
      organiserId: userId.organiser[0] || "",
      competition: { connect: { id: competitions[0]?.id } },
      organisation: { connect: { id: organisations[0]?.id } },
    },
  ];

  await Promise.all(
    fakeData.map(async (data) => {
      const createdItem = await prisma.fundraiser.create({
        data,
      });
      fundraisers.push(createdItem);
    })
  );
}
