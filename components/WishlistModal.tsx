"use client";

import { ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/Dialog";
import { Input } from "./ui/Input";
import Image from "next/image";
import dreambillLogo from "@/public/images/dreambill-logo.svg";
import { Label } from "./ui/Label";
import { FloatInput } from "./ui/FloatInput";
import { Button } from "./ui/Button";
import SocialIcons from "./SocialIcons";
import Spacer from "./ui/Spacer";

import main1 from "@/public/images/image_6.svg";
import main2 from "@/public/images/image_7.svg";
import main3 from "@/public/images/image_8.svg";
import main4 from "@/public/images/image_9.svg";
import main5 from "@/public/images/image_10.svg";
import { ScrollArea } from "./ui/ScrollArea";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { DialogClose } from "@radix-ui/react-dialog";
import { object, string, number, date, InferType } from "yup";

const emailSchema = object({
  email: string()
    .email("Please enter valid email id")
    .required("Email id is required."),
});

const WishlistModal = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
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
      email: "",
    },
    validationSchema: emailSchema,

    onSubmit: async (values) => {
      toast
        .promise(sendMailPromise(values), {
          loading: "joining wishlist...",
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
    <>
      <Dialog>
        <DialogTrigger className={className}>{children}</DialogTrigger>
        {/*  max-h-[680px]  h-full */}
        <DialogContent
          //   className="h-[95%]"
          className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:max-w-[480px] md:max-w-[980px] p-0 rounded-xl  max-h-[680px] overflow-hidden">
          {/* <DialogHeader>
            overflow-hidden
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Content</DialogDescription>
          </DialogHeader> */}
          <ScrollArea className="h-[calc(100vh_-_50px)]">
            <div className="flex flex-wrap justify-center ">
              <div className="flex-1 max-w-[400px] py-4">
                <DialogTitle className="flex items-center justify-center pt-2 pb-4 border-b border-gray-300">
                  <Image
                    src={dreambillLogo}
                    width={192}
                    height={42}
                    alt="Dreambill"
                  />
                </DialogTitle>
                <form onSubmit={formik.handleSubmit}>
                  <div className="max-w-[290px] mx-auto text-primary font-inter">
                    <h2 className="py-16 text-3xl font-bold leading-[2.815rem]">
                      Empower Your Workforce, Unlock Africa&apos;s Potential
                    </h2>
                    <div className="flex flex-col items-center gap-4 ">
                      <div className="font-bold tracking-[0.11rem] font-nunito_sans">
                        Get notified when we go live!
                      </div>
                      <div className="relative">
                        <Label
                          htmlFor="wishlist_email"
                          className="absolute top-0 z-10 px-2 py-0 text-sm font-normal text-indigo-600 left-2 font-poppins bg-background">
                          Email
                        </Label>
                        <FloatInput
                          type="text"
                          id="wishlist_email"
                          value={formik.values.email}
                          onChange={formik.handleChange("email")}
                          className="border-indigo-400 w-72 focus:ring-1"
                        />
                        {formik.touched.email && (
                          <span className="block text-sm text-red-400">
                            {formik.errors.email}
                          </span>
                        )}
                      </div>
                      <Button
                        type="submit"
                        variant="default"
                        className="w-full tracking-[0.11rem] font-medium text-base font-poppins"
                        disabled={formik.isSubmitting}>
                        Join the waitlist
                      </Button>
                    </div>
                    <Spacer size={48} />
                    <div className="flex flex-col items-center gap-5 pb-3">
                      <SocialIcons />
                      <div className="text-sm font-poppins text-neutral-500">
                        &copy; Copyright 2023. All rights reserved
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="relative items-center justify-center flex-1 hidden mb-1 md:flex bg-primary rounded-xl ">
                <div className="flex flex-col justify-between gap-10 ">
                  <div className="flex justify-between gap-5 mx-auto ">
                    <Image
                      src={main1}
                      width={309}
                      height={332}
                      alt="performance "
                      className="my-1"
                    />
                    <Image
                      src={main2}
                      width={152}
                      height={332}
                      alt="schedule"
                      className="hidden lg:block"
                    />
                  </div>
                  <div className="flex gap-5 mx-auto lg:justify-between">
                    <Image
                      src={main3}
                      width={157}
                      height={144}
                      alt="schedule"
                    />
                    <Image
                      src={main4}
                      width={144}
                      height={144}
                      alt="schedule"
                      className="hidden lg:block"
                    />
                    <Image
                      src={main5}
                      width={144}
                      height={144}
                      alt="schedule"
                    />
                  </div>
                </div>
                <Image
                  src="/images/vector-circle.svg"
                  alt="circle"
                  width={190}
                  height={190}
                  className="absolute bottom-28 right-40"
                />
                <Image
                  src="/images/icon-circle.svg"
                  alt="circle"
                  width={270}
                  height={270}
                  className="absolute bottom-0 right-0"
                />
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WishlistModal;
