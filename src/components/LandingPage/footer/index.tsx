import React from "react";
import { socialMedia, socialmediaT, usefullinks, usefullinksT } from "./data";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <section className="h- [21.125rem] bg-bg_primary">
      <div className="py-[5rem] text-base font-normal font-poppins text-primary_text">
        <div className="lg:flex items-center justify-center gap-[5rem]">
          <div className="relative w-[8rem] h-[3rem] max-lg:mx-auto md:w-[13.1875rem] md:h-[5.125rem]">
            <Image
              className="object -cover"
              fill
              src="/assets/logos/logofooter.png"
              alt="cribb logo"
            />
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-[1.5rem] llg:gap-[5rem]  text-center my-[4rem] ">
            <div className="flex flex-col lg:flex-row gap-[1.5rem] llg:gap-[5rem]">
              {usefullinks.map(([item, link]: usefullinksT, key: number) => (
                <Link href={link} key={key} className="">
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex max-md:pt-[1.5rem] justify-center gap-[1.5rem]">
              {socialMedia.map(([item, link]: socialmediaT, key: number) => (
                <Link href={link} key={key} className="">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-center">
          <h4>© 2023 by Cribb</h4>
          <div className="w-[1px] h-[20px] bg-[black]"></div>
          <h4>All rights reserved</h4>
        </div>
      </div>
    </section>
  );
}

export default Footer;
