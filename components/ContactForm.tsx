"use client";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import {
  Select,
  SelectContent,
  SelectLabel,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Button } from "./ui/Button";
import Spacer from "./ui/Spacer";
import { toast } from "react-hot-toast";
import PhoneSelect from "./PhoneSelect";
import { useFormik } from "formik";
import countries from "@/lib/world-countries.json";

const ContactForm = () => {
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
      message: "",
    },
    // validationSchema: contactSchema,

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
            <Label htmlFor="contact_first_name">First Name</Label>
            <Input
              id="contact_first_name"
              type="text"
              placeholder="Enter First Name"
              onChange={formik.handleChange("firstName")}
              value={formik.values.firstName}
            />
          </div>
          <div className="flex flex-col flex-1 gap-3">
            <Label htmlFor="contact_last_name">Last Name</Label>
            <Input
              type="text"
              id="contact_last_name"
              onChange={formik.handleChange("lastName")}
              value={formik.values.lastName}
              placeholder="Enter Last Name"
            />
          </div>
        </div>
        <div className="flex flex-col flex-wrap w-full gap-10 lg:flex-row">
          <div className="flex flex-col flex-1 gap-3">
            <Label htmlFor="contact_email">Email</Label>
            <Input
              id="contact_email"
              type="email"
              onChange={formik.handleChange("email")}
              value={formik.values.email}
              placeholder="Your Email Id"
            />
          </div>
          <div className="flex flex-col flex-1 gap-3">
            <Label htmlFor="contact_phone">Phone Number</Label>
            <div className="flex justify-center">
              <Select
                onValueChange={formik.handleChange("phoneCode")}
                value={formik.values.phoneCode}>
                <SelectTrigger className="w-[120px]  border-b-2 border-x-0 border-t-0 rounded-none h-12 pl-0 border-input/30 outline-none ring-0 focus:ring-0 focus:outline-none">
                  <SelectValue placeholder="+214" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Phone Code</SelectLabel>
                    <PhoneSelect />
                    {/* <ScrollArea className="h-72">{phoneCodes}</ScrollArea> */}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Input
                id="contact_phone_number"
                type="number"
                onChange={formik.handleChange("phoneNumber")}
                value={formik.values.phoneNumber}
                placeholder="Phone Number"
                className="appearance-none "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 w-full gap-3">
          <Label htmlFor="contact_message">Message</Label>
          <Textarea
            id="contact_message"
            onChange={formik.handleChange("message")}
            value={formik.values.message}
            placeholder="Type your message here."
          />

          <Spacer size={10} />
          <div className="self-end py-10">
            <Button
              type="submit"
              disabled={formik.isSubmitting}
              size="lg"
              // onClick={handleSendMessage}
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
