import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

// const options = {
//   providers: [
//     Providers.GitHub({
//       clientId: process.env.GITHUB_ID as string,
//       clientSecret: process.env.GITHUB_SECRET as string,
//     }),
//   ],
//   secret: process.env.AUTH_SECRET,
//   jwt: {
//     secret: process.env.JWT_SECRET,
//   },
// };

const authHandler: NextApiHandler = (req, res) =>
  NextAuth(req, res, {
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
      }),
    ],
    session: { jwt: true },
    secret: process.env.AUTH_SECRET,
    jwt: {
      secret: process.env.JWT_SECRET,
    },
  });

export default authHandler;
