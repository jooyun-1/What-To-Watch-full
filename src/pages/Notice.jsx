import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WrapBox from "../styled-components/WrapBox";
import AppBar from "../components/AppBar";
import TotalWrap from "../styled-components/TotalWrap";
import SideBar from "../components/SideBar";
import Writing from "../components/Writing";
import { BsPencil } from "react-icons/bs";
import axios from "axios";

const Notice = () => {
  const [noticeData, setNoticeData] = useState([]);
  const [isWriteOpen, setIsWriteOpen] = useState(false);

  const getNoticeData = async () => {
    const APIURL = "http://localhost:3100";
    axios.get(`${APIURL}/board/posts`).then((response) => {
      setNoticeData(response.data.boardList);
    });
  };
  useEffect(() => {
    getNoticeData();
  }, []);
  const truncate = (title, n) => {
    return title?.length > n ? title.substr(0, n) + ".." : title;
  };
  const handleWrite = (e) => {
    setIsWriteOpen((isWriteOpen) => true);
  };
  if (!isWriteOpen) {
    return (
      <div>
        <TotalWrap>
          <AppBar />

          <WrapBox>
            <SideBar />
            <>
              <QuestionTitle>Q&A</QuestionTitle>
              <WritingButton
                onClick={() => {
                  handleWrite();
                }}
              >
                <WriteIcon>
                  <BsPencil />
                </WriteIcon>
                글작성
              </WritingButton>

              <NoticeContainer>
                <NoticeHead>
                  <NoticeNum>No</NoticeNum>
                  <NoticeTitle>제목</NoticeTitle>
                  <NoticeWriter>글쓴이</NoticeWriter>
                  <NoticeDate>날짜</NoticeDate>
                </NoticeHead>
                <NoticeBody>
                  {noticeData.map((data) => {
                    return (
                      <div>
                        <>{truncate(data?.title, 10)};</>
                        {/* <>{data.date};</> */}
                      </div>
                    );
                  })}
                </NoticeBody>
              </NoticeContainer>
            </>
          </WrapBox>
        </TotalWrap>
      </div>
    );
  } else {
    return (
      <TotalWrap>
        <AppBar />

        <WrapBox>
          <SideBar />
          <NoticeDiv>
            <Writing
              isWriteOpen={isWriteOpen}
              setIsWriteOpen={setIsWriteOpen}
            />
            {/* {!isWriteOpen && (
          <Writing/>
    )}; */}
          </NoticeDiv>
        </WrapBox>
      </TotalWrap>
    );
  }
};
const QuestionTitle = styled.h1`
  color: white;
  width: 5%;
  margin-top: 100px;
  margin-left: 45%;
  border-bottom: 2px solid #bcbbbb;
`;
const WriteIcon = styled.div``;
const WritingButton = styled.button`
  display: flex;
  width: 100px;
  height: 50px;
  font-size: 18px;
  font-weight: bolder;
  border: none;
  background: white;
  border-radius: 5px;
  place-content: center;

  margin-top: 20px;
  margin-right: 5%;
  align-items: center;
  float: right;
  cursor: pointer;
  &:hover {
    background: #4e4b4b;
    color: white;
  }
`;
const NoticeDiv = styled.div`
  margin: 0 auto;
  width: 90%;
`;

const NoticeContainer = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  background: #3e4b43;
  min-height: 50px;
  width: 90%;
  border-radius: 5px;
`;

const NoticeHead = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0px 10px 0px 40px;
  color: white;
`;
const NoticeBody = styled.body`
  display: flex;
  width: 100%;
`;
const NoticeNum = styled.h3`
  font-size: 120%;
`;
const NoticeTitle = styled.h3`
  font-size: 120%;
`;
const NoticeWriter = styled.h3`
  font-size: 120%;
`;
const NoticeDate = styled.h3`
  font-size: 120%;
`;

export default Notice;
