import s from "./About.module.scss";

const Photo = require("../../images/photo.png");

const About = () => {
    return ( 
        <section className={`container ${s.about }`}>
          <div className={s.img}>
            <img src={Photo} alt="replacePhoto" width={450} />            
            </div>
          <div className={s.text__welcome}>
            <p className={s.text}>
              Привіт, <br /> я сертифікована консультантка із грудного
              вигодовування та експертка із дитячої психології по теорії Гордона
              Н'юфелда (Канада). Крім цього, я розробила унікальну подушку для
              відновлення після пологів і для годуючих мам.
            </p>
            <p className={s.text}>
              До кар'єри консультантки я працювала керівником лабораторії в
              Києво-Могилянській академії.
            </p>
            <p className={s.text}>
              Зі мною ви можете бути впевнені, що грудне вигодовування принесе
              тільки задоволення. З радістю допоможу вам знайти відповіді на
              будь-які питання і розв'язати проблеми будь-якої складності.
            </p>
            <p className={s.text}> Ваша, Олеся Форемна</p>
          </div>
        </section>
     );
}
 
export default About;