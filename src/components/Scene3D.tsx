"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function GlowOrb({ position, color, speed, distort, size }: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
  size: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
  });

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <Sphere ref={meshRef} args={[size, 48, 48]} position={position}>
        <MeshDistortMaterial
          color={color}
          roughness={0.5}
          metalness={0.3}
          distort={distort}
          speed={1.5}
          transparent
          opacity={0.12}
        />
      </Sphere>
    </Float>
  );
}

function Particles() {
  const points = useMemo(() => {
    const positions = new Float32Array(120 * 3);
    for (let i = 0; i < 120; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return positions;
  }, []);

  const ref = useRef<THREE.Points>(null!);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    ref.current.rotation.x = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#7b61ff" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.3} color="#7b61ff" />
        <directionalLight position={[-5, -5, 5]} intensity={0.2} color="#06b6d4" />

        <GlowOrb position={[-3.5, 1.5, -2]} color="#7b61ff" speed={1} distort={0.3} size={2} />
        <GlowOrb position={[3.5, -1, -3]} color="#06b6d4" speed={0.8} distort={0.25} size={1.8} />
        <GlowOrb position={[0, 2.5, -4]} color="#00d4aa" speed={0.6} distort={0.2} size={1.5} />
        <Particles />
      </Canvas>
    </div>
  );
}
