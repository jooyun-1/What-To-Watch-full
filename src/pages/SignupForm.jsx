/////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

const SignupForm = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [step, setStep] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [selectedTVGenre, setSelectedTVGenre] = useState([]);
  const [selectedVideoGenre, setSelectedVideoGenre] = useState([]);
  const [genres, setGenres] = useState([]);
  const [tvGenres, setTVGenres] = useState([]);
  const [videoGenres, setVideoGenres] = useState([]);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const navigate = useNavigate();
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get("http://localhost:3100/genres"); // 장르 데이터를 가져오는 엔드포인트
        const response2 = await axios.get("http://localhost:3100/tvgenres");
        const response3 = await axios.get("http://localhost:3100/video-genres");
        setGenres(response.data.genresList);
        setTVGenres(response2.data.genresList);
        setVideoGenres(response3.data.videoGenreList);
      } catch (error) {
        console.error("장르 데이터 요청 실패:", error);
      }
    };

    fetchGenres();
  }, []);

  const handleNextStep = () => {
    if (!id || !password || !name) {
      alert("모든 필드를 입력해주세요.");
      return;
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const goToMain = () => {
    alert("회원가입 성공");
    navigate("/");
  };
  const handleSubmit = async () => {
    if (!password || !id || !name) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    try {
      setLoading(true); // 로딩 상태 활성화
      const checkedGenres = document.getElementsByName("checkedGenre");
      const checkedTVGenres = document.getElementsByName("checkedTVGenre");
      const checkedVideoGenres =
        document.getElementsByName("checkedVideoGenre");

      for (let i = 0; i < checkedGenres.length; i++) {
        if (checkedGenres[i].checked === true) {
          selectedGenre.push(checkedGenres[i].value);
        }
      }

      for (let i = 0; i < checkedTVGenres.length; i++) {
        if (checkedTVGenres[i].checked === true) {
          selectedTVGenre.push(checkedTVGenres[i].value);
        }
      }

      for (let i = 0; i < checkedVideoGenres.length; i++) {
        if (checkedVideoGenres[i].checked === true) {
          selectedVideoGenre.push(checkedVideoGenres[i].value);
        }
      }

      const response = await axios.post("http://localhost:3100/users/join", {
        // 회원가입 요청을 보내는 엔드포인트
        username: name,
        password: password,
        email: id,
        genres: selectedGenre,
        tvgenres: selectedTVGenre,
        videogenres: selectedVideoGenre,
      });

      setLoading(false); // 로딩 상태 비활성화

      if (response.status === 200) {
        alert("회원가입 성공!");
        handleNextStep();
        navigate("/");
      } else {
        alert("회원가입 실패!");
      }
    } catch (error) {
      setLoading(false);

      console.error("회원가입 실패:", error);
      if (error.response) {
        setErrorMessage(error.response.data.message); // 서버로부터 받은 오류 메시지 설정
      } else {
        setErrorMessage("회원가입 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <>
      {step === 1 && (
        <WrapBox>
          <Title>TODAY</Title>
          <InputContainer>
            <Inputdiv>아이디</Inputdiv>
            <IconWrapper>
              <AiOutlineUser style={{ color: "gray" }} />
            </IconWrapper>
            <Input
              type="text"
              placeholder="이메일"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </InputContainer>
          {/* 비밀번호 유효성 검사 추가 */}
          <InputContainer>
            <Inputdiv>비밀번호</Inputdiv>
            <IconWrapper>
              <RiLockPasswordLine style={{ color: "gray" }} />
            </IconWrapper>
            <Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
          </InputContainer>
          {/* <InputContainer>
            <Inputdiv>이메일</Inputdiv>
            <IconWrapper>
              <HiOutlineMail style={{ color: "gray" }} />
            </IconWrapper>
            <Input
              type="email"
              placeholder="[선택] 비밀번호 분실 시 확인용 이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputContainer> */}
          <InputContainer>
            <Inputdiv>이름</Inputdiv>
            <IconWrapper>
              <AiOutlineUser style={{ color: "gray" }} />
            </IconWrapper>
            <Input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </InputContainer>
          <Button onClick={handleNextStep}>다음</Button>
        </WrapBox>
      )}
      {step === 2 && (
        <WrapBox2>
          <TitleBox>
            <Title>선호 장르 선택</Title>
          </TitleBox>
          <GenreContainer>
            <GenreTitle>영화 장르</GenreTitle>
            {genres.map((props) => (
              <GenreOption key={props.id}>
                <GenreCheckbox
                  type="checkbox"
                  id={props.id}
                  name="checkedGenre"
                  value={props.genre_name}
                  // checked={selectedGenre === props.id}
                />
                {props.genre_name}
                {/* <GenreLabel htmlFor={genre}>{genre}</GenreLabel> */}
              </GenreOption>
            ))}
          </GenreContainer>
          <GenreContainer>
            <GenreTitle>TvShow 장르</GenreTitle>
            {tvGenres.map((props) => (
              <GenreOption key={props.id}>
                <GenreCheckbox
                  type="checkbox"
                  id={props.id}
                  name="checkedTVGenre"
                  value={props.genre_name}
                  // checked={selectedGenre === props.id}
                />
                {props.genre_name}
                {/* <GenreLabel htmlFor={genre}>{genre}</GenreLabel> */}
              </GenreOption>
            ))}
          </GenreContainer>
          <GenreContainer>
            <GenreTitle>Youtube 장르</GenreTitle>
            {videoGenres.map((props) => (
              <GenreOption key={props.id}>
                <GenreCheckbox
                  type="checkbox"
                  id={props.id}
                  name="checkedVideoGenre"
                  value={props.genre_name}
                  // checked={selectedGenre === props.id}
                />
                {props.genre_name}
                {/* <GenreLabel htmlFor={genre}>{genre}</GenreLabel> */}
              </GenreOption>
            ))}
          </GenreContainer>
          <ButtonContainer>
            <Button onClick={handlePrevStep}>이전</Button>
            {/* 로딩 상태에 따라 버튼 비활성화 */}
            <Button type="submit" onClick={handleSubmit} disabled={loading}>
              {loading ? "가입 중..." : "가입하기"}
            </Button>
          </ButtonContainer>
        </WrapBox2>
      )}
      {/* {step === 3 && <>{goToMain()}</>} */}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}{" "}
      {/* 오류 메시지 표시 */}
    </>
  );
};

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const WrapBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #232323;
`;

const TitleBox = styled.div`
  top: 0px;
  width: 100%;
  height: 10%;
  justify-content: center;
`;
const Title = styled.h1`
  // display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  // margin-left: 10px;
  color: #ffffff;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Inputdiv = styled.label`
  width: 100px;
  font-weight: bold;
  color: #ffffff;
  justify-content: flex-start;
  text-align: left;
  margin-right: 300px;
  margin-bottom: 10px;
`;

const IconWrapper = styled.div`
  position: relative;
  top: 48.5px;
  right: 10px;
  left: 17px;
  transform: translateY(-50%);
`;

const Input = styled.input`
  width: 310px;
  height: 40px;
  margin-bottom: 20px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  padding-right: 100px;
  text-indent: 35px;
  outline-color: green;
  border-color: #ccc;

  &:invalid {
    outline-color: red;
    border-color: #ccc;
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

const WrapBox2 = styled.div`
  background-color: #232323;
`;
const GenreContainer = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  float: left;
  width: 33%;
`;

const GenreTitle = styled.h1`
  color: white;
  text-align: center;
`;
const GenreOption = styled.div`
  margin-bottom: 10px;
`;

const GenreCheckbox = styled.input`
  margin-right: 10px;
`;

const GenreLabel = styled.label`
  font-size: 14px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export default SignupForm;

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

// import {RiLockPasswordLine} from 'react-icons/ri';
// import {BsPencil} from 'react-icons/bs';

// const SignupForm = () => {
//   const [id, setId] = useState('');
// //   const [passwordcheck, setPasswordCheck] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const [birth, setBirth] = useState('');
// //   const [birthYear, setBirthYear] = useState('1990');
// //   const [birthMonth, setBirthMonth] = useState('01');
// //   const [birthDay, setBirthDay] = useState('01');
//   const [gender, setGender] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3100/users/signup', {
//         name,
//         email,
//         password,
//         birth,
//         gender,
//       });

//       if (response.status === 200) {
//       sessionStorage.setItem('loginId', id);
//       sessionStorage.setItem('loginPassword', password);
//       sessionStorage.setItem('name', name);
//       sessionStorage.setItem('email', email);
//       console.log('회원가입 성공!');
//         // 회원가입 성공 후 처리할 로직 작성
//       }
//     } catch (error) {
//       console.error('회원가입 요청 실패:', error);
//       setErrorMessage('회원가입에 실패했습니다. 다시 시도해주세요.');
//     }
//   };

// //   const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
// //   const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));

//   return (
//     <WrapBox>
//     <Form onSubmit={handleSubmit}>
//     <Title>TODAY</Title>
//       {/* 회원가입 입력 필드들 */}
//       <Inputdiv>
//         아이디
//       </Inputdiv>
//       <Input
//         type="text"
//         placeholder="아이디"
//         value={id}
//         onChange={(e) => setId(e.target.value)}
//         required
//       />
//       {/* <InputContainer> */}
//       <Inputdiv>
//         비밀번호
//       </Inputdiv>
//       <Input
//         type="password"
//         placeholder="비밀번호"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//         icon={<BsPencil />}
//       />
//         {/* <IconWrapper>
//           <BsPencil />
//         </IconWrapper>
//         </InputContainer> */}

//       {/* <Input
//         type="passwordcheck"
//         placeholder="비밀번호 재확인"
//         value={passwordcheck}
//         onChange={(e) => setPasswordCheck(e.target.value)}
//         required
//       /> */}
//       <Inputdiv>
//         이메일
//       </Inputdiv>
//       <Input
//         type="email"
//         placeholder="[선택] 비밀번호 분실 시 확인용 이메일"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <Inputdiv>
//         이름
//       </Inputdiv>
//       <Input
//         type="text"
//         placeholder="이름"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <Inputdiv>
//         생년월일
//       </Inputdiv>
//       <Input
//         type="text"
//         placeholder="생년월일 8자리"
//         value={birth}
//         onChange={(e) => setBirth(e.target.value)}
//         required
//       />

//       <Inputdiv>
//         성별
//       </Inputdiv>
//       {/* <FormGroup> */}
//       <GenderRadioGroup>
//         <GenderRadio
//           type="radio"
//           id="male"
//           name="gender"
//           value="male"
//           checked={gender === 'male'}
//           onChange={(e) => setGender(e.target.value)}
//         />
//         <GenderLabel htmlFor="male">남자</GenderLabel>
//         <GenderRadio
//           type="radio"
//           id="female"
//           name="gender"
//           value="female"
//           checked={gender === 'female'}
//           onChange={(e) => setGender(e.target.value)}
//         />
//         <GenderLabel htmlFor="female">여자</GenderLabel>
//         <GenderRadio
//           type="radio"
//           id="other"
//           name="gender"
//           value="other"
//           checked={gender === 'other'}
//           onChange={(e) => setGender(e.target.value)}
//         />
//         <GenderLabel htmlFor="other">선택안함</GenderLabel>
//       </GenderRadioGroup>
//       {/* </FormGroup> */}

//       {/* <Label>생년월일</Label>
//       <FormGroup>
//           <BirthInputGroup>
//             <BirthSelect
//               value={birthYear}
//               onChange={(e) => setBirthYear(e.target.value)}
//             >
//               {Array.from({ length: new Date().getFullYear() - 1899 }, (_, i) => (1900 + i).toString()).map(year => (
//                 <option key={year} value={year}>{year}</option>
//               ))}
//             </BirthSelect>
//             <Separator>년</Separator>
//             <BirthSelect
//               value={birthMonth}
//               onChange={(e) => setBirthMonth(e.target.value)}
//             >
//               {months.map(month => (
//                 <option key={month} value={month}>{month}</option>
//               ))}
//             </BirthSelect>
//             <Separator>월</Separator>
//             <BirthSelect
//               value={birthDay}
//               onChange={(e) => setBirthDay(e.target.value)}
//             >
//               {days.map(day => (
//                 <option key={day} value={day}>{day}</option>
//               ))}
//             </BirthSelect>
//             <Separator>일</Separator>
//           </BirthInputGroup>
//         </FormGroup> */}

//       <Button type="submit">가입하기</Button>
//       {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
//     </Form>
//     </WrapBox>
//   );
// };

// // const IconWrapper = styled.div`
// //   position: relative;
// //   top: 50%;
// //   right: 10px;
// //   transform: translateY(-50%);
// // `;

// // const InputContainer = styled.div`
// //   position: relative;
// // `;

// const Inputdiv = styled.label`
//   width: 100px;
//   font-weight: bold;
//   color: #ffffff; /* 다크 모드 글자 색상 */
//   justify-content: flex-start;
//   text-align: left; /* 왼쪽 정렬을 위해 text-align 속성 추가 */
//   margin-right: 300px;
//   margin-bottom: 10px;
// `;

//     // const Inputdiv =styled.div`
//     //   font-size: 16px;
//     //   font-weight: bold;
//     //   /* display: flex; */
//     //   margin-right: 250px;
//     //   margin-bottom: 10px;
//     // `
//     const GenderLabel = styled.label`
//     margin-right: 35px;
//   `;

//   const GenderRadioGroup = styled.div`
//     display: flex;
//     align-items: center;
//     margin-bottom: 20px;
//   `;

//   const GenderRadio = styled.input`
//     margin-right: 5px;
//   `;

// const WrapBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height:100vh;
//   background-color: #232323;
// `;

// const Title = styled.h1`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-weight: bold;
//   margin-left: 10px;
//   color: #ffffff; /* 다크 모드 글자 색상 */
// `;

// /////////////////////////////////////////////생년월일
// const FormGroup = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 15px;
// `;

// const Label = styled.label`
//   width: 100px;
//   font-weight: bold;
//   color: #ffffff; /* 다크 모드 글자 색상 */
//   justify-content: flex-start;
// `;

// const BirthInputGroup = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const BirthSelect = styled.select`
//   padding: 5px;
//   border: 1px solid #ccc;
//   border-radius: 3px;
//   margin-right: 5px;
//   background-color: #1f1f1f; /* 다크 모드 선택 필드 배경색 */
//   color: #ffffff; /* 다크 모드 선택 필드 글자 색상 */
// `;

// const Separator = styled.span`
//   margin-right: 5px;
// `;
// //////////////////////////////////////////////////////////////////

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Input = styled.input`
//   width: 310px;
//   height: 40px;
//   margin-bottom: 10px;
//   padding: 5px 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 16px;
//   padding-right: 100px;
//   text-indent: 35px;  /* 플레이스홀더 텍스트를 오른쪽으로 10px 이동 */
//   outline-color: green;  /* 초록색 테두리 */
//   border-color: #ccc;  /* 기본 테두리 색상 */

//   &:invalid {
//     outline-color: red;  /* 빨간색 테두리 */
//     border-color: #ccc;  /* 빨간색 테두리 */
//   }
// `;

// const Button = styled.button`
//   width: 150px;
//   height: 40px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const ErrorMessage = styled.p`
//   margin-top: 10px;
//   color: #dc3545;
//   font-size: 14px;
// `;

// export default SignupForm;

/////////////////////////////////////////////////////////////////////////////////////////////////

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
