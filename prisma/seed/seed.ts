import { PrismaClient } from "@prisma/client";
import { type UserId } from "./utils";

import { uploadCompetitions } from "./data/competitions";
import { uploadEntries } from "./data/entries";
import { uploadFixtures } from "./data/fixtures";
import { uploadFundraisers } from "./data/fundraisers";
import { uploadGroups } from "./data/groups";
import { uploadOrganisations } from "./data/organisations";
import { uploadPredictions } from "./data/predictions";
import { uploadRoles } from "./data/roles";
import { uploadTeams } from "./data/teams";

const prisma = new PrismaClient();

async function main() {
  const userId: UserId = {
    user: "fake-user-id-1",
    organiser: "fake-user-id-2",
    admin: "fake-user-id-3",
    owner: "fake-user-id-4",
  };

  await uploadRoles(prisma, userId);
  await uploadTeams(prisma);
  await uploadCompetitions(prisma, userId);
  await uploadGroups(prisma);
  await uploadFixtures(prisma);
  await uploadOrganisations(prisma);
  await uploadFundraisers(prisma, userId);
  await uploadEntries(prisma, userId);
  await uploadPredictions(prisma);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
