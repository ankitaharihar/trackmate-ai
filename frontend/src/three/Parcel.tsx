import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const curve = new THREE.QuadraticBezierCurve3(
  new THREE.Vector3(-0.8, 0.2, 0.55),
  new THREE.Vector3(0, 1.4, 0.9),
  new THREE.Vector3(0.9, -0.1, 0.45)
);

export default function Parcel() {
 const mesh = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
  const t = (clock.getElapsedTime() * 0.12) % 1;

  const p = curve.getPoint(t);
 mesh.current.position.copy(p);

const s = 1 + Math.sin(clock.getElapsedTime() * 8) * 0.25;
mesh.current.scale.set(s, s, s);
});

  return (
  <group ref={mesh}>
    {/* Parcel */}
    <mesh>
      <boxGeometry args={[0.07, 0.07, 0.07]} />
      <meshStandardMaterial
        color="#22d3ee"
        emissive="#06b6d4"
        emissiveIntensity={3}
      />
    </mesh>

    {/* Glow */}
    <mesh scale={2}>
      <sphereGeometry args={[0.05, 32, 32]} />
      <meshBasicMaterial
        color="#22d3ee"
        transparent
        opacity={0.25}
      />
    </mesh>
  </group>
);
}