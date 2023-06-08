import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {RiLockPasswordLine} from 'react-icons/ri';
import {BsPencil} from 'react-icons/bs';


const SignupForm = () => {
  const [id, setId] = useState('');
//   const [passwordcheck, setPasswordCheck] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [birth, setBirth] = useState('');
//   const [birthYear, setBirthYear] = useState('1990');
//   const [birthMonth, setBirthMonth] = useState('01');
//   const [birthDay, setBirthDay] = useState('01');
  const [gender, setGender] = useState(''); 


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3100/users/signup', {
        name,
        email,
        password,
        birth,
        gender,
      });

      if (response.status === 200) {
      sessionStorage.setItem('loginId', id);
      sessionStorage.setItem('loginPassword', password);
      sessionStorage.setItem('name', name);
      sessionStorage.setItem('email', email);
      console.log('회원가입 성공!');
        // 회원가입 성공 후 처리할 로직 작성
      }
    } catch (error) {
      console.error('회원가입 요청 실패:', error);
      setErrorMessage('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };
  

//   const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
//   const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));




  return (
    <WrapBox>
    <Form onSubmit={handleSubmit}>
    <Title>TODAY</Title>
      {/* 회원가입 입력 필드들 */}
      <Inputdiv>
        아이디
      </Inputdiv>
      <Input
        type="text"
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      {/* <InputContainer> */}
      <Inputdiv>
        비밀번호
      </Inputdiv>
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        icon={<BsPencil />}
      />
        {/* <IconWrapper>
          <BsPencil />
        </IconWrapper>
        </InputContainer> */}

      {/* <Input
        type="passwordcheck"
        placeholder="비밀번호 재확인"
        value={passwordcheck}
        onChange={(e) => setPasswordCheck(e.target.value)}
        required
      /> */}
      <Inputdiv>
        이메일
      </Inputdiv>
      <Input
        type="email"
        placeholder="[선택] 비밀번호 분실 시 확인용 이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Inputdiv>
        이름
      </Inputdiv>
      <Input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Inputdiv>
        생년월일
      </Inputdiv>
      <Input
        type="text"
        placeholder="생년월일 8자리"
        value={birth}
        onChange={(e) => setBirth(e.target.value)}
        required
      />
      
      <Inputdiv>
        성별
      </Inputdiv>
      {/* <FormGroup> */}
      <GenderRadioGroup>
        <GenderRadio
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={(e) => setGender(e.target.value)}
        />
        <GenderLabel htmlFor="male">남자</GenderLabel>
        <GenderRadio
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={(e) => setGender(e.target.value)}
        />
        <GenderLabel htmlFor="female">여자</GenderLabel>
        <GenderRadio
          type="radio"
          id="other"
          name="gender"
          value="other"
          checked={gender === 'other'}
          onChange={(e) => setGender(e.target.value)}
        />
        <GenderLabel htmlFor="other">선택안함</GenderLabel>
      </GenderRadioGroup>
      {/* </FormGroup> */}




      {/* <Label>생년월일</Label>
      <FormGroup>
          <BirthInputGroup>
            <BirthSelect
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
            >
              {Array.from({ length: new Date().getFullYear() - 1899 }, (_, i) => (1900 + i).toString()).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </BirthSelect>
            <Separator>년</Separator>
            <BirthSelect
              value={birthMonth}
              onChange={(e) => setBirthMonth(e.target.value)}
            >
              {months.map(month => (
                <option key={month} value={month}>{month}</option>
              ))}
            </BirthSelect>
            <Separator>월</Separator>
            <BirthSelect
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
            >
              {days.map(day => (
                <option key={day} value={day}>{day}</option>
              ))}
            </BirthSelect>
            <Separator>일</Separator>
          </BirthInputGroup>
        </FormGroup> */}
      
      <Button type="submit">가입하기</Button>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Form>
    </WrapBox>
  );
};

// const IconWrapper = styled.div`
//   position: relative;
//   top: 50%;
//   right: 10px;
//   transform: translateY(-50%);
// `;

// const InputContainer = styled.div`
//   position: relative;
// `;

const Inputdiv = styled.label`
  width: 100px;
  font-weight: bold;
  color: #ffffff; /* 다크 모드 글자 색상 */
  justify-content: flex-start;
  text-align: left; /* 왼쪽 정렬을 위해 text-align 속성 추가 */
  margin-right: 300px;
  margin-bottom: 10px;
`;

    // const Inputdiv =styled.div`
    //   font-size: 16px;
    //   font-weight: bold;
    //   /* display: flex; */
    //   margin-right: 250px;
    //   margin-bottom: 10px;
    // `
    const GenderLabel = styled.label`
    margin-right: 35px;
  `;
  
  const GenderRadioGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  `;
  
  const GenderRadio = styled.input`
    margin-right: 5px;
  `;
 








const WrapBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh;
  background-color: #232323;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;  
  font-weight: bold;
  margin-left: 10px;
  color: #ffffff; /* 다크 모드 글자 색상 */
`;

/////////////////////////////////////////////생년월일
const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Label = styled.label`
  width: 100px;
  font-weight: bold;
  color: #ffffff; /* 다크 모드 글자 색상 */
  justify-content: flex-start;
`;

const BirthInputGroup = styled.div`
  display: flex;
  align-items: center;
`;

const BirthSelect = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-right: 5px;
  background-color: #1f1f1f; /* 다크 모드 선택 필드 배경색 */
  color: #ffffff; /* 다크 모드 선택 필드 글자 색상 */
`;

const Separator = styled.span`
  margin-right: 5px;
`;
//////////////////////////////////////////////////////////////////



const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  width: 310px;
  height: 40px;
  margin-bottom: 10px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  padding-right: 100px;
  text-indent: 35px;  /* 플레이스홀더 텍스트를 오른쪽으로 10px 이동 */
  outline-color: green;  /* 초록색 테두리 */
  border-color: #ccc;  /* 기본 테두리 색상 */

  &:invalid {
    outline-color: red;  /* 빨간색 테두리 */
    border-color: #ccc;  /* 빨간색 테두리 */
  }
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  margin-top: 10px;
  color: #dc3545;
  font-size: 14px;
`;




export default SignupForm;


// import { TitleOutlined } from '@mui/icons-material';
// import React, { useState } from 'react';
// import styled from 'styled-components';

// const SignupForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch('/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ name, email, password }),
//     });

//     const data = await response.json();
//     console.log(data.message);
//   };

//   return (
//     <WrapBox>
//         <Title>TODAY</Title>
//     <Form onSubmit={handleSubmit}>
//       {/* 회원가입 입력 필드들 */}
//       <input
//         type="text"
//         placeholder="이름"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <Input
//         type="email"
//         placeholder="이메일"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <Input
//         type="password"
//         placeholder="비밀번호"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <Button type="submit">가입하기</Button>
//     </Form>
//     </WrapBox>
//   );
// };

// const Title = styled.h1`
//   font-weight: bold;
//   margin-left: 10px;
//   color: #ffffff; /* 다크 모드 글자 색상 */
// `;



// const WrapBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #232323;
// `;


// const Form = styled.form`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #232323;
// `;

// const Input = styled.input`
//   /* 인풋 스타일링 */
// `;

// const Button = styled.button`
//   /* 버튼 스타일링 */
// `;




// export default SignupForm;
