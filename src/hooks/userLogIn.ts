import { authClient } from "@/lib/auth-client";
import { LoginType } from "@/lib/types";

const userLogIn = async (loginData: LoginType) => {
  const { email, password, rememberMe } = loginData;

  const { error } = await authClient.signIn.email({
    email,
    password,
    rememberMe,
    callbackURL: "/",
  });

  if (error) {
    const { message, statusText } = error;

    return {
      success: false,
      message: message || statusText,
    };
  }

  return {
    success: true,
    message: `User login successful`,
  };
};

export default userLogIn;
