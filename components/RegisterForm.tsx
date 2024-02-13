"use client";
import { toast } from "react-hot-toast";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { useRouter } from "next/navigation";
import SelectCountry from "./SelectCountry";
import SelectPhone from "./SelectPhone";

const RegisterFrom = () => {
  const router = useRouter();
  const labelClass = "text-primary-black/80";
  const inputClass = "border-2 rounded-md border-neutral-300";

  const registerCompany = () => {
    toast.success("Registration message.");

    router.push("/dashboard");
  };

  return (
    <form method="post" className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Label htmlFor="register_company_name" className={labelClass}>
          Company Name
        </Label>
        <Input id="register_company_name" type="text" className={inputClass} />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="register_country" className={labelClass}>
          Country
        </Label>
        {/* <Input id="register_country" type="text" className={inputClass} /> */}
        <SelectCountry />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="register_full_name" className={labelClass}>
          Full Name
        </Label>
        <Input id="register_full_name" type="text" className={inputClass} />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="register_email" className={labelClass}>
          Email address
        </Label>
        <Input
          id="register_email"
          type="text"
          className={inputClass}
          autoComplete="email"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="register_phone_name" className={labelClass}>
          Phone number
        </Label>
        <SelectPhone />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="register_password" className={labelClass}>
          Password
        </Label>
        <Input
          id="register_password"
          type="password"
          className={inputClass}
          eyeicon="true"
          autoComplete="new-password"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="register_confirm_password" className={labelClass}>
          Confirm Password
        </Label>
        <Input
          id="register_confirm_password"
          type="password"
          className={inputClass}
          autoComplete="off"
          eyeicon="true"
        />
      </div>
      <div className="py-6">
        <Button className="w-full" onClick={registerCompany}>
          Create account
        </Button>
      </div>
    </form>
  );
};

export default RegisterFrom;
