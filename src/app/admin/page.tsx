import React from "react";
import Image from "next/image";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="hidden sm:flex w-full md:w-[25%] lg:w-[20%]  justify-center bg-white">
        <Image
          src="/Nav Bar.png"
          alt="Navigation Bar"
          width={360}
          height={1600}
          className="w-full md:w-auto"
        />
      </div>

      {/* Dashboard Content */}
      <main className="flex-1 p-4 md:p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Details Rental Section */}
          <section className="col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Details Rental</h2>
            <div className="overflow-hidden">
              <Image
                src="/Maps.png"
                alt="Map of Rental Location"
                width={486}
                height={272}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="flex flex-wrap items-center space-x-4 mt-6">
              <Image
                src="/Look.png"
                alt="Nissan GT-R"
                width={132}
                height={72}
                className="rounded"
              />
              <div>
                <h3 className="font-semibold text-lg">Nissan GT-R</h3>
                <p className="text-gray-400">Sport Car</p>
                <div className="flex justify-end">
                  <span className="text-gray-400 text-sm">#9761</span>
                </div>
              </div>
            </div>

            <div className="mt-6 text-gray-500 space-y-4">
              <Image
                src="/Pick-Up(1).png"
                alt="Pick-Up Icon"
                width={92}
                height={20}
              />
              <Image
                src="/Pick-Up(3).png"
                alt="Pick-Up Location"
                width={486}
                height={48}
              />
              <div className="flex justify-between items-center">
                <Image
                  src="/Drop-Off (1).png"
                  alt="Drop-Off Icon"
                  width={92}
                  height={20}
                />
                <Image
                  src="/DropOff.png"
                  alt="Drop-Off Location"
                  width={486}
                  height={48}
                />
              </div>
            </div>

            <div className="mt-6 text-blue-600 font-bold text-xl">
              Total Rental Price: $80.00
            </div>
          </section>

          {/* Popular Cars Section */}
          <section className="bg-white p-6 rounded-lg shadow-md w-full lg:w-[524px] lg:h-[480px]">
            <div className="flex justify-between items-center">
              <h3 className="text-gray-500 text-lg md:text-3xl">Popular Cars</h3>
              <Link href="/category" className="text-blue-400 px-4 py-2 rounded-sm text-sm hover:bg-blue-100">
                View All
              </Link>
            </div>
            <Image src="/Top 5 Car Rental.png" alt="Top 5 Car Rental Vehicles" width={524} height={324} />
            <div className="mt-10 relative">
              <Image src="/Recent Transaction (1).png" alt="Recent Transaction" width={476} height={373} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
