import React from "react";
import styles from './css/Footer.module.css';

export default function Footer(){
    return <div className={styles.footer}>
    Challenge by <a className={styles.footerAnchor} href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a className={styles.footerAnchor} href="#">Srijan Saini</a>.
  </div>
}