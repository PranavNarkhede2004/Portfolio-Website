import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.left = `${posX}px`;
        dotRef.current.style.top = `${posY}px`;

        // Slight delay for outline
        outlineRef.current.animate({
          left: `${posX}px`,
          top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);

    // Add listeners to interactables dynamically
    const interactables = document.querySelectorAll('a, button, input, textarea');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      interactables.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary-500 rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div 
        ref={outlineRef}
        className={`fixed top-0 left-0 rounded-full border border-primary-500 pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
          isHovering ? 'w-12 h-12 bg-primary-500/10' : 'w-8 h-8 bg-transparent'
        }`}
      ></div>
    </>
  );
};

export default CustomCursor;
