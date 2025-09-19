'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../page.module.css';
import renataImage from '../../public/assets/imagens/renata1.png';

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
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/sobre-mim'>Sobre Mim</Link>
            </li>
            <li>
              <Link href='/servicos'>Serviços</Link>
            </li>
            <li>
              <Link href='/contatos'>Contatos</Link>
            </li>
          </ul>
        </nav>
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
