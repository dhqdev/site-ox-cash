import React, { useState, useRef, useEffect } from 'react';

const DraggableMascot = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const mascotRef = useRef<HTMLDivElement>(null);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const newX = e.clientX - dragOffset.current.x;
      const newY = e.clientY - dragOffset.current.y;
      
      // Boundaries to keep mascot within viewport
      const maxX = window.innerWidth - 80;
      const maxY = window.innerHeight - 80;
      
      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY))
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!mascotRef.current) return;
    
    const rect = mascotRef.current.getBoundingClientRect();
    dragOffset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    
    setIsDragging(true);
  };

  return (
    <div
      ref={mascotRef}
      className={`fixed z-50 cursor-move select-none transition-all duration-300 ${
        isDragging ? 'scale-110' : isHovered ? 'scale-105' : 'scale-100'
      }`}
      style={{
        left: position.x,
        top: position.y,
      }}
      onMouseDown={handleMouseDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group">
        {/* Glow effect */}
        <div className={`absolute -inset-3 bg-gradient-to-r from-yellow-400/30 via-orange-500/30 to-red-500/30 rounded-full blur-lg transition-all duration-300 ${
          isHovered ? 'opacity-100 scale-110' : 'opacity-70'
        }`}></div>
        
        {/* Main mascot container */}
        <div className="relative bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-md border-2 border-gradient-gold/50 rounded-full p-4 shadow-2xl">
          {/* Bank icon with pulse effect */}
          <div className="relative">
            <span className="text-4xl drop-shadow-2xl block">🏦</span>
            <div className={`absolute -inset-2 bg-yellow-400/20 rounded-full blur-md transition-all duration-300 ${
              isHovered ? 'animate-pulse bg-yellow-400/40' : 'animate-pulse'
            }`}></div>
          </div>
          
          {/* Optional small text - only shows on hover */}
          {isHovered && (
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <div className="bg-slate-900/90 text-white text-xs px-2 py-1 rounded-lg border border-orange-400/30">
                OX CA$H
              </div>
            </div>
          )}
        </div>
        
        {/* Bounce animation when not dragging */}
        {!isDragging && (
          <div className="absolute inset-0 animate-bounce opacity-30 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full blur-sm"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DraggableMascot;
