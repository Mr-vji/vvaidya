"use client";

import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
} from "@react-three/drei";
import { useEffect, useState } from "react";
import { Iphone17 } from "./Iphone17";

export default function HeroCanvas() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <Canvas camera={{ position: [-1, 2, 9], fov: 25 }}>
      <Environment preset="city" />

      <ambientLight intensity={0.8} />
      <directionalLight intensity={1} position={[2, 2, 2]} />

      {/* Only show OrbitControls on NON-mobile */}
      {!isMobile && (
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          // --- LIMIT ROTATION ---
          // Prevent rotating behind the phone (left/right)
          minAzimuthAngle={-Math.PI / 6} // -30°
          maxAzimuthAngle={Math.PI / 6} // +30°
          // Prevent rotating above/below too much (up/down)
          minPolarAngle={Math.PI / 2} // Lock vertical tilt
          maxPolarAngle={Math.PI / 2}
          // OPTIONAL: make rotation smoother
          enableDamping={true}
          dampingFactor={0.05}
        />
      )}

      <Float
        speed={1}
        rotationIntensity={1}
        floatIntensity={1}
        onPointerOver={() => (document.body.style.cursor = "grab")}
        onPointerOut={() => (document.body.style.cursor = "auto")}
      >
        <Iphone17 scale={0.45} position={[0, 0.1, 0]} />
      </Float>

      <ContactShadows
        position={[0, -1.8, 0]}
        rotation-x={Math.PI / 2}
        blur={3}
        opacity={0.5}
      />
    </Canvas>
  );
}
