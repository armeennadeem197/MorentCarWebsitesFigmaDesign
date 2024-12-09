import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Navigation Bar */}
      <div className="first w-full md:w-[25%] lg:w-[20%] flex justify-center">
        <Image
          src={"/Nav Bar.png"}
          alt="Nav Bar"
          width={360}
          height={1600}
          className="w-full md:w-auto"
        />
      </div>

      {/* Main Content for Desktop and Mobile */}
      <div className="sec flex w-full md:w-[75%] lg:w-[80%] bg-[#f6f7f9] p-4 sm:p-6 gap-7 flex-wrap md:flex-nowrap justify-center">
        <Image
          src={"/Details Rental.png"}
          alt="Details Rental"
          width={534}
          height={836}
          className="w-full md:w-[45%] lg:w-[534px]"
        />
       
        <Image
          src={"/Top 5.png"}
          alt="Top 5"
          width={327}
          height={1272}
          className="w-full md:w-[30%] lg:w-[327px]"
        />
        <Image
          src={"/Recent Transaction.png"}
          alt="Recent Transaction"
          width={327}
          height={352}
          className="w-full md:w-[30%] lg:w-[327px]"
        />
      </div>
    </div>
  );
}
