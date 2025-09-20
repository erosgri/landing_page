import MainLayout from '../components/MainLayout';
import styles from '../page.module.css';

export default function SobreMimPage() {
  return (
    <MainLayout
      showImage={false}
      backgroundImage='/assets/imagens/renatab2.png'
      backgroundPosition='center 20%'
    >
      <div className={styles.heroContent}>
        <h1 className={styles.pageTitle}>Sobre Mim</h1>
        <div className={styles.textContent}>
          <p>
            Sou biomédica e técnica em estética, com mais de 30 anos de
            experiência na área da beleza e saúde estética. Atuei como docente
            no SENAC Santo Amaro, compartilhando conhecimento e formando
            profissionais. Fiz residência em harmonização facial na faculdade CTA, complementando
            minha formação com especialização avançada em procedimentos estéticos.
          </p>
          <p>
            Minha trajetória é marcada pelo auxílio em processos de recuperação
            pós-operatória e dermatológica, sempre prezando pela excelência e
            pelo cuidado individualizado. Sou especializada em:
          </p>
          <ul>
            <li>Aplicação de toxina botulínica (Botox)</li>
            <li>Preenchimentos faciais</li>
            <li>Fios de PDO e de sustentação</li>
          </ul>
          <p>
            Ao longo da minha carreira, construí uma sólida reputação pela
            combinação entre conhecimento técnico, prática clínica e atenção
            humanizada, ajudando pacientes e clientes a alcançarem resultados
            seguros e naturais.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
