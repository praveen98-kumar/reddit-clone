import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function main(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case "POST":
      await register(req, res);
      break;
    default:
      break;
  }
}

const register: NextApiHandler = async (req, res) => {
  const { name, email, image, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user) {
      return res.status(400).json({ message: "User already exist " });
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
        image,
      },
    });

    return res.status(200).json(newUser);
  } catch (error) {
    console.log("Error: ", error);
    return res.status(500).json({ message: "Server Error" });
  }
};
