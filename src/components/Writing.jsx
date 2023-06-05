import React, {useState} from "react";
import styled from "styled-components";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { AiOutlineAlert } from "react-icons/ai";
import Notice from "../pages/Notice";
import "./Writing.css";
const Writing = ({ isWriteOpen, setIsWriteOpen }) => {
  const handleCancel = () => {
    setIsWriteOpen((isWriteOpen) => false);
  };

  const [writeContent,setWriteContent] = useState({
    title : '',
    content: ''
  });

  const [viewContent,setViewContent] = useState ([]);
// 등록 버튼 onClick 했을 경우에 빈배열에 writeContent라는 객체를 복사해서 concat해주는 기능 push는 기존의 배열이 바뀌어버림
console.log("view",viewContent);
  const getValue = (e) => {
    const {name, value} = e.target ;
    setWriteContent({
      ...writeContent,
      [name]: value,
    })
    // console.log("writeContent",writeContent);

  };
if (isWriteOpen){
  return (
    <div>
      <div>
        <Cautiondiv>
          <CautionIcon> <AiOutlineAlert /> </CautionIcon>
           <CautionTitle>서로 예의를 지키며 질문해주세요</CautionTitle>
          
        </Cautiondiv>
        <TitleInput type="text" placeholder=" 제목" name="title" onChange={getValue} />
        <CKEditor
          editor={ClassicEditor}
          data=""
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          placeholder="관련 문의사항을 작성해주세요."
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
            setWriteContent({
              ...writeContent,
              content: data,
            })
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
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
          onClick ={()=> {setViewContent(viewContent?.concat({...writeContent}));}} >등록</SubmitBtn>
      </ButtonContainerdiv>
    </div>
  );
  } else{
    return (
      <div>
        <ViewContatiner>
         {viewContent.map(data=>{
          return(
          <div>
            <ViewTitle>{data.title}</ViewTitle>
            <div>{data.content}</div>
          </div>
          )
         })}
        </ViewContatiner>
        
      </div>
    );

  }
};
export default Writing;

const CautionIcon = styled.div`
  float:left;
  margin-left: 10px;
`;
const CautionTitle =styled.div`
  margin: 0 auto;
`;
const Cautiondiv = styled.div`
  display: flex;
  font-size: 17px;
  width: 50%;
  height:40px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 10px;
  border-radius: 5px;
  /* background: #282a3a; */
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
  font-size:20px;
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
  cursor:pointer;
  &:hover {
    background: #313331;
    color: white;
  }
`;

const SubmitBtn = styled(CancelBtn)`
  background: #61b761;
  color: white;
  &:hover {
    background: #064d06;
    color: white;
  }
`;
const ViewContatiner = styled.div`
display: flex;
color: white;
width: 80%;

`;
const ViewTitle = styled.h2`
`;