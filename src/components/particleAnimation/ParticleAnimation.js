'use client'

import React, { useEffect, useRef } from 'react';

const ParticleAnimation = () => {
  const PARTICLE_NUM = 500;
  const PARTICLE_BASE_RADIUS = 0.5;
  const FL = 500;
  const DEFAULT_SPEED = 2;
  const BOOST_SPEED = 30;

  let canvas;
  let canvasWidth, canvasHeight;
  let context;
  let centerX, centerY;
  let particles = [];

  const resize = () => {
    canvasWidth = canvas.width = window.innerWidth;
    canvasHeight = canvas.height = window.innerHeight;
    centerX = canvasWidth * 0.5;
    centerY = canvasHeight * 0.5;
    context = canvas.getContext('2d');
    context.fillStyle = 'rgb(255, 255, 255)';
  };

  const randomizeParticle = (p) => {
    p.x = Math.random() * canvasWidth;
    p.y = Math.random() * canvasHeight;
    p.z = Math.random() * 1500 + 500;
    return p;
  };

  const loop = () => {
    context.save();
    context.fillStyle = 'rgb(0, 0, 0)';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.restore();

    // Остальной код без изменений
  };

  const canvasRef = useRef(null);
  const mouseXRef = useRef(centerX);
  const mouseYRef = useRef(centerY);
  const speedRef = useRef(DEFAULT_SPEED);
  const targetSpeedRef = useRef(DEFAULT_SPEED);
  const animationIdRef = useRef(null);

  useEffect(() => {
    canvas = canvasRef.current;

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);
    resize();

    mouseXRef.current = centerX;
    mouseYRef.current = centerY;

    for (let i = 0, p; i < PARTICLE_NUM; i++) {
      particles[i] = randomizeParticle(new Particle());
      particles[i].z -= 500 * Math.random();
    }

    const handleMouseMove = (e) => {
      mouseXRef.current = e.clientX;
      mouseYRef.current = e.clientY;
    };
    document.addEventListener('mousemove', handleMouseMove);

    const handleMouseDown = (e) => {
      targetSpeedRef.current = BOOST_SPEED;
    };
    document.addEventListener('mousedown', handleMouseDown);

    const handleMouseUp = (e) => {
      targetSpeedRef.current = DEFAULT_SPEED;
    };
    document.addEventListener('mouseup', handleMouseUp);

    animationIdRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const animate = () => {
    loop();
    animationIdRef.current = requestAnimationFrame(animate);
  };

  /**
   * Particle
   */
  function Particle(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }

  return <canvas ref={canvasRef} id="c"></canvas>;
};

export default ParticleAnimation;
