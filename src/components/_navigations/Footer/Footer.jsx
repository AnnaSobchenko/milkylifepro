import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footerContainer}>
      <p>© 2022 | All Rights Reserved |&nbsp;</p>
      <p>
        {" "}
        Milky Life Pro
        <span className={s.footerHeart}> ❤ </span> &zwnj;
      </p>
    </footer>
  );
};

export default Footer;
