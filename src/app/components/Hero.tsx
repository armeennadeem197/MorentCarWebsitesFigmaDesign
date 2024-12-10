import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Main Banner Section */}
      <div className="w-full flex flex-wrap lg:flex-nowrap gap-4 lg:gap-8 justify-center">
        {/* Left Section */}
        <div className="flex-1 w-full max-w-[640px] bg-blue-400 text-white flex flex-col p-6 rounded-lg justify-center">
          <h1 className="font-[Plus Jakarta Sans] font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[32px] md:leading-[40px] lg:leading-[48px] tracking-[-0.03em] text-start">
            The Best Platform <br />
            <span>for Car Rental</span>
          </h1>
          <p className="font-[Plus Jakarta Sans] font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-[-0.02em] w-full max-w-[320px] mt-4">
            Ease of doing a car rental safely and reliably. Of course, at a low price.
          </p>
          <Link href="/rental-car">
            <button className="w-[120px] h-[44px] rounded-[4px] px-[20px] text-white bg-blue-500 hover:bg-blue-600 focus:outline-none mt-6 transition duration-300 ease-in-out">
              Rental Car
            </button>
          </Link>
          <div className="mt-8 flex justify-center">
            <Image
              src="/image 7.png"
              alt="Car rental service"
              width={300}
              height={100}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden sm:flex sm:flex-1 sm:w-full sm:max-w-[640px] bg-blue-800 text-white flex-col p-6 rounded-lg justify-center">
        <h1 className="font-[Plus Jakarta Sans] font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[32px] md:leading-[40px] lg:leading-[48px] tracking-[-0.03em] text-start">
            Easy way to rent a <br />
            <span>car at a low price</span>
          </h1>
          <p className="font-[Plus Jakarta Sans] font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-[-0.02em] w-full max-w-[320px] mt-4">
            Providing cheap car rental services and safe and comfortable facilities.
          </p>
          <Link href="/rental-car">
            <button className="w-[120px] h-[44px] rounded-[4px] px-[20px] text-white bg-blue-500 hover:bg-blue-600 focus:outline-none mt-6 transition duration-300 ease-in-out">
              Rental Car
            </button>
          </Link>
          <div className="mt-8 flex justify-center">
            <Image
              src="/image 7.png"
              alt="Car illustration"
              width={300}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 items-center justify-center mt-8">
        <Image
          src="/Pick-Up(3).png"
          alt="Pick-Up service illustration"
          width={582}
          height={132}
          className="max-w-full object-contain"
        />
        <Image
          src="/Switch.png"
          alt="Switch service illustration"
          width={100}
          height={100}
          className="max-w-full object-contain"
        />
        <Image
          src="/DropOff.png"
          alt="Drop-Off service illustration"
          width={582}
          height={132}
          className="max-w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
