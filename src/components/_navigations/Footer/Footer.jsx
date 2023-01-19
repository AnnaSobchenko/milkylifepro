import s from "./Footer.module.scss";
import Icons from "../../../images/symbol-defs.svg";

const Footer = () => {
  return (
    <footer className={s.footerContainer}>
     <div>     
      <a
        className={s.telegram}
        rel="noopener noreferrer"
        target="_blank"
        href="https://t.me/Olesia_Foremna"
      >
        <svg className={s.navIcon_telegram} width="20px" height="20px">
          <use xlinkHref={`${Icons}#icon-telegram`} />
        </svg>
      </a>
      <a
        className={s.telegram}
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.facebook.com/olesia.foremna"
      >
        <svg className={s.navIcon_telegram} width="20px" height="20px">
          <use xlinkHref={`${Icons}#icon-facebook`} />
        </svg>
      </a>
      <a
        className={s.telegram}
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.instagram.com/olesia.foremna/"
      >
        <svg className={s.navIcon_telegram} width="20px" height="20px">
          <use xlinkHref={`${Icons}#icon-instagram`} />
        </svg>
      </a>
      </div> 
      <p>© 2023 | All Rights Reserved |&nbsp;</p>
      <p>
        Milky Life Pro
        <span className={s.footerHeart}> ❤ </span> &zwnj;
      </p>
    </footer>
  );
};

export default Footer;
