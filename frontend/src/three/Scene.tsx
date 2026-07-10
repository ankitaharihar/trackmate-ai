import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Earth from "./Earth";
import Satellite from "./Satellite";
import StarField from "./Stars";

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      gl={{ alpha: true }}
    >
      {/* Background */}
      <color attach="background" args={["#020617"]} />

      {/* Lights */}
      <ambientLight intensity={0.4} />

      <directionalLight
        position={[5, 3, 5]}
        intensity={2}
      />

      <pointLight
        position={[-5, -3, -5]}
        intensity={0.6}
      />

      {/* Stars */}
      <StarField />

      {/* Earth */}
      <group position={[0.5, 0, 0]}>
        <Earth />
      </group>

      {/* Satellite */}
      <Satellite />

      {/* Controls */}
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.6}
        enableZoom={false}
      />
    </Canvas>
  );
}