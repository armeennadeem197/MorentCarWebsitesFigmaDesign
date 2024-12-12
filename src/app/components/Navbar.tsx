import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-white h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-8 border-b-2 border-b-[#e7eef6]">
      {/* Left Section */}
      <Link href="/Hero/Hero">
        <h1 className="text-[rgb(53,99,233)] text-4xl font-bold">MORENT</h1>
      </Link>

      <div className="input relative w-full md:max-w-[492px]">
        <Image
          src="/search-normal.png"
          alt="Search Icon"
          width={24}
          height={24}
          className="absolute top-1/2 left-3 transform -translate-y-1/2"
        />
        <input
          type="text"
          title="search"
          placeholder="Say something here"
          className="border-2 border-[#e7eef6] w-full h-[44px] rounded-full p-2 pl-10 pr-12"
        />
        <Image
          src="/filter.png"
          alt="Filter Icon"
          width={24}
          height={24}
          className="absolute top-1/2 right-3 transform -translate-y-1/2"
        />
      </div>

      {/* Right Section */}
      <div className="icons mt-4 md:mt-0">
        <Image
          src="/Profil & Notification.png"
          alt="Profile and Notification"
          width={236}
          height={44}
        />
      </div>
    </div>
  );
}
