import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Satellite() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;

    const t = clock.getElapsedTime() * 0.4;

    group.current.position.x = Math.cos(t) * 2.4;
    group.current.position.z = Math.sin(t) * 2.4;
    group.current.position.y = Math.sin(t * 2) * 0.2;

    group.current.rotation.y += 0.03;
  });

  return (
    <group ref={group}>
      {/* Main Body */}
      <mesh>
        <boxGeometry args={[0.18, 0.18, 0.18]} />
        <meshStandardMaterial color="#d1d5db" metalness={1} roughness={0.2} />
      </mesh>

      {/* Left Solar Panel */}
      <mesh position={[-0.35, 0, 0]}>
        <boxGeometry args={[0.35, 0.08, 0.01]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>

      {/* Right Solar Panel */}
      <mesh position={[0.35, 0, 0]}>
        <boxGeometry args={[0.35, 0.08, 0.01]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>

      {/* Antenna */}
      <mesh position={[0, -0.18, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.15]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}