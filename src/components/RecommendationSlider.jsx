import React from "react";
import styled from "styled-components";
import { FiRefreshCw } from "react-icons/fi";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const rankList = {
  Youtube: [
    {
      id: 1,
      rank: 1,
      image:
        "https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2023/01/PS23012500038.jpg",
    },
    {
      id: 2,
      rank: 2,
      image:
        "https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/03/03/693cef21-b67a-4ce4-81c2-96d5ab8bb43b.jpg",
    },
    {
      id: 3,
      rank: 3,
      image:
        "https://i.namu.wiki/i/_nKvJd8s2C7MRnE1s5V_-qY-SpLgLw92THx6aakpiEx8EBTuaV5b_4aRZddnKMMcDWuotqJnKlj0nmohEiYRwQ.webp",
    },
    {
      id: 4,
      rank: 4,
      image:
        "https://www.sciencetimes.co.kr/wp-content/uploads/2023/03/image_readtop_2023_2900_16726249815299109.jpg",
    },
    {
      id: 5,
      rank: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/ko/thumb/c/ce/%EC%BD%94%EB%93%9C8_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/220px-%EC%BD%94%EB%93%9C8_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
    },
    {
      id: 6,
      rank: 6,
      image:
        "https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2023/01/PS23012500038.jpg",
    },
    {
      id: 7,
      rank: 7,
      image:
        "https://img.vogue.co.kr/vogue/2022/08/style_62ff22470d478-649x930.png",
    },
  ],
};

export default function RecommendationSlider() {
  const [movieList, setMovieList] = useState([]);

  const getMovieList = async () => {
    const response = await axios.get("http://localhost:3100/recommend-movies");
    console.log(response.data);
    setMovieList(response.data.movieList);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div>
      <SlideBox>
        {movieList.map((props, rank) => {
          return (
            <div key={props.id}>
              <ContentsBox>
                <RankImg>{rank + 1}</RankImg>
                <BannerImg src={props.poster_img} alt="rank" />
              </ContentsBox>
            </div>
          );
        })}
        <RefreshButton>
          <RefreshDiv>
            <FiRefreshCw />
          </RefreshDiv>
        </RefreshButton>
      </SlideBox>
    </div>
  );
}

const SlideBox = styled.div`
  display: flex;
  width: 1100px;
  height: 240px;
  margin: 0px auto;
  margin-bottom: 120px;
  overflow: hidden;
  /* background:white; */
  /* overflow:auto;
    white-space: nowrap; */
  /* overflow-x: scroll;
    scroll-snap-type: x mandatory; */
`;
const ContentsBox = styled.div`
  display: flex;
  height: 240px;
  width: 200px;
  align-items: flex-end;
  overflow: hidden;

  /* position:bottom; */
`;
const RankImg = styled.div`
  /* background-color: #e0dede; */
  position: absolute;

  bottom: 0;
  height: 240px;
  color: #121212;
  -webkit-text-stroke: 2px #e0dede;
  font-size: 150px;
  font-weight: 700;
  overflow: hidden;
  z-index: 1;
`;
const BannerImg = styled.img`
  position: absolute;
  right: -1;
  height: 240px;
  width: 160px;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  /* z-index: 98; */
  &:hover {
    transform: scale(1.15);
  }
`;

const RefreshDiv = styled.span`
  font-size: 23px;
  color: white;
  cursor: pointer;
`;
const RefreshButton = styled.button`
  /* margin: 0px auto;  */
  background-color: transparent;
  color: white;
  width: 40px;
  height: 40px;
  align-self: center;
  /* border: none; */
  font-size: 20px;
  border-radius: 10px;
  opacity: 0.5;
`;
