import React from 'react';
import Image from 'next/image';


const HeroSection = () => {
  return (
    <>
      <section className="first w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center">
        <Image src={"/Ads 1.png"} alt="" width={640} height={360} className="max-w-full" />
        <Image src={"/Ads 2.png"} alt="" width={640} height={360} className="max-w-full" />
      </section>

      <section className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-evenly gap-4 sm:gap-8">
        <Image src={"/Pick - Up (3).png"} alt="" width={582} height={132} className="max-w-full" />
        <Image src={"/Switch.png"} alt="" width={100} height={100} className="max-w-full" />
        <Image src={"/Drop - Off.png"} alt="" width={582} height={132} className="max-w-full" />
      </section>

      <section className="popular w-full flex flex-col gap-4">
        <div className="first w-full flex items-center justify-between"></div>
      </section>
    </>
  );
};

export default HeroSection;
