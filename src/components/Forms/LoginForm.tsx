"use client";

import { LoginType } from "@/lib/types";
import { loginSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, LogIn } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";

const LoginForm = () => {
  const loginHookForm = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    mode: "all",
  });

  const userLoginFunction = async (loginData: LoginType) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // API call would go here
      console.log(loginData);
      // Handle successful login (e.g., redirect, set auth state)
    } catch (error) {
      console.error("Login failed:", error);
      // Handle the error (e.g., display error message)
    }
  };

  return (
    <>
      <Form {...loginHookForm}>
        <form
          onSubmit={loginHookForm.handleSubmit(userLoginFunction)}
          className="grid gap-4"
          noValidate>
          <FormField
            control={loginHookForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={loginHookForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={loginHookForm.control}
            name="rememberMe"
            render={({ field }) => (
              <FormItem className="flex gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>

                <FormLabel>Remember me</FormLabel>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="cursor-pointer"
            disabled={loginHookForm.formState.isSubmitting}>
            {loginHookForm.formState.isSubmitting ? (
              <>
                <Loader2 className="animate-spin" /> Submitting...
              </>
            ) : (
              <>
                <LogIn /> Login
              </>
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default LoginForm;
