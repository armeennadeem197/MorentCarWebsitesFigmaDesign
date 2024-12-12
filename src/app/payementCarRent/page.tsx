import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { Input } from "@/components/input";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="payment w-full bg-[#f6f7f9] p-4 sm:p-6 flex flex-wrap gap-6 justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="w-full flex flex-col lg:flex-row gap-6 justify-center">
        {/* Left Column - Form Cards */}
        <div className="cards w-full lg:w-[60%] flex flex-col gap-6">
          {/* Billing Info Card */}
          <Card className="flex flex-col justify-around">
            <CardHeader>
              <CardTitle>Billing Info</CardTitle>
              <CardDescription className="w-full flex items-center justify-between">
                <h1>Please enter your billing info</h1>
                <h1>Step 1 of 4</h1>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-4">
                <div className="w-full lg:w-[46%]">
                  <label htmlFor="name" className="font-bold">
                    Name
                  </label>
                  <Input
                    placeholder="Your Name"
                    id="name"
                    className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  />
                </div>
                <div className="w-full lg:w-[50%]">
                  <label htmlFor="num" className="font-bold">
                    Phone Number
                  </label>
                  <Input
                    placeholder="Your Phone Number"
                    id="num"
                    className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="w-full lg:w-[46%]">
                  <label htmlFor="add" className="font-bold">
                    Address
                  </label>
                  <Input
                    placeholder="Your Address"
                    id="add"
                    className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  />
                </div>
                <div className="w-full lg:w-[50%]">
                  <label htmlFor="city" className="font-bold">
                    Town/City
                  </label>
                  <Input
                    placeholder="Your City"
                    id="city"
                    className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rental Info Card */}
          <Card className="flex flex-col justify-around">
            <CardHeader>
              <CardTitle>Rental Info</CardTitle>
              <CardDescription className="w-full flex items-center justify-between">
                <h1>Please select your rental date</h1>
                <h1>Step 2 of 4</h1>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <Image
                src="/Pick-Up(1).png"
                alt="Pick Up"
                width={92}
                height={20}
              />
              <div className="flex flex-wrap gap-4">
                <div className="w-full lg:w-[46%]">
                  <label htmlFor="location" className="font-bold">
                    Location
                  </label>
                  <select
                    title="city"
                    id="location"
                    className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  >
                    <option value="">Select Your City</option>
                  </select>
                </div>
                <div className="w-full lg:w-[50%]">
                  <label htmlFor="date" className="font-bold">
                    Date
                  </label>
                  <select
                    title="date"
                    id="date"
                    className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  >
                    <option value="">Select Your Date</option>
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-[45%]">
                <label htmlFor="time" className="font-bold">
                  Time
                </label>
                <select
                  title="time"
                  id="time"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                >
                  <option value="">Select Your Time</option>
                </select>
              </div>
              <Image
                src="/Drop-Off (1).png"
                alt="Drop Off"
                width={104}
                height={20}
              />
              {/* Repeat the location/date/time selection for Drop-Off */}
              <div className="flex flex-wrap gap-4">
                <div className="w-full lg:w-[46%]">
                  <label htmlFor="drop-location" className="font-bold">
                    Location
                  </label>
                  <select
                    title="city"
                    id="drop-location"
                    className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  >
                    <option value="">Select Your City</option>
                  </select>
                </div>
                <div className="w-full lg:w-[50%]">
                  <label htmlFor="drop-date" className="font-bold">
                    Date
                  </label>
                  <select
                    title="date"
                    id="drop-date"
                    className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  >
                    <option value="">Select Your Date</option>
                  </select>
                </div>
              </div>
              <div className="w-full lg:w-[45%]">
                <label htmlFor="drop-time" className="font-bold">
                  Time
                </label>
                <select
                  title="time"
                  id="drop-time"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                >
                  <option value="">Select Your Time</option>
                </select>
              </div>
            </CardContent>
          </Card>

          {/* Payment Info Card */}
          <Card className="flex flex-col justify-around">
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription className="w-full flex items-center justify-between">
                <h1>Please enter your payment method</h1>
                <h1>Step 3 of 4</h1>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <Image
                src="/Credit Card.png"
                alt="Credit Card"
                width={804}
                height={308}
              />
              <Image
                src="/PayPal (1).png"
                alt="PayPal"
                width={804}
                height={56}
              />
              <Image src="/Bitcoin.png" alt="Bitcoin" width={804} height={56} />
            </CardContent>
          </Card>

          {/* Confirmation Card */}
          <Card className="flex flex-col justify-around">
            <CardHeader>
              <CardTitle>Confirmation</CardTitle>
              <CardDescription className="w-full flex items-center justify-between">
                <h1>
                  We are getting to the end. Just a few clicks and your rental
                  is ready
                </h1>
                <h1>Step 4 of 4</h1>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-8">
              <Image
                src="/Confirmation.png"
                alt="Confirmation"
                width={804}
                height={136}
              />
              <Link href="/admin">
                <button className="bg-[#3563e9] p-2 text-white rounded-xl w-[140px] h-[56px]">
                  Rent Now
                </button>
              </Link>
              <Image
                src="/Safe Data (1).png"
                alt="Safe Data"
                width={548}
                height={100}
              />
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Rental Summary */}
        <div className="details w-full lg:w-[40%] flex justify-center lg:mt-0 mt-8">
          <Image
            src="/Rental Summary.png"
            alt="Rental Summary"
            width={492}
            height={568}
            className="h-[568px]"
          />
        </div>
      </div>
    </div>
  );
}
