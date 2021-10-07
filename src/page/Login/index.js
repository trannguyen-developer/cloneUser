import React, { useState } from "react";
import "./styles.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputUserValue, setInputUserValue] = useState("");
  const [inputPasswordValue, setInputPasswordValue] = useState("");

  const [isValidUser, setIsValidUser] = useState(true);
  const [isValidPassword, setIsValidPasword] = useState(true);

  const [textIsValidUser, setTextIsValidUser] = useState("");
  const [textIsValidPass, setTextIsValidPass] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  const handleChangeUserValue = (e) => {
    setInputUserValue(e.target.value);
    setIsValidUser(false);
  };
  const handleChangePasswordValue = (e) => {
    setInputPasswordValue(e.target.value);
    setIsValidPasword(false);
  };

  // handle user
  const handleBlurUser = () => {
    if (inputUserValue.trim().length <= 0) {
      setIsValidUser(true);
      setTextIsValidUser("Bạn chưa nhập trường này");
      return;
    }
    if (!validateEmail(inputUserValue)) {
      setIsValidUser(true);
      setTextIsValidUser("Trường này phải là email");
    }
    setInputUserValue(inputUserValue.trim());
  };

  const handleFocusUser = () => {
    setIsValidUser(false);
  };

  // handle password
  const handleBlurPass = () => {
    if (inputPasswordValue.trim().length <= 0) {
      setIsValidPasword(true);
      setTextIsValidPass("Bạn chưa nhập trường này");
      return;
    }
    if (inputPasswordValue.trim().length < 8) {
      setIsValidPasword(true);
      setTextIsValidPass("Mật khẩu tối thiểu 8 ký tự");
    }
  };

  const handleFocusPass = () => {
    setTextIsValidPass(false);
  };

  const handleClickBtnForm = () => {
    handleBlurUser();
    handleBlurPass();
    if (isValidUser || isValidPassword) {
      return;
    }
    dispatch({
      type: "LOGIN",
      payload: { email: inputUserValue, password: inputPasswordValue },
    });
    history.push("/");
  };

  return (
    <div className="login">
      <h5 className="login-title">Đăng nhập </h5>
      <form onSubmit={handleSubmitForm}>
        <div className="login-form">
          <div className="login-input-form">
            <div className="login-icon-form">
              <PersonIcon />
            </div>
            <input
              className="login-input"
              type="text"
              placeholder="Nhập email"
              onChange={handleChangeUserValue}
              value={inputUserValue}
              onBlur={handleBlurUser}
              onFocus={handleFocusUser}
            />
          </div>
          {isValidUser && <p className="isValid">{textIsValidUser}</p>}
        </div>
        <div className="login-form">
          <div className="login-input-form">
            <div className="login-icon-form">
              <LockIcon />
            </div>
            <input
              className="login-input"
              type="password"
              placeholder="Mật khẩu"
              onChange={handleChangePasswordValue}
              value={inputPasswordValue}
              onBlur={handleBlurPass}
              onFocus={handleFocusPass}
            />
          </div>
          {isValidPassword && <p className="isValid">{textIsValidPass}</p>}
        </div>
        <button
          onClick={handleClickBtnForm}
          className="login-btn-submit"
          type="submit"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
