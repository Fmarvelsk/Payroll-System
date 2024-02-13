"use client";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {
  Select,
  SelectContent,
  SelectLabel,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Button } from "./ui/Button";
import Spacer from "./ui/Spacer";
import { toast } from "react-hot-toast";
import PhoneSelect from "./PhoneSelect";
import { useFormik } from "formik";
import countries from "@/lib/world-countries.json";

const DemoForm = () => {
  const sendMailPromise = (values: any) => {
    return new Promise((resolve, reject) => {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((data) => {
          const message = data?.message
            ? data.message
            : "Unknown error occurred.";

          if (data.emailSent) {
            resolve(message);
          } else {
            reject(message);
          }
        })
        .catch((err) => {
          reject("Internal Server Error");
        });
    });
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneCode: "ng",
      phoneNumber: "",
      companyName: "",
      companyWebsite: "",
      companySize: "",
      companyCategory: "",
    },

    onSubmit: async (values) => {
      const country = countries.findIndex(
        (item) => item.alpha2 === values.phoneCode
      );
      const getPhoneCode = country !== -1 ? `+${countries[country]?.code}` : "";

      const data = { ...values, phoneCode: getPhoneCode };

      toast
        .promise(sendMailPromise(data), {
          loading: "Sending mail...",
          success: (msg) => <>{msg}</>,
          error: (msg) => <>{msg}</>,
        })
        .then(() => {
          formik.resetForm();
        })
        .catch(() => {
          //error handling if needed...
        })
        .finally(() => {
          formik.setSubmitting(false);
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col items-center justify-start flex-1 gap-10 p-8">
        <div className="flex flex-col flex-wrap justify-center w-full gap-10 lg:flex-row">
          <div className="flex flex-col flex-1 gap-3">
            <Label htmlFor="book_first_name">First Name</Label>
            <Input
              id="book_first_name"
              type="text"
              onChange={formik.handleChange("firstName")}
              value={formik.values.firstName}
              placeholder="Enter First Name"
            />
          </div>
          <div className="flex flex-col flex-1 gap-3">
            <Label htmlFor="book_last_name">Last Name</Label>
            <Input
              type="text"
              id="book_last_name"
              onChange={formik.handleChange("lastName")}
              value={formik.values.lastName}
              placeholder="Enter Last Name"
            />
          </div>
        </div>
        <div className="flex flex-col flex-wrap w-full gap-10 lg:flex-row">
          <div className="flex flex-col flex-1 gap-3">
            <Label htmlFor="book_email">Email</Label>
            <Input
              id="book_email"
              type="email"
              onChange={formik.handleChange("email")}
              value={formik.values.email}
              placeholder="Your Email Id"
            />
          </div>
          <div className="flex flex-col flex-1 gap-3">
            <Label htmlFor="book_phone">Phone Number</Label>
            <div className="flex justify-center">
              <Select
                onValueChange={formik.handleChange("phoneCode")}
                value={formik.values.phoneCode}>
                <SelectTrigger className="w-[90px]  border-b-2 border-x-0 border-t-0 rounded-none h-12 pl-0 border-input/30 outline-none ring-0 focus:ring-0 focus:outline-none">
                  <SelectValue placeholder="+234" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Phone Code</SelectLabel>
                    <PhoneSelect />
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Input
                id="book_phone_number"
                type="number"
                onChange={formik.handleChange("phoneNumber")}
                value={formik.values.phoneNumber}
                placeholder="Phone Number"
                className="appearance-none"
              />
            </div>
          </div>

          <div className="flex flex-col flex-wrap justify-center w-full gap-10 lg:flex-row">
            <div className="flex flex-col flex-1 gap-3">
              <Label htmlFor="book_company_name">Company name</Label>
              <Input
                id="book_company_name"
                type="text"
                onChange={formik.handleChange("companyName")}
                value={formik.values.companyName}
                placeholder="Enter Company name"
              />
            </div>
            <div className="flex flex-col flex-1 gap-3">
              <Label htmlFor="book_company_website">Company website</Label>
              <Input
                type="text"
                id="book_company_website"
                onChange={formik.handleChange("companyWebsite")}
                value={formik.values.companyWebsite}
                placeholder="Enter Company website"
              />
            </div>
          </div>
          <div className="flex flex-col flex-wrap justify-center w-full gap-10 lg:flex-row">
            <div className="flex flex-col flex-1 gap-3">
              <Label htmlFor="book_first_name">Company Size</Label>
              <div className="flex justify-center">
                <Select onValueChange={formik.handleChange("companySize")}>
                  <SelectTrigger className="h-12 border-t-0 border-b-2 rounded-none outline-none border-x-0 border-input/30 ring-0 focus:ring-0 focus:outline-none">
                    <SelectValue placeholder="Select Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Company Size</SelectLabel>
                      <SelectItem value="0">0-10</SelectItem>
                      <SelectItem value="10">10-100</SelectItem>
                      <SelectItem value="100">100-500</SelectItem>
                      <SelectItem value="500">500-1000</SelectItem>
                      <SelectItem value="1000">1000-10000</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col flex-1 gap-3">
              <Label htmlFor="book_last_name">Category</Label>
              <div className="flex justify-center">
                <Select onValueChange={formik.handleChange("companyCategory")}>
                  <SelectTrigger className="h-12 border-t-0 border-b-2 rounded-none outline-none border-x-0 border-input/30 ring-0 focus:ring-0 focus:outline-none">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Company Category</SelectLabel>
                      <SelectItem value="ecom">E-Commerce</SelectItem>
                      <SelectItem value="ai">Automation</SelectItem>
                      <SelectItem value="market">Marketing</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <Spacer size={10} />
        <div className="self-end py-10">
          <Button size="lg" type="submit">
            Book A Demo
          </Button>
        </div>
      </div>
    </form>
  );
};

export default DemoForm;
