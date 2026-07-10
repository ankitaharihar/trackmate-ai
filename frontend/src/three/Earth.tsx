import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Earth() {
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


  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0012;
    }

    if (cloudRef.current) {
      cloudRef.current.rotation.y += 0.0015;
    }
  });

  return (
    <group>
      {/* Earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1.05, 128, 128]} />

        <meshStandardMaterial
          map={dayMap}
          normalMap={normalMap}
          metalness={0.05}
          roughness={0.85}
        />
      </mesh>

      {/* Clouds */}
      <mesh ref={cloudRef}>
        <sphereGeometry args={[1.06, 128, 128]} />

        <meshStandardMaterial
          map={cloudMap}
          transparent
          opacity={0.35}
          depthWrite={false}
        />
      </mesh>

      {/* Atmosphere */}
      <mesh scale={1.08}>
  <sphereGeometry args={[1.05, 64, 64]} />

  <meshBasicMaterial
    color="#4fd1ff"
    transparent
    opacity={0.18}
    side={THREE.BackSide}
  />
</mesh>
    </group>
  );
}