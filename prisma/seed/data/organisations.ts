import type { Organisation, PrismaClient } from "@prisma/client";
import { socials } from "./socials";

export const organisations: Organisation[] = [];

export async function uploadOrganisations(prisma: PrismaClient) {
  const fakeData = [
    {
      name: "Gortnahoe Glengoole GAA",
      socials: { connect: [{ id: socials[0]?.id }, { id: socials[1]?.id }] },
    },
  ];

  await Promise.all(
    fakeData.map(async (data) => {
      const createdItem = await prisma.organisation.create({
        data,
      });
      organisations.push(createdItem);
    })
  );
}
