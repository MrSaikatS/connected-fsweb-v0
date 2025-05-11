import LoginForm from "@/components/Forms/LoginForm";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="grid h-[90dvh] place-items-center">
        <Card className="w-[300px] sm:w-[400px]">
          <CardHeader>
            <CardTitle className="text-center text-2xl">User Login</CardTitle>
          </CardHeader>

          <CardContent>
            <LoginForm />
          </CardContent>

          <CardFooter className="flex justify-center gap-2">
            Don&apos;t have an account?
            <Link
              href="/auth/register"
              className="hover:text-primary underline">
              Register
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default page;
