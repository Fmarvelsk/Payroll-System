import Image from "next/image";
const socialIcons = [
  {
    name: "FB",
    icon: "/images/icon-fb.svg",
    link: "https://facebook.com/",
  },
  {
    name: "LI",
    icon: "/images/icon-li.svg",
    link: "https://linkedin.com/",
  },
  {
    name: "YT",
    icon: "/images/icon-yt.svg",
    link: "https://youtube.com/",
  },
  {
    name: "TW",
    icon: "/images/icon-tw.svg",
    link: "https://twitter.com/",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center justify-center gap-3 ">
      {socialIcons.map((item, i) => (
        <a key={i} target="_blank" href={item.link}>
          <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-opaque/10 hover:bg-primary-opaque/20 ">
            <Image src={item.icon} width={24} height={24} alt={item.name} />
          </div>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
