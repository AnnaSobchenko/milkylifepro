import s from "./About.module.scss";
import { NavLink } from "react-router-dom";

const Photo = require("../../images/foto1.jpg");

const About = () => {
  return (
    <section className={`container ${s.about}`} id="about">
      <div className={s.img}>
        <img src={Photo} alt="replacePhoto" width={450} />
      </div>
      <div className={s.text__welcome}>
        <p className={s.text}>
          Привіт, <br /> я сертифікована консультантка з грудного вигодовування.
          Навчалася в Інституті Гордона Ньюфелда (Канада) де вивчала дитячу
          психологію.
        </p>
        <p className={s.text}>
          Мама двох донечок, яких годувала і годую грудьми тому розумію кожне
          ваше хвилювання і ваші потреби. Зі мною ви можете бути впевнені, що
          грудне вигодовування принесе тільки задоволення. З радістю допоможу
          вам знайти відповіді на будь-які питання і розв'язати проблеми
          будь-якої складності.
        </p>
        <p className={s.text}>
          Авторка та кураторка &nbsp;
          <NavLink to="/mama-marafon">"Мамо, марафон!"</NavLink>
        </p>
        <p className={s.text}>
          Крім цього, я розробила унікальну подушку для відновлення після
          пологів і для годуючих мам.
        </p>
        <p className={s.text}>
          Буду рада із вами поспілкуватися. Якщо виникли питання пишіть мені в
          &nbsp;
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://t.me/Olesia_Foremna"
          >
            Телеграм
          </a>
        </p>
        <p className={s.text}> Ваша, Олеся Форемна</p>
      </div>
    </section>
  );
};

export default About;
