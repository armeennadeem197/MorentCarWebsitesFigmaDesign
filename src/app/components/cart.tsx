"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Image from "next/image";

function Explore() {
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const [showMore, setShowMore] = useState(false);

  const toggleLike = (index: number) => {
    setLikedItems((prev) =>
      prev.includes(index) ? prev.filter((id) => id !== index) : [...prev, index]
    );
  };

  const toggleShowMore = () => setShowMore((prev) => !prev);

  const products = [
    { src: "/car (1).png", title: "Koenigsegg", price: "$99.00/ day" },
    { src: "/car (2).png", title: "Nissan GT - R", price: "$80.00/ day" },
    { src: "/Car (3).png", title: "Rolls-Royce", price: "$96.00/ day" },
    { src: "/Car (4).png", title: "All New Rush", price: "$80.00/ day" },
    { src: "/Car (5).png", title: "CR - V", price: "$72.00/ day" },
    { src: "/Car (6).png", title: "All New Terios", price: "$80.00/ day" },
    { src: "/Car (7).png", title: "All New Terios", price: "$74.00/ day" },
    { src: "/Car (8).png", title: "CR  - V", price: "$80.00/ day" },
    { src: "/Car (9).png", title: "MG ZX Exclusice", price: "$76.00/ day" },
    { src: "/Car (10).png", title: "New MG ZS", price: "$80.00/ day" },
    { src: "/Car (11).png", title: "MG ZX Excite", price: "$74.00/ day" },
    { src: "/Car (13).png", title: "New MG ZS", price: "$80.00/ day" },
  ];

  const displayedProducts = showMore ? products : products.slice(0, 8);

  return (
    <div id="products" className="w-full flex justify-center items-center mt-10 mb-1">
      <div className="w-[90%] md:w-[80%]">
        <div className="flex justify-between items-center">
          <h3 className="text-gray-500 text-lg md:text-3xl">Popular Cars</h3>
          <Link href="/category" className="text-blue-400 px-4 py-2 rounded-sm text-sm">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
          {displayedProducts.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              index={index}
              likedItems={likedItems}
              toggleLike={toggleLike}
            />
          ))}
        </div>
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

interface ProductCardProps {
  product: { src: string; title: string; price: string };
  index: number;
  likedItems: number[];
  toggleLike: (index: number) => void;
}

function ProductCard({ product, index, likedItems, toggleLike }: ProductCardProps) {
  return (
    <>
    <div className="group shadow-md bg-white h-[320px] flex flex-col justify-between items-center cursor-pointer relative rounded-[10px] transition-transform transform hover:scale-105">
      <div className="flex items-center justify-center h-full">
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
          aria-pressed={likedItems.includes(index)}
        >
          <FontAwesomeIcon
            icon={faHeart}
            className={`text-xl ${likedItems.includes(index) ? "text-red-500" : "text-gray-400"}`}
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
          <button className="bg-blue-500 text-white px-4 py-2 rounded-sm text-sm hover:bg-blue-600">
            Rent Now
          </button>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Explore;
