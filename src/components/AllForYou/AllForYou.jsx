import s from "./AllForYou.module.scss";

const AllForYou = () => {
  return (
    <div className={s.section__allforyou}>
      <div className={`container ${s.allforyou}`}>
        <h2 className="visually-hidden">AllForYou</h2>
        <ul>
          <li>Легке навчання у зручний для вас час</li>
          <li>
            Напишіть, що відчуваєте нам в  &nbsp;
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://t.me/Olesia_Foremna"
            >
              Телеграм
            </a>
            &nbsp;і ми все зробимо, щоб вам стало краще
          </li>
          <li>
            Зворотний зв‘язок на весь період курсу від кураторки через соціальні
            мережі.
          </li>
          <li>Отримаєте підтримку і знання, які ви потребуєте зараз.</li>
          <li>
            Ми допоможемо вам годувати грудьми у задоволення, гарно виглядати
            зовні та зсередини.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AllForYou;
