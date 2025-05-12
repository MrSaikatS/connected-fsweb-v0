import { ReactNode } from "react";
import { z } from "zod";
import { loginSchema, registerSchema } from "./zodSchema";

/**
 * Props type for layout components.
 * Makes children prop readonly for immutability and type safety.
 */
export type LayoutProps = Readonly<{
  children: ReactNode;
}>;

/**
 * Props type for the header component.
 * @property appName - The name of the application to display in the header
 */
export type HeaderProps = {
  appName: string;
};

/**
 * Type for user registration data.
 * Inferred from Zod schema that validates:
 * - name
 * - email
 * - passwords
 * - confirmPassword
 */
export type RegisterType = z.infer<typeof registerSchema>;

/**
 * Type for user login data.
 * Inferred from Zod schema that validates:
 * - email
 * - password
 * - remember me
 */
export type LoginType = z.infer<typeof loginSchema>;
