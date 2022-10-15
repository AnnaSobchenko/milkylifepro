import s from "./WeeksList.module.scss";

const WeeksList = () => {
  return (
    <section className={s.weekslist}>
      <div className={`container`}>
        <h2>Що вас чекає</h2>
        <div className={s.weeks}>
          <h3>Тиждень 1</h3>
          <div className="">
            <p>
              <span>Знайомство з експертками</span>
            </p>
            <p>
              <span>Правильні харчові звички: &nbsp;</span>їмо смачно, красиво
              та корисно. Поради нутріціолога.
            </p>
            <p>
              <span>Як готуватися до грудного вигодовування: &nbsp;</span>ви
              дізнаєтеся на що орієнтуватися та чи потрібні спеціальні техніки
              підготовки. Розвію ваші страхи та міфи.
            </p>
            <p>
              <span>Перше тренування з йоги: &nbsp;</span>знайомство та перші
              техніки з йоги. Розслабитеся та освоїте прості та дієві техніки
              для укріплення органів малого тазу.
            </p>
          </div>
        </div>
        <div className={s.weeks}>
          <h3>Тиждень 2</h3>
          <div className="">
            <p>
              <span>Медитування:&nbsp;</span>
              колискова це не лише наша традиція, але й зняття напруги у мами і
              дитини після насич
            </p>
            <p>
              <span>Про психологічний стан майбутньої мами: &nbsp;</span>Що
              відбувається з вами під час вагітності і чи це є нормою?
            </p>
            <p>
              <span>«Четвертий триместр вагітності»: &nbsp;</span>як краще
              організувати своє життя та післяпологове відновлення.
            </p>
            <p>
              <span>Йога: &nbsp;</span>дихальні вправи для релаксації та
              розслаблення шийно-комірцевої зони і грудного відділу.
            </p>
            <p>
              <span>Вагітні стиляги: &nbsp;</span>знайомство та заняття по збору
              своєї капсули, визначення своїх кольорів. Як підібрати речі для
              свого характеру та щоб виглядати не лише стильно, але й щоб було
              зручно.
            </p>
            <p>
              <span>Догляд за обличчям: &nbsp;</span>як підібрати косметику та
              як правильно наносити на обличчя, шию та зону декольте.
            </p>
          </div>
        </div>
        <div className={s.weeks}>
          <h3>Тиждень 4</h3>
          <div className="">
            <p>
              <span>Стильна мама і малюк:&nbsp;</span>
              Як підібрати собі наряд на виписку із пологового будинку? Який
              одяг краще вибрати для дитини?
            </p>
            <p>
              <span>Самомасаж обличчя: &nbsp;</span>Як вам розслабити м‘язи
              обличчя з мінімальним розтягненням шкіри. Навчитеся робити для
              себе приємний та дієвий масаж обличчя.
            </p>
            <p>
              <span>Зціджування: &nbsp;</span>Коли варто зціджуватися. Чому
              небезпечно зціджуватися після кожного годування?
            </p>
            <p>
              <span>Йога: &nbsp;</span>Вправи після пологів. Вакуум. Підтягнутий
              і плоский живіт чи дійсно це дуже важливо для вас?
            </p>
          </div>
        </div>
        <div className={s.weeks}>
          <h3>Тиждень 3</h3>
          <div className="">
            <p>
              <span>Вправи Кегеля:&nbsp;</span>
              коли варто починати тренування та як тренувати інтимні м'язи?
            </p>
            <p>
              <span>Що робити з зайвою вагою? &nbsp;</span>Харчування годуючої
              мами. Як їсти смачно і не набирати зайвого. Чому не варто їсти за
              двох?
            </p>
            <p>
              <span>Техніки самомасажу грудей.: &nbsp;</span>Як правильно
              виконувати. Прихід молока. Що робити при нагрубанні грудей?
            </p>
            <p>
              <span>Йога: &nbsp;</span>як визначити, що у вас діастаз після
              пологів. Як займатися?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeksList;