import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../services/AuthService";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import logo from "../../assets/logo/LogoPage.png";
import ButtonFull from "../../components/UI/Button/ButtonFull";
import Message from "../../components/UI/Message/Message";
import { AuthContext } from "../../context/auth.context";
import "./style.css";
import Temp from "../../utils/temp";
import AccountFactories from "../../services/AccountFactories";
import { sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { Button, Input } from "antd";


const Login = (props) => {
  const { user, setUser, signinWithGoogle } = useContext(AuthContext)
  const navigate = useNavigate();
  const [emailVerified, setEmailVerified] = useState()
  const [disableButtonSend, setDisableButtonSend] = useState()
  const [userFireBase, setUserFirebase] = useState()
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const [check, setCheck] = useState({
    status: false,
    type: "",
    content: "",
  });

  useEffect(() => {
    document.title = `PGT24h | Đăng nhập`
    return () => {
      document.title = 'PGT24h';
    };
  }, [])
  const changeMessage = () => {
    setCheck({
      status: false,
      type: "",
      content: "",
    });
  };

  const inputChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  function checkUserValidation() {
    if (!userInput.email) {
      setCheck({
        status: true,
        type: "error",
        content: `Email không được để trống, hãy nhập email`,
      });
      return false;
    }
    else if (userInput.email.indexOf('@') < 0 || userInput.email.indexOf('.com') < 0) {
      setCheck({
        status: true,
        type: "error",
        content: `Cấu trúc email không đúng xin hãy nhập lại, vs dụ: "abc@kolgo.com"`,
      });
      return false;
    }
    else if (!userInput.password) {
      setCheck({
        status: true,
        type: "error",
        content: `Mật khẩu không được để trống, hãy nhập mật khẩu`,
      });
      return false;
    }
    return true;
  }

  const onSubmitLogin = async (event) => {
    event?.preventDefault();

    if (checkUserValidation()) {
      const response = await AccountFactories.requestLogin(userInput);
      if (response?.error) {
        setCheck({
          status: true,
          type: "error",
          content: response?.error,
        });
      }
      if (response?.user?.role_id !== 3) {
        signInWithEmailAndPassword(auth, userInput.email, userInput.password)
          .then((userCredential) => {
            const userFireBase = userCredential.user;
            setUserFirebase(userFireBase);
            // setEmailVerified(userFireBase?.emailVerified)
            // if (userFireBase?.emailVerified) {
            if (true) {
              setProfileForUser(response?.user, userFireBase);
            }
          })
          .catch((error) => {
            // Lỗi trong quá trình đăng nhập
            const errorCode = error.code;
            const errorMessage = error.message;
            // Hiển thị thông báo lỗi
            setCheck({
              status: true,
              type: "error",
              content: errorMessage,
            });
          });
      }
      else if (response?.user?.role_id === 3) {
        setProfileForUser(response?.user)
      }
    }

  };

  const setProfileForUser = (userDb, userFireBase = {}) => {
    let user = {
      id: userDb?.id,
      email: userDb?.email,
      firstName: userDb?.firstName,
      lastName: userDb?.lastName,
      avatar: userDb?.avatar,
      role_id: userDb?.role_id,
      role: userDb?.role_name,
      ...userFireBase,
    };

    setUser(user)
    localStorage.setItem("user", JSON.stringify({ ...user }))
    window.dispatchEvent(new Event('storage'))
    setCheck({
      status: true,
      type: "success",
      content: `Đăng nhập thành công`,
    });

    setTimeout(() => {
      if (user?.role_id === 3) {
        return navigate("../admin");
      } else return navigate("..");
    }, 500)
  };

  const forgotPasswordHandler = () => {
    navigate("../forgot_password");
  };

  const comeRegisterHandler = () => {
    navigate("../register");
  };

  const handleReSeneEmail = async (e) => {
    e.preventDefault();
    const resp = await sendEmailVerification(userFireBase);
    toast.success('Đã gửi lại email xác thực.')
    setDisableButtonSend(true);
    setTimeout(() => {
      onSubmitLogin();
    }, 30000);
  };

  return (
    <div>
      <Message
        status={check.status}
        type={check.type}
        content={check.content}
        changeMessage={changeMessage}
      />
      <div className="login">
        <div className="login__logo">
          <Link to="../">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        <div className="login-form__control">
          <h1 className="tittle-login">Đăng nhập vào PGT24h</h1>
        </div>

        {emailVerified === false ? <div className="login-form">
          <div className="emailValidate">
            <h3 className="textTitle">Tài khoản chưa được xác thực.</h3>
            <span className="textContent">Vui lòng truy cập vào email và làm theo hướng dẫn để xác thực tài khoản</span>
            <div className="login-form__control">
              <Button type="primary" onClick={handleReSeneEmail} disabled={disableButtonSend} >Gửi lại yêu cầu xác thực</Button>
            </div>
            {disableButtonSend === true &&
              <>
                <h3>Bạn đã xác thực xong ? </h3>
                <div className="login-form__control">
                  <ButtonFull type="button" onClick={onSubmitLogin}>Đăng nhập</ButtonFull>
                </div>
              </>
            }
          </div>
        </div> :
          (<>
            <form onSubmit={onSubmitLogin} className="login-form">
              <div className="login-form__control">
                <input
                  className="input-login"
                  type="text"
                  name="email"
                  onChange={inputChangeHandler}
                  placeholder="Nhập email"
                ></input>
              </div>
              <Input.Password
                name="password"
                onChange={inputChangeHandler}
                placeholder="Nhập mật khẩu"
                className="input-login"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
              <div className="login-form__control">
                <label
                  className="line-forgot-password"
                  onClick={forgotPasswordHandler}
                >
                  Quên mật khẩu?
                </label>
              </div>
              <div className="login-form__control">
                <ButtonFull type="submit">Đăng nhập</ButtonFull>
              </div>
            </form>
            <div className="login-form__control">
              <button onClick={comeRegisterHandler} className="register-line">
                Bạn chưa có tài khoản?
              </button>
            </div>
          </>)
        }

      </div>
    </div>
  );
};

export default Login;
