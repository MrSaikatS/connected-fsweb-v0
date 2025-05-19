import Header from "@/components/Header/Header";
import { auth } from "@/lib/auth";
import { LayoutProps } from "@/lib/types";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const ApplicationLayout = async ({ children }: LayoutProps) => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      redirect("/auth/login");
    }
  } catch (error) {
    console.error("Failed to get session:", error);

    // On error, redirect to login as a fallback for security
    redirect("/auth/login");
  }

  return (
    <>
      <Header appName="ConnectEd" />

      <main className="container mx-auto px-6 py-3">{children}</main>
    </>
  );
};

export default ApplicationLayout;
