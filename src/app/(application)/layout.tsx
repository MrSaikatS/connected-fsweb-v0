import Header from "@/components/Header/Header";
import { LayoutProps } from "@/lib/types";

const ApplicationLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header appName="NST App" />

      <main className="container mx-auto px-6 py-3">{children}</main>
    </>
  );
};

export default ApplicationLayout;
