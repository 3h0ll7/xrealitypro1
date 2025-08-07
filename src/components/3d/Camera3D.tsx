import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

interface Camera3DProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

const Camera3D = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }: Camera3DProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* Camera Body */}
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 1.2, 1.5]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
      </mesh>
      
      {/* Lens */}
      <mesh position={[1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.6, 0.8, 1.5, 16]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.1} metalness={0.9} />
      </mesh>
      
      {/* Lens Glass */}
      <mesh position={[2, 0, 0]}>
        <circleGeometry args={[0.5, 32]} />
        <meshStandardMaterial 
          color="#87CEEB" 
          transparent 
          opacity={0.3} 
          roughness={0} 
          metalness={0.1}
        />
      </mesh>
      
      {/* Flash */}
      <mesh position={[-0.5, 0.4, 0.3]}>
        <boxGeometry args={[0.3, 0.2, 0.1]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.2} />
      </mesh>
      
      {/* Viewfinder */}
      <mesh position={[-0.8, 0.3, 0]}>
        <boxGeometry args={[0.4, 0.3, 0.3]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
    </group>
  );
};

export default Camera3D;