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
          <Link href="/payementCarRent">
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
          <Link href="/payementCarRent">
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

      {/* Pickup and Drop-off Section */}
      <div className="w-full sm:w-[80%] Top-[424px] left-[64px] justify-center p-4 sm:p-6 flex flex-col gap-10">
        <section className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
          <Image
            src="/Pick-Up(3).png"
            alt="Pick-Up"
            width={582}
            height={136}
            className="w-[200px] md:w-[270px] lg:w-[582px] object-contain"
          />
          <Image
            src="/Switch.png"
            alt="Switch"
            width={60}
            height={60}
            className="w-[60px] h-[60px]"
          />
          <Image
            src="/DropOff.png"
            alt="Drop-Off"
            width={582}
            height={136}
            className="w-[200px] md:w-[270px] lg:w-[582px] object-contain"
          />
        </section>
      </div>
    </div>
  );
};

export default Banner;
