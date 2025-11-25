import React, { useRef, useEffect } from 'react';

const DotShader: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Configuration
    const gridSize = 40; // Distance between dots
    const dotBaseSize = 1.2;
    const dotActiveSize = 3; // Size when hovered
    const interactionRadius = 180; 
    const gridColor = '#e2e8f0'; // Light slate (slate-200) for base dots
    const activeColor = '#000000'; // Black for active beams

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const draw = () => {
      // Smooth mouse movement
      mouseRef.current.x = lerp(mouseRef.current.x, targetMouseRef.current.x, 0.1);
      mouseRef.current.y = lerp(mouseRef.current.y, targetMouseRef.current.y, 0.1);

      ctx.clearRect(0, 0, width, height);

      // Draw Grid
      const rows = Math.ceil(height / gridSize);
      const cols = Math.ceil(width / gridSize);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * gridSize;
          const y = j * gridSize;

          // Calculate distance to mouse
          const dx = mouseRef.current.x - x;
          const dy = mouseRef.current.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Default state
          let size = dotBaseSize;
          let color = gridColor;
          let alpha = 1;

          // Interaction Logic
          if (distance < interactionRadius) {
            const factor = 1 - distance / interactionRadius; // 0 to 1 based on proximity
            
            // Scale up dots near mouse
            size = lerp(dotBaseSize, dotActiveSize, factor);
            
            // "Beam" effect: Draw lines to neighbors if close to mouse
            if (factor > 0.2) {
               ctx.beginPath();
               ctx.strokeStyle = `rgba(0, 0, 0, ${factor * 0.4})`; // Black low opacity
               ctx.lineWidth = 1;
               
               // Connect to right neighbor
               if (i < cols) {
                 ctx.moveTo(x, y);
                 ctx.lineTo(x + gridSize, y);
               }
               // Connect to bottom neighbor
               if (j < rows) {
                 ctx.moveTo(x, y);
                 ctx.lineTo(x, y + gridSize);
               }
               ctx.stroke();
            }

            // Change color of the dot itself
            if (factor > 0.1) {
                color = activeColor;
                alpha = 0.5 + (factor * 0.5);
            }
          }

          // Draw Dot
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fillStyle = color;
          
          if (distance < interactionRadius) {
             ctx.globalAlpha = alpha;
             ctx.fill();
             ctx.globalAlpha = 1.0;
          } else {
             ctx.fillStyle = '#cbd5e1'; // slightly darker than grid lines
             ctx.fill();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial setup
    handleResize();
    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="block" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default DotShader;