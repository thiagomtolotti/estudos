import { PrismaClient } from "@prisma/client/extension";

// let prisma: PrismaClient;

const prisma: PrismaClient = new PrismaClient();

// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient();
//   }
//   prisma = global.prisma;
// }

export default prisma;
