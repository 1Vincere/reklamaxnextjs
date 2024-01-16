'use client'
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  // CubeCamera,
  // Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import Rocket from '../threeElement/Rocket';

function CarShow() {
  return (
    <>
      <OrbitControls
        // enableZoom={false}
        // enablePan={false}
        // enableRotate={false}
        target={[0, 0, 0]}
        maxPolarAngle={1.45} />

      <PerspectiveCamera makeDefault fov={50} position={[1, 6, 1]} />

      <Rocket />

      <spotLight
        color={[0x46 / 255, 0xc2 / 255, 0xa0 / 255]}
        intensity={100}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0x46 / 255, 0xc2 / 255, 0xa0 / 255]}
        intensity={100}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
    </>
  );
}

const Spaceship = () => {
  return (
      <div id="myCanvas">
        <Suspense fallback={null}>
          <Canvas shadows>
            <CarShow />
          </Canvas>
        </Suspense>
      </div>
  );
};

export default Spaceship;
