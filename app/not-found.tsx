import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-full h-screen ">
      <div className="flex flex-col items-center justify-center gap-10">
        <Image
          src="/images/dreambill-logo.svg"
          width={196}
          height={42}
          alt="dreambill logo"
        />
        <div className="flex items-center justify-center">
          <h1 className="pr-4 mx-5 my-0 text-2xl font-medium ">404</h1>
          <div className="text-sm text-neutral-400">
            | This page could not be found.
          </div>
        </div>
        <div className="py-2">
          <Link href="/" className="p-2 border rounded-md hover:bg-neutral-100">
            GO BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
}
