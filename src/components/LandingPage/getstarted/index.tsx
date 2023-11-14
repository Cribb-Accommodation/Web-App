import Image from "next/image";
import React from "react";

function Getstarted() {
  return (
    <section>
      <div
        // style={{ backgroundImage: "url('/assets/images/footerimg.jpg')" }}
        className="relative w-full h-[32rem]"
      >
        <Image
          className="object-cover"
          fill
          src={"/assets/images/footerimg.jpg"}
          alt="footer bg"
        />
        <div className=" bg-gradient-to-t from-[rgba(0,0,0,0.60)_0%] to-[rgba(0,0,0,0.60)_100%] z-10 absolute top-0 bottom-0 left-0 right-0"></div>
        <div className="p-[6.9375rem_1rem_8.75rem_1rem] w-full text-center text-default2 z-50 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
          <h1 className=" font-playfair text-[1.5rem] md:text-[2rem] font-bold">
            Itching To Get Started?
          </h1>
          <p className="text-base mb-[2rem] lg:mb-[3.5rem] mt-[2.5rem] font-medium tracking-[.01rem] font-poppins">
            Sign up now and begin your search
          </p>
          <form className="px-[1rem] flex md:justify-center flex-col md:flex-row gap-[1rem]">
            <input
              className="rounded-[0.5rem] placeholder:text-base placeholder:text-[#AAA] text-[#AAAAAA] w-full md:w-[24.75rem] px-[1.5rem] py-[1rem] block bg-[#E6E6E6] font-normal leading-[normal] text-base font-poppins"
              type="text"
              placeholder="Email Address"
            />
            <button className="bg-[#BC6C25] rounded-[0.5rem] w-full md:w-[6.8125rem] px-[1.5rem] py-[1rem] text-[#FEFAE0] font-normal leading-[normal] text-base font-poppins whitespace-nowrap ">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Getstarted;
// absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2
