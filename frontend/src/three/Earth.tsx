import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Earth() {
  const groupRef = useRef<THREE.Group>(null!);
  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudRef = useRef<THREE.Mesh>(null!);

  // Load textures
  const dayMap = useLoader(
  THREE.TextureLoader,
  "/textures/earth_day.jpg"
);

const normalMap = useLoader(
  THREE.TextureLoader,
  "/textures/earth_normal.jpg"
);

const cloudMap = useLoader(
  THREE.TextureLoader,
  "/textures/earth_clouds.jpg"
);
  // Better texture quality


  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }

    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.018;
    }

    if (cloudRef.current) {
      cloudRef.current.rotation.y += delta * 0.024;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1.05, 128, 128]} />

        <meshStandardMaterial
          map={dayMap}
          normalMap={normalMap}
          metalness={0.02}
          roughness={0.56}
          emissive="#0f6f82"
          emissiveIntensity={0.08}
        />
      </mesh>

      {/* Clouds */}
      <mesh ref={cloudRef}>
        <sphereGeometry args={[1.06, 128, 128]} />

        <meshStandardMaterial
          map={cloudMap}
          transparent
          opacity={0.3}
          depthWrite={false}
        />
      </mesh>

      {/* Atmosphere */}
      <mesh scale={1.08}>
        <sphereGeometry args={[1.05, 64, 64]} />

        <meshBasicMaterial
          color="#66e9ff"
          transparent
          opacity={0.3}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}