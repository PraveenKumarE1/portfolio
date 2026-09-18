import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface NeuralCoreProps {
  mouseX: number;
  mouseY: number;
}

function generateNodes(count: number, radius: number) {
  return Array.from({ length: count }, () => {
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = Math.random() * Math.PI * 2;
    return new THREE.Vector3(
      radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi)
    );
  });
}

function generateEdges(nodes: THREE.Vector3[], maxDist: number) {
  const edges: [THREE.Vector3, THREE.Vector3][] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].distanceTo(nodes[j]) < maxDist) {
        edges.push([nodes[i], nodes[j]]);
      }
    }
  }
  return edges;
}

function NeuralEdges({ nodes }: { nodes: THREE.Vector3[] }) {
  const edges = useMemo(() => generateEdges(nodes, 1.4), [nodes]);

  const lineGeometries = useMemo(() => {
    return edges.map(([a, b]) => {
      const geom = new THREE.BufferGeometry().setFromPoints([a, b]);
      return geom;
    });
  }, [edges]);

  return (
    <>
      {lineGeometries.map((geom, i) => {
        const LineTag = "line" as any;
        return (
          <LineTag key={i} geometry={geom}>
            <lineBasicMaterial
              color="#3B82F6"
              transparent
              opacity={0.15}
            />
          </LineTag>
        );
      })}
    </>
  );
}

function NeuralNodes({ nodes }: { nodes: THREE.Vector3[] }) {
  return (
    <>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? "#60A5FA" : i % 3 === 1 ? "#A78BFA" : "#34D399"}
            emissive={i % 3 === 0 ? "#3B82F6" : i % 3 === 1 ? "#7C3AED" : "#10B981"}
            emissiveIntensity={2}
            roughness={0}
            metalness={0.5}
          />
        </mesh>
      ))}
    </>
  );
}

function FloatingParticles() {
  const meshRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 2.5 + Math.random() * 2.5;
      positions[i * 3] = Math.cos(angle) * r * (0.6 + Math.random() * 0.8);
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5;
      positions[i * 3 + 2] = Math.sin(angle) * r * (0.6 + Math.random() * 0.8);
      // Blue/violet gradient
      colors[i * 3] = Math.random() * 0.4 + 0.2;
      colors[i * 3 + 1] = Math.random() * 0.3 + 0.1;
      colors[i * 3 + 2] = 1;
    }
    return { positions, colors };
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function NeuralCore({ mouseX, mouseY }: NeuralCoreProps) {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => generateNodes(40, 1.6), []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.x += delta * 0.04;
      // Mouse influence
      groupRef.current.rotation.x += (mouseY * 0.3 - groupRef.current.rotation.x) * 0.02;
      groupRef.current.rotation.y += (mouseX * 0.3 - groupRef.current.rotation.y) * 0.02;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.2;
      innerRef.current.rotation.z += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Core glowing sphere */}
      <mesh>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshStandardMaterial
          color="#1E3A5F"
          emissive="#3B82F6"
          emissiveIntensity={1.2}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Wireframe shell */}
      <mesh>
        <sphereGeometry args={[1.62, 20, 20]} />
        <meshBasicMaterial
          color="#3B82F6"
          wireframe
          transparent
          opacity={0.06}
        />
      </mesh>

      {/* Inner rotating ring */}
      <group ref={innerRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.1, 0.008, 8, 64]} />
          <meshStandardMaterial
            color="#60A5FA"
            emissive="#3B82F6"
            emissiveIntensity={3}
            roughness={0}
          />
        </mesh>
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[0.95, 0.006, 8, 64]} />
          <meshStandardMaterial
            color="#A78BFA"
            emissive="#7C3AED"
            emissiveIntensity={3}
            roughness={0}
          />
        </mesh>
      </group>

      {/* Neural nodes */}
      <NeuralNodes nodes={nodes} />
      {/* Neural edges */}
      <NeuralEdges nodes={nodes} />
      {/* Floating particles */}
      <FloatingParticles />

      {/* Lights */}
      <pointLight color="#3B82F6" intensity={8} distance={6} position={[0, 0, 2]} />
      <pointLight color="#7C3AED" intensity={5} distance={5} position={[2, 1, -1]} />
      <pointLight color="#10B981" intensity={3} distance={4} position={[-2, -1, 1]} />
    </group>
  );
}
