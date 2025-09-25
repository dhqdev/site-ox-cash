import React, { useEffect, useRef, useCallback, useMemo, useState } from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
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
  const [isInView, setIsInView] = useState(false);

  // Função para detectar se é mobile - agora com verificação mais robusta
  const checkIsMobile = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Verificar largura da tela E se tem touch
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

  // Intersection Observer para detectar quando o card está visível (apenas mobile)
  useEffect(() => {
    if (!isMobileDevice || !wrapRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            // Mostrar a frase automaticamente quando entra na viewport
            setTimeout(() => {
              setShowQuoteOnMobile(true);
            }, 300); // Pequeno delay para suavizar a animação
          } else {
            setIsInView(false);
            // Esconder a frase quando sai da viewport
            setShowQuoteOnMobile(false);
          }
        });
      },
      {
        threshold: 0.6, // Mostrar quando 60% do card está visível
        rootMargin: '-50px' // Margem para ajustar quando dispara
      }
    );

    observer.observe(wrapRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isMobileDevice]);

  // Fechar quote no mobile quando clicar fora
  useEffect(() => {
    if (!isMobileDevice || !showQuoteOnMobile) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) {
        setShowQuoteOnMobile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileDevice, showQuoteOnMobile]);

  // Função para alternar a frase no mobile - agora permite scroll
  const handleMobileClick = useCallback((e: React.MouseEvent) => {
    // Só funciona no mobile
    if (!isMobileDevice) return;
    
    // Evitar clique nos botões
    const target = e.target as HTMLElement;
    if (target.closest('.pc-whatsapp-btn') || 
        target.closest('.pc-instagram-btn') || 
        target.closest('.pc-user-info')) {
      return;
    }
    
    // Não prevenir o comportamento padrão para permitir scroll
    e.stopPropagation();
    
    // Se a frase está visível, esconder. Se não está, mostrar (fallback)
    if (showQuoteOnMobile) {
      setShowQuoteOnMobile(false);
    } else {
      setShowQuoteOnMobile(true);
    }
  }, [isMobileDevice, showQuoteOnMobile]);

  // Função para touch events - agora permite scroll
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    // Só funciona no mobile
    if (!isMobileDevice) return;
    
    // Evitar clique nos botões
    const target = e.target as HTMLElement;
    if (target.closest('.pc-whatsapp-btn') || 
        target.closest('.pc-instagram-btn') || 
        target.closest('.pc-user-info')) {
      return;
    }
    
    // Não prevenir o comportamento padrão para permitir scroll
    e.stopPropagation();
    
    // Se a frase está visível, esconder. Se não está, mostrar (fallback)
    if (showQuoteOnMobile) {
      setShowQuoteOnMobile(false);
    } else {
      setShowQuoteOnMobile(true);
    }
  }, [isMobileDevice, showQuoteOnMobile]);

  // Função para abrir WhatsApp
  const handleWhatsAppClick = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('WhatsApp button clicked!'); // Debug log
    
    const phoneNumber = "5519983673940";
    const message = `Olá! Vi o perfil do ${name} no site da OX CA$H e gostaria de conversar sobre consórcios. Podemos marcar uma conversa?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Tentar diferentes métodos para abrir o link no mobile
    try {
      // Método 1: window.open
      const newWindow = window.open(whatsappUrl, '_blank');
      
      // Método 2: fallback para mobile se window.open falhar
      if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
        window.location.href = whatsappUrl;
      }
    } catch (error) {
      console.error('Erro ao abrir WhatsApp:', error);
      // Método 3: fallback final
      window.location.href = whatsappUrl;
    }
  }, [name]);

  // Função para abrir Instagram
  const handleInstagramClick = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Instagram button clicked!'); // Debug log
    
    const instagramUrl = "https://www.instagram.com/oxcash?igsh=MTRqNWc3ZTZ6dGFxag==";
    
    // Tentar diferentes métodos para abrir o link no mobile
    try {
      // Método 1: window.open
      const newWindow = window.open(instagramUrl, '_blank', 'noopener,noreferrer');
      
      // Método 2: fallback para mobile se window.open falhar
      if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
        window.location.href = instagramUrl;
      }
    } catch (error) {
      console.error('Erro ao abrir Instagram:', error);
      // Método 3: fallback final
      window.location.href = instagramUrl;
    }
  }, []);

  // Efeitos de movimento do card (apenas desktop)
  useEffect(() => {
    const card = cardRef.current;
    const wrap = wrapRef.current;

    if (!card || !wrap || isMobileDevice) return;

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

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobileDevice]);

  return (
    <div 
      ref={wrapRef} 
      className="pc-card-wrapper"
      onClick={handleMobileClick}
      onTouchStart={handleTouchStart}
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
              
              {/* Botões de ação */}
              <div className="pc-buttons-container">
                <button 
                  className="pc-whatsapp-btn"
                  onClick={handleWhatsAppClick}
                  onTouchEnd={handleWhatsAppClick}
                  aria-label="Conversar no WhatsApp"
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </button>
                <button 
                  className="pc-instagram-btn"
                  onClick={handleInstagramClick}
                  onTouchEnd={handleInstagramClick}
                  aria-label="Seguir no Instagram"
                >
                  <Instagram size={14} />
                  Instagram
                </button>
              </div>
            </div>
          </div>
          {/* Overlay com a frase - aparece no hover (desktop) e automaticamente no scroll (mobile) */}
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
