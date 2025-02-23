import { useCallback, useState } from "react";
import { Navigate, NavLink, useLocation, useNavigate } from "react-router-dom";
import style from "./Registration.module.css";
import { signUp, signIn } from "./../api/api";
import { useCookies } from "react-cookie";

const getCookies = (name) => {
  for (const entryStr of document.cookie.split("; ")) {
    const [entryName, entryValue] = entryStr.split("=");

    if (decodeURIComponent(entryName) === name) {
      return entryValue;
    }
  }
};

const RegistrationPage = () => {
  const location = useLocation();
  const navi = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);

  const [user, setUser] = useState({ name: null, pass: null, fullName: null });
  const [errorPass, setErrorPass] = useState();

  let isAuth = !location.pathname?.includes("registration");

  const { name, pass, fullName } = user;

  const onChangeHandler = useCallback((value, keyObj) => {
    setUser((user) => ({ ...user, [keyObj]: value }));
  }, []);

  const onTransitionPages = useCallback((event) => {
    event.preventDefault();
    isAuth = !isAuth;

    navi(isAuth ? "/" : "/registration");
  }, [isAuth]);

  console.log(cookies);
  console.log(getCookies("token"))

  const onRegisterUser = useCallback(
    (event) => {
      event.preventDefault();
      // if (user.pass?.length < 8) {
      //   setErrorPass("Пароль должен содержать минимум 8 символов");
      //   return;
      // }
      if (isAuth) {
        signIn(user);
      } else {
        signUp(user).then((e) => console.log(e));
      }
    },
    [user, isAuth]
  );

  return (
    <div>
      <div className={style.header}></div>
      <div className={style.auth}>
        <div className={style.text}>{isAuth ? "Вход" : "Регистрация"}</div>
        <form className={style.auth__form}>
          <div className={style.auth__form_loginText}>UserName</div>
          <input
            className={style.auth__form_loginInput}
            type="text"
            value={name}
            onChange={(e) => onChangeHandler(e.target.value, "name")}
            placeholder={"UserName"}
          />

          <div className={style.auth__form_loginText}>Password</div>
          <div className={style.pass}>
            <input
              className={style.auth__form_passwordInput}
              type="password"
              value={pass}
              onChange={(e) => onChangeHandler(e.target.value, "pass")}
              placeholder={"Password"}
            />
            {errorPass && (
              <h2 style={{ color: "red", fontSize: "10px" }}>{errorPass}</h2>
            )}
          </div>

          {!isAuth && (
            <div>
              <div className={style.auth__form_fullNameText}>FullName</div>
              <input
                className={style.auth__form_passwordInput}
                type="text"
                value={fullName}
                onChange={(e) => onChangeHandler(e.target.value, "fullName")}
                placeholder={"FullName"}
              />
            </div>
          )}
          <div className={style.blockBtn}>
            {/* <NavLink to="/" style={{ color: "white", textDecoration: "none" }}> */}
            <button onClick={onTransitionPages} className={style.btn}>
              {isAuth ? "Регистрация" : "Вход по логину"}
            </button>
            {/* </NavLink> */}
            <button onClick={onRegisterUser} className={style.auth__form_btn}>
              {isAuth ? "Войти" : "Регистрация"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
