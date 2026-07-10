import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[1.3, 64, 64]} />
      <meshStandardMaterial
        color="#0ea5e9"
        metalness={0.4}
        roughness={0.6}
      />
    </mesh>
  );
}