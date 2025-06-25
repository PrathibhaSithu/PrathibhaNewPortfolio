import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Chesnut } from "./Lil-chesnut";
import { Suspense } from "react";
import HeroLights from "./HeroLight";
import Particles from "./Particles";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 750px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1050px)" });

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* deep blue ambient */}
      <ambientLight intensity={7.2} color="#e0e0fd" />
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
      />

      <Suspense fallback={null}>
      <HeroLights />
        <Particles count={100} />
        <group
          scale={isMobile ? 0.9 : 1}
          position={[0, -0.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Chesnut />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
