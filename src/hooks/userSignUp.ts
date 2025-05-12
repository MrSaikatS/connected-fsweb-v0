import { authClient } from "@/lib/auth-client";
import { RegisterType } from "@/lib/types";

const userSignUp = async (registerData: RegisterType) => {
  const { name, email, password } = registerData;

  const { error } = await authClient.signUp.email({
    name,
    email,
    password,
    callbackURL: "/auth/login",
  });

  if (error) {
    const { message: errorMessage, statusText } = error;

    if (errorMessage === undefined) {
      return {
        success: false,
        message: statusText,
      };
    } else {
      return {
        success: false,
        message: errorMessage,
      };
    }
  }

  return {
    success: true,
    message: `User registered successfully`,
  };
};

export default userSignUp;
