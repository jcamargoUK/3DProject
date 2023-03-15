import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";

const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.35} groundColor="black" />
      <pointLight intensity={1.5} />
      <spotLight
      position={[-55, 50, 60]}
      />      
      <primitive object={computer.scene}
      scale={0.65}
      position={[-2, -6, -1]}
      rotation={[0, 0, 0]} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 70 }}
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls  
        enableZoom={false}
        minZoom={2}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
