import { Html } from "@react-three/drei";

export default function CityMarkers() {
  return (
    <>
      <Html position={[-0.8, 0.22, 0.55]} center>
        <div className="rounded-full bg-cyan-500/90 px-3 py-1 text-xs font-semibold text-white shadow-lg backdrop-blur">
          Mumbai
        </div>
      </Html>

      <Html position={[0.9, -0.08, 0.45]} center>
        <div className="rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold text-white shadow-lg backdrop-blur">
          London
        </div>
      </Html>
    </>
  );
}