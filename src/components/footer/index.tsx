import React from "react";
import { socialMedia, socialmediaT, usefullinks, usefullinksT } from "./data";
import Link from "next/link";

function Footer() {
  return (
    <section className="h-[21.125rem]">
      <div>
        <div className="flex flex-col lg:flex-row items-center gap-[1.5rem] text-center my-[4rem] ">
          <div className="flex flex-col lg:flex-row gap-[1.5rem] ">
            {usefullinks.map(([item, link]: usefullinksT, key: number) => (
              <Link href={link} key={key} className="">
                {item}
              </Link>
            ))}
          </div>
          <div className="flex pt-[1.5rem] justify-center gap-[1.5rem]">
            {socialMedia.map(([item, link]: socialmediaT, key: number) => (
              <Link href={link} key={key} className="">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-2 justify-center text-base font-normal font-poppins text-primary_text">
          <h4>© 2023 by Cribb</h4>
          <div className="w-[1px] h-[20px] bg-[black]"></div>
          <h4>All rights reserveds</h4>
        </div>
      </div>
    </section>
  );
}

export default Footer;
