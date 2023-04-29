import { Result, type Prediction, type PrismaClient } from "@prisma/client";
import { entries } from "./entries";
import { fixtures } from "./fixtures";

export const predictions: Prediction[] = [];

export async function uploadPredictions(prisma: PrismaClient) {
  const fakeData = [
    {
      entry: { connect: { id: entries[0]?.id } },
      fixture: { connect: { id: fixtures[0]?.id } },
      result: Result.TEAM_A_WIN,
    },
    {
      entry: { connect: { id: entries[0]?.id } },
      fixture: { connect: { id: fixtures[1]?.id } },
      result: Result.DRAW,
    },
    {
      entry: { connect: { id: entries[1]?.id } },
      fixture: { connect: { id: fixtures[0]?.id } },
      result: Result.TEAM_B_WIN,
    },
    {
      entry: { connect: { id: entries[1]?.id } },
      fixture: { connect: { id: fixtures[1]?.id } },
      result: Result.TEAM_A_WIN,
    },
    {
      entry: { connect: { id: entries[2]?.id } },
      fixture: { connect: { id: fixtures[0]?.id } },
      result: Result.DRAW,
    },
    {
      entry: { connect: { id: entries[2]?.id } },
      fixture: { connect: { id: fixtures[1]?.id } },
      result: Result.TEAM_B_WIN,
    },
  ];

  await Promise.all(
    fakeData.map(async (data) => {
      const createdItem = await prisma.prediction.create({
        data,
      });
      predictions.push(createdItem);
    })
  );
}
