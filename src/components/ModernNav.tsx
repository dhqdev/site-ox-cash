import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ModernNav.css';

interface NavigationButton {
  id: string;
  label: string;
  route: string;
}

const ModernNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeButton, setActiveButton] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);

  const buttons: NavigationButton[] = useMemo(() => [
    {
      id: 'inicio',
      label: 'Início',
      route: '/'
    },
    {
      id: 'operacao',
      label: 'Operação',
      route: '/operacao'
    },
    {
      id: 'clientes',
      label: 'Clientes',
      route: '/clientes'
    },
    {
      id: 'cotas',
      label: 'Cotas',
      route: '/cotas-contempladas'
    }
  ], []);

  // Garantir que o componente seja montado corretamente
  useEffect(() => {
    setIsMounted(true);
    // Forçar visibilidade inicial para evitar problemas no mobile
    setIsVisible(true);
  }, []);

  // Controle de scroll para mostrar/esconder navbar
  useEffect(() => {
    if (!isMounted) return;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        // Próximo ao topo, sempre mostrar
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling para baixo e não está no topo
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling para cima
        setIsVisible(true);
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
  }, [isMounted]);

  // Determinar botão ativo baseado na rota atual
  useEffect(() => {
    const currentPath = location.pathname;
    const activeBtn = buttons.find(btn => btn.route === currentPath);
    if (activeBtn) {
      setActiveButton(activeBtn.id);
    } else {
      setActiveButton('inicio'); // Padrão para página inicial
    }
  }, [location.pathname, buttons]);

  const handleButtonClick = (button: NavigationButton) => {
    setActiveButton(button.id);
    navigate(button.route);
  };

  // Não renderizar até estar montado para evitar problemas de hidratação
  if (!isMounted) {
    return null;
  }

  return (
    <motion.nav
      className="modern-nav"
      initial={{ y: 0, opacity: 1 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="modern-nav-container">
        <div className="nav-buttons-container">
          {buttons.map((button) => {
            const isActive = activeButton === button.id;
            
            return (
              <motion.button
                key={button.id}
                className={`nav-button ${isActive ? 'active' : ''}`}
                onClick={() => handleButtonClick(button)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className="button-text">{button.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default ModernNav;