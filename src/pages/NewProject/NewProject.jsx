import { ProjectForm } from '../../components';

import styles from './NewProject.module.css';

export default function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>New Project</h1>
            <p>Crie seu projeto para gerenciar os custos e serviços.</p>
            <ProjectForm btnText="Criar projeto" />
        </div>
    );
};