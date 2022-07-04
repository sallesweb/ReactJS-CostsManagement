import styles from './Home.module.css';
import savings from '../../img/savings.svg';
import { LinkButton } from '../../components';

export default function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Costs Management</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/NewProject" text="Criar Projeto" />
            <img src={savings} alt="Costs Management" />
        </section>
    );
};