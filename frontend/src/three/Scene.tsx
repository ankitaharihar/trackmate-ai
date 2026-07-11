import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import Earth from "./Earth";
import RouteArc from "./RouteArc";
import Parcel from "./Parcel";
import RouteMarkers from "./RouteMarkers";
import StarField from "./Stars";

type SceneProps = {
  tilt: {
    x: number;
    y: number;
  };
};

function EarthRig({ tilt }: SceneProps) {
  const rigRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (!rigRef.current) return;

    const targetX = tilt.y * 0.087;
    const targetY = 0.35 + tilt.x * 0.087;

    rigRef.current.rotation.x +=
      (targetX - rigRef.current.rotation.x) * 0.08;

    rigRef.current.rotation.y +=
      (targetY - rigRef.current.rotation.y) * 0.08;
  });

  return (
    <group ref={rigRef} position={[2.2, 0, 0]} scale={0.78}>
      <Earth />
      <RouteArc />
      <Parcel />
      <RouteMarkers />
    </group>
  );
}

export default function Scene({ tilt }: SceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 40 }}
      gl={{ alpha: true }}
    >
      <color attach="background" args={["#020617"]} />

      <ambientLight intensity={0.95} />

      <hemisphereLight
        intensity={0.45}
        groundColor="#0f172a"
      />

      <directionalLight
    position={[5,3,5]}
    intensity={4}
/>
      <pointLight
        position={[-4, -3, -2]}
        intensity={2}
      />

      <StarField />

      <EarthRig tilt={tilt} />
    </Canvas>
  );
}