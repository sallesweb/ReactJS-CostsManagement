import styles from './Input.module.css';

export default function Input(props) {
    const text = props.text;
    const name = props.name;
    const type = props.type;
    const placeholder = props.placeholder;
    const handleOnChange = props.handleOnChange;
    const value = props.value;

    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
            />
        </div>
    );
};