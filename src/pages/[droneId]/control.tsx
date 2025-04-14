"use client"
import Image from "next/image";
import Camera from "@/components/Camera";
import ToggleSwitch from "@/components/ui/ToggleSwitch";
import DroneStatusCard from "@/components/ui/DroneStatusCard";

const Control = () => {
  const droneInfo = {
    id: "DRONE-001",
    model: "Drone Model-1",
    battery: 85,
    status: "Active" as const,
    lastConnected: "Today at 14:45",
    connectionType: "Wi-Fi",
    signalStrength: "Excellent" as const,
    operator: "Xyz",
  };

  return (
    <div className="w-screen h-screen max-h-screen flex flex-col px-2 sm:px-4 overflow-hidden"> 
      <div className="relative">
        <Image
          src="/line-circle-icon.png"
          alt="line circle icon"
          width={200}
          height={200}
          className="absolute top-0 right-0"
        />
      </div>
      <div className="flex flex-col justify-evenly w-full h-full overflow-hidden"> 
        <div className="flex flex-col items-center justify-evenly lg:flex-row gap-4 md:gap-8 w-full ">
          <div className="w-[95%] sm:w-full lg:w-1/5"> 
            <DroneStatusCard drone={droneInfo} />
          </div>

          <div className="w-[95%] sm:w-full flex-1"> 
            <div className="aspect-video w-full border-2 border-[#FF833A] rounded-xl text-center">
              <Camera />
            </div>
          </div>

          <div className="w-[95%] sm:w-full lg:w-40 flex flex-col items-center justify-evenly gap-6 p-4"> 
            <button className="w-full bg-[#FF833A] text-white py-3 px-6 rounded-full font-medium transition hover:bg-blue-600">
              Take Off
            </button>
            <button className="w-full bg-[#FF833A] text-white py-3 px-6 rounded-full font-medium transition hover:bg-red-600">
              Land
            </button>
            <div className="mt-4 w-full flex justify-center">
              <ToggleSwitch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;