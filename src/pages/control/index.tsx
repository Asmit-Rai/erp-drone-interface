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
    <div className="w-screen h-screen flex flex-col">
         <div className="relative">
          <Image
            src="/line-circle-icon.png"
            alt="line circle icon"
            width={200}
            height={200}
            className="absolute top-0 right-0"
          />
        </div>
      <div className="flex flex-col justify-center w-full h-full">

        <div className="flex flex-col items-center lg:flex-row gap-8 mt-8">
          <div className="w-full lg:w-1/4">
            <DroneStatusCard drone={droneInfo} />
          </div>

          <div className="flex-1">
            <div className="aspect-video w-full border-2 border-[#FF833A] rounded-xl text-center">
              <Camera />
            </div>
          </div>

          <div className="w-full lg:w-40 flex flex-col items-center justify-center gap-6 p-4">
            <button className="w-full bg-[#FF833A] text-white py-3 px-6 rounded-full font-medium transition hover:bg-blue-600">
              Take Off
            </button>
            <button className="w-full bg-[#FF833A] text-white py-3 px-6 rounded-full font-medium transition hover:bg-red-600">
              Land
            </button>
            <div className="mt-4">
              <ToggleSwitch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;