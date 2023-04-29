import type { Fixture, PrismaClient } from "@prisma/client";
import { competitions } from "./competitions";
import { groups } from "./groups";
import { teams } from "./teams";

export const fixtures: Fixture[] = [];

export async function uploadFixtures(prisma: PrismaClient) {
  const fakeData = [
    // munster round 1
    {
      competition: { connect: { id: competitions[0]?.id } },
      group: { connect: { id: groups[0]?.id } },
      round: "one",
      teamA: { connect: { id: teams[0]?.id } },
      teamB: { connect: { id: teams[1]?.id } },
    },
    {
      competition: { connect: { id: competitions[0]?.id } },
      group: { connect: { id: groups[0]?.id } },
      round: "one",
      teamA: { connect: { id: teams[2]?.id } },
      teamB: { connect: { id: teams[3]?.id } },
    },
    // munster round 2
    {
      competition: { connect: { id: competitions[0]?.id } },
      group: { connect: { id: groups[0]?.id } },
      round: "two",
      teamA: { connect: { id: teams[0]?.id } },
      teamB: { connect: { id: teams[2]?.id } },
    },
    {
      competition: { connect: { id: competitions[0]?.id } },
      group: { connect: { id: groups[0]?.id } },
      round: "two",
      teamA: { connect: { id: teams[1]?.id } },
      teamB: { connect: { id: teams[3]?.id } },
    },
    // leinster round 1
    {
      competition: { connect: { id: competitions[0]?.id } },
      group: { connect: { id: groups[1]?.id } },
      round: "one",
      teamA: { connect: { id: teams[4]?.id } },
      teamB: { connect: { id: teams[5]?.id } },
    },
    {
      competition: { connect: { id: competitions[0]?.id } },
      group: { connect: { id: groups[1]?.id } },
      round: "one",
      teamA: { connect: { id: teams[6]?.id } },
      teamB: { connect: { id: teams[7]?.id } },
    },
    // leinster round 2
    {
      competition: { connect: { id: competitions[0]?.id } },
      group: { connect: { id: groups[1]?.id } },
      round: "two",
      teamA: { connect: { id: teams[4]?.id } },
      teamB: { connect: { id: teams[6]?.id } },
    },
    {
      competition: { connect: { id: competitions[0]?.id } },
      group: { connect: { id: groups[1]?.id } },
      round: "two",
      teamA: { connect: { id: teams[5]?.id } },
      teamB: { connect: { id: teams[7]?.id } },
    },
  ];

  await Promise.all(
    fakeData.map(async (data) => {
      const createdItem = await prisma.fixture.create({
        data,
      });
      fixtures.push(createdItem);
    })
  );
}
