"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Torus, Box } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function FloatingOrb({ position, color, speed, distort, size }: {
  position: [number, number, number];
  color: string;
  speed: number;
  distort: number;
  size: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
  });

  return (
    <Float speed={speed} rotationIntensity={0.4} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[size, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          distort={distort}
          speed={2}
          transparent
          opacity={0.85}
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
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
    meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.3;
  });

  return (
    <Float speed={speed * 0.7} rotationIntensity={0.6} floatIntensity={1}>
      <Torus ref={meshRef} args={[1.2, 0.15, 32, 64]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.9}
          transparent
          opacity={0.7}
        />
      </Torus>
    </Float>
  );
}

function FloatingCube({ position, color, speed }: {
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.4;
    meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.6;
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1.2}>
      <Box ref={meshRef} args={[0.8, 0.8, 0.8]} position={position}>
        <MeshWobbleMaterial
          color={color}
          roughness={0.15}
          metalness={0.85}
          factor={0.3}
          speed={1.5}
          transparent
          opacity={0.75}
        />
      </Box>
    </Float>
  );
}

function Particles() {
  const points = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  const ref = useRef<THREE.Points>(null!);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    ref.current.rotation.x = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#a78bfa" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#a78bfa" />
        <directionalLight position={[-5, -5, 5]} intensity={0.4} color="#06b6d4" />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#8b5cf6" />

        <FloatingOrb position={[-2.5, 1, 0]} color="#8b5cf6" speed={1.5} distort={0.4} size={1.2} />
        <FloatingOrb position={[2.8, -0.5, -1]} color="#06b6d4" speed={1.2} distort={0.3} size={0.9} />
        <FloatingOrb position={[0.5, 2, -2]} color="#ec4899" speed={1} distort={0.35} size={0.7} />
        <FloatingRing position={[3, 1.5, -1]} color="#a78bfa" speed={1.3} />
        <FloatingCube position={[-3, -1.5, -1]} color="#06b6d4" speed={1.1} />
        <Particles />
      </Canvas>
    </div>
  );
}
