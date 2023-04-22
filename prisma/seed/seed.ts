import { PrismaClient } from "@prisma/client";

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
  await uploadRoles(prisma);
  await uploadTeams(prisma);
  await uploadCompetitions(prisma);
  await uploadGroups(prisma);
  await uploadFixtures(prisma);
  await uploadOrganisations(prisma);
  await uploadFundraisers(prisma);
  await uploadEntries(prisma);
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
