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
                {isMobileDevice && showQuoteOnMobile && (
                  <div className="pc-mobile-hint">
                    Toque para esconder
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProfileCard;
