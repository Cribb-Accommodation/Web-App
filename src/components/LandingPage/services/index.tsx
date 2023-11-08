import React from "react";
import { servicesList, servicesListT } from "./data";

function Services() {
  return (
    <section>
      <div className=" bg-bg_primary px-[1rem] pb-[7.44rem] pt-[3.81rem] lg:pt-[7.91rem] llg:pb-[15.5rem] lg:px-[3.5rem] l1440:px-[7.5rem]">
        <h2 className="mb-[5.41rem] text-primary_text text-[2rem] font-bold font-playfair">
          What we offer
        </h2>
        <div className="lg:grid gap-[4.5rem] grid-cols-2">
          {servicesList.map((item: servicesListT, key: number) => (
            <div key={key} className="max-lg:mb-[3.81rem]">
              {item.svg}
              <h3 className="text-primary_text text-[1.25rem] md:text-[1.5rem] font-semibold font-playfair mt-[1rem]">
                {item.heading}
              </h3>
              <h3 className="text-subText font-poppins text-[0.875rem] lg:text-base font-normal mt-[.5rem]">
                {item.details}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
