import Image from "next/image";
import Link from "next/link";

function Login() {
  return (
    <div className="w-full flex sm:flex-col md:flex-col lg:flex-row justify-evenly items-center">
      {/* Right Side (Form) */}
      <div className="sm:w-full lg:w-[600px] sm:h-full lg:h-[500px] my-11 flex flex-col justify-center items-center">
        <div className="w-[80%] sm:w-[90%] lg:w-[70%] h-[80%]">
          <div>
            <h1 className="sm:text-lg md:text-2xl lg:text-3xl font-bold">Log in to Exclusive</h1>
            <p className="text-sm pt-2">Enter your details below</p>
          </div>
          <form action="">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="py-2 px-3 mt-5 bg-transparent border-b-2 w-full"
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              className="py-2 px-3 mt-5 bg-transparent border-b-2 w-full"
            />
            <br />
            {/* Flex container for Log In and Forgot Password */}
            <div className="flex justify-between items-center w-full mt-5">
              {/* Log In Button */}
              <div className="w-[48%]">
                <button className="w-full h-[56px] rounded-[4px] bg-blue-800 text-white text-lg font-medium flex justify-center items-center">
                  Log In
                </button>
              </div>
              {/* Forgot Password Link */}
              <div className="w-[48%] text-right">
                <Link href="/forgot-password" className="text-blue-400 hover:underline text-lg">
                  Forgot Password?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
