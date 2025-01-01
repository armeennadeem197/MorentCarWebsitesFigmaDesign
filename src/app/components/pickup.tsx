"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [date, setDate] = useState('');
  const [pickupTime, setPickupTime] = useState('');

  const [dropDate, setDropDate] = useState('');
  const [dropTime, setDropTime] = useState('');

  const locations = ['Location A', 'Location B', 'Location C'];

  return (
    <div className="flex items-center justify-center min-h-[132px]">
      {/* Pick-up Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-[582px]">
        <h1 className="text-xl font-semibold text-start mb-4">Pick - Up</h1>
        <div className="flex flex-wrap justify-between gap-4">
          {/* Pickup Location */}
          <div className="w-full sm:w-1/4">
            <label htmlFor="pickup" className="block text-sm font-medium text-gray-700">Pickup Location</label>
            <select
              id="pickup"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Pickup Location</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div className="w-full sm:w-1/4">
            <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              id="pickup-date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Time */}
          <div className="w-full sm:w-1/4">
            <label htmlFor="pickup-time" className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="time"
              id="pickup-time"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      {/* Switch Image */}
      <div className="flex justify-center mt-6">
        <Image
          src="/Switch.png"
          alt="Switch"
          width={60}
          height={60}
          className="w-[80px] h-[80px]"
        />
      </div>

      {/* Drop-off Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-[582px]  mt-6">
        <h1 className="text-xl font-semibold text-start mb-4">Drop-off</h1>
        <div className="flex flex-wrap justify-between gap-4">
          {/* Drop-off Location */}
          <div className="w-full sm:w-1/4">
            <label htmlFor="dropoff" className="block text-sm font-medium text-gray-700">Drop-off Location</label>
            <select
              id="dropoff"
              value={dropLocation}
              onChange={(e) => setDropLocation(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Select Drop-off Location</option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>

          {/* Drop-off Date */}
          <div className="w-full sm:w-1/4">
            <label htmlFor="dropoff-date" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              id="dropoff-date"
              value={dropDate}
              onChange={(e) => setDropDate(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Drop-off Time */}
          <div className="w-full sm:w-1/4">
            <label htmlFor="dropoff-time" className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="time"
              id="dropoff-time"
              value={dropTime}
              onChange={(e) => setDropTime(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
