"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Pickup from "@/app/components/pickup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../components/Sidebar";

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
    { src: "/Car (1).png", title: "Koenigsegg", price: "$99.00/day" },
    { src: "/Car (2).png", title: "Nissan GT-R", price: "$80.00/day" },
    { src: "/car (3).png", title: "Rolls-Royce", price: "$96.00/day" },
    { src: "/car (4).png", title: "All New Rush", price: "$80.00/day" },
    { src: "/car (5).png", title: "CR-V", price: "$72.00/day" },
    { src: "/car (6).png", title: "All New Terios", price: "$80.00/day" },
    { src: "/car (7).png", title: "MG ZX Excite", price: "$74.00/day" },
    { src: "/car (8).png", title: "New MG ZS", price: "$80.00/day" },
  ];

  const productsToShow = showMore ? products : products.slice(0, 6);

  return (
    <div className="w-full flex">
      {/* Sidebar */}
      <div className="hidden sm:block w-[20%]">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-10">
        {/* Category Component */}
        <Pickup />

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productsToShow.map((product, index) => (
            <div
              key={index}
              className="group shadow-md bg-white w-[90%] sm:w-[317px] h-[388px] mx-auto flex flex-col justify-between items-center cursor-pointer relative rounded-[10px] transition-transform transform hover:scale-105"
            >
              <div className="flex items-center justify-center h-[60%] flex-col">
                <Image
                  src={product.src}
                  width={220}
                  height={140}
                  alt={`${product.title} - car image`}
                  className="object-contain"
                />
              </div>

              <div className="absolute top-2 left-2 flex justify-between w-[90%] px-4">
                <h1 className="font-bold text-sm truncate" title={product.title}>
                  {product.title}
                </h1>
                <button
                  onClick={() => toggleLike(index)}
                  aria-label={`Toggle favorite for ${product.title}`}
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`text-xl ${
                      likedItems.includes(index) ? "text-red-500" : "text-gray-400"
                    }`}
                  />
                </button>
              </div>

            <div className="flex gap-[16px] justify-evenly mt-4 w-full px-4">
                  <div className="flex flex-col items-center">
                    <Image src="/Gasoline.png" alt="Gasoline icon" width={48} height={24} />
                  </div>
                  <div className="flex flex-col items-center">
                    <Image src="/Car (12).png" alt="Car icon" width={48} height={24} />
                  </div>
                  <div className="flex flex-col items-center">
                    <Image src="/Capacity.png" alt="Capacity icon" width={48} height={24} />
                  </div>
                </div>
                
              <div className="w-full px-4 py-2 bg-gray-50 rounded-b-[10px] flex justify-between items-center">
                <span className="text-black font-bold text-lg">{product.price}</span>
                <Link href="/DetailsCarRent">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="w-full flex justify-center mt-6">
          <button
            onClick={toggleShowMore}
            className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5"
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
        </div>
      </div>
    </div>
  );
}
