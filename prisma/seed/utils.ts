/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type UserId = {
  user: string;
  organiser: string;
  admin: string;
  owner: string;
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
