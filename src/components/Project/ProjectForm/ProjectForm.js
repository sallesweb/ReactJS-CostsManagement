import { Input, Select, SubmitButton } from '../../Form';

import styles from './ProjectForm.module.css';

export default function ProjectForm(props) {
    const btnText = props.btnText;

    return (
        <form className={styles.form}>
            <Input type="text" name="name" text="Nome do projeto" placeholder="Insira o nome do projeto" />
            <Input type="number" name="budget" text="Orçamento do projeto" placeholder="Insira o orçamento total" />
            <Select name="category_id" text="Selecione a categoria" />
            <SubmitButton text={btnText} />
        </form>
    );
};