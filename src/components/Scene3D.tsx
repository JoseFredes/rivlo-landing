"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function GlowOrb({ position, color, speed, distort, size, opacity = 0.45 }: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
  size: number;
  opacity?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.2;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
  });

  return (
    <Float speed={speed * 0.6} rotationIntensity={0.3} floatIntensity={1.2}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          roughness={0.2}
          metalness={0.6}
          distort={distort}
          speed={2}
          transparent
          opacity={opacity}
        />
      </Sphere>
    </Float>
  );
}

function FloatingRing({ position, color, speed }: {
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.4;
    meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.25;
  });

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <Torus ref={meshRef} args={[0.8, 0.08, 32, 64]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.15}
          metalness={0.9}
          transparent
          opacity={0.5}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </Torus>
    </Float>
  );
}

function Particles() {
  const points = useMemo(() => {
    const positions = new Float32Array(180 * 3);
    for (let i = 0; i < 180; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  const ref = useRef<THREE.Points>(null!);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    ref.current.rotation.x = state.clock.elapsedTime * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#d946ef" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.25} />
        <directionalLight position={[5, 5, 5]} intensity={0.6} color="#d946ef" />
        <directionalLight position={[-5, -5, 5]} intensity={0.4} color="#a855f7" />
        <pointLight position={[0, 0, 4]} intensity={0.5} color="#ec4899" />

        <GlowOrb position={[-3, 1.2, -1]} color="#d946ef" speed={1.2} distort={0.4} size={1.6} opacity={0.4} />
        <GlowOrb position={[3.2, -0.8, -1.5]} color="#a855f7" speed={0.9} distort={0.35} size={1.3} opacity={0.35} />
        <GlowOrb position={[0.5, 2.2, -2]} color="#ec4899" speed={0.7} distort={0.3} size={1} opacity={0.4} />
        <GlowOrb position={[-1.5, -2, -2.5]} color="#f43f5e" speed={0.8} distort={0.25} size={0.9} opacity={0.3} />
        <FloatingRing position={[3.5, 1.8, -1.5]} color="#d946ef" speed={1} />
        <FloatingRing position={[-3.5, -1.5, -2]} color="#ec4899" speed={0.8} />
        <Particles />
      </Canvas>
    </div>
  );
}
