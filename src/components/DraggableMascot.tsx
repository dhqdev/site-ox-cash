import React, { useState, useRef, useEffect } from 'react';

const DraggableMascot = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const mascotRef = useRef<HTMLDivElement>(null);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (clientX: number, clientY: number) => {
      if (!isDragging) return;
      
      const newX = clientX - dragOffset.current.x;
      const newY = clientY - dragOffset.current.y;
      
      // Boundaries to keep mascot within viewport
      const maxX = window.innerWidth - 80;
      const maxY = window.innerHeight - 80;
      
      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const touch = e.touches[0];
      handleMove(touch.clientX, touch.clientY);
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  const handleStart = (clientX: number, clientY: number) => {
    if (!mascotRef.current) return;
    
    const rect = mascotRef.current.getBoundingClientRect();
    dragOffset.current = {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
    
    setIsDragging(true);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX, e.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  return (
    <div
      ref={mascotRef}
      className={`fixed z-50 cursor-move select-none transform transition-transform duration-150 ease-out ${
        isDragging ? 'scale-110' : isHovered ? 'scale-105' : 'scale-100'
      }`}
      style={{
        left: position.x,
        top: position.y,
        transform: `translate3d(0, 0, 0)`, // Force hardware acceleration
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group">
        {/* Subtle glow effect only on hover */}
        {isHovered && (
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-md transition-all duration-300"></div>
        )}
        
        {/* Main mascot container */}
        <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-md border-2 border-gradient-gold/50 rounded-full p-3 sm:p-4 shadow-2xl">
          {/* Bank icon */}
          <div className="relative">
            <span className="text-3xl sm:text-4xl drop-shadow-2xl block">🏦</span>
          </div>
          
          {/* Optional small text - only shows on hover */}
          {isHovered && (
            <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <div className="bg-slate-900/90 text-white text-xs px-2 py-1 rounded-lg border border-orange-400/30">
                OX CA$H
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DraggableMascot;
