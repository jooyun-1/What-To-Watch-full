import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Google from "../components/Google.jsx";
import Facebook from "../components/Facebook.jsx";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  // const history = useHistory();
  let sessionStorage = window.sessionStorage;
  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3100/users/login", {
        email,
        password,
        withCredentials: true,
      });
      console.log(sessionStorage);
      if (response.data.success === true && sessionStorage.length === 0) {
        sessionStorage.setItem("loginId", email);
        sessionStorage.setItem("loginPassword", password);
        console.log("로그인 성공!");
        setIsLogin(true);
        // 로그인 성공 후 처리할 로직 작성
        navigate("/mypage"); // 내 정보 페이지로 이동
      } else {
        setErrorMessage(response.data.message);
        alert("로그인 실패");
      }
    } catch (error) {
      console.error("로그인 요청 실패:", error);
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <LoginTitle>Login</LoginTitle>
        <LoginInput
          type="text"
          placeholder="Email ID"
          value={email}
          onChange={handleUsernameChange}
          required
        />
        <LoginInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        {/* <input
          type="checkbox"
          name="saveEmail"
          id="saveEmail"
          checked={username}
          // onChange={handleSaveIDFlag}
        />
        <label>
          <span>아이디 저장</span>
        </label> */}
        <LoginButton type="submit" onSubmit={handleSubmit}>
          Login
        </LoginButton>
        {errorMessage && <LoginErrorMessage>{errorMessage}</LoginErrorMessage>}
      </LoginForm>
      <>
        <Google />
      </>
      <>
        <Facebook />
      </>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #5a5858;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const LoginInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  background-color: #2e2e2e;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const LoginTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
`;

const LoginErrorMessage = styled.p`
  margin-top: 10px;
  color: #dc3545;
  font-size: 14px;
`;

export default Login;

// import React from 'react';
// import styled from 'styled-components';

// const Login = () => {
//   return (
//     <LoginContainer>
//       <LoginForm>
//         <LoginTitle>로그인</LoginTitle>
//         <LoginInput
//           type="text"
//           placeholder="사용자 이름"
//           required
//         />
//         <LoginInput
//           type="password"
//           placeholder="비밀번호"
//           required
//         />
//         <LoginButton>로그인</LoginButton>
//       </LoginForm>
//     </LoginContainer>
//   );
// };

// const LoginContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
// `;

// const LoginForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 400px;
//   background-color: #fff;
//   padding: 30px;
//   border-radius: 5px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
// `;

// const LoginInput = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin-bottom: 10px;
//   border: 1px solid #ccc;
//   border-radius: 3px;
//   font-size: 16px;
//   &:focus {
//     outline: none;
//     border-color: #007bff;
//   }
// `;

// const LoginButton = styled.button`
//   padding: 10px 20px;
//   border: none;
//   border-radius: 3px;
//   background-color: #007bff;
//   color: #fff;
//   font-size: 16px;
//   cursor: pointer;
// `;

// const LoginTitle = styled.h1`
//   margin-bottom: 30px;
//   font-size: 24px;
//   font-weight: bold;
// `;

// export default Login;

// function onClickGooglelogin() {
//   document.querySelector('[aria-labelledby="button-label"]').click();
// }

// <button onClick={onClickGooglelogin}> Login </button>
// //로그인 버튼 아직 미완성

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useHistory } from 'react-router-dom';
// import Google from 'C:/Users/namkyun/Desktop/workspace/today/src/components/Google.jsx';
// import Facebook from 'C:/Users/namkyun/Desktop/workspace/today/src/components/Facebook.jsx';

// const Login = () => {
//   const history = useHistory(); // useHistory 훅 사용

//   // ...이전 코드 생략...

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // 여기서 서버에 로그인 요청을 보내고 결과를 처리할 수 있습니다.
//     if (username === 'admin' && password === 'admin') {
//       console.log('로그인 성공!');
//       setErrorMessage('');

//       // 로그인 성공 후 내 정보 페이지로 이동
//       history.push('/profile');
//     } else {
//       setErrorMessage('유효하지 않은 사용자 이름 또는 비밀번호입니다.');
//     }
//   };

//   // ...이전 코드 생략...

//   return (
//     // ...이전 코드 생략...
//   );
// };

// // ...이후 코드 생략...

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { useHistory } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import Google from 'C:/Users/namkyun/Desktop/workspace/today/src/components/Google.jsx';
// import Facebook from 'C:/Users/namkyun/Desktop/workspace/today/src/components/Facebook.jsx';

// import axios from 'axios';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate(); navigate('/ProfileLogin')
//   const history = useHistory();

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // 여기서 서버에 로그인 요청을 보내고 결과를 처리할 수 있습니다.
//     if (username === 'admin' && password === 'admin') {
//       console.log('로그인 성공!');
//       setErrorMessage('');

//       // 로그인 성공 후 내 정보 페이지로 이동
//       history.push('/profile');
//     } else {
//       setErrorMessage('유효하지 않은 사용자 이름 또는 비밀번호입니다.');
//     }
//   };
