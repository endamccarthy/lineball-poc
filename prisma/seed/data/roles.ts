import type { PrismaClient, Role } from "@prisma/client";
import { AccessLevel } from "@prisma/client";
import { type UserId, uploadItems } from "../utils";

export let roles: Role[];

export async function uploadRoles(prisma: PrismaClient, userId: UserId) {
  const fakeData = [
    {
      userId: userId.user,
      accessLevel: AccessLevel.USER,
    },
    {
      userId: userId.organiser,
      accessLevel: AccessLevel.ORGANISER,
    },
    {
      userId: userId.owner,
      accessLevel: AccessLevel.OWNER,
    },
    {
      userId: userId.admin,
      accessLevel: AccessLevel.ADMIN,
    },
  ];

  const uploadReturn = await uploadItems(prisma.role, fakeData);
  roles = uploadReturn as Role[];
}
