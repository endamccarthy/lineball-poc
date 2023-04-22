import type { Organisation, PrismaClient } from "@prisma/client";
import { uploadItems } from "../utils";

export let organisations: Organisation[];

export async function uploadOrganisations(prisma: PrismaClient) {
  const fakeData = [{ name: "Gortnahoe Glengoole GAA" }];

  const uploadReturn = await uploadItems(prisma.organisation, fakeData);
  organisations = uploadReturn as Organisation[];
}
