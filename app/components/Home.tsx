import styles from '../page.module.css';
import MainLayout from './MainLayout';

export default function Home() {
  return (
    <MainLayout
      backgroundImage='/assets/imagens/renatab2.png'
    >
      <div className={styles.heroContent}>
        <h1>Bem Vindo</h1>
        <h2>Dra. Renata Cristina</h2>
        <p className={styles.subtitle}>
          Especializada em procedimentos faciais e cosmetologia
        </p>
      </div>
    </MainLayout>
  );
}
