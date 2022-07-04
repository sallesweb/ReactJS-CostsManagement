import styles from './Select.module.css';

export default function Select(props) {
    const text = props.text;
    const name = props.name;
    const options = props.options;
    const handleOnChange = props.handleOnChange;
    const value = props.value;

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select id={name} name={name}>
                <option disabled selected>Selecione uma opção</option>
            </select>
        </div>
    );
};