import type { Prize, PrismaClient } from "@prisma/client";
import { uploadItems } from "../utils";
import { fundraisers } from "./fundraisers";

export let prizes: Prize[];

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

  const uploadReturn = await uploadItems(prisma.prize, fakeData);
  prizes = uploadReturn as unknown as Prize[];
}
