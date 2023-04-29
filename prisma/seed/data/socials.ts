import type { Social, PrismaClient } from "@prisma/client";
import { Platform } from "@prisma/client";

export const socials: Social[] = [];

export async function uploadSocials(prisma: PrismaClient) {
  const fakeData = [
    {
      platform: Platform.TWITTER,
      handle: "gortnoahoe_gaa_twitter",
    },
    {
      platform: Platform.FACEBOOK,
      handle: "gortnoahoe_gaa_facebook",
    },
  ];

  await Promise.all(
    fakeData.map(async (data) => {
      const createdItem = await prisma.social.create({
        data,
      });
      socials.push(createdItem);
    })
  );
}
