import React, { useState } from "react";
import styled from "styled-components";
import WrapBox from "../styled-components/WrapBox";
import AppBar from "../components/AppBar";
import TotalWrap from "../styled-components/TotalWrap";
import SideBar from "../components/SideBar";
import Writing from "../components/Writing";
import { BsPencil } from "react-icons/bs";
const Notice = () => {

  const [isWriteOpen, setIsWriteOpen] = useState(false);
  const handleWrite = () => {
    setIsWriteOpen((isWriteOpen) => true);
  };
  return (
    <div>
      <TotalWrap>
        <AppBar />

        <WrapBox>
          <SideBar />
          <>
            {!isWriteOpen && (<WritingButton
              onClick={() => {
                handleWrite();
              }}
            ><WriteIcon><BsPencil/></WriteIcon>글작성</WritingButton>)};
            <NoticeDiv>
              

              {isWriteOpen && (
                    <Writing isWriteOpen={isWriteOpen} setIsWriteOpen={setIsWriteOpen}/>
              )};
              {/* {!isWriteOpen && (
                    <Writing/>
              )}; */}
            </NoticeDiv>

          </>
        </WrapBox>
      </TotalWrap>
    </div>
  );
}
const WriteIcon =styled.div`
`;
const WritingButton = styled.button`
  display:flex;
  width: 100px;
  height: 50px;
  font-size: 20px;
  font-weight: bolder;
  border: none;
  background: white;
  border-radius: 5px;
  margin-top: 40px;
  margin-right: 90px;


  align-items:center;
  float:right;
  cursor:pointer;
  &:hover{
    background: #4e4b4b;
    color:white;
  }
`;
const NoticeDiv = styled.div`
  margin: 0 auto;
  width: 90%;
`;
export default Notice;