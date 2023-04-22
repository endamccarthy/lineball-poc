import type { PrismaClient, Group } from "@prisma/client";
import { competitions } from "./competitions";
import { uploadItems } from "../utils";

export let groups: Group[];

export async function uploadGroups(prisma: PrismaClient) {
  const fakeData = [
    {
      name: "Munster",
      competition: { connect: { id: competitions[0]?.id } },
    },
    {
      name: "Leinster",
      competition: { connect: { id: competitions[0]?.id } },
    },
  ];

  const uploadReturn = await uploadItems(prisma.group, fakeData);
  groups = uploadReturn as unknown as Group[];
}
