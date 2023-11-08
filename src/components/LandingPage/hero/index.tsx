import Image from "next/image";
import React from "react";
import { HiChevronDown } from "react-icons/hi";
function Hero() {
  return (
    <div
      style={{ backgroundImage: "url('/assets/images/heroimg.jpg')" }}
      className="relative pt-[64px] text-[#FDFAF6] min-h-screen bg-center "
    >
      <div className="absolute top-0 bottom-0 right-0 left-0 from-[rgba(40,54,24,0.70)_0%] to-[rgba(40,54,24,0.70)_100%] bg-gradient-to-t "></div>
      <div className="relative z-50 w-[128px] md:w-[208px] mx-auto h-[48px] md:h-[80px]">
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
      {/* <div className="w-full mx-auto lg:w-[58.5rem] z-50 relative "> */}
      <div className="w-full  lg:w-[58.5rem] z-50 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
        <h1 className=" font-playfair mt- [8.03rem] text-center text-[2.5rem] md:text-[4rem] font-normal leading-[normal] ">
          Access Hostels and Apartment listings around Unilag
        </h1>
        <p className="text-base mb-[3.5rem] lg:mb-[1.68rem] mt-[5.03rem] lg:mt-[3rem] text-center font-medium tracking-[0.01rem]">
          Sign up now and get started
        </p>
        <form className="px-[1rem] flex md:justify-center flex-col md:flex-row gap-[1rem]">
          <input
            className="rounded-[0.5rem] placeholder:text-[#AAA] text-[#AAAAAA] w-full md:w-[24.75rem] px-[1rem] py-[1.5rem] block bg-[#E6E6E6] font-normal leading-[normal] text-base font-poppins"
            type="text"
            placeholder="Email Address"
          />
          <button className="bg-[#BC6C25] rounded-[0.5rem] w-full md:w-[6.8125rem] px-[1rem] py-[1.5rem] text-[#FEFAE0] font-normal leading-[normal] text-base font-poppins ">
            Sign up
          </button>
        </form>
      </div>
      <div className="absolute left-[50%] btn-anime ml-[-15px]">
        <a href="#Intro">
          <HiChevronDown className="text-[white] cursor-pointer" size={30} />
        </a>
      </div>
    </div>
  );
}

export default Hero;
