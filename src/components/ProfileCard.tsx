import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
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

  // Função para detectar se é mobile
  const isMobile = () => window.innerWidth <= 768;

  // Função para alternar a frase no mobile
  const handleMobileClick = useCallback((e: React.MouseEvent) => {
    // Só funciona no mobile
    if (!isMobile()) return;
    
    // Evitar clique nos botões
    const target = e.target as HTMLElement;
    if (target.closest('.pc-whatsapp-btn') || 
        target.closest('.pc-instagram-btn') || 
        target.closest('.pc-user-info')) {
      return;
    }
    
    e.preventDefault();
    e.stopPropagation();
    setShowQuoteOnMobile(prev => !prev);
  }, []);

  // Efeitos de movimento do card
  useEffect(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Verificar se o clique foi em um botão
      const target = e.target as HTMLElement;
      if (target.closest('.pc-whatsapp-btn') || target.closest('.pc-instagram-btn')) {
        return; // Não aplicar efeito se for nos botões
      }
      
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
      card.style.transition = 'transform 0.1s ease-out';
    };

    const handleMouseEnter = () => {
      card.style.transition = 'transform 0.3s ease-out';
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.transition = 'transform 0.5s ease-out';
    };

    // Prevenir propagação nos botões
    const preventPropagation = (e: Event) => {
      e.stopPropagation();
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    // Adicionar event listeners nos botões para prevenir propagação
    const whatsappButtons = card.querySelectorAll('.pc-whatsapp-btn');
    const instagramButtons = card.querySelectorAll('.pc-instagram-btn');
    
    whatsappButtons.forEach(btn => {
      btn.addEventListener('click', preventPropagation);
      btn.addEventListener('mousemove', preventPropagation);
    });
    
    instagramButtons.forEach(btn => {
      btn.addEventListener('click', preventPropagation);
      btn.addEventListener('mousemove', preventPropagation);
    });

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      
      whatsappButtons.forEach(btn => {
        btn.removeEventListener('click', preventPropagation);
        btn.removeEventListener('mousemove', preventPropagation);
      });
      
      instagramButtons.forEach(btn => {
        btn.removeEventListener('click', preventPropagation);
        btn.removeEventListener('mousemove', preventPropagation);
      });
    };
  }, []);

  return (
    <div 
      ref={wrapRef} 
      className="pc-card-wrapper"
      onClick={handleMobileClick}
      style={{ cursor: isMobile() ? 'pointer' : 'default' }}
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
          {/* Overlay com a frase - aparece no hover (desktop) e click (mobile) */}
          {quote && (
            <div className={`pc-quote-overlay ${showQuoteOnMobile ? 'pc-show-mobile' : ''}`}>
              <div className="pc-quote-content">
                <p className="pc-quote-text">
                  <strong>"{quote}"</strong>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProfileCard;
