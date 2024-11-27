import Image from "next/image";
import Link from "next/link";
import Icon from "../Icon";

const Footer = () => {
  return (
    <footer className="container max-w-full py-[65px]">
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-[126.37px] h-8">
          <Image
            src="/images/1likte_logo_bold.png"
            fill
            alt="1likte"
            className="object-contain"
          />
        </div>

        <div className="flex flex-col items-center gap-5 text-[#6B7280] mt-[50px]">
          <div className="flex items-center gap-5 ">
            <Link href="/" className="text-sm">
              Görüşlerini Bildir
            </Link>
            <Link href="/" className="text-sm">
              Hata Bildir
            </Link>
          </div>
          <div className="flex gap-5">
            <Link href="https://twitter.com/1likte" target="_blank">
              <Icon icon="x" size={16} />
            </Link>
            <Link href="https://twitter.com/1likte" target="_blank">
              <Icon icon="instagram" size={16} />
            </Link>
            <Link href="https://twitter.com/1likte" target="_blank">
              <Icon icon="linkedin" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
