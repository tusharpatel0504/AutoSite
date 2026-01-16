import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateTarget = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.style.cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateTarget);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateTarget);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Smooth follow animation
  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setPosition((prev) => {
        const dx = targetPosition.x - prev.x;
        const dy = targetPosition.y - prev.y;
        
        // Smooth easing factor (lower = slower follow)
        const ease = 0.12;
        
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [targetPosition]);

  return (
    <div
      className="custom-cursor-follower"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: isHovering ? '40px' : '28px',
        height: isHovering ? '40px' : '28px',
        pointerEvents: 'none',
        zIndex: 99999,
        transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease',
        opacity: isVisible ? 1 : 0,
        transform: `translate(${position.x - (isHovering ? 20 : 14)}px, ${position.y - (isHovering ? 20 : 14)}px)`,
        willChange: 'transform',
      }}
    >
      {/* Autosite Logo Image */}
      <img
        src="/autosite whitelogo.webp"
        alt="cursor"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))',
        }}
      />
    </div>
  );
};

export default CustomCursor;
