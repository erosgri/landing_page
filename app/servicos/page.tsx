import MainLayout from '../components/MainLayout';
import styles from '../page.module.css';

export default function ServicosPage() {
  return (
    <MainLayout
      showImage={false}
      backgroundImage='/assets/imagens/renatae.png'
    >
      <div className={styles.heroContent}>
        <h1 className={styles.pageTitle}>Serviços</h1>
        <div className={styles.textContent}>
          <p>
            Atualmente, meu foco está em oferecer tratamentos especializados,
            como:
          </p>
          <ul>
            <li>Aplicação de toxina botulínica (Botox)</li>
            <li>Preenchimentos faciais</li>
            <li>Fios de PDO e de sustentação</li>
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
