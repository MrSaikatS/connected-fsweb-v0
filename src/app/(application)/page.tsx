import LogoutButton from "@/components/LogoutButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Nextjs Starter Template",
  description: "Home page of Nextjs Starter Template",
};

const page = () => {
  return (
    <>
      <section className="grid h-[80dvh] place-items-center">
        <div className="flex flex-col items-center gap-4 bg-gradient-to-tr from-rose-600 to-violet-600 bg-clip-text p-2">
          <span className="text-5xl font-bold text-transparent">
            Nextjs Starter Template 🚀
          </span>

          <LogoutButton />
        </div>
      </section>
    </>
  );
};

export default page;
