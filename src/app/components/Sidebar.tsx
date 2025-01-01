import React, { useState } from "react";

const Sidebar = () => {
  // States for checkboxes
  const [selectedTypes, setSelectedTypes] = useState(["Sport", "SUV"]);
  const [selectedCapacity, setSelectedCapacity] = useState([
    "2 Person",
    "8 or More",
  ]);

  // State for price slider
  const [priceRange, setPriceRange] = useState(100);

  // Generic function to handle checkbox changes
  const handleCheckboxChange = (
    option: string,
    selectedOptions: string[],
    setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="w-64 p-4 bg-white">
      {/* Type Section */}
      <div className="mb-6">
        <h3 className="mb-4 text-sm font-semibold text-gray-400">Type</h3>
        <ul>
          {[
            { label: "Sport", count: 10 },
            { label: "SUV", count: 12 },
            { label: "MPV", count: 16 },
            { label: "Sedan", count: 20 },
            { label: "Coupe", count: 14 },
            { label: "Hatchback", count: 14 },
          ].map((option) => (
            <li key={option.label} className="flex items-center mb-3">
              <input
                type="checkbox"
                id={option.label}
                checked={selectedTypes.includes(option.label)}
                onChange={() =>
                  handleCheckboxChange(
                    option.label,
                    selectedTypes,
                    setSelectedTypes
                  )
                }
                className="mr-3 w-5 h-5 accent-blue-500"
              />
              <label
                htmlFor={option.label}
                className="space-y-4 text-xl font-semibold text-gray-500"
              >
                <span>{option.label}</span>
                <span className="text-xl font-semibold text-gray-400">
                  {" "}
                  ({option.count})
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Capacity Section */}
      <div className="mb-6">
        <h3 className="mb-4 text-sm font-semibold text-gray-400">Category</h3>
        <ul>
          {[
            { label: "2 Person", count: 10 },
            { label: "4 Person", count: 14 },
            { label: "6 Person", count: 12 },
            { label: "8 or More", count: 16 },
          ].map((option) => (
            <li key={option.label} className="flex items-center mb-3">
              <input
                type="checkbox"
                id={option.label}
                checked={selectedCapacity.includes(option.label)}
                onChange={() =>
                  handleCheckboxChange(
                    option.label,
                    selectedCapacity,
                    setSelectedCapacity
                  )
                }
                className="mr-3 w-5 h-5 accent-blue-500"
              />
              <label
                htmlFor={option.label}
                className="space-y-4 text-xl font-semibold text-gray-500"
              >
                <span>{option.label}</span>
                <span className="text-xl font-semibold text-gray-400">
                  {" "}
                  ({option.count})
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range Section */}
      <div className="mb-6">
        <h3 className="mb-4 text-sm font-semibold text-gray-400">Price</h3>
        <input
          type="range"
          min="0"
          max="150"
          value={100}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full accent-blue-500"
        />
        <div className="flex justify-between items-center mb-4">
          <span className="space-y-4 text-xl font-semibold text-gray-500">
            Max. ${100}.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;