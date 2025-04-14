"use client";

import Image from "next/image";
import DroneModelViewer from "@/components/ui/DroneModel";
import DroneStatusCard from "@/components/ui/DroneStatusCard";
import DroneStatusCardMob from "@/components/ui/DroneStatusCardMob";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();
  
  const handleClick = () => {
    console.log("Button clicked");
    const droneId = 1;
    router.push(`/${droneId}/control`);
  };

  const droneInfo = {
    id: "DRONE-001",
    model: "Drone Model-1",
    battery: 85,
    status: "Active" as const,
    lastConnected: "Today at 14:45",
    connectionType: "Wi-Fi",
    signalStrength: "Excellent" as const,
  };

  return (
    <div className="relative w-full h-screen bg-[#1a1a1a] flex flex-col items-center justify-center overflow-hidden">
      <p className="absolute top-0 h-20 animate-text bg-gradient-to-r from-[#ffc680] via-[#E55C00] to-[#b36200] bg-clip-text text-transparent text-6xl font-black">
        Ready to Fly?
      </p>

      <Image
        src="/line-circle-icon.png"
        alt="line circle icon"
        width={200}
        height={200}
        className="absolute top-0 right-0"
      />
      
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[22vw] sm:max-w-[15rem] sm:max-h-[16rem] h-[60vh] z-5 invisible sm:visible">
        <DroneStatusCard drone={droneInfo} />
      </div>
      
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full z-6 visible sm:invisible">
        <DroneStatusCardMob drone={droneInfo} />
      </div>

      <div className="w-full h-screen z-10">
        <DroneModelViewer />
      </div>

      <Image
        src="/drone-plate.png"
        width={350}
        height={20}
        alt="plate"
        className="absolute bottom-10 z-1 invisible sm:visible"
      />

      <div className="absolute right-0 bottom-10 w-full lg:w-60 h-20 bg-[#AA6034] rounded-t-3xl text-center flex items-center justify-center z-50">
        <button 
          type="button" 
          className="w-full h-full text-4xl text-white font-bold cursor-pointer" 
          onClick={handleClick}
        >
          Start
        </button>
      </div>
    </div>
  );
}