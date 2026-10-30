import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  baseRadius: number;
  alpha: number;
  pulseSpeed: number;
  pulsePhase: number;
}

export const CosmicCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking for subtle parallax & interaction
    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 140
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // Particle pool
    const particleCount = Math.min(Math.floor((width * height) / 14000), 120);
    let particles: Particle[] = [];

    const colors = [
      'rgba(194, 164, 255, ', // Lavender
      'rgba(168, 124, 255, ', // Radiant purple
      'rgba(233, 213, 255, ', // Starlight
      'rgba(96, 165, 250, ',  // Subtle cyan blue
      'rgba(147, 51, 234, '   // Deep violet
    ];

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 2.2 + 0.6;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius,
          baseRadius: radius,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          alpha: Math.random() * 0.7 + 0.2,
          pulseSpeed: Math.random() * 0.02 + 0.008,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    };

    initParticles();

    // Orbital celestial bodies
    let orbitAngle = 0;

    const render = () => {
      // Smooth mouse follow
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      orbitAngle += 0.003;

      ctx.clearRect(0, 0, width, height);

      // Deep space ambient glow
      const cx = width / 2;
      const cy = height * 0.38;

      // Radial ambient nebula
      const nebulaGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, width * 0.6);
      nebulaGrad.addColorStop(0, 'rgba(168, 124, 255, 0.07)');
      nebulaGrad.addColorStop(0.4, 'rgba(124, 58, 237, 0.04)');
      nebulaGrad.addColorStop(0.8, 'rgba(11, 8, 16, 0.02)');
      nebulaGrad.addColorStop(1, 'rgba(7, 5, 9, 0)');
      ctx.fillStyle = nebulaGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle orbital guide rings
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(0.2);

      // Ring 1
      ctx.beginPath();
      ctx.ellipse(0, 0, width * 0.38, height * 0.22, -0.15, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(194, 164, 255, 0.07)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 12]);
      ctx.stroke();

      // Ring 2
      ctx.beginPath();
      ctx.ellipse(0, 0, width * 0.55, height * 0.32, 0.1, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(194, 164, 255, 0.04)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 16]);
      ctx.stroke();

      // Revolving orbital satellite node
      const satX = Math.cos(orbitAngle) * (width * 0.38);
      const satY = Math.sin(orbitAngle) * (height * 0.22);
      ctx.beginPath();
      ctx.arc(satX, satY, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = '#c2a4ff';
      ctx.shadowColor = '#c2a4ff';
      ctx.shadowBlur = 12;
      ctx.fill();
      ctx.shadowBlur = 0;

      ctx.restore();

      // Render constellation connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const opacity = (1 - dist / 110) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(194, 164, 255, ${opacity})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Render individual star particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse avoidance/gravitational nudge
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius) * 1.5;
          p.x -= (dx / dist) * force;
          p.y -= (dy / dist) * force;
        }

        // Pulse alpha
        p.pulsePhase += p.pulseSpeed;
        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulsePhase));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
