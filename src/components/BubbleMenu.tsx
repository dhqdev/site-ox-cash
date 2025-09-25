import type { CSSProperties, ReactNode } from 'react';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Instagram, MessageCircle, Share2 } from 'lucide-react';

import './BubbleMenu.css';

type MenuItem = {
  label: string;
  href: string;
  ariaLabel?: string;
  rotation?: number;
  icon?: ReactNode;
  hoverStyles?: {
    bgColor?: string;
    textColor?: string;
  };
};

export type BubbleMenuProps = {
  logo?: ReactNode | string;
  onMenuClick?: (open: boolean) => void;
  className?: string;
  style?: CSSProperties;
  menuAriaLabel?: string;
  menuBg?: string;
  menuContentColor?: string;
  useFixedPosition?: boolean;
  items?: MenuItem[];
  animationEase?: string;
  animationDuration?: number;
  staggerDelay?: number;
};

const DEFAULT_ITEMS: MenuItem[] = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/consorciolucro',
    ariaLabel: 'Instagram - Consórcio Lucro',
    rotation: -8,
    icon: <Instagram size={24} color="#E4405F" />,
    hoverStyles: { bgColor: '#E4405F', textColor: '#ffffff' }
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/551199999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20consórcios.',
    ariaLabel: 'WhatsApp - Contato',
    rotation: 8,
    icon: <MessageCircle size={24} color="#25D366" />,
    hoverStyles: { bgColor: '#25D366', textColor: '#ffffff' }
  }
];

export default function BubbleMenu({
  logo = <Share2 size={24} />,
  onMenuClick,
  className,
  style,
  menuAriaLabel = 'Toggle redes sociais',
  menuBg = '#fff',
  menuContentColor = '#111',
  useFixedPosition = true,
  items,
  animationEase = 'back.out(1.5)',
  animationDuration = 0.5,
  staggerDelay = 0.12
}: BubbleMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<HTMLAnchorElement[]>([]);
  const labelRefs = useRef<HTMLSpanElement[]>([]);

  const menuItems = items?.length ? items : DEFAULT_ITEMS;
  const containerClassName = ['bubble-menu', useFixedPosition ? 'fixed' : 'absolute', className]
    .filter(Boolean)
    .join(' ');

  const handleToggle = () => {
    const nextState = !isMenuOpen;
    if (nextState) setShowOverlay(true);
    setIsMenuOpen(nextState);
    onMenuClick?.(nextState);
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const bubbles = bubblesRef.current.filter(Boolean);
    const labels = labelRefs.current.filter(Boolean);

    if (!overlay || !bubbles.length) return;

    if (isMenuOpen) {
      gsap.set(overlay, { display: 'flex' });
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.set(bubbles, { 
        scale: 0, 
        transformOrigin: '50% 50%',
        rotation: 180,
        y: 50
      });
      gsap.set(labels, { y: 24, autoAlpha: 0 });

      bubbles.forEach((bubble, i) => {
        const delay = i * staggerDelay + gsap.utils.random(-0.05, 0.05);
        const tl = gsap.timeline({ delay });

        // Animação mais divertida de entrada
        tl.to(bubble, {
          scale: 1.2,
          rotation: 0,
          y: 0,
          duration: animationDuration * 0.6,
          ease: "back.out(2)"
        })
        .to(bubble, {
          scale: 1,
          duration: animationDuration * 0.4,
          ease: "bounce.out"
        });

        if (labels[i]) {
          tl.to(
            labels[i],
            {
              y: 0,
              autoAlpha: 1,
              duration: animationDuration,
              ease: 'back.out(1.7)'
            },
            `-=${animationDuration * 0.7}`
          );
        }
      });
    } else if (showOverlay) {
      gsap.killTweensOf([...bubbles, ...labels]);
      gsap.to(labels, {
        y: 24,
        autoAlpha: 0,
        duration: 0.2,
        ease: 'power3.in'
      });
      gsap.to(bubbles, {
        scale: 0,
        duration: 0.2,
        ease: 'power3.in',
        onComplete: () => {
          gsap.set(overlay, { display: 'none' });
          setShowOverlay(false);
        }
      });
    }
  }, [isMenuOpen, showOverlay, animationEase, animationDuration, staggerDelay]);

  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) {
        const bubbles = bubblesRef.current.filter(Boolean);
        const isDesktop = window.innerWidth >= 900;

        bubbles.forEach((bubble, i) => {
          const item = menuItems[i];
          if (bubble && item) {
            const rotation = isDesktop ? (item.rotation ?? 0) : 0;
            gsap.set(bubble, { rotation });
          }
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen, menuItems]);

  const createConfetti = (element: HTMLElement) => {
    const colors = ['#E4405F', '#25D366', '#FFD700', '#FF6B6B', '#4ECDC4'];
    
    for (let i = 0; i < 12; i++) {
      const confetti = document.createElement('div');
      confetti.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
      `;
      
      const rect = element.getBoundingClientRect();
      confetti.style.left = `${rect.left + rect.width / 2}px`;
      confetti.style.top = `${rect.top + rect.height / 2}px`;
      
      document.body.appendChild(confetti);
      
      gsap.to(confetti, {
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-100, -200),
        rotation: gsap.utils.random(0, 360),
        scale: gsap.utils.random(0.5, 1.5),
        opacity: 0,
        duration: gsap.utils.random(0.8, 1.2),
        ease: "power2.out",
        onComplete: () => {
          document.body.removeChild(confetti);
        }
      });
    }
  };

  const handleItemClick = (href: string, index: number) => {
    // Animação divertida antes de abrir o link
    const bubble = bubblesRef.current[index];
    if (bubble) {
      // Criar confete
      createConfetti(bubble);
      
      // Efeito de "pulo" divertido
      gsap.to(bubble, {
        scale: 1.4,
        rotation: 720,
        duration: 0.4,
        ease: "back.out(2)",
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          // Efeito de "explosão" com partículas
          gsap.to(bubble, {
            scale: 0.9,
            duration: 0.15,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut",
            onComplete: () => {
              window.open(href, '_blank');
            }
          });
        }
      });

      // Efeito de shake no container
      gsap.to(bubble.parentElement, {
        x: "3px",
        duration: 0.08,
        yoyo: true,
        repeat: 4,
        ease: "power2.out"
      });
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <>
      <nav 
        className={containerClassName} 
        style={{ 
          ...style,
          bottom: '20px',
          right: '20px',
          top: 'auto',
          left: 'auto',
          width: 'auto',
          justifyContent: 'flex-end'
        }} 
        aria-label="Redes sociais"
      >
        <button
          type="button"
          className={`bubble toggle-bubble menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={handleToggle}
          aria-label={menuAriaLabel}
          aria-pressed={isMenuOpen}
          style={{ 
            background: menuBg,
            animation: !isMenuOpen ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none'
          }}
        >
          <span className="menu-content" style={{ color: menuContentColor }}>
            {typeof logo === 'string' ? <img src={logo} alt="Logo" className="bubble-logo" /> : logo}
          </span>
        </button>
      </nav>
      {showOverlay && (
        <div
          ref={overlayRef}
          className={`bubble-menu-items ${useFixedPosition ? 'fixed' : 'absolute'}`}
          style={{
            bottom: '90px',
            right: '20px',
            left: 'auto',
            top: 'auto',
            width: 'auto',
            alignItems: 'flex-end',
            justifyContent: 'flex-end'
          }}
          aria-hidden={!isMenuOpen}
        >
          <ul className="pill-list" role="menu" aria-label="Links das redes sociais" style={{
            flexDirection: 'column',
            maxWidth: '200px',
            width: 'auto',
            padding: '0'
          }}>
            {menuItems.map((item, idx) => (
              <li key={idx} role="none" className="pill-col" style={{ flex: '0 0 auto', width: '100%' }}>
                <button
                  role="menuitem"
                  onClick={() => handleItemClick(item.href, idx)}
                  aria-label={item.ariaLabel || item.label}
                  className="pill-link"
                  style={
                    {
                      '--item-rot': `0deg`,
                      '--pill-bg': menuBg,
                      '--pill-color': menuContentColor,
                      '--hover-bg': item.hoverStyles?.bgColor || '#f3f4f6',
                      '--hover-color': item.hoverStyles?.textColor || menuContentColor,
                      minHeight: '60px',
                      fontSize: '1rem',
                      padding: '12px 20px',
                      display: 'flex',
                      flexDirection: 'row',
                      gap: '12px',
                      border: 'none',
                      cursor: 'pointer',
                      width: '100%',
                      justifyContent: 'flex-start'
                    } as CSSProperties
                  }
                  ref={el => {
                    if (el) bubblesRef.current[idx] = el as any;
                  }}
                >
                  {item.icon}
                  <span
                    className="pill-label"
                    style={{ height: 'auto', lineHeight: '1.2' }}
                    ref={el => {
                      if (el) labelRefs.current[idx] = el;
                    }}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}