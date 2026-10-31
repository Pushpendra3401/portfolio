"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Pseudo-random generator with seed to ensure pure renders
function pseudoRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function generateParticles() {
  const count = 1200;
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  const colorA = new THREE.Color("#3b82f6");
  const colorB = new THREE.Color("#06b6d4");
  const colorC = new THREE.Color("#a855f7");

  let seed = 42;

  for (let i = 0; i < count; i++) {
    const u = pseudoRandom(seed++);
    const v = pseudoRandom(seed++);
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = 2.4 + (pseudoRandom(seed++) - 0.5) * 0.4;

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);

    pos[i * 3] = x;
    pos[i * 3 + 1] = y;
    pos[i * 3 + 2] = z;

    const mixedColor = colorA.clone().lerp(
      pseudoRandom(seed++) > 0.5 ? colorB : colorC,
      pseudoRandom(seed++)
    );
    col[i * 3] = mixedColor.r;
    col[i * 3 + 1] = mixedColor.g;
    col[i * 3 + 2] = mixedColor.b;
  }
  return [pos, col];
}

const STATIC_PARTICLE_DATA = generateParticles();

function NeuralMesh() {
  const meshRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => STATIC_PARTICLE_DATA, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.12 + state.pointer.x * 0.3;
    meshRef.current.rotation.x = t * 0.08 + state.pointer.y * 0.3;
  });

  return (
    <group ref={meshRef}>
      {/* 3D Wireframe Icosahedron Core */}
      <mesh>
        <icosahedronGeometry args={[2.0, 3]} />
        <meshBasicMaterial
          wireframe
          color="#2563eb"
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh>
        <icosahedronGeometry args={[1.2, 2]} />
        <meshBasicMaterial
          wireframe
          color="#06b6d4"
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Outer Floating Particle Swarm */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export default function Hero3DCanvas() {
  return (
    <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <NeuralMesh />
      </Canvas>
    </div>
  );
}
