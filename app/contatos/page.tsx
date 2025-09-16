'use client';
import MainLayout from '../components/MainLayout';
import styles from '../page.module.css';
import InstagramIcon from '../components/icons/InstagramIcon';
import WhatsAppIcon from '../components/icons/WhatsAppIcon';

export default function ContatosPage() {
  return (
    <MainLayout
      showImage={false}
      backgroundImage='/assets/imagens/renata2.png'
      backgroundPosition='center top'
    >
      <div className={styles.heroContent}>
        <h1 className={styles.pageTitle}>Contatos</h1>
        <div className={styles.contactLinks}>
          <a
            href='https://www.instagram.com/dra.renatacsilva/'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.contactLink}
          >
            <InstagramIcon />
            <span>@dra.renatacsilva</span>
          </a>
          <a
            href='https://wa.me/5511992119169'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.contactLink}
          >
            <WhatsAppIcon />
            <span>Agendamentos</span>
          </a>
        </div>
      </div>
    </MainLayout>
  );
}
