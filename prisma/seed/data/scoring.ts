import type { Scoring, PrismaClient } from "@prisma/client";
import { uploadItems } from "../utils";

export let scoring: Scoring[];

export async function uploadScoring(prisma: PrismaClient) {
  const fakeData = [
    {
      pointsForWin: 10,
      pointsForDraw: 30,
    },
    {
      pointsForWin: 10,
      pointsForDraw: 50,
    },
  ];

  const uploadReturn = await uploadItems(prisma.scoring, fakeData);
  scoring = uploadReturn as Scoring[];
}
