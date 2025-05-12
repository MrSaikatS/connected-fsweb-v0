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
    const { message, statusText } = error;

    return {
      success: false,
      message: message || statusText,
    };
  }

  return {
    success: true,
    message: `User registered successfully`,
  };
};

export default userSignUp;
