
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Sidebar from '../components/ProfileSideBar';
const PasswordChangePage = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCurrentPasswordChange = (event) => {
    setCurrentPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 비밀번호 일치 여부 검증
    if (newPassword !== confirmPassword) {
      setErrorMessage('새로운 비밀번호와 확인 비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      // 현재 비밀번호와 새로운 비밀번호 전달
      const response = await axios.post('http://localhost:3100/api/change-password', {
        currentPassword,
        newPassword,
      });

      if (response.data.success) {
        console.log('패스워드 변경 성공!');
        // 성공 처리에 따른 로직 작성
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error('패스워드 변경 요청 실패:', error);
    }
  };

  return (
    <PasswordChangeContainer>
      <Sidebar />
      <PasswordChangeForm onSubmit={handleSubmit}>
        <PasswordChangeTitle>비밀번호 변경</PasswordChangeTitle>
        <PasswordChangeInput
          type="password"
          placeholder="현재 비밀번호"
          value={currentPassword}
          onChange={handleCurrentPasswordChange}
          required
        />
        <PasswordChangeInput
          type="password"
          placeholder="새로운 비밀번호"
          value={newPassword}
          onChange={handleNewPasswordChange}
          required
        />
        <PasswordChangeInput
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
        <PasswordChangeButton type="submit">변경</PasswordChangeButton>
        {errorMessage && (
          <PasswordChangeErrorMessage>{errorMessage}</PasswordChangeErrorMessage>
        )}
      </PasswordChangeForm>
    </PasswordChangeContainer>
  );
};


const PasswordChangeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #232323; /* 다크 모드 배경 색상 */
`;

const PasswordChangeForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333333; /* 다크 모드 배경 색상 */
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 그림자 효과 */
`;

const PasswordChangeInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #555555; /* 다크 모드 보더 색상 */
  border-radius: 3px;
  font-size: 16px;
  color: #ffffff; /* 다크 모드 글자 색상 */
  background-color: #333333; /* 다크 모드 배경 색상 */
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const PasswordChangeButton = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

const PasswordChangeTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
  color: #ffffff; /* 다크 모드 글자 색상 */
`;

const PasswordChangeErrorMessage = styled.p`
  margin-top: 10px;
  color: #dc3545;
  font-size: 14px;
`;

export default PasswordChangePage;



// import React, { useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

// const PasswordChangePage = () => {
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleCurrentPasswordChange = (event) => {
//     setCurrentPassword(event.target.value);
//   };

//   const handleNewPasswordChange = (event) => {
//     setNewPassword(event.target.value);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     setConfirmPassword(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('/api/change-password', {
//         currentPassword,
//         newPassword,
//         confirmPassword,
//       });

//       if (response.data.success) {
//         // 패스워드 변경 성공
//         console.log('패스워드 변경 성공!');
//         // 성공 처리에 따른 로직 작성
//       } else {
//         // 패스워드 변경 실패
//         setErrorMessage(response.data.message);
//       }
//     } catch (error) {
//       console.error('패스워드 변경 요청 실패:', error);
//     }
//   };

//   return (
//     <PasswordChangeContainer>
//       <PasswordChangeForm onSubmit={handleSubmit}>
//         <PasswordChangeTitle>패스워드 변경</PasswordChangeTitle>
//         <PasswordChangeInput
//           type="password"
//           placeholder="현재 비밀번호"
//           value={currentPassword}
//           onChange={handleCurrentPasswordChange}
//           required
//         />
//         <PasswordChangeInput
//           type="password"
//           placeholder="새로운 비밀번호"
//           value={newPassword}
//           onChange={handleNewPasswordChange}
//           required
//         />
//         <PasswordChangeInput
//           type="password"
//           placeholder="비밀번호 확인"
//           value={confirmPassword}
//           onChange={handleConfirmPasswordChange}
//           required
//         />
//         <PasswordChangeButton type="submit">변경</PasswordChangeButton>
//         {errorMessage && (
//           <PasswordChangeErrorMessage>{errorMessage}</PasswordChangeErrorMessage>
//         )}
//       </PasswordChangeForm>
//     </PasswordChangeContainer>
//   );
// };

// const PasswordChangeContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const PasswordChangeForm = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #f1f1f1;
//   padding: 30px;
//   border-radius: 5px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
// `;

// const PasswordChangeInput = styled.input`
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

// const PasswordChangeButton = styled.button`
//   padding: 10px 20px;
//   border: none;
//   border-radius: 3px;
//   background-color: #2e2e2e;
//   color: #fff;
//   font-size: 16px;
//   cursor: pointer;
// `;

// const PasswordChangeTitle = styled.h1`
//   margin-bottom: 30px;
//   font-size: 24px;
//   font-weight: bold;
// `;

// const PasswordChangeErrorMessage = styled.p`
//   margin-top: 10px;
//   color: #dc3545;
//   font-size: 14px;
// `;

// export default PasswordChangePage;