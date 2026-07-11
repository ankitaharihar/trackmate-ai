import { useMemo } from "react";
import { Line } from "@react-three/drei";
import * as THREE from "three";

export default function RouteArc() {
  const points = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-0.8, 0.2, 0.55),
      new THREE.Vector3(0, 1.4, 0.9),
      new THREE.Vector3(0.9, -0.1, 0.45)
    );

    return curve.getPoints(100);
  }, []);

  return (
    <Line
      points={points}
      color="#22d3ee"
      lineWidth={6}
      transparent
      opacity={1}
    />
  );
}