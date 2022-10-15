import s from "./Helpful.module.scss";

const Photo = require("../../images/foto2.jpg");

const Helpful = () => {
  return (
    <section className={s.section__helpful} id="about">
      <div className={`container ${s.helpful}`}>
      <div className={s.text__helpful}>
        <h2 className={s.title}>Допоможу</h2>
        <ul className={s.list}>
          <li className={s.text}>налагодити грудне вигодовування</li>
          <li className={s.text}>збільшити кількість молока</li>
          <li className={s.text}>дитині набирати вагу</li>
          <li className={s.text}>знизити ризик лактостазу, маститу</li>
          <li className={s.text}>розібратися, що потрібно їсти мамі</li>
          <li className={s.text}>ввести прикорм саме для вашої дитини</li>
          <li className={s.text}>м'яко завершити грудне вигодовування</li>
        </ul>
      </div>
      <div className={s.img}>
        <img src={Photo} alt="replacePhoto" width={450} />
      </div>
      </div>
    </section>
  );
};

export default Helpful;
