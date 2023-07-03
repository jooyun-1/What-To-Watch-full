import React, { useState } from "react";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { AiOutlineAlert } from "react-icons/ai";
import Notice from "../pages/Notice";
import "./Writing.css";
import format from "date-fns/format";
import axios from "axios";

const Writing = ({ isWriteOpen, setIsWriteOpen }) => {
  const nowDate = Date.now();
  const [submitDate, setSubmitDate] = useState("");
  const [writeContent, setWriteContent] = useState({
    title: "",
    content: "",
  });

  const [viewContent, setViewContent] = useState([]);
  // 등록 버튼 onClick 했을 경우에 빈배열에 writeContent라는 객체를 복사해서 concat해주는 기능 push는 기존의 배열이 바뀌어버림
  console.log("게시판 글", viewContent);
  console.log("날짜", submitDate);

  //submit 할떄 post로 서버에 등록 post는 비동기적으로 처리할 필요 없음
  const submitReview = async () => {
    console.log(writeContent, "aa");
    const APIURL = "http://localhost:3100";
    // const params = {
    //   title: viewContent.title,
    //   post: viewContent.content,
    //   // date: submitDate.date,
    // };
    const title = writeContent.title;
    const content = writeContent.content;

    //   email,
    //   password,
    //   withCredentials: true,
    // });
    await axios
      .post(`${APIURL}/board/posts`, {
        // title,
        // content,
        title: title,
        post: content,
      })
      .catch(function (error) {
        console.log("실패");
        console.log(error);
      });
    // .then(() => {
    //   alert("등록 완료");
    // });
  };

  const handleCancel = (e) => {
    setIsWriteOpen((isWriteOpen) => false);
  };
  const getValue = (e) => {
    const { name, value } = e.target;
    setWriteContent({
      ...writeContent,
      [name]: value,
    });
    // console.log("writeContent",writeContent);
  };
  if (isWriteOpen) {
    return (
      <div>
        <div>
          <Cautiondiv>
            <CautionIcon>
              {" "}
              <AiOutlineAlert />{" "}
            </CautionIcon>
            <CautionTitle>서로 예의를 지키며 질문해주세요</CautionTitle>
          </Cautiondiv>
          <TitleInput
            type="text"
            placeholder=" 제목"
            name="title"
            onChange={getValue}
          />
          <CKEditor
            editor={ClassicEditor}
            data=""
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
              // console.log("Editor is ready to use!", editor);
            }}
            placeholder="관련 문의사항을 작성해주세요."
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log("ㅇ", { event, editor, data });
              setWriteContent({
                ...writeContent,
                content: data.replace(/(<([^>]+)>)/gi, ""),
              });
            }}
            onBlur={(event, editor) => {
              // console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              // console.log("Focus.", editor);
            }}
          />
        </div>
        <ButtonContainerdiv>
          <CancelBtn
            onClick={() => {
              handleCancel();
            }}
          >
            취소
          </CancelBtn>
          <SubmitBtn
            //제출할때 유효성 검사 1)제목이 없으면 alert 2)내용이 없으면 alert 3)나머지는 날짜 및 데이터
            //변화하고 submitReview로 서버에 데이터 post로 전송 그리고 창 닫아주기
            type="submit"
            onClick={() => {
              if (writeContent.title === "") {
                alert("제목을 입력해주시기 바랍니다.");
              } else if (writeContent.content === "") {
                alert("내용을 입력해주시기 바랍니다.");
              } else {
                setSubmitDate(format(nowDate, "yyyy/MM/dd"));
                setViewContent(viewContent?.concat({ ...writeContent }));
                submitReview();
                // handleCancel();
              }
            }}
          >
            등록
          </SubmitBtn>
        </ButtonContainerdiv>

        <div>
          <ViewContatiner>
            {viewContent.map((data) => {
              return (
                <div>
                  <ViewTitle>{data.title}</ViewTitle>
                  <div>{data.content}</div>
                </div>
              );
            })}
          </ViewContatiner>
        </div>
      </div>
    );
  }
};
export default Writing;

const CautionIcon = styled.div`
  float: left;
  margin-left: 10px;
`;
const CautionTitle = styled.div`
  margin: 0 auto;
`;
const Cautiondiv = styled.div`
  display: flex;
  font-size: 17px;
  width: 50%;
  height: 40px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 5px;
  background: #3e4b43;
  color: #bcbbbb;
  vertical-align: middle;
  align-items: center;
`;
const TitleInput = styled.input`
  width: 500px;
  height: 40px;
  margin: 10px;
  background: #1d1b1b;
  color: white;
  font-size: 20px;
  opacity: 0.5;
`;
const ButtonContainerdiv = styled.div`
  display: flex;
  float: right;
`;

const CancelBtn = styled.button`
  width: 100px;
  height: 50px;
  font-size: 20px;
  font-weight: bolder;
  border: none;
  background: white;
  border-radius: 5px;
  margin-top: 40px;
  margin-right: 10px;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    background: #313331;
    color: white;
  }
`;

const SubmitBtn = styled(CancelBtn)`
  background: green;
  color: white;
  &:hover {
    background: #064d06;
    color: white;
  }
`;
const ViewContatiner = styled.div`
  display: flex;

  color: white;
  background: green;
  width: 80%;
`;
const ViewTitle = styled.h2`
  font-size: 20px;
  color: white;
`;
