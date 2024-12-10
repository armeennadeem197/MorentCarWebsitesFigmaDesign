"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Page() {
  const [showMore, setShowMore] = useState(false);
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const toggleLike = (index: number) => {
    setLikedItems((prev) =>
      prev.includes(index) ? prev.filter((id) => id !== index) : [...prev, index]
    );
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const products = [
    { src: "/car (1).png", title: "Koenigsegg", price: "$99.00/ day" },
    { src: "/car (2).png", title: "Nissan GT-R", price: "$80.00/ day" },
    { src: "/Car (3).png", title: "Rolls-Royce", price: "$96.00/ day" },
    { src: "/Car (4).png", title: "All New Rush", price: "$80.00/ day" },
    { src: "/Car (5).png", title: "CR-V", price: "$72.00/ day" },
    { src: "/Car (6).png", title: "All New Terios", price: "$80.00/ day" },
    { src: "/Car (7).png", title: "MG ZX Excite", price: "$74.00/ day" },
    { src: "/Car (8).png", title: "New MG ZS", price: "$80.00/ day" },
  ];

  const productsToShow = showMore ? products : products.slice(0, 6);

  return (
    <div className="w-full flex">
      {/* Sidebar */}
      <div className="hidden sm:flex w-[20%]">
        <Image src="/Nav Bar Side.png" alt="Sidebar" width={360} height={1600} />
      </div>

      {/* Main Content */}
      <div className="w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-10">
        <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between">
          <Image
            src="/Pick-Up(3).png"
            alt="Pick-Up"
            width={582}
            height={132}
            className="w-[200px] md:w-[270px] lg:w-[582px] object-contain"
          />
          <Image src="/switch.png" alt="Switch" width={60} height={60} className="w-[80px]" />
          <Image
            src="/DropOff.png"
            alt="Drop-Off"
            width={582}
            height={132}
            className="w-[200px] md:w-[270px] lg:w-[582px]"
          />
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {productsToShow.map((product, index) => (
            <div
              key={index}
              className="group shadow-md bg-white w-[317px] h-[388px] flex flex-col justify-between items-center cursor-pointer relative rounded-[10px] transition-transform transform hover:scale-105"
            >
              <div className="flex items-center justify-center h-full flex-col">
                <Image
                  src={product.src}
                  width={220}
                  height={140}
                  alt={`${product.title} image`}
                  className="object-contain"
                />
              </div>

              <div className="absolute top-2 left-2 flex justify-between w-full px-4">
                <h1 className="font-bold font-sans text-sm truncate" title={product.title}>
                  {product.title}
                </h1>
                <button
                  onClick={() => toggleLike(index)}
                  aria-label={`Toggle favorite for ${product.title}`}
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`text-xl ${likedItems.includes(index) ? "text-red-500" : "text-gray-400"}`}
                  />
                </button>
              </div>

              <div className="flex gap-[16px] justify-evenly mt-4 w-full px-4">
                <div className="flex flex-col items-center">
                  <Image src="/Gasoline.png" alt="Gasoline" width={48} height={24} />
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/Car (12).png" alt="Car Details" width={48} height={24} />
                </div>
                <div className="flex flex-col items-center">
                  <Image src="/Capacity.png" alt="Capacity" width={48} height={24} />
                </div>
              </div>

              <div className="w-full px-4 py-2 bg-gray-50 rounded-b-[10px] flex justify-between items-center">
                <span className="text-black font-bold text-lg">{product.price}</span>
                <Link href="/DetailsCarRent">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-sm text-sm hover:bg-blue-600">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <section className="w-full flex justify-center mt-6">
          <button
            onClick={toggleShowMore}
            className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5"
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
        </section>
      </div>
    </div>
  );
}
