import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";


const Connect = () => {
  const router = useRouter();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    router.push("/");  
  };


  return (
    <div className="min-h-screen flex items-center justify-center relative">
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

      <div className="w-[100vw] max-sm:w-[60vw] h-[50vh] flex flex-col items-center justify-evenly"> 
       <p className="text-white lg:text-4xl  max-sm:text-2xl text-center font-extrabold">Connect Your Drone</p>

        <div className="w-full h-full flex flex-col items-center justify-evenly">
          <form action="submit" className="w-full h-full flex justify-evenly flex-col max-w-md ">
            <div>
              <label className="block text-left text-gray-300 font-bold text-lg" htmlFor="WifiSSID">WifiSSID</label>
              <input className="w-full border-b-2 border-white bg-transparent text-white py-2 focus:outline-none focus:border-[#FF833A]" type="text" placeholder="TP-Link_015040"></input>
            </div>
            <div>
              <label className="block text-left text-gray-300 font-semibold text-sm" htmlFor="Password">Enter Password</label>
              <input className="w-full border-b-2 border-white bg-transparent text-white py-2 focus:outline-none focus:border-[#FF833A]" type="text" placeholder="12345678"></input>
            </div>
            <div>
            <button 
              type="submit"
              className="w-full bg-[#FF833A] text-white py-3 rounded-lg font-bold"
              onClick={handleClick}
            >
              Connect

            </button>
            </div>
            
          
          </form>
        </div>
      </div>

    </div>
  );
};
export default Connect;
