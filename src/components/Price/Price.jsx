import s from "./Price.module.scss";
const uuid = require("uuid");
const Prices = require("../../utils/price.json");
const Price = () => {
  return (
    <section className={`container ${s.price}`} id="price">
      
        <h2 className={s.title}>Послуги та ціни</h2>
        <ul className={s.list}>
          {Prices.map((el) => {
            const { title, price, online, description,period } = el;
            return (
              <li className={s.item} key={uuid.v4()}>
                <h3 className={s.item__title}>{title}</h3>
                <p className={s.item__online}>{online}</p>
                <p className={s.item__online}>{period}</p>
                <p className={s.item__description}>{description}</p>
                <p className={s.item__price}> {price} грн</p>
              </li>
            );
          })}
        </ul>          
    </section>
  );
};

export default Price;
