'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../page.module.css';
import renataImage from '../../public/assets/imagens/renata1.png';
import MenuIcon from './icons/MenuIcon'; // Importe o ícone do menu
import { useState, useEffect } from 'react'; // Importe o useState e useEffect

export default function MainLayout({
  children,
  showImage = true,
  backgroundImage = '/assets/imagens/renatab.png', // Adicionada a nova prop
  backgroundPosition = 'center', // Nova prop com valor padrão
}: {
  children: React.ReactNode;
  showImage?: boolean;
  backgroundImage?: string; // A prop é opcional
  backgroundPosition?: string; // Nova prop opcional
}) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para o menu mobile
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleMenuClick = () => {
    // Quando clica no menu, mantém aberto
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };
  
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  
  // Cleanup timeout quando componente desmonta
  useEffect(() => {
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  // Fechar menu quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) {
        const target = event.target as HTMLElement;
        if (!target.closest('[data-menu-container]')) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);
  
  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  const sidebarBgStyle = {
    backgroundImage: `url('${backgroundImage}')`,
    backgroundPosition: backgroundPosition,
  };

  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <div className={styles.pageWrapper}>
          <AnimatePresence mode='wait'>
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.7, ease: 'easeInOut' }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
        <footer className={styles.footer}>
          <p>
            © {new Date().getFullYear()} Eros Grigolli. Todos os direitos reservados.
          </p>
        </footer>
      </main>
      <aside className={styles.sidebar}>
        <AnimatePresence>
          <motion.div
            key={backgroundImage}
            className={styles.sidebarBg}
            style={sidebarBgStyle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <div className={styles.sidebarOverlay} />
        <div className={styles.mobileHeaderText}>Dra. Renata Cristina</div>
        <button
          className={styles.menuButton}
          onClick={handleMenuToggle}
          data-menu-container
        >
          <MenuIcon />
        </button>
        <nav className={styles.nav}>
          <ul>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href='/sobre-mim'>Sobre Mim</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href='/servicos'>Serviços</Link>
            </li>
            <li onClick={() => setIsMenuOpen(false)}>
              <Link href='/contatos'>Contatos</Link>
            </li>
          </ul>
        </nav>
        {/* Menu mobile separado */}
        {isMenuOpen && (
          <div 
            onClick={handleMenuClick}
            data-menu-container
            style={{
              position: 'fixed', 
              top: '70px', 
              right: '20px', 
              width: '200px', 
              height: 'auto',
              background: 'rgba(230, 164, 180, 0.95)', 
              zIndex: 10000,
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
              backdropFilter: 'blur(10px)',
              display: 'block',
              visibility: 'visible',
              opacity: 1,
              animation: 'slideDown 0.2s ease-out'
            }}
          >
            <ul style={{listStyle: 'none', padding: '8px 0', margin: 0}}>
              <li style={{padding: '0'}}>
                <Link href='/' 
                  onClick={handleLinkClick}
                  style={{
                    color: 'white', 
                    textDecoration: 'none', 
                    display: 'block',
                    padding: '12px 20px',
                    fontSize: '14px',
                    fontWeight: '500',
                    transition: 'all 0.2s ease',
                    borderRadius: '8px',
                    margin: '4px 8px',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >Home</Link>
              </li>
              <li style={{padding: '0'}}>
                <Link href='/sobre-mim' 
                  onClick={handleLinkClick}
                  style={{
                    color: 'white', 
                    textDecoration: 'none', 
                    display: 'block',
                    padding: '12px 20px',
                    fontSize: '14px',
                    fontWeight: '500',
                    transition: 'all 0.2s ease',
                    borderRadius: '8px',
                    margin: '4px 8px',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >Sobre Mim</Link>
              </li>
              <li style={{padding: '0'}}>
                <Link href='/servicos' 
                  onClick={handleLinkClick}
                  style={{
                    color: 'white', 
                    textDecoration: 'none', 
                    display: 'block',
                    padding: '12px 20px',
                    fontSize: '14px',
                    fontWeight: '500',
                    transition: 'all 0.2s ease',
                    borderRadius: '8px',
                    margin: '4px 8px',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >Serviços</Link>
              </li>
              <li style={{padding: '0'}}>
                <Link href='/contatos' 
                  onClick={handleLinkClick}
                  style={{
                    color: 'white', 
                    textDecoration: 'none', 
                    display: 'block',
                    padding: '12px 20px',
                    fontSize: '14px',
                    fontWeight: '500',
                    transition: 'all 0.2s ease',
                    borderRadius: '8px',
                    margin: '4px 8px',
                    background: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >Contatos</Link>
              </li>
            </ul>
          </div>
        )}
      </aside>
      {showImage && ( // A imagem só será renderizada se showImage for true
        <motion.div
          className={styles.imageContainer}
          initial='hidden'
          animate='visible'
          variants={imageVariants}
        >
          <Image
            src={renataImage}
            alt='Retrato de Renata'
            fill
            className={styles.profileImage}
          />
        </motion.div>
      )}
    </div>
  );
}
