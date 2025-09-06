import { useState, useEffect, useRef } from 'react';

interface CatFaceProps {
  className?: string;
}

export const CatFace = ({ className = "" }: CatFaceProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [expression, setExpression] = useState<'normal' | 'smile' | 'wink' | 'tongue' | 'surprise'>('normal');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHoveringCat, setIsHoveringCat] = useState(false);
  const catRef = useRef<HTMLDivElement>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout>();

  const changeExpression = (newExpression: 'normal' | 'smile' | 'wink' | 'tongue' | 'surprise') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setExpression(newExpression);
    
    // Clear any existing timeout
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    
    // Allow next expression change after delay
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleEmailHover = () => !isHoveringCat && changeExpression('smile');
    const handleLocationHover = () => !isHoveringCat && changeExpression('wink');
    const handlePhoneHover = () => !isHoveringCat && changeExpression('tongue');
    const handleLeave = () => !isHoveringCat && changeExpression('normal');

    // Add mouse move listener
    window.addEventListener('mousemove', handleMouseMove);

    // Add hover listeners for contact cards
    const emailCard = document.querySelector('[data-contact="email"]');
    const locationCard = document.querySelector('[data-contact="location"]');
    const phoneCard = document.querySelector('[data-contact="phone"]');

    emailCard?.addEventListener('mouseenter', handleEmailHover);
    emailCard?.addEventListener('mouseleave', handleLeave);
    locationCard?.addEventListener('mouseenter', handleLocationHover);
    locationCard?.addEventListener('mouseleave', handleLeave);
    phoneCard?.addEventListener('mouseenter', handlePhoneHover);
    phoneCard?.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      emailCard?.removeEventListener('mouseenter', handleEmailHover);
      emailCard?.removeEventListener('mouseleave', handleLeave);
      locationCard?.removeEventListener('mouseenter', handleLocationHover);
      locationCard?.removeEventListener('mouseleave', handleLeave);
      phoneCard?.removeEventListener('mouseenter', handlePhoneHover);
      phoneCard?.removeEventListener('mouseleave', handleLeave);
      
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const calculateEyePosition = (eyeX: number, eyeY: number) => {
    if (!catRef.current) return { x: 0, y: 0 };
    
    const rect = catRef.current.getBoundingClientRect();
    const catCenterX = rect.left + rect.width / 2;
    const catCenterY = rect.top + rect.height / 2;
    
    const deltaX = mousePosition.x - (catCenterX + eyeX);
    const deltaY = mousePosition.y - (catCenterY + eyeY);
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 3;
    
    if (distance > maxDistance) {
      const angle = Math.atan2(deltaY, deltaX);
      return {
        x: Math.cos(angle) * maxDistance,
        y: Math.sin(angle) * maxDistance
      };
    }
    
    return { x: deltaX * 0.1, y: deltaY * 0.1 };
  };

  const leftEyePos = calculateEyePosition(-12, -8);
  const rightEyePos = calculateEyePosition(12, -8);

  const getMouthPath = () => {
    switch (expression) {
      case 'smile':
        return 'M 22 38 Q 30 46 38 38';
      case 'wink':
        return 'M 24 40 Q 30 44 36 40';
      case 'tongue':
        return 'M 24 38 Q 30 42 36 38 M 28 42 L 32 42 L 32 46 L 28 46 Z';
      case 'surprise':
        return 'M 28 40 L 32 40 M 30 38 L 30 42';
      default:
        return 'M 24 40 Q 30 42 36 40';
    }
  };

  return (
    <div 
      ref={catRef}
      className={`relative inline-block transition-all duration-300 group ${className}`}
      onMouseEnter={() => {
        setIsHoveringCat(true);
        changeExpression('surprise');
      }}
      onMouseLeave={() => {
        setIsHoveringCat(false);
        changeExpression('normal');
      }}
    >
      <svg 
        width="60" 
        height="60" 
        viewBox="0 0 60 60" 
        className="drop-shadow-sm"
      >
        {/* Cat ears */}
        <path 
          d="M15 15 L20 5 L25 15 M35 15 L40 5 L45 15" 
          fill="hsl(var(--accent))" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1"
        />
        
        {/* Cat head */}
        <circle 
          cx="30" 
          cy="30" 
          r="18" 
          fill="hsl(var(--accent))" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1.5"
        />
        
        {/* Left eye */}
        <ellipse 
          cx="18" 
          cy="22" 
          rx={expression === 'surprise' ? "5" : "4"}
          ry={expression === 'wink' ? "0.5" : expression === 'surprise' ? "5" : "4"}
          fill="hsl(var(--background))" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1"
          className="transition-all duration-200"
        />
        {expression !== 'wink' && (
          <circle 
            cx={18 + leftEyePos.x} 
            cy={22 + leftEyePos.y} 
            r={expression === 'surprise' ? "2.5" : "2"}
            fill="hsl(var(--primary))"
            className="transition-all duration-100"
          />
        )}
        
        {/* Right eye */}
        <ellipse 
          cx="42" 
          cy="22" 
          rx={expression === 'surprise' ? "5" : "4"}
          ry={expression === 'surprise' ? "5" : "4"}
          fill="hsl(var(--background))" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1"
          className="transition-all duration-200"
        />
        <circle 
          cx={42 + rightEyePos.x} 
          cy={22 + rightEyePos.y} 
          r={expression === 'surprise' ? "2.5" : "2"}
          fill="hsl(var(--primary))"
          className="transition-all duration-100"
        />
        
        {/* Nose */}
        <path 
          d="M28 32 L32 32 L30 36 Z" 
          fill="hsl(var(--primary))"
        />
        
        {/* Mouth */}
        <path 
          d={getMouthPath()}
          fill={expression === 'tongue' ? "hsl(var(--destructive))" : "none"}
          stroke="hsl(var(--primary))" 
          strokeWidth="2" 
          strokeLinecap="round"
          className="transition-all duration-200"
        />
        
        {/* Whiskers */}
        <g stroke="hsl(var(--primary))" strokeWidth="1" strokeLinecap="round">
          <line x1="8" y1="28" x2="15" y2="26" />
          <line x1="8" y1="32" x2="15" y2="32" />
          <line x1="45" y1="26" x2="52" y2="28" />
          <line x1="45" y1="32" x2="52" y2="32" />
        </g>
      </svg>
    </div>
  );
};