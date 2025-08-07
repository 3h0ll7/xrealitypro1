import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Sparkles } from '@react-three/drei';
import Camera3D from './Camera3D';

interface Scene3DProps {
  className?: string;
}

const Scene3D = ({ className = "" }: Scene3DProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [5, 2, 5], fov: 60 }}>
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.2} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            color="#ffd700"
            castShadow
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4169E1" />
          
          {/* 3D Camera */}
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <Camera3D position={[0, 0, 0]} scale={0.8} />
          </Float>
          
          {/* Sparkles for magic effect */}
          <Sparkles 
            count={50} 
            scale={10} 
            size={3} 
            speed={0.4} 
            color="#ffd700"
          />
          
          {/* Environment */}
          <Environment preset="studio" />
          
          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;