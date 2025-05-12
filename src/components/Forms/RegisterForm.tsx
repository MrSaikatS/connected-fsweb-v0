"use client";

import userSignUp from "@/hooks/userSignUp";
import { RegisterType } from "@/lib/types";
import { registerSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Signature } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
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

const RegisterForm = () => {
  const registerHookForm = useForm<RegisterType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "all",
  });

  const userRegisterFunction = async (registerData: RegisterType) => {
    const { success, message } = await userSignUp(registerData);

    if (!success) {
      toast.error(message);
    }

    if (success) {
      registerHookForm.reset();

      toast.success(message);
    }
  };

  return (
    <>
      <Form {...registerHookForm}>
        <form
          onSubmit={registerHookForm.handleSubmit(userRegisterFunction)}
          className="grid gap-4"
          noValidate>
          <FormField
            control={registerHookForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={registerHookForm.control}
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
            control={registerHookForm.control}
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
            control={registerHookForm.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="cursor-pointer"
            disabled={registerHookForm.formState.isSubmitting}>
            {registerHookForm.formState.isSubmitting ? (
              <>
                <Loader2 className="animate-spin" /> Submitting...
              </>
            ) : (
              <>
                <Signature /> Register
              </>
            )}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default RegisterForm;
