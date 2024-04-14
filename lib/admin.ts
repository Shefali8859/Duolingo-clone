import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2duh1PNfsbnristErQbZWFQxBhW",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};