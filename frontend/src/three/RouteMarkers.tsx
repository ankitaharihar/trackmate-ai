import { Sphere } from "@react-three/drei";

export default function RouteMarkers() {
  return (
    <>
      {/* Source */}
      <Sphere args={[0.04, 32, 32]} position={[-0.8, 0.2, 0.55]}>
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={4}
        />
      </Sphere>

      {/* Destination */}
      <Sphere args={[0.04, 32, 32]} position={[0.9, -0.1, 0.45]}>
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={4}
        />
      </Sphere>
    </>
  );
}