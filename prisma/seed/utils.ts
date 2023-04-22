/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export const userId = {
  user: "fake-user-id-1",
  organiser: "fake-user-id-2",
  admin: "fake-user-id-3",
  owner: "fake-user-id-4",
};

export const uploadItems = async <T>(
  prismaModel: any,
  fakeData: T[]
): Promise<T[]> => {
  const returnArray: T[] = [];

  await Promise.all(
    fakeData.map(async (data) => {
      const createdItem: T = await prismaModel.create({
        data,
      });
      returnArray.push(createdItem);
    })
  );

  return returnArray;
};
