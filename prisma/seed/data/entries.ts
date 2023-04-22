import type { Entry, PrismaClient } from "@prisma/client";
import { uploadItems, userId } from "../utils";
import { fundraisers } from "./fundraisers";

export let entries: Entry[];

export async function uploadEntries(prisma: PrismaClient) {
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
