"use client";
import Image from "next/image";
import ToggleSwitch from "@/components/ui/ToggleSwitch";
import DroneSystemMonitor from "@/components/DroneSystemMonitor";
import MapView from "@/components/MapView";

const Control = () => {
  const droneInfo = {
    id: "DRONE-001",
    model: "Drone Model-1",
    battery: 85,
    status: "Active" as const,
    lastConnected: "1:45 Hrs ",
    connectionType: "Wi-Fi",
    signalStrength: "Excellent" as const,
    operator: "Xyz",
    telemetry: {
      altitude: "120 m",
      velocity: "15 m/s",
      latitude: "28.6139° N",
      longitude: "77.2090° E",
    },
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="relative">
        <Image
          src="/left-top-corner.svg"
          alt="line circle icon"
          width={200}
          height={200}
          className="absolute top-0 left-0 hidden sm:block z-50"
        />

        <Image
          src="/right-top-corner.svg"
          alt="line circle icon"
          width={200}
          height={200}
          className="absolute top-0 right-0 hidden sm:block z-50"
        />
      </div>


      <div className="w-full h-screen flex flex-col items-center justify-evenly overflow-hidden">
        <div className="flex flex-col items-center justify-center lg:flex-row gap-4  w-full">
          <div className="w-[95%] sm:w-full lg:w-[25%]">
            <DroneSystemMonitor drone={droneInfo} />
          </div>

          <div className="w-[95%] sm:w-full flex-1">
            <div className="aspect-video w-full outline-inset-10 border-[#FF833A] rounded-xl text-center">
              <MapView />
            </div>
          </div>

          <div className="w-[95%] lg:w-30 flex flex-row lg:flex-col sm:flex-row items-center justify-evenly gap-6 p-4">
            <button className="w-full bg-[#FF833A]  h-15 text-white rounded-full font-medium transition hover:bg-blue-600">
              Take Off
            </button>
            <button className="w-full bg-[#FF833A] h-15 text-white rounded-full font-medium transition hover:bg-red-600">
              Land
            </button>
            <div className="w-1/2 lg:w-full flex justify-center inline">
              <ToggleSwitch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
