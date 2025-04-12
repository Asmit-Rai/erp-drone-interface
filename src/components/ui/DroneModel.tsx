"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import React, { Suspense } from "react";

function DroneModelView() {
  const { scene } = useGLTF("/drone-model.glb");
  return <primitive object={scene} scale={5} />;
}

export default function DroneModelViewer() {
  return (
    <div className="w-full h-full bg-transparent">
      <Canvas  camera={{ position: [0, -6, 5] }}>
        <ambientLight intensity={20} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Suspense fallback={null}>
          <DroneModelView />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
