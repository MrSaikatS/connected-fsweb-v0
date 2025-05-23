"use client";

import userLogIn from "@/hooks/userLogIn";
import { LoginType } from "@/lib/types";
import { loginSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, LogIn } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

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
    const { success, message } = await userLogIn(loginData);

    if (!success) {
      toast.error(message);
    }

    if (success) {
      toast.success(message);
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
