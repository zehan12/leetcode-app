import prisma from "../prisma";

export const connectToDatabase = async () => {
  try {
    const p = await prisma.$connect();
    console.log(p);
  } catch (error) {
    console.log(error);
  }
};
