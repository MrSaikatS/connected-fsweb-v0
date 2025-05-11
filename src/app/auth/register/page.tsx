import RegisterForm from "@/components/Forms/RegisterForm";
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
            <CardTitle className="text-center text-2xl">
              User Registration
            </CardTitle>
          </CardHeader>

          <CardContent>
            <RegisterForm />
          </CardContent>

          <CardFooter className="flex justify-center gap-2">
            Already have an account?
            <Link
              href="/auth/login"
              className="hover:text-primary underline">
              Login
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default page;
