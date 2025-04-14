"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; 
import L from "leaflet";


export default function LiveDroneMap() {
  const position: [number, number] = [28.6139, 77.209]; // Example: Delhi
  const droneIcon = L.icon({
    iconUrl: "/drone-icon.png",
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

  return (
    <div className="w-full sm:w-full flex-1">
      <div className="aspect-video w-full rounded-xl overflow-hidden">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={droneIcon} >
            <Popup>Drone Location</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
