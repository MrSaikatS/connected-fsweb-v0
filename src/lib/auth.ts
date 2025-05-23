import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { hashPasswordFunction, verifyPasswordFunction } from "./argon2";
import prisma from "./db/prisma";
import { serverEnv } from "./env/serverEnv";

export const auth = betterAuth({
  secret: serverEnv.BETTER_AUTH_SECRET,
  database: prismaAdapter(prisma, {
    provider: "mysql",
  }),
  plugins: [nextCookies()],
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: false,
    password: {
      hash: hashPasswordFunction,
      verify: verifyPasswordFunction,
    },
  },
  advanced: {
    cookiePrefix: "connected",
    database: {
      generateId: false,
    },
  },
});
