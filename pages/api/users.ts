import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function main(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const users = await prisma.user.findMany();
        res.json(users);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      break;
  }
}
