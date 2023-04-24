import type { Social, PrismaClient } from "@prisma/client";
import { Platform } from "@prisma/client";
import { uploadItems } from "../utils";

export let socials: Social[];

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

  const uploadReturn = await uploadItems(prisma.social, fakeData);
  socials = uploadReturn as Social[];
}
