// "use client";

// import { Canvas } from "@react-three/fiber";
// import {
//   ContactShadows,
//   Environment,
//   Float,
//   OrbitControls,
// } from "@react-three/drei";
// import { useEffect, useState } from "react";
// import { Iphone17 } from "./Iphone17";

// export default function HeroCanvas() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkScreen = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     checkScreen();
//     window.addEventListener("resize", checkScreen);
//     return () => window.removeEventListener("resize", checkScreen);
//   }, []);

//   return (
//     <Canvas camera={{ position: [-1, 2, 9], fov: 25 }}>
//       <Environment preset="city" />

//       <ambientLight intensity={0.8} />
//       <directionalLight intensity={1} position={[2, 2, 2]} />

//       {/* Only show OrbitControls on NON-mobile */}
//       {!isMobile && (
//         <OrbitControls
//           enablePan={false}
//           enableZoom={false}
//           // --- LIMIT ROTATION ---
//           // Prevent rotating behind the phone (left/right)
//           minAzimuthAngle={-Math.PI / 6} // -30°
//           maxAzimuthAngle={Math.PI / 6} // +30°
//           // Prevent rotating above/below too much (up/down)
//           minPolarAngle={Math.PI / 2} // Lock vertical tilt
//           maxPolarAngle={Math.PI / 2}
//           // OPTIONAL: make rotation smoother
//           enableDamping={true}
//           dampingFactor={0.05}
//         />
//       )}

//       <Float
//         speed={1}
//         rotationIntensity={1}
//         floatIntensity={1}
//         onPointerOver={() => (document.body.style.cursor = "grab")}
//         onPointerOut={() => (document.body.style.cursor = "auto")}
//       >
//         <Iphone17 scale={0.45} position={[0, 0.1, 0]} />
//       </Float>

//       <ContactShadows
//         position={[0, -1.8, 0]}
//         rotation-x={Math.PI / 2}
//         blur={3}
//         opacity={0.5}
//       />
//     </Canvas>
//   );
// }

"use client";

import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Iphone } from "./Iphone";
import { Html } from "@react-three/drei";

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

  function GlowDot() {
    return (
      <div className="relative">
        <div className="w-4 h-4 rounded-full bg-blue-500 animate-ping absolute" />
        <div className="w-4 h-4 rounded-full bg-blue-600" />
      </div>
    );
  }

  return (
    <Canvas camera={{ position: [-1, 2, 9], fov: 25 }} className="z-50">
      <Suspense
        fallback={
          <Html center>
            <GlowDot />
          </Html>
        }
      >
        <Environment preset="city" />
        <ambientLight intensity={0.8} />
        <directionalLight intensity={1} position={[2, 2, 2]} />

        <PresentationControls
          global={false} // false = only affect this model
          rotation={[0, 0, 0]} // initial rotation
          polar={[-Math.PI / 6, Math.PI / 6]} // vertical rotation limit (up/down)
          azimuth={[-Math.PI / 4, Math.PI / 4]} // horizontal rotation limit (left/right)
          config={{ mass: 2, tension: 400 }} // feel of the rotation physics
          snap={true} // snap back to center when released
        >
          <Float
            speed={1}
            rotationIntensity={1}
            floatIntensity={1}
            onPointerOver={() => (document.body.style.cursor = "grab")}
            onPointerOut={() => (document.body.style.cursor = "auto")}
          >
            <Iphone scale={0.45} position={[0, 0.1, 0]} />
          </Float>
        </PresentationControls>

        <ContactShadows
          position={[0, -1.8, 0]}
          rotation-x={Math.PI / 2}
          blur={3}
          opacity={0.5}
        />
      </Suspense>
    </Canvas>
  );
}
