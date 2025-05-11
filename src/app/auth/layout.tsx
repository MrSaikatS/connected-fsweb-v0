import { LayoutProps } from "@/lib/types";

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default AuthLayout;
