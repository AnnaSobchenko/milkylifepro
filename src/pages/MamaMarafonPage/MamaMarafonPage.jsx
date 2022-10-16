import s from "./MamaMarafonPage.module.scss";
import Icons from "../../images/symbol-defs.svg";
import WeeksList from "../../components/WeeksList/WeeksList";
import AllForYou from "../../components/AllForYou/AllForYou";
const Photo = require("../../images/marafon.png");

const MamaMarafonPage = () => {
  return (
    <section className={s.mamamarafon}>
      <div className={s.hero}>
        <h2>Їжа, йога,</h2>
        <h2> грудне вигодовування </h2>
        <h2>та стиль для мами</h2>
        <p>Все, щоб ви почувалися на мільйон, в одному флаконі!</p>
      </div>
      <div className={`container`}>
        <div className={s.about}>
          <p>4 тижні підтримки для кожної мами</p>
          <p>5 важливих тем</p>
          <p>18 відеолекцій</p>
          <p>+ індивідуальна підтримка від кураторки</p>
        </div>
        <div className={s.options}>
          <div className={s.img}>
            <img src={Photo} alt="replacePhoto" width={550} />
          </div>
          <div className={s.options__describe}>
            <h2>Мамо, марафон!</h2>
            <p>
              Дівчата, спеціально для вас розробили супер програму для вагітних
              і мам, щоб ви:
            </p>
            <ul>
              <li>їли просту, збалансовану їжу для оптимальної ваги</li>
              <li>виглядали стильно з мінімальними затратами</li>
              <li>знали як правильно доглядати за вашою шкірою</li>
              <li>годували грудьми у задоволення</li>
              <li>
                релаксували і підтримували себе в гарній формі за допомогою йоги
              </li>
            </ul>
          </div>
        </div>

        <div className={s.recived}>
          <h2>Ви отримаєте</h2>
          <ul>
            <li>Зменшите об'єми за допомогою збалансованого харчування</li>
            <li>
              Дізнаєтесь спеціальні вправи для вагітних із йоги, зможете
              займатися йогою у будь-який час
            </li>
            <li>
              Створите свою капсулу одягу і у вас зникне проблема, що одягнути
            </li>
            <li>
              Ви навчитеся годувати грудьми у задоволення у різних позиціях
            </li>
            <li>
              Зможете правильно підібрати догляд за шкірою обличчя і навчитися
              робити самомасаж
            </li>
            <li>Отримаєте підтримку і впевненість у своїх силах, як мами</li>
          </ul>
        </div>
        <a
          className={s.telegram}
          rel="noopener noreferrer"
          target="_blank"
          href="https://t.me/Olesia_Foremna"
        >
          <svg className={s.navIcon_telegram} width="35px" height="35px">
            <use xlinkHref={`${Icons}#icon-telegram`} />
          </svg>
        </a>
      </div>
      <WeeksList />
      <AllForYou />
    </section>
  );
};

export default MamaMarafonPage;
