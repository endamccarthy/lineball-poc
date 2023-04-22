import type { Entry, PrismaClient } from "@prisma/client";
import { type UserId, uploadItems } from "../utils";
import { fundraisers } from "./fundraisers";

export let entries: Entry[];

export async function uploadEntries(prisma: PrismaClient, userId: UserId) {
  const fakeData = [
    {
      userId: userId.user,
      fundraiser: { connect: { id: fundraisers[0]?.id } },
    },
    {
      userId: userId.user,
      fundraiser: { connect: { id: fundraisers[0]?.id } },
    },
    {
      userId: userId.user,
      fundraiser: { connect: { id: fundraisers[0]?.id } },
    },
  ];

  const uploadReturn = await uploadItems(prisma.entry, fakeData);
  entries = uploadReturn as unknown as Entry[];
}
