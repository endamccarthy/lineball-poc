import type { Organisation, PrismaClient } from "@prisma/client";
import { uploadItems } from "../utils";
import { socials } from "./socials";

export let organisations: Organisation[];

export async function uploadOrganisations(prisma: PrismaClient) {
  const fakeData = [
    {
      name: "Gortnahoe Glengoole GAA",
      socials: { connect: [{ id: socials[0]?.id }, { id: socials[1]?.id }] },
    },
  ];

  const uploadReturn = await uploadItems(prisma.organisation, fakeData);
  organisations = uploadReturn as unknown as Organisation[];
}
