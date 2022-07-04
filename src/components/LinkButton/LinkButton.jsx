import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

export default function LinkButton(props) {
    const to = props.to;
    const text = props.text;

    return (
        <Link className={styles.btn} to={to}>{text}</Link>
    );
};