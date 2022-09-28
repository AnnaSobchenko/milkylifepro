import { NavLink } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";
import s from "../LoginPage/LoginPage.module.scss";

const RegisterPage = () => {
  return (
    <div className={`container ${s.authPage}`}>
      <AuthForm isAuth={true} />
      <p className={s.reglog}>
        Вже зареєстровані? &#10233;
        <NavLink to="/login"> Увійдіть </NavLink>
      </p>
    </div>
  );
};

export default RegisterPage;
