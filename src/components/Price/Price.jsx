import { getIsLoggedIn } from "../../redux/auth/authSelector";
import { useSelector } from "react-redux";
import s from "./Price.module.scss";
import { getAllPrices } from "../../redux/prices/pricesSelector";
const uuid = require("uuid");
// const Prices = require("../../utils/price.json");

const Price = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
const Prices=useSelector(getAllPrices)

  return (
    <section className={`container ${s.price}`} id="price">
      <h2 className={s.title}>Послуги та ціни</h2>
      {Prices.length&& <ul className={s.list}>
        {Prices.map((el) => {
          const { title, price, online, description, period } = el;
          let priceForUser = Math.floor((Number(price) / 100) * 9) * 10;
          return (
            <li className={s.item} key={uuid.v4()}>
              <h3 className={s.item__title}>{title}</h3>
              <p className={s.item__online}>{online}</p>
              <p className={s.item__online}>{period}</p>
              <p className={s.item__description}>{description}</p>
              {isLoggedIn ? (
                <p className={s.item__price}> {priceForUser} грн</p>
              ) : (
                <p className={s.item__price}> {price} грн*</p>
              )}
            </li>
          );
        })}
      </ul>}
      {!isLoggedIn && (
        <p className={s.small}>* Знижка 10% зареєстрованим користувачам</p>
      )}
    </section>
  );
};

export default Price;
