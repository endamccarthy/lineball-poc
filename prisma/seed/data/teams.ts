import type { PrismaClient, Team } from "@prisma/client";
import { uploadItems } from "../utils";

export let teams: Team[];

export async function uploadTeams(prisma: PrismaClient) {
  const fakeData = [
    { name: "tipperary" },
    { name: "limerick" },
    { name: "cork" },
    { name: "clare" },
    { name: "kilkenny" },
    { name: "dublin" },
    { name: "galway" },
    { name: "wexford" },
  ];

  const uploadReturn = await uploadItems(prisma.team, fakeData);
  teams = uploadReturn as Team[];
}
