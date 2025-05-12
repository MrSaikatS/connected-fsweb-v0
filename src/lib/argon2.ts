import { hash, verify } from "@node-rs/argon2";
import { serverEnv } from "./env/serverEnv";

type VerifyPasswordParameter = {
  hash: string;
  password: string;
};

export const hashPasswordFunction = async (password: string) => {
  const hashedPassword = await hash(password, {
    secret: Buffer.from(serverEnv.BETTER_AUTH_SECRET),
  });

  return hashedPassword;
};

export const verifyPasswordFunction = async (data: VerifyPasswordParameter) => {
  const { hash, password } = data;

  const verifiedPassword = await verify(hash, password, {
    secret: Buffer.from(serverEnv.BETTER_AUTH_SECRET),
  });

  return verifiedPassword;
};
