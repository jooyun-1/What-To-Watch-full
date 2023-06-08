import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Sidebar from '../components/ProfileSideBar';

const Withdrawal = () => {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleWithdrawal = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/withdrawal', { password });

      if (response.data.success) {
        console.log('회원 탈퇴 성공!');
        // 성공 처리에 따른 로직 작성
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error('회원 탈퇴 요청 실패:', error);
    }
  };

  return (
    <WithdrawalContainer>
      <Sidebar />
      <WithdrawalForm onSubmit={handleWithdrawal}>
        <WithdrawalTitle>회원 탈퇴</WithdrawalTitle>
        <WithdrawalInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <WithdrawalButton type="submit">탈퇴</WithdrawalButton>
        {errorMessage && <WithdrawalErrorMessage>{errorMessage}</WithdrawalErrorMessage>}
      </WithdrawalForm>
    </WithdrawalContainer>
  );
};

const WithdrawalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #232323; /* 다크 모드 배경 색상 */
`;

const WithdrawalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333333; /* 다크 모드 배경 색상 */
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 그림자 효과 */
`;

const WithdrawalInput = styled.input`
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

const WithdrawalButton = styled.button`
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

const WithdrawalTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
  color: #ffffff; /* 다크 모드 글자 색상 */
`;

const WithdrawalErrorMessage = styled.p`
  margin-top: 10px;
  color: #dc3545;
  font-size: 14px;
`;

export default Withdrawal;
