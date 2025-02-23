import { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import style from "./Login.module.css";

const LoginApplicationPage = () => {
  const [login, setLogin] = useState();
  const [pass, setPass] = useState();
  const [errorPass, setErrorPass] = useState();

  const setPassword = (e) => {
    setPass(e.target.value);
    if (e.target.value.length < 8) {
      setErrorPass("Пароль должен содержать минимум 8 символов");
    } else {
      setErrorPass(null);
    }
  };

  return (
    <div>
      <div className={style.header}></div>
      <div className={style.auth}>
        <div className={style.text}> Вход</div>
        <form className={style.auth__form}>
          <div className={style.auth__form_loginText}>UserName</div>
          <input
            className={style.auth__form_loginInput}
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder={"UserName"}
          />

          <div className={style.auth__form_loginText}>Password</div>
          <div className={style.pass}>
            <input
              className={style.auth__form_passwordInput}
              type="password"
              value={pass}
              onChange={setPassword}
              placeholder={"Password"}
            />
            {errorPass && (
              <h2 style={{ color: "red", fontSize: "10px" }}>{errorPass}</h2>
            )}
          </div>

          <div>
            <NavLink
              to="/registration"
              style={{ color: "white", textDecoration: "none" }}
            >
              <button className={style.btn}>Регистрация</button>
            </NavLink>
            <button className={style.auth__form_btn}>
              {/* <NavLink to="/udv" style={{ color: "white" }}> */}
              Войти
              {/* </NavLink> */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginApplicationPage;
