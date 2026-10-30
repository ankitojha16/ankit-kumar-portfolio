import { useEffect, useRef } from 'react';

export const CursorFollower: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;

      follower.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      follower.classList.add('is-visible');
    };

    const handlePointerLeave = () => {
      follower.classList.remove('is-visible');
    };

    window.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return <div ref={followerRef} className="cursor-follower" aria-hidden="true" />;
};
