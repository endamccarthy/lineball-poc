import type { Fundraiser, PrismaClient } from "@prisma/client";
import { type UserId, uploadItems } from "../utils";
import { competitions } from "./competitions";
import { organisations } from "./organisations";

export let fundraisers: Fundraiser[];

export async function uploadFundraisers(prisma: PrismaClient, userId: UserId) {
  const fakeData = [
    {
      organiserId: userId.organiser,
      competition: { connect: { id: competitions[0]?.id } },
      organisation: { connect: { id: organisations[0]?.id } },
    },
  ];

  const uploadReturn = await uploadItems(prisma.fundraiser, fakeData);
  fundraisers = uploadReturn as unknown as Fundraiser[];
}
