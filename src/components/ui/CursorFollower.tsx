import { useEffect, useRef } from 'react';

export const CursorFollower: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrame = 0;
    let previousFrameTime = 0;
    let isAnimating = false;
    const followDuration = 200;

    const animate = (time: number) => {
      const elapsed = previousFrameTime ? Math.min(time - previousFrameTime, 32) : 16;
      previousFrameTime = time;
      const followAmount = 1 - Math.exp(-elapsed / followDuration);

      currentX += (targetX - currentX) * followAmount;
      currentY += (targetY - currentY) * followAmount;

      if (Math.abs(targetX - currentX) < 0.1 && Math.abs(targetY - currentY) < 0.1) {
        currentX = targetX;
        currentY = targetY;
        isAnimating = false;
      }

      follower.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;

      if (isAnimating) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;

      targetX = event.clientX;
      targetY = event.clientY;
      follower.classList.add('is-visible');
      if (!isAnimating) {
        isAnimating = true;
        previousFrameTime = 0;
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    const handlePointerLeave = () => {
      follower.classList.remove('is-visible');
      isAnimating = false;
      window.cancelAnimationFrame(animationFrame);
    };

    window.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <div ref={followerRef} className="cursor-follower" aria-hidden="true" />;
};
