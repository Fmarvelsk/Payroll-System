"use client";
import Link from "next/link";

const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
  // get the href and remove everything before the hash (#)
  const href = event.currentTarget.href;
  const targetId = href.replace(/.*\#/, "");

  // get the element by id and use scrollIntoView
  const elem = document.getElementById(targetId);
  if (elem) {
    // first prevent the default behavior
    event.preventDefault();
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  }
};

const SmoothLink = ({ link, name }: { link: string; name: string }) => {
  return (
    <>
      <Link
        href={link}
        onClick={handleSmoothScroll}
        className="relative block text-lg font-semibold text-primary hover:text-teal-600">
        {name}
      </Link>
    </>
  );
};

export default SmoothLink;
