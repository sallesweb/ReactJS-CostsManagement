import styles from './SubmitButton.module.css';

export default function SubmitButton(props) {
    const text = props.text;

    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    );
};