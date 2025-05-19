import Header from "@/components/Header/Header";
import { auth } from "@/lib/auth";
import { LayoutProps } from "@/lib/types";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const ApplicationLayout = async ({ children }: LayoutProps) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
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
