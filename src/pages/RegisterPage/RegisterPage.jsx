import AuthForm from "../../components/AuthForm/AuthForm";
import s from "../LoginPage/LoginPage.module.scss";

const RegisterPage = () => {
 
  return (
    <div
      className={`container ${s.authPage}`}
      
    >  
      <AuthForm isAuth={true} />
    </div>
  );
};

export default RegisterPage;
