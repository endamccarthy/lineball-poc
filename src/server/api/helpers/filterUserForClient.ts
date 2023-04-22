import type { User } from "@clerk/nextjs/dist/api";

export const filterUserForClient = (user: User) => {
  return {
    userId: user.id,
    username: user.username,
    profileImageUrl: user.profileImageUrl,
  };
};
