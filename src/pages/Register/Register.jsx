import React, { useState } from "react";
import ButtonFull from "../../components/UI/Button/ButtonFull";
import "./style.css";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo/LogoPage.png'
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Message from "../../components/UI/Message/Message";
import AccountFactories from "../../services/AccountFactories";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";

import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { ToastNotiError } from "../../utils/Utils";

const Register = (props) => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [showMessage, setShowMessage] = useState({
    status: false,
    type: '',
    content: '',
  })

  const changeMessage = () => {
    setShowMessage({
      status: false,
      type: '',
      content: '',
    })
  }

  const createErrorMessage = (msg) => {
    setShowMessage({ status: true, type: 'error', content: msg })
  }

  const inputChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const navigator = useNavigate()

  const validateUserInput = (userInput) => {
    let res = true;
    let errMsg = '';
    if (!userInput.email) {
      errMsg = 'Hãy nhập email';
    }
    else if (userInput.email.indexOf('@') < 0) {
      errMsg = 'Cấu trúc mail sai phải có @';
    }
    else if (!userInput.password) {
      errMsg = 'Hãy nhập mật khẩu';
    }
    else if (userInput.password.length > 32 || userInput.password.length < 6) {
      errMsg = 'Độ dài mật khẩu từ 6 đến 36 ký tự';
    }
    else if (!userInput.confirmPassword) {
      errMsg = 'Hãy nhập mật khẩu để xác nhận';
    }
    else if (userInput.password !== userInput.confirmPassword) {
      errMsg = 'Nhập đúng mật khẩu';
    }
    if (errMsg) {
      createErrorMessage(errMsg)
      res = false;
    }
    return res;
  }

  const registerWithCredentials = async ({ email, password }) => {
    try {
      const response = await AccountFactories.requestLSignUp(userInput);
      if (response?.status === 200) {
        toast.success('Đăng ký thành công.')
        navigator('/login');
      }
      else if(response?.status === 210 ) {
        toast.error(response?.message)
      }
    } catch (error) {
       ToastNotiError();  
    }

    // try {
    //   const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    //   const user = userCredential.user;
    //   if (user) {
    //     // await sendEmailVerification(user);
    //     const response = await AccountFactories.requestLSignUp(userInput);
    //     if (response?.status === 200) {
    //       toast.success('Đăng ký thành công! Vui lòng kiểm tra email để xác thực tài khoản.')
    //     }
    //     else{
    //       toast.success('Có lỗi xảy ra. Vui lòng thử lại sau.')
    //     }
    //   }
    //   navigator('/login');
    // } catch (error) {
    //   setShowMessage({
    //     status: true,
    //     type: "error",
    //     content: `Đăng ký thất bại: Địa chỉ email đã được sử dụng`,
    //   });
    // }
  }


  const handleRegister = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (validateUserInput(userInput)) {
      registerWithCredentials(userInput);
    }
  }

  return (
    <div className="register">
      <div className="register__logo">
        <img className='logo' src={logo} alt="" />
      </div>
      <Message
        status={showMessage.status}
        type={showMessage.type}
        content={showMessage.content}
        changeMessage={changeMessage}
      />

      <form onSubmit={handleRegister} className="register-form">
        <div className='form-top'>
          <h1 style={{ textAlign: 'center' }}>Thông tin đăng ký</h1>
          <div className="register-form__control">
            <input
              type="text"
              name="email"
              onChange={inputChangeHandler}
              placeholder='Enter your email'
              className='input-register'
            ></input>
          </div>
          <div className="register-form__control">
            <Input.Password
              name="password"
              onChange={inputChangeHandler}
              placeholder="Enter your password"
              className='input-register'
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </div>
          <div className="register-form__control">
            <Input.Password
              name="confirmPassword"
              onChange={inputChangeHandler}
              placeholder="Confirm your password"
              className='input-register'
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </div>
        </div>
        <div className='form-bottom'>
          <div className="register-form__control">
            <ButtonFull type="submit">Đăng ký</ButtonFull>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
