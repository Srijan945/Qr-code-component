import React from "react";
import styles from './Footer.module.css';
import PropTypes from 'prop-types';

function Footer(props){

  const { coderName, variant } = props;
  return <div className={styles.footer}>
    Challenge by <a className={`${styles.footerAnchor} ${styles[`${variant}`]}`} href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a className={`${styles.footerAnchor} ${styles[`${variant}`]}`} href="#">{coderName}</a>.
  </div>
}

export default Footer;

Footer.propTypes = {
  coderName: PropTypes.string,
  variant: PropTypes.string,
};

Footer.defaultProps = {
  coderName: 'Srijan Saini',
  variant: 'footerAnchor'
};
