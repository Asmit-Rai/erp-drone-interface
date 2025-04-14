"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import React, { Suspense, useRef } from "react";
import * as THREE from "three";

function DroneModelView() {
  const { scene } = useGLTF("/drone-model.glb");
  const modelRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.z += 0.01; 
    }
  });

  return <primitive ref={modelRef} object={scene} scale={6} />;
}

export default function DroneModelViewer() {
  return (
    <div className="w-full h-full bg-transparent">
      <Canvas camera={{ position: [0, -7, 5] }}>
        <ambientLight intensity={20} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Suspense fallback={null}>
          <DroneModelView />
        </Suspense>
        <OrbitControls enableZoom={false} /> {/* Optional: lock zoom */}
      </Canvas>
    </div>
  );
}
