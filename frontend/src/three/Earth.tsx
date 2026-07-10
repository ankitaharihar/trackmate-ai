import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  const dayMap = useLoader(
    THREE.TextureLoader,
    "/textures/earth_day.jpg"
  );

  const normalMap = useLoader(
    THREE.TextureLoader,
    "/textures/earth_normal.jpg"
  );

  const specularMap = useLoader(
    THREE.TextureLoader,
    "/textures/earth_specular.jpg"
  );

  const cloudMap = useLoader(
    THREE.TextureLoader,
    "/textures/earth_clouds.png"
  );

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0015;
    }

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.0018;
    }
  });

  return (
    <group>
      <mesh ref={earthRef}>
        <sphereGeometry args={[1.3, 128, 128]} />
        <meshPhongMaterial
          map={dayMap}
          normalMap={normalMap}
          specularMap={specularMap}
          shininess={12}
        />
      </mesh>

      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.31, 128, 128]} />
        <meshPhongMaterial
          map={cloudMap}
          transparent
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}