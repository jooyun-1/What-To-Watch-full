import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


// const EditProfile = ({ userData }) => {
//   const [nickname, setNickname] = useState(userData.nickname);
//   const [birthYear, setBirthYear] = useState(userData.birthYear);
//   const [birthMonth, setBirthMonth] = useState(userData.birthMonth);
//   const [birthDay, setBirthDay] = useState(userData.birthDay);


const EditProfile = () => {
  const [nickname, setNickname] = useState('');
  const [birthYear, setBirthYear] = useState('1990');
  const [birthMonth, setBirthMonth] = useState('01');
  const [birthDay, setBirthDay] = useState('01');

  const handleSubmit = (e) => {
    e.preventDefault();

    const profileData = {
      nickname,
      birthYear,
      birthMonth,
      birthDay
    };

    axios.post('/api/profile', profileData)
      .then(response => {
        console.log(response.data); // 수정이 성공했을 때의 응답 처리
      })
      .catch(error => {
        console.error(error); // 요청 실패 시의 에러 처리
      });
  };

  return (
    <Container>
      <Title>내 정보 수정</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email</Label>
          <InfoText>user@example.com</InfoText>
        </FormGroup>
        <FormGroup>
          <Label>성별</Label>
          <InfoText>남자</InfoText>
        </FormGroup>
        <FormGroup>
          <Label>닉네임</Label>
          <Input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>생년월일</Label>
          <BirthInputGroup>
            <BirthInput
              type="number"
              value={birthYear}
              onChange={(e) => setBirthYear(e.target.value)}
            />
            <BirthInput
              type="number"
              value={birthMonth}
              onChange={(e) => setBirthMonth(e.target.value)}
            />
            <BirthInput
              type="number"
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
            />
          </BirthInputGroup>
        </FormGroup>
        <Button type="submit">수정</Button>
        <CancelButton type="button">취소</CancelButton>
      </Form>
    </Container>
  );
};

const InfoText = styled.span`
  font-weight: bold;
  margin-left: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Label = styled.label`
  width: 100px;
  font-weight: bold;
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const GenderSelect = styled.select`
  flex: 1;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const BirthInputGroup = styled.div`
  display: flex;
`;

const BirthInput = styled(Input)`
  width: 60px;
  margin-right: 5px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-right: 10px;
`;

const CancelButton = styled(Button)`
  background-color: #bdbdbd;
`;

export default EditProfile;







// import React, { useState } from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// const EditProfile = () => {
//   const [email, setEmail] = useState('');
//   const [nickname, setNickname] = useState('');
//   const [gender, setGender] = useState('');
//   const [birthYear, setBirthYear] = useState('');
//   const [birthDate, setBirthDate] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const profileData = {
//       email,
//       nickname,
//       gender,
//       birthYear,
//       birthDate
//     };

//     axios.post('/api/profile', profileData)
//       .then(response => {
//         console.log(response.data); // 수정이 성공했을 때의 응답 처리
//       })
//       .catch(error => {
//         console.error(error); // 요청 실패 시의 에러 처리
//       });
//   };

//   return (
//     <Container>
//       <Title>내 정보 수정</Title>
//       <Form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label>이메일:</Label>
//           <Input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label>닉네임:</Label>
//           <Input
//             type="text"
//             value={nickname}
//             onChange={(e) => setNickname(e.target.value)}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label>성별:</Label>
//           <Input
//             type="text"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label>생년월일:</Label>
//           <Input
//             type="number"
//             value={birthYear}
//             onChange={(e) => setBirthYear(e.target.value)}
//           />
//           <Input
//             type="number"
//             value={birthDate}
//             onChange={(e) => setBirthDate(e.target.value)}
//           />
//         </FormGroup>
//         <Button type="submit">저장</Button>
//       </Form>
//     </Container>
//   );
// };

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
// `;

// const Title = styled.h2`
//   margin-bottom: 20px;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 300px;
// `;

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 10px;
// `;

// const Label = styled.label`
//   margin-bottom: 5px;
// `;

// const Input = styled.input`
//   padding: 5px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// `;

// export default EditProfile;







// import React, { useState } from 'react';
// import axios from 'axios';

// const EditProfile = () => {
//   const [email, setEmail] = useState('');
//   const [nickname, setNickname] = useState('');
//   const [gender, setGender] = useState('');
//   const [birthYear, setBirthYear] = useState('');
//   const [birthDate, setBirthDate] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const profileData = {
//       email,
//       nickname,
//       gender,
//       birthYear,
//       birthDate
//     };

//     axios.post('/api/profile', profileData)
//       .then(response => {
//         console.log(response.data); // 성공적으로 수정되었을 때의 응답 처리
//       })
//       .catch(error => {
//         console.error(error); // 요청 실패 시의 에러 처리
//       });
//   };

//   // 프로필 편집 UI 및 폼
//   return (
//     <div>
//     <h2>내 정보 수정</h2>
//     <form onSubmit={handleSubmit}>
//       <label>
//         이메일:
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         닉네임:
//         <input
//           type="text"
//           value={nickname}
//           onChange={(e) => setNickname(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         성별:
//         <input
//           type="text"
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//         />
//       </label>
//       <br />
//       <label>
//         생년월일:
//         <input
//           type="number"
//           value={birthYear}
//           onChange={(e) => setBirthYear(e.target.value)}
//         />
//         <input
//           type="number"
//           value={birthDate}
//           onChange={(e) => setBirthDate(e.target.value)}
//         />
//       </label>
//       <br />
//       <button type="submit">저장</button>
//     </form>
//   </div>
//   );
// };

// export default EditProfile;








// import React, { useState } from 'react';

// const EditProfile = () => {
//   const [email, setEmail] = useState('');
//   const [nickname, setNickname] = useState('');
//   const [gender, setGender] = useState('');
//   const [birthYear, setBirthYear] = useState('');
//   const [birthDate, setBirthDate] = useState('');
//   const [age, setAge] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: 서버로 수정된 사용자 정보를 전송하는 API 호출
//   };

//   return (
    // <div>
    //   <h2>내 정보 수정</h2>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       이메일:
    //       <input
    //         type="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </label>
    //     <br />
    //     <label>
    //       닉네임:
    //       <input
    //         type="text"
    //         value={nickname}
    //         onChange={(e) => setNickname(e.target.value)}
    //       />
    //     </label>
    //     <br />
    //     <label>
    //       성별:
    //       <input
    //         type="text"
    //         value={gender}
    //         onChange={(e) => setGender(e.target.value)}
    //       />
    //     </label>
    //     <br />
    //     <label>
    //       생년월일:
    //       <input
    //         type="number"
    //         value={birthYear}
    //         onChange={(e) => setBirthYear(e.target.value)}
    //       />
    //       <input
    //         type="number"
    //         value={birthDate}
    //         onChange={(e) => setBirthDate(e.target.value)}
    //       />
    //     </label>
    //     <br />
    //     <button type="submit">저장</button>
    //   </form>
    // </div>
//   );
// };

// export default EditProfile;