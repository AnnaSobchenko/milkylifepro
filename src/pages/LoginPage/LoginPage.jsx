import AuthForm from "../../components/AuthForm/AuthForm";
import s from "./LoginPage.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div
      className={`container ${s.authPage}`}     
    >
      <ToastContainer
        position={toast.POSITION.TOP_CENTER}
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        enableMultiContainer
        containerId={"A"}
      />
      <ToastContainer
        position={toast.POSITION.TOP_CENTER}
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        enableMultiContainer
        containerId={"C"}
      />
      <ToastContainer
        position={toast.POSITION.TOP_CENTER}
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        enableMultiContainer
        containerId={"D"}
      />
      
      <AuthForm isAuth={false} />
      <p className={s.reglog}>
        Ще не зареєстровані? &#10233;
        <NavLink to="/register"> Реєстрація </NavLink>
      </p>
    </div>
  );
};

export default LoginPage;
