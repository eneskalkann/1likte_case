"use client";
import { useSearch } from "@/utils/searchContext";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Icon from "../Icon";
import Switcher from "../switcher";

const Header = () => {
  const { setSearchQuery } = useSearch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container max-w-full bg-black border-b-[0.5px] border-[#D9D9D9] relative pt-6 pb-[43px] md:pb-7">
      <div className="flex justify-between relative">
        <div className="w-[128.77px] h-6 relative">
          <Image
            src="/images/1likte_logo.png"
            fill
            className="object-contain"
            alt="1likte"
          />
        </div>
        <div className="hidden lg:flex gap-[20px] items-center">
          <Switcher />
          <Link href="login" className="text-sm font-medium">
            Giriş Yap
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <Icon icon="menu" size={30} color="#fff" />
          </button>
        </div>
      </div>

      <motion.div
        className="lg:hidden absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-[20px] z-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
        transition={{ duration: 0.3 }}
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-4 md:right-8 text-white text-3xl"
        >
          X
        </button>
        <Switcher />
        <Link href="login" className="text-sm font-medium">
          Giriş Yap
        </Link>
      </motion.div>

      <div className="mt-8 flex flex-col gap-7">
        <h1 className="text-[28px] leading-[34px] font-medium">
          1likte ekibinden tavsiyeler ve yanıtlar
        </h1>
        <div className="flex gap-[10px] w-full bg-[#414141] bg-opacity-50 items-center rounded-[10px]">
          <Icon
            icon="search"
            color="#fff"
            className="md:w-6 md:h-6 w-[18px] h-[18px] ml-4"
          />
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Yazılarda arayın..."
            className="w-full bg-transparent outline-none p-4 text-white placeholder:text-white text-[14px] md:text-lg"
          ></input>
        </div>
      </div>
    </header>
  );
};

export default Header;
