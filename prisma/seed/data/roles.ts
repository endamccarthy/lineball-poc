import type { PrismaClient, Role } from "@prisma/client";
import { AccessLevel } from "@prisma/client";
import { type UserId } from "../seed";

export const roles: Role[] = [];

export async function uploadRoles(prisma: PrismaClient, userId: UserId) {
  const fakeData = [
    {
      userId: userId.user[0] || "",
      accessLevel: AccessLevel.USER,
    },
    {
      userId: userId.organiser[0] || "",
      accessLevel: AccessLevel.ORGANISER,
    },
    {
      userId: userId.owner[0] || "",
      accessLevel: AccessLevel.OWNER,
    },
    {
      userId: userId.admin[0] || "",
      accessLevel: AccessLevel.ADMIN,
    },
  ];

  await Promise.all(
    fakeData.map(async (data) => {
      const createdItem = await prisma.role.create({
        data,
      });
      roles.push(createdItem);
    })
  );
}
