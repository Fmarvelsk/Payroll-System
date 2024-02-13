import RegisterForm from "@/components/RegisterForm";

export const metadata = {
  title: "Register",
  description:
    "Get Started with Dreambill, Pay your global team with one bulk payment, Let's get you started as a company",
};

const page = () => {
  return (
    <div className="max-w-[460px] w-full font-nunito-sans ">
      <h1 className="font-bold text-xl text-primary-black ">
        Create a company account
      </h1>
      <div className="py-5">
        <RegisterForm />
      </div>
    </div>
  );
};

export default page;
