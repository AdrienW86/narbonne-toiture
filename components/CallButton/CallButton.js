import React from 'react'; 
import styles from './button.module.css'

export default function CallButton() {
    return (
        <a href="tel:+33669999357" className={styles.link}>
            <button className={styles.btn}>
            📞 Appeler
            </button>
        </a>
    );
} 