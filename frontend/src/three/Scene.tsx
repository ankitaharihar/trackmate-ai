import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Earth from "./Earth";
import StarField from "./Stars";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>

      {/* Background */}
      <color attach="background" args={["#020617"]} />

      {/* Lights */}
      <ambientLight intensity={1.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <pointLight
        position={[-5, -2, 2]}
        intensity={2}
        color="#38bdf8"
      />

      {/* Stars */}
      <StarField />

      {/* Earth */}
      <Earth />

      <OrbitControls
        autoRotate
        autoRotateSpeed={0.6}
        enableZoom={false}
      />

    </Canvas>
  );
}