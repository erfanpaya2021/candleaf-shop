import logo from "../../assets/images/footer/footer-icon.png";
import github from "../../assets/images/footer/github.png";
import linkedin from "../../assets/images/footer/linkedin.png";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__container}>
        <div className={classes.footer__logo}>
          <img src={logo} alt="logo" />
          <span>شمع برگ</span>
        </div>
        <div className={classes.footer__social}>
          <a href="https://linkedin.com/in/erfan-paya">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/erfanpaya2021">
            <img src={github} alt="github" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
