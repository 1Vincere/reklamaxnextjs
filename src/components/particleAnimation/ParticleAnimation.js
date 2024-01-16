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
  let mouseX, mouseY;
  let speed = DEFAULT_SPEED;
  let targetSpeed = DEFAULT_SPEED;
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

    speed += (targetSpeed - speed) * 0.01;

    var p;
    var cx, cy;
    var rx, ry;
    var f, x, y, r;
    var pf, px, py, pr;
    var a, a1, a2;

    var halfPi = Math.PI * 0.5;
    var atan2 = Math.atan2;
    var cos = Math.cos;
    var sin = Math.sin;

    context.beginPath();
    for (var i = 0; i < PARTICLE_NUM; i++) {
      p = particles[i];

      p.pastZ = p.z;
      p.z -= speed;

      if (p.z <= 0) {
        randomizeParticle(p);
        continue;
      }

      cx = centerX - (mouseX - centerX) * 1.25;
      cy = centerY - (mouseY - centerY) * 1.25;

      rx = p.x - cx;
      ry = p.y - cy;

      f = FL / p.z;
      x = cx + rx * f;
      y = cy + ry * f;
      r = PARTICLE_BASE_RADIUS * f;

      pf = FL / p.pastZ;
      px = cx + rx * pf;
      py = cy + ry * pf;
      pr = PARTICLE_BASE_RADIUS * pf;

      a = atan2(py - y, px - x);
      a1 = a + halfPi;
      a2 = a - halfPi;

      context.moveTo(px + pr * cos(a1), py + pr * sin(a1));
      context.arc(px, py, pr, a1, a2, true);
      context.lineTo(x + r * cos(a2), y + r * sin(a2));
      context.arc(x, y, r, a2, a1, true);
      context.closePath();
    }
    context.fill();
  };

  const animationIdRef = useRef(null);

  useEffect(() => {
    canvas = document.getElementById('c');

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);
    resize();

    mouseX = centerX;
    mouseY = centerY;

    for (let i = 0, p; i < PARTICLE_NUM; i++) {
      particles[i] = randomizeParticle(new Particle());
      particles[i].z -= 500 * Math.random();
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    document.addEventListener('mousemove', handleMouseMove);

    const handleMouseDown = (e) => {
      targetSpeed = BOOST_SPEED;
    };
    document.addEventListener('mousedown', handleMouseDown);

    const handleMouseUp = (e) => {
      targetSpeed = DEFAULT_SPEED;
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
    this.pastZ = 0;
  }

  return <canvas id="c"></canvas>;
};

export default ParticleAnimation;
