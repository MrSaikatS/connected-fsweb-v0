"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";

const LogoutButton = () => {
  const logoutFunction = async () => {
    await authClient.signOut();
  };

  return (
    <>
      <Button
        className="cursor-pointer"
        onClick={logoutFunction}>
        Logout
      </Button>
    </>
  );
};

export default LogoutButton;
