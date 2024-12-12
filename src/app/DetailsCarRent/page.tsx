"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
interface RatingProps {
  rating: number;
  maxRating?: number;
  reviewCount?: number;
}
const Rating: React.FC<RatingProps> = ({
  rating,
  maxRating = 5,
  reviewCount,
}) => {
  const fullStars = Math.floor(rating);
  const emptyStars = maxRating - fullStars;

  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, index) => (
        <AiFillStar key={index} className="text-yellow-500" />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <AiOutlineStar key={index} className="text-gray-300" />
      ))}
      {reviewCount && (
        <span className="ml-2 text-sm text-gray-600">
          {reviewCount} Reviews
        </span>
      )}
    </div>
  );
};

// Car Card Component
interface CarCardProps {
  name: string;
  img: string;
  price: string;
  isLiked?: boolean;
  onToggleLike: () => void;
}

const CarCard: React.FC<CarCardProps> = ({
  name,
  img,
  price,
  isLiked,
  onToggleLike,
}) => (
  <div className="flex flex-col bg-white shadow-md rounded-lg p-4 w-full max-w-[304px] mx-auto">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-bold truncate" title={name}>
        {name}
      </h2>
      <button onClick={onToggleLike} aria-label={`Toggle favorite for ${name}`}>
        <FontAwesomeIcon
          icon={faHeart}
          className={`text-xl ${isLiked ? "text-red-500" : "text-gray-400"}`}
        />
      </button>
    </div>
    <p className="text-gray-500 mb-4">Sport</p>
    <Image
      src={img}
      alt={name}
      width={220}
      height={68}
      className="object-contain"
    />
    <Image
      src="/Spesification.png"
      alt="Specifications"
      width={256}
      height={24}
      className="my-4"
    />
    <div className="flex justify-between items-center">
      <p className="text-lg font-bold">
        {price}/<span className="text-gray-500">day</span>
      </p>
      <button className="bg-[#3563e9] text-white py-1 px-4 rounded-md">
        Rent Now
      </button>
    </div>
  </div>
);

const Page: React.FC = () => {
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const products = [
    { src: "/car (1).png", title: "Koenigsegg", price: "$99.00/ day" },
    { src: "/car (2).png", title: "Nissan GT-R", price: "$80.00/ day" },
    { src: "/Car (3).png", title: "Rolls-Royce", price: "$96.00/ day" },
    { src: "/Car (4).png", title: "All New Rush", price: "$80.00/ day" },
    { src: "/Car (5).png", title: "CR-V", price: "$72.00/ day" },
    { src: "/Car (6).png", title: "All New Terios", price: "$80.00/ day" },
  ];

  const toggleLike = (index: number) => {
    setLikedItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="w-full flex">
      {/* Sidebar */}
      <div className="hidden sm:flex w-[25%]">
        <Image
          src="/Nav Bar Side.png"
          alt="Sidebar"
          width={360}
          height={1600}
        />
      </div>
      <div className="w-full sm:w-[75%] p-6">
        <section className="w-full flex flex-col md:flex-row gap-5 items-center justify-around">
          <div className="first flex flex-col gap-4 w-full lg:max-w-[492px] lg:max-h-[360px] self-start">
            <div className="w-full flex flex-wrap lg:flex-nowrap gap-4 lg:gap-8 justify-center">
              <div className="flex-1 w-full max-w-[640px] bg-blue-400 text-white flex flex-col p-6 rounded-lg justify-center">
                <h1 className="font-[Plus Jakarta Sans] font-semibold text-[24px] md:text-[28px] lg:text-[32px] leading-[32px] md:leading-[40px] lg:leading-[48px] tracking-[-0.03em] text-start">
                  Sports car with the best <br />
                  <span>design and acceleration</span>
                </h1>
                <p className="font-[Plus Jakarta Sans] font-medium text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-[-0.02em] w-full max-w-[320px] mt-4">
                  Safety and comfort while driving a futuristic and elegant
                  sports car
                </p>
                <div className="mt-8 flex justify-center">
                  <Image
                    src="/image 8.png"
                    alt="Car rental service"
                    width={380}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 lg:gap-0">
              <Image src={"/View 1.png"} alt="" width={148} height={124} />
              <Image src={"/View 2.png"} alt="" width={148} height={124} />
              <Image src={"/View 3.png"} alt="" width={148} height={124} />
            </div>
          </div>
          <div className="flex flex-col w-full lg:max-w-[492px] h-auto lg:max-h-[508px] bg-white justify-between rounded-xl shadow-md p-4 self-start">
            <div className="hidden sm:flex sm:flex-1 sm:w-full sm:max-w-[640px] bg-white text-black flex-col p-6 rounded-lg justify-center">
              <h1 className="font-bold text-[32px] leading-[48px] tracking-[-3%]">
                Nissan GT - R
                <Rating rating={4} maxRating={5} reviewCount={440} />
              </h1>
              <p className="font-[Plus Jakarta Sans] font-medium text-[20px] leading-[40px] tracking-[-2%]">
                NISMO has become the embodiment of Nissan's outstanding
                performance, inspired by the most unforgiving proving ground,
                the "race track".
              </p>
              <p className="font-[Plus Jakarta Sans] font-medium text-[20px] leading-[40px] tracking-[-2%]">
                Type Car: <span className="text-gray-600">&nbsp;Sports</span>&nbsp;
                Steering: <span className="text-gray-600">Manual</span>
                <br />
                Capacity: <span className="text-gray-600">2 Persons</span>&nbsp;
                Fuel: <span className="text-gray-600">Gasoline (70L)</span>
              </p>

              <div className="p-4 flex items-center gap-4">
                <div className="flex items-center justify-between w-full">
                  <h1 className="font-bold text-lg sm:text-xl lg:text-2xl">
                    $80.00 /{" "}
                    <span className="text-gray-500 text-sm lg:text-base">
                      day $100.00
                    </span>
                  </h1>
                </div>
                <Link href="/payementCarRent">
                  <button className="bg-[#3563e9] hover:bg-[#264ac6] transition-all p-3 sm:p-4 px-6 sm:px-10 text-nowrap text-white rounded-md w-full max-w-[180px] text-center">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full bg-white rounded-lg mt-8">
          <div className="hidden md:flex">
            <Image src="/Reviews.png" alt="Reviews" width={1010} height={452} />
          </div>
          <div className="md:hidden">
            <Image
              src="/Reviews (1).png"
              alt="Reviews"
              width={492}
              height={384}
            />
          </div>
        </div>

        {/* Recent Cars Section */}
        <section className="w-full flex flex-col gap-5 mt-8">
          <div className="flex justify-between px-10">
            <h1 className="text-gray-500 text-lg">Recent Cars</h1>
            <Link href="/categories">
              <h1 className="text-[#3563e9] font-bold hover:underline">
                View All
              </h1>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <CarCard
                key={index}
                name={product.title}
                img={product.src}
                price={product.price}
                isLiked={likedItems.includes(index)}
                onToggleLike={() => toggleLike(index)}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
