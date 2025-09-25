import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import './CardNav.css';

export interface CardNavProps {
  className?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  className = '',
}) => {
  const navigate = useNavigate();
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const lastScrollY = useRef(0);

  // Controle de scroll para hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (isExpanded) {
        // Se o menu está expandido, não esconda
        return;
      }
      
      if (currentScrollY < 50) {
        // Próximo ao topo, sempre mostre
        setIsHidden(false);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling para baixo e não está no topo
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling para cima
        setIsHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    // Throttle para performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [isExpanded]);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 160;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const topBar = 60;
        const padding = 16;
        const cardHeight = 80;
        const gap = 4;
        const totalCards = 2;
        
        return topBar + padding + (cardHeight * totalCards) + (gap * (totalCards - 1));
      }
    }
    return 160;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.3,
      ease: 'power3.out'
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.25, ease: 'power3.out', stagger: 0.05 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      setIsHidden(false); // Sempre mostre quando expandir
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  const handleCardClick = (route: string) => {
    navigate(route);
    // Fechar o menu após navegação
    setIsHamburgerOpen(false);
    if (tlRef.current) {
      tlRef.current.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tlRef.current.reverse();
    }
  };

  const cards = [
    {
      label: 'Cotas Contempladas',
      bgColor: 'linear-gradient(135deg, #31305b, #173997ff)',
      emoji: '🎯',
      route: '/cotas-contempladas'
    },
    {
      label: 'Clientes',
      bgColor: 'linear-gradient(135deg, #17352bff, #1c4545)',
      emoji: '👥',
      route: '/clientes'
    }
  ];

  return (
    <div className={`card-nav-container ${isHidden ? 'hidden' : ''} ${className}`}>
      <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`} style={{ backgroundColor: 'rgba(15, 23, 42, 0.95)' }}>
        <div className="card-nav-top" onClick={toggleMenu}>
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
            role="button"
            aria-label={isExpanded ? 'Fechar menu' : 'Abrir menu'}
            tabIndex={0}
            style={{ color: '#fbbf24' }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <div className="logo-container">
            {/* Logo vazio no centro */}
            <span className="text-2xl">🏦</span>
          </div>

          <div className="card-nav-badge">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-gradient-gold">OX CA$H</span>
            </div>
          </div>
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {cards.map((card, idx) => (
            <div
              key={`${card.label}-${idx}`}
              className="nav-card clickable-card"
              ref={setCardRef(idx)}
              style={{ background: card.bgColor }}
              onClick={() => handleCardClick(card.route)}
            >
              <div className="nav-card-header">
                <span className="nav-card-emoji">{card.emoji}</span>
                <div className="nav-card-label">{card.label}</div>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;