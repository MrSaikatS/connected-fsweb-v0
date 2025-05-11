import { ReactNode } from "react";

export type LayoutProps = Readonly<{
  children: ReactNode;
}>;

export type HeaderProps = {
  appName: string;
};
