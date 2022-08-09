import s from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.wrapper}>
        <div className={`container ${s.hero__1}`}>
          <h1 className={s.mainText}>
            Ефективна онлайн-консультація із грудного вигодовування
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
