import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div
      style={{ backgroundImage: "url('/assets/images/heroimg.jpg')" }}
      className="relative pt-[64px] text-[#FDFAF6] h-full bg-center "
    >
      <div className="absolute top-0 bottom-0 right-0 left-0 from-[rgba(40,54,24,0.70)_0%] to-[rgba(40,54,24,0.70)_100%] bg-gradient-to-t "></div>
      <div className="relative z-50 w-[128px] mx-auto h-[48px]">
        <Image
          className="object-cover"
          src="/assets/logos/cribb.png"
          //   width={128}
          //   height={48}
          fill
          priority
          alt="cribb logo"
        />
      </div>
      <div className="relative z-50 ">
        <h1 className=" mt-[8.03rem] text-center text-[2.5rem] font-normal leading-[normal] ">
          Access Hostels and Apartment listings around Unilag
        </h1>
        <p className="text-base  mt-[5.03rem] text-center font-medium tracking-[0.01rem]">
          Sign up now and get started
        </p>
        <form className="px-[1rem] ">
          <input type="text" placeholder="Email Address" />
          <button className="bg-[#BC6C25] rounded-[0.5rem] w-full px-[1rem] py-[1.5rem] block text-[#FEFAE0] font-normal leading-[normal] text-base font-poppins ">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Hero;
