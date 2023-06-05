import React from "react";
import { useState } from "react";
import styled from "styled-components";

export default function Categories() {
  const [page, setPage] = useState(1);
  const MaxPage = Math.ceil(videoList.length / 16); // MaxPage값을 받아오는 함수

  const truncate = (title, n) => {
    return title?.length > n ? title.substr(0, n) + ".." : title;
  };
  console.log(page);
  return (
    <div>
      <TotalWrap>
        <AppBar />
        <WrapBox>
          <div>
            <SlideBox>
              {videoList
                .slice(16 * (page - 1), 16 * (page - 1) + 16)
                .map((data) => {
                  return (
                    <div key={data.id}>
                      <ContentsBox>
                        <ImgBox>
                          <ContentsImg
                            onClick={() => {
                              window.open(`${data.url}`);
                            }}
                            src={data.thumbnails}
                            alt="rank"
                          />
                        </ImgBox>
                      </ContentsBox>
                      <ContentsTitleDiv>{data?.title} </ContentsTitleDiv>
                      {/* {truncate(data?.title, 20)} */}
                    </div>
                  );
                })}
            </SlideBox>
            <PageContainer>
              <PageNum>
                {Array.from({ length: MaxPage }, (value, i) => (
                  <NumButton
                    onClick={() => {
                      setPage(i + 1);
                    }}
                  >
                    {i + 1}
                  </NumButton>
                ))}
              </PageNum>
            </PageContainer>
          </div>
        </WrapBox>
      </TotalWrap>
    </div>
  );
}

const SlideBox = styled.div`
  display: Grid;
  grid-template-columns: repeat(4, minmax(300px, auto));
  row-gap: 100px;
  /* width: 1200px; */
  justify-content: center;
  max-width: 100%;
  height: 200vh;
  margin: 0px auto;
  padding: 0px auto;
  margin-top: 50px;
  z-index: 98;

`;
const ContentsBox = styled.div`
  display: flex;
  /* align-items: center; */
  margin: 0 auto;
  height: 220px;
  width: 280px;
  overflow:hidden;
  /* position:bottom; */
  @media screen and (max-width: 800px) {
    /* overflow:auto; */
    /* white-space: nowrap; */
    width: 100px;
    overflow-x: visible;
    /* scroll-snap-type: x mandatory; */
  }
  @media screen and (max-width: 480px) {
    /* overflow:auto; */
    /* white-space: nowrap; */
    width: 100px;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
`;
const ImgBox = styled.div`
  transition: all 0.3s ease;
`;
const ContentsTitleDiv = styled.div`
  display: flex;
  margin: 0 auto;
  font-weight: 600;
  position: bottom;
  color: #bababa;
  overflow: hidden;
  width: 240px;
  height: 60px;
  @media (max-width: 800px) {
    overflow: hidden;
  }
`;

const ContentsImg = styled.img`
  position: absolute;
  right: -1;
  height: 200px;
  width: 256px;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  margin: 0 auto;
  z-index: 98;
  &:hover {
    transform: scale(1.1);
    margin-right: 20px;
  }
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center; 
  width: 1000px;
  margin: 10px auto;
  /* margin-top: 20px;
  margin-bottom: 20px; */
  /* color: white;
  font-size: 20px; */
`;

const PageNum = styled.div`
  /* position: relative; */
  display: flex;
  /* width: 20px;
  height: 40px; */
`;

const NumButton = styled.div`
  margin: 0 1rem; 
  background: #676060;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #207520;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CategorieContainer = styled.div``;
