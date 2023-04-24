import type { PrismaClient, Competition } from "@prisma/client";
import { Sport } from "@prisma/client";
import { uploadItems } from "../utils";
import { scoring } from "./scoring";

export let competitions: Competition[];

export async function uploadCompetitions(prisma: PrismaClient) {
  const fakeData = [
    {
      name: "Championship Challenge",
      year: 2024,
      sport: Sport.HURLING,
      scoring: { connect: { id: scoring[0]?.id } },
    },
  ];

  const uploadReturn = await uploadItems(prisma.competition, fakeData);
  competitions = uploadReturn as unknown as Competition[];
}
