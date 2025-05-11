"use client";

import { RegisterType } from "@/lib/types";
import { registerSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Signature } from "lucide-react";
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

const RegisterForm = () => {
  const registerHookForm = useForm<RegisterType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "all",
  });

  const userRegisterFunction = async (registerData: RegisterType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log(registerData);
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
