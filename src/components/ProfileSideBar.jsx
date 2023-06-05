// import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';
// import axios from 'axios'; // Axios를 사용하여 API 호출

// const Sidebar = () => {
//   const [sidebarItems, setSidebarItems] = useState([]);

//   useEffect(() => {
//     fetchSidebarItems(); // 사이드바 아이템 가져오기
//   }, []);

//   const fetchSidebarItems = async () => {
//     try {
//       const response = await axios.get('/api/sidebar-items'); // 백엔드 API 호출

//       if (response.data.success) {
//         setSidebarItems(response.data.items);
//       } else {
//         console.error('사이드바 아이템 가져오기 실패:', response.data.message);
//       }
//     } catch (error) {
//       console.error('사이드바 아이템 가져오기 실패:', error);
//     }
//   };

//   return (
//     <SidebarWrapper>
//       <SidebarContainer>
//         {sidebarItems.map((item) => (
//           <NavLinkItem key={item.id} to={item.path} activeClassName="active">
//             {item.title}
//           </NavLinkItem>
//         ))}
//       </SidebarContainer>
//     </SidebarWrapper>
//   );
// };

// const SidebarWrapper = styled.div`
//   position: fixed;
//   left: 0;
//   bottom: 0;
//   width: 20%;
//   height: 100%;
// `;

// const SidebarContainer = styled.div`
//   position: absolute;
//   left: 0;
//   display: flex;
//   flex-direction: column;
//   background-color: #f1f1f1;
//   padding: 10px;
//   height: 100%;
// `;

// const NavLinkItem = styled(NavLink)`
//   margin-top: 10px;
//   padding: 5px;
//   text-decoration: none;
//   color: #333;

//   &.active {
//     color: #007bff;
//   }
// `;

// export default Sidebar;

//백엔드랑 연결할때 사용해보기!!!

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarContainer>
        <NavLinkItem exact to="/profile">
          내 게시물
        </NavLinkItem>
        <NavLinkItem to="/old-posts">오래된 게시물</NavLinkItem>
        <NavLinkItem to="/profile/edit">내 정보 수정</NavLinkItem>
        <NavLinkItem to="/password-change">패스워드 변경</NavLinkItem>
        <NavLinkItem to="/membership-withdrawal">회원탈퇴</NavLinkItem>
      </SidebarContainer>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 20%;
  height: 100%;
`;

const SidebarContainer = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #413f3f;

  padding: 10px;
  height: 100%;
`;

const NavLinkItem = styled(NavLink)`
  margin-top: 10px;
  padding: 5px;
  text-decoration: none;
  color: #ffffff;
  border-bottom: 1px solid white;
  &.active {
    color: #007bff;
  }
`;

export default Sidebar;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';

// const Sidebar = () => {
//   return (
//     <SidebarContainer>
//       <NavLinkItem exact to="/profile">
//         내 게시물
//       </NavLinkItem>
//       <NavLinkItem to="/old-posts">
//         오래된 게시물
//       </NavLinkItem>
//       <NavLinkItem to="/profile/edit">
//         내 정보 수정
//       </NavLinkItem>
//       <NavLinkItem to="/password-change">
//         패스워드 변경
//       </NavLinkItem>
//       <NavLinkItem to="/membership-withdrawal">
//         회원탈퇴
//       </NavLinkItem>
//     </SidebarContainer>
//   );
// };

// const SidebarContainer = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   background-color: #f1f1f1;
//   padding: 10px;
// `;

// const NavLinkItem = styled(NavLink)`
//   margin-bottom: 10px;
//   padding: 5px;
//   text-decoration: none;
//   color: #333;

//   &.active {
//     color: #007bff;
//   }
// `;

// export default Sidebar;
