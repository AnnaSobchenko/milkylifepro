import s from "./Hero.module.scss";
import { getTheme } from "../../redux/theme/themeSelector";
import { useSelector } from "react-redux";


const Hero = () => {
  
  const theme = useSelector(getTheme);
    return ( 
      <section
      className={s.hero}
      style={{
        backgroundColor:
          theme === "light"
            ? "var(--primary-bg-color)"
            : "var(--second-bg-color)",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <div className={s.wrapper}>
        {/* <img src={Logo} alt="logo" width={220} /> */}
        <div className={`container ${s.hero__1}`}>

        <h1 className={s.mainText}>
          Ефективна онлайн-консультація із грудного вигодовування
        </h1>
        </div>
        
      </div>
    </section>
     );
}
 
export default Hero;