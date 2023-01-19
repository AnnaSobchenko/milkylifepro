import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { signin, signup } from "../../redux/auth/authOperations";
import LabelForm from "../_shared/LabelForm/LabelForm";
import { getTheme } from "../../redux/theme/themeSelector";
import "react-toastify/dist/ReactToastify.css";
import s from "./AuthForm.module.scss";

const AuthForm = ({ isAuth }) => {
  const dispatch = useDispatch();
  const theme = useSelector(getTheme);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <div className={s.authForm}>
          <h2 className={s.authFormTitle2}>
            {isAuth ? "Registration:" : "Login:"}
          </h2>          
          <form onSubmit={handleSubmit} className={s.authFormInput}>
            {isAuth && (
              <>
                <LabelForm
                  type="name"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                />
                <LabelForm
                  type="phone"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                />
              </>
            )}
            <LabelForm
              type="email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
            />
            <LabelForm
              type="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              values={values}
            />
            {isAuth && (
              <p className={s.text__aprove}>
                Натискаючи на кнопку, ви даєте згоду на обробку персональних
                даних
              </p>
            )}
           
            <div
              className={s.btn}
              style={{
                color: theme === "light" ? "black" : "white",
              }}
            >
              <NavLink
                to="/login"
                onClick={() => {
                  dispatch(!isAuth ? signin(values) : signup(values));
                }}
              >
                submit
              </NavLink>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default AuthForm;
