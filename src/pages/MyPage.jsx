import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Sidebar from "../components/ProfileSideBar.jsx";
import styled from "styled-components";

// 전역 스타일 정의
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #312f2f; /* 전체 배경색 설정 */
  }
`;

// 테마 설정
const theme = {
  primaryColor: "#434141", // 검정색
};

function MyPage() {
  return (
    <ThemeProvider theme={theme}>
      {/* <React.Fragment> */}
      {/* <GlobalStyle /> */}
      {/* <Container> */}
      <MypageContainer>
        <Sidebar />
        <h1>마이페이지</h1>
        <p>환영합니다! 이곳에서 회원 정보를 확인하고 수정할 수 있습니다.</p>
        {/* 추가적인 마이페이지 내용을 원하는 대로 추가하세요 */}
      </MypageContainer>
      {/* </Container> */}
      {/* </React.Fragment> */}
    </ThemeProvider>
  );
}

const MypageContainer = styled.div`
  margin-left: 20%; /* 사이드바 너비와 동일한 값 설정 */
  padding: 20px;
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
`;

export default MyPage;

// import React from 'react';
// // import Sidebar from 'C:/Users/namkyun/Desktop/workspace/today/src/components/Sidebar.jsx';
// import Sidebar from '../components/Sidebar.jsx';
// import styled from 'styled-components';

// function MyPage() {
//   return (
//     <PageWrapper>
//       <Container>
//         <MypageContainer>
//           <Sidebar />
//           <h1>마이페이지</h1>
//           <p>환영합니다! 이곳에서 회원 정보를 확인하고 수정할 수 있습니다.</p>
//           {/* 추가적인 마이페이지 내용을 원하는 대로 추가하세요 */}
//         </MypageContainer>
//       </Container>
//     </PageWrapper>
//   );
// };

// const PageWrapper = styled.div`
//   background-color: #000; /* 검정색 배경색 */
// `;

// const MypageContainer = styled.div`
//   margin-left: 20%; /* 사이드바 너비와 동일한 값 설정 */
//   padding: 20px;
// `;

// const Container = styled.div`
//   background-color: #312f2f;
// `;

// export default MyPage;
