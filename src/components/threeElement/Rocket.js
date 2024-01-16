'use client'
import React, { useEffect, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from 'three';

export default function Rocket() {
  const gltf = useLoader(GLTFLoader, '/models/rocket/scene.gltf');

  const handleScroll = () => {
    const scrollY = window.scrollY;
    gltf.scene.position.y = scrollY * -0.01;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  //

  const [rotationAngle, setRotationAngle] = useState(0);

  useFrame(() => {
    setRotationAngle((prevAngle) => prevAngle + 0.01);
    gltf.scene.rotation.y = rotationAngle;
  });

  useEffect(() => {
    gltf.scene.scale.set(0.035, 0.035, 0.035);
    gltf.scene.position.set(0, 0, 0);
    gltf.scene.traverse((object) => {
      if (object instanceof Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }, [gltf]);

  return <primitive object={gltf.scene} />;
}
