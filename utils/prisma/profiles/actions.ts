import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getRole(id: string) {
  const profile = await prisma.profiles.findUnique({
    where: {
      id: id, // The `id` you're querying for
    },
    select: {
      role: true, // Only fetch the `role` field
    },
  });

  if (profile) {
    return profile.role;
  }
  return "";
}
