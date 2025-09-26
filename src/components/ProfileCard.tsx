import React, { useEffect, useRef, useCallback, useState } from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  name: string;
  handle: string;
  avatar: string;
  backgroundImage: string;
  credentials: string[];
  quote: string;
  instagramHandle: string;
  title: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  handle,
  avatar,
  backgroundImage,
  credentials = [],
  quote = '',
  instagramHandle,
  title
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [showQuoteOnMobile, setShowQuoteOnMobile] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  // Função para detectar se é mobile
  const checkIsMobile = useCallback(() => {
    if (typeof window !== 'undefined') {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      return isSmallScreen || hasTouch;
    }
    return false;
  }, []);

  // Mouse tracking para efeitos holográficos
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!wrapRef.current || isMobileDevice) return;
    
    const rect = wrapRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (x - centerX) / 10;
    
    const pointerX = (x / rect.width) * 100;
    const pointerY = (y / rect.height) * 100;
    
    const distance = Math.sqrt(
      Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2)
    );
    const maxDistance = Math.sqrt(
      Math.pow(centerX, 2) + Math.pow(centerY, 2)
    );
    const strength = 1 - Math.min(distance / maxDistance, 1);
    
    if (cardRef.current) {
      cardRef.current.style.setProperty('--rotate-x', `${rotateY}deg`);
      cardRef.current.style.setProperty('--rotate-y', `${-rotateX}deg`);
      cardRef.current.style.setProperty('--pointer-x', `${pointerX}%`);
      cardRef.current.style.setProperty('--pointer-y', `${pointerY}%`);
      cardRef.current.style.setProperty('--pointer-from-center', strength.toString());
      cardRef.current.style.setProperty('--pointer-from-top', (pointerY / 100).toString());
      cardRef.current.style.setProperty('--pointer-from-left', (pointerX / 100).toString());
    }
  }, [isMobileDevice]);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current || isMobileDevice) return;
    
    cardRef.current.style.setProperty('--rotate-x', '0deg');
    cardRef.current.style.setProperty('--rotate-y', '0deg');
    cardRef.current.style.setProperty('--pointer-x', '50%');
    cardRef.current.style.setProperty('--pointer-y', '50%');
    cardRef.current.style.setProperty('--pointer-from-center', '0');
    cardRef.current.style.setProperty('--pointer-from-top', '0.5');
    cardRef.current.style.setProperty('--pointer-from-left', '0.5');
  }, [isMobileDevice]);

  // Configurar detecção de mobile no client
  useEffect(() => {
    const updateMobileStatus = () => {
      setIsMobileDevice(checkIsMobile());
    };
    
    updateMobileStatus();
    window.addEventListener('resize', updateMobileStatus);
    
    return () => {
      window.removeEventListener('resize', updateMobileStatus);
    };
  }, [checkIsMobile]);

  // Configurar mouse tracking para desktop
  useEffect(() => {
    if (isMobileDevice || !wrapRef.current) return;
    
    const element = wrapRef.current;
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave, isMobileDevice]);

  // Função simples para alternar a frase no mobile
  const handleMobileClick = useCallback(() => {
    if (!isMobileDevice) return;
    setShowQuoteOnMobile(!showQuoteOnMobile);
  }, [isMobileDevice, showQuoteOnMobile]);

  return (
    <div 
      ref={wrapRef} 
      className="pc-card-wrapper"
      onClick={handleMobileClick}
      style={{ cursor: isMobileDevice ? 'pointer' : 'default' }}
    >
      <section ref={cardRef} className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <div 
            className="pc-content pc-avatar-content"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <img
              className="avatar"
              src={avatar}
              alt={`${name} avatar`}
              loading="lazy"
            />
            <div className="pc-user-info">
              <div className="pc-user-details">
                <div className="pc-mini-avatar">
                  <img
                    src={avatar}
                    alt={`${name} mini avatar`}
                    loading="lazy"
                  />
                </div>
                <div className="pc-user-text">
                  <div className="pc-name-main">{name}</div>
                  <div className="pc-title-main">{title}</div>
                </div>
              </div>
            </div>
          </div>
          {/* Overlay com a frase - aparece no hover (desktop) ou clique (mobile) */}
          {quote && (
            <div className={`pc-quote-overlay ${showQuoteOnMobile ? 'pc-show-mobile' : ''}`}>
              <div className="pc-quote-content">
                <p className="pc-quote-text">
                  <strong>"{quote}"</strong>
                </p>
                {/* Indicador sutil para mobile que pode ser clicado para esconder */}
                {isMobileDevice && showQuoteOnMobile}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProfileCard;
