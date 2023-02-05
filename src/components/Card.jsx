import React from "react";
import styles from './css/Card.module.css';

function Card(){
    return <div className={styles.card}>
        <div className={styles.qrCode}>
            <img src='./images/image-qr-code.png' alt='qr-code' />
        </div>
        <div className={styles.cardDescription}>
            <p className={styles.descriptionHeading}>
                Improve your front-end skills by 
                building projects
            </p>
            <p className={styles.descriptionInfo}>
                Scan the QR code to visit Frontend 
                Mentor and take your coding skills 
                to the next level
            </p>
        </div>
    </div>
}

export default Card;