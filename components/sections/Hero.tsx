import Link from "next/link";
import { buttonVariants } from "../ui/Button";
import WishlistModal from "../WishlistModal";

const Hero = () => {
  return (
    <section className="my-12 rounded-[20px] bg-primary bg-[url('/images/vector-3.svg')] w-full h-[365px] flex justify-center items-center font-inter">
      <div className="flex flex-col gap-12">
        <h4 className="text-4xl font-bold text-center text-white backdrop-blur-sm sm:backdrop-blur-none sm:p-0 sm:text-5xl">
          Get started with Dreambill
        </h4>
        <div className="flex flex-col justify-center gap-4 px-6 sm:gap-2 sm:px-0 sm:flex-row sm:w-full">
          <WishlistModal className={buttonVariants({ variant: "secondary" })}>
            Create an account
          </WishlistModal>
          {/* <Link
            href="/get-started"
            className={buttonVariants({ variant: "secondary" })}>
            Create an account
          </Link> */}
          <Link
            href="/book-demo"
            className={`${buttonVariants({
              variant: "inverse-outline",
            })} backdrop-blur-sm sm:backdrop-blur-none`}>
            Request a demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
