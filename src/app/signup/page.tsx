"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    const newErrors: any = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.password || formData.password.length < 6) newErrors.password = "Password must be at least 6 characters long";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission logic here (e.g., API call)
      console.log("Form submitted", formData);
    }
  };

  return (
    <div className="w-full flex sm:flex-col md:flex-col lg:flex-row justify-evenly items-center">
      <div className="sm:w-full lg:w-[600px] sm:h-full lg:h-[500px] my-11 flex flex-col justify-center items-center">
        <div className="w-[80%] sm:w-[90%] lg:w-[70%] h-[80%]">
          <div>
            <h1 className="sm:text-lg md:text-2xl lg:text-3xl font-bold">Create an account</h1>
            <p className="text-sm pt-2">Enter your details below</p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="py-2 px-3 mt-5 bg-transparent border-b-2 w-full"
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            <br />
            <input
              type="email"
              placeholder="Email or Phone Number"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="py-2 px-3 mt-5 bg-transparent border-b-2 w-full"
              required
              aria-label="Email or Phone Number"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="py-2 px-3 mt-5 bg-transparent border-b-2 w-full"
              required
              aria-label="Password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            <br />
            {/* Button */}
            <div className="w-full sm:w-[371px] h-[56px] mt-5">
              <button
                type="submit"
                className="w-full h-full rounded-[4px] bg-blue-800 text-white font-medium flex justify-center items-center"
              >
                Create Account
              </button>
            </div>
            {/* Google Sign-Up */}
            <div className="w-full sm:w-[371px] h-[56px] mt-5 flex items-center justify-center gap-2 border-2 rounded-[4px]">
              <Image
                className="w-6 h-6"
                src="/Google.png"
                alt="Google"
                width={24}
                height={24}
              />
              <p className="text-[16px]">Sign up with Google</p>
            </div>
            <div className="w-full sm:w-[371px] mt-5 flex justify-between items-center text-center text-[16px]">
              <p>Already have an account?</p>
              <Link href="/Login">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
