"use client";

import React from "react";
import {
  IconWifi,
  IconBattery3,
  IconCircleCheck,
  IconArrowUp,
  IconBrandSpeedtest,
  IconMapPin,
} from "@tabler/icons-react";
import { BackgroundGradient } from "./ui/background-gradient";

type DroneProps = {
  drone: {
    id: string;
    model: string;
    battery: number;
    status: "Active" | "Idle" | "Disconnected";
    lastConnected: string;
    connectionType: string;
    signalStrength: "Excellent" | "Good" | "Poor" | "Disconnected";
    operator?: string;
    telemetry: {
      altitude: string;
      velocity: string;
      latitude: string;
      longitude: string;
    };
  };
};

export default function DroneSystemMonitor({ drone }: DroneProps) {
  const statusColor = {
    Active: "text-green-500",
    Idle: "text-yellow-400",
    Disconnected: "text-red-500",
  };

  const signalTextColor = {
    Excellent: "text-green-500",
    Good: "text-yellow-400",
    Poor: "text-orange-500",
    Disconnected: "text-red-500",
  };

  return (
    <div>
      <BackgroundGradient className="relative w-full min-h-[40vh] flex flex-col justify-evenly items-center rounded-[22px] bg-[#252729]">
        <h2 className="text-2xl font-semibold text-white mt-4">
          {drone.model}
        </h2>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
          ID: {drone.id}
        </p>

        <div className="grid grid-cols-3 gap-4 text-lg text-white">
          <div className="flex flex-col items-center text-center">
            <IconCircleCheck
              className={`w-6 h-6 mb-1 ${statusColor[drone.status]}`}
            />
            <p>Status:</p>
            <span className={statusColor[drone.status]}>{drone.status}</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <IconBattery3 className="w-6 h-6 mb-1 text-blue-500" />
            <p>Battery:</p>
            <span>{drone.battery}%</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <IconWifi className="w-6 h-6 mb-1 text-indigo-500" />
            <p>Signal:</p>
            <span className={signalTextColor[drone.signalStrength]}>
              {drone.signalStrength}
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <IconArrowUp className="w-6 h-6 mb-1 text-cyan-400" />
            <p>Altitude:</p>
            <span>{drone.telemetry.altitude}</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <IconBrandSpeedtest  className="w-6 h-6 mb-1 text-amber-400" />
            <p>Velocity:</p>
            <span>{drone.telemetry.velocity}</span>
          </div>

          <div className="flex flex-col items-center text-center">
            <IconMapPin className="w-6 h-6 mb-1 text-pink-400" />
            <p>Lat/Lng:</p>
            <span>
              {drone.telemetry.latitude}
            </span>
            <span>
            {drone.telemetry.longitude}
            </span>
          </div>

          <div className="col-span-3 text-start mt-2 text-neutral-400 text-xs sm:text-sm">
            <p>
             Connected Session:{" "}
              <span className="text-neutral-500">{drone.lastConnected}</span>
            </p>
            <p>
              Connection Type:{" "}
              <span className="text-neutral-500">{drone.connectionType}</span>
            </p>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
