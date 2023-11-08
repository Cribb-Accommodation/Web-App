import Image from "next/image";
import React from "react";
import { HiChevronDown } from "react-icons/hi";
import {
  MdOutlineHouse,
  MdOutlinePerson,
  MdOutlineLocationOn,
} from "react-icons/md";
import { LiaBathSolid } from "react-icons/lia";
import { IoPricetagsOutline } from "react-icons/io5";
import { cribbList } from "./data";

function PreviewListing() {
  type listings = {
    cribbType: string;
    address: string;
    roomType: string;
    bathroom: string;
    price: string;
    img: string;
  };
  return (
    <section className="h- pt-[5.6rem] lg:pb-[15.75rem]">
      <div className="px-[1rem] lg:px-[3.5rem] l1440:px-[7.5rem]">
        <div className="flex justify-between p items-center text-primary_text font-playfair font-bold leading-[normal]">
          <div className="text-[1.5rem] md:text-[2rem]">
            <span className="mr-2">Featured </span>
            <span className="max-md:block"> accommodations</span>
          </div>
          <button className="text-[1.125rem] md:text-[1.5rem] underline  text-Main_primary_colour ">
            See more
          </button>
        </div>
        <div className=" lg:grid grid-cols-3 gap-[1rem] llg:gap-[1.5rem]">
          {cribbList.map((item: listings, key: number) => (
            <div key={key} className="mt-[1.5rem]">
              <div className="relative w-full h-[16rem] rounded-[0.5rem] overflow-clip">
                <Image
                  fill
                  src={"/assets/images/properties/" + item.img}
                  alt="roomview"
                />
              </div>
              <div className="py-[1.5rem] flex flex-col gap-[1rem]">
                <div className="flex justify-between">
                  <h3 className="flex gap-2 items-center">
                    <MdOutlineHouse
                      className="text-[black] inline cursor-pointer"
                      size={20}
                    />
                    {item.cribbType}
                  </h3>
                  <h3 className="flex gap-2 items-center">
                    <IoPricetagsOutline
                      className="text-[black] inline cursor-pointer"
                      size={20}
                    />
                    ₦ {item.price}
                  </h3>
                </div>
                <h3 className="flex gap-2 items-center">
                  <MdOutlineLocationOn
                    className="text-[black] inline cursor-pointer"
                    size={20}
                  />
                  {item.address}
                </h3>
                <div className="flex justify-between">
                  <h3 className="flex gap-2 items-center">
                    <MdOutlinePerson
                      className="text-[black] inline cursor-pointer"
                      size={20}
                    />
                    {item.roomType}
                  </h3>
                  <div className="w-[1px] h-[20px] bg-[red]"></div>
                  <h3 className="flex gap-2 items-center">
                    <LiaBathSolid
                      className="text-[black] inline cursor-pointer"
                      size={20}
                    />
                    {item.bathroom}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PreviewListing;
