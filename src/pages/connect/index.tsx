"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import PopUp from "@/components/PopUp";
const Connect = () => {
  const [showPopup, setshowPopup] = useState(false);

  const handlePopUp = () => {
    setshowPopup(true);
  };

  const handleClosePopup =()=>
  {
    setshowPopup(false)
  }


  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Image
        src="/circle-icon.png"
        width={150}
        height={150}
        alt="Circle Icon"
        className="absolute left-0 hidden md:block"
      />

      <Image
        src="/circle-mobile-icon.png"
        width={150}
        height={150}
        alt="Circle Mobile Icon"
        className="absolute bottom-0 left-0 block sm:hidden"
      />
      <Image
        src="/line-circle-icon.png"
        width={150}
        height={150}
        alt="Line Circle Icon"
        className="absolute top-0 right-0"
      />
      <Image
        src="/tree-icon.png"
        width={150}
        height={150}
        alt="Tree Icon"
        className="absolute bottom-0 right-0"
      />

      <div className="w-[100vw] max-sm:w-[70vw] h-[50vh] flex flex-col items-center justify-evenly">
        <p className="text-4xl font-bold animate-text bg-gradient-to-r from-[#ffc680] via-[#E55C00] to-[#b36200] bg-clip-text text-transparent text-center">
          Ready to Fly?
        </p>
        <div className="w-full h-full flex flex-col items-center justify-evenly">
          <form
            action="submit"
            className="w-full h-full flex justify-evenly flex-col max-w-md "
          >
            <div>
              <label
                className="block text-left text-white font-bold text-lg"
                htmlFor="WifiSSID"
              >
                WifiSSID
              </label>
              <input
                className="w-full border-b-2 border-white text-white py-2 focus:outline-none focus:border-[#FF833A]"
                type="text"
                placeholder="TP-Link_015040"
              ></input>
            </div>
            <div>
              <label
                className="block text-left text-white font-semibold text-lg"
                htmlFor="Password"
              >
                Enter Password
              </label>
              <input
                type="text"
                className="w-full border-b-2 border-white text-white py-2 focus:outline-none focus:border-[#FF833A]"
                placeholder="12345678"
              ></input>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <button
                type="submit"
                className="w-full h-[5vh] bg-[#FF833A] text-white rounded-lg font-bold"
                onClick={handleClick}
              >
                Connect
              </button>
              <button
                type="button"
                className="w-full h-[5vh] bg-[#FF833A] text-white rounded-lg font-bold"
                onClick={handlePopUp}
              >
                Wi-Fi Setup Guide
              </button>
            </div>
          </form>
        </div>
        {showPopup && <PopUp onClose={handleClosePopup} />}
      </div>
    </div>
  );
};
export default Connect;
