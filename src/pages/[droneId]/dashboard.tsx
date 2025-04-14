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
    <div className="w-screen h-screen bg-[#1a1a1a] flex flex-col items-center justify-center">
      <p className="absolute top-0 h-20 animate-text bg-gradient-to-r from-[#ffc680] via-[#E55C00] to-[#b36200] bg-clip-text text-transparent text-6xl font-black">
        Ready to Fly?
      </p>

      <Image
        src="/left-top-corner.svg"
        alt="line circle icon"
        width={200}
        height={200}
        className="absolute top-0 left-0 hidden sm:block"
      />

      <Image
        src="/right-top-corner.svg"
        alt="line circle icon"
        width={200}
        height={200}
        className="absolute top-0 right-0"
      />

      <div className="absolute left-4 w-[30vw] sm:max-w-[20rem] z-5 invisible sm:visible">
        <DroneStatusCard drone={droneInfo} />
      </div>

      <div className="absolute top-0 w-full z-6 visible sm:invisible">
        <DroneStatusCardMob drone={droneInfo} />
      </div>

      <div className="w-screen h-[50%] lg:h-[100vh] z-10 ">
        <DroneModelViewer />
      </div>

      <Image
        src="/launch-pad.svg"
        width={350}
        height={20}
        alt="plate"
        className="absolute bottom-0 z-1 invisible sm:visible"
      />

      <div className="absolute right-0 bottom-0 w-full lg:w-60 h-20 bg-[#FF833A] rounded-t-3xl text-center flex items-center justify-center z-50">
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
