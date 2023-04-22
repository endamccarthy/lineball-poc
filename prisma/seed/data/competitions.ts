import type { PrismaClient, Competition } from "@prisma/client";
import { Sport } from "@prisma/client";
import { uploadItems, userId } from "../utils";

export let competitions: Competition[];

export async function uploadCompetitions(prisma: PrismaClient) {
  const fakeData = [
    {
      creatorId: userId.admin,
      name: "Championship Challenge",
      year: 2024,
      sport: Sport.HURLING,
    },
  ];

  const uploadReturn = await uploadItems(prisma.competition, fakeData);
  competitions = uploadReturn as Competition[];
}
