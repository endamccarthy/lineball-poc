import type { Entry, PrismaClient } from "@prisma/client";
import { fundraisers } from "./fundraisers";
import { type UserId } from "../seed";

export const entries: Entry[] = [];

export async function uploadEntries(prisma: PrismaClient, userId: UserId) {
  const fakeData = [
    {
      userId: userId.user[0] || "",
      fundraiser: { connect: { id: fundraisers[0]?.id } },
    },
    {
      userId: userId.user[0] || "",
      fundraiser: { connect: { id: fundraisers[0]?.id } },
    },
    {
      userId: userId.user[0] || "",
      fundraiser: { connect: { id: fundraisers[0]?.id } },
    },
  ];

  await Promise.all(
    fakeData.map(async (data) => {
      const createdItem = await prisma.entry.create({
        data,
      });
      entries.push(createdItem);
    })
  );
}
