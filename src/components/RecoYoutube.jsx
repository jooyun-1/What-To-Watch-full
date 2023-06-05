import React from "react";
import styled from "styled-components";

import Netflix1 from "../images/Netflix1.png";
import Netflix2 from "../images/Netflix2.png";
import { FiRefreshCw } from "react-icons/fi";

const rankList = {
    Youtube: [
      {
        id: 1,
        rank: 1,
        image:
          "https://file.miricanvas.com/template_thumb/2021/06/06/17/10/kasscx5ug4owoktr/thumb.jpg",
      },
      {
        id: 2,
        rank: 2,
        image: "https://i.ytimg.com/vi/Uidupj_sAO8/maxresdefault.jpg"
          ,
      },
      {
        id: 3,
        rank: 3,
        image:
          "https://i.ytimg.com/vi/0f4G4yAWOv0/maxresdefault.jpg",
      },
      {
        id: 4,
        rank: 4,
        image:
          "https://i.ytimg.com/vi/zNB6gpcQXng/maxresdefault.jpg",
      },
      {
        id: 5,
        rank: 5,
        image:
          "https://i.ytimg.com/vi/MRIvSNGO4vY/maxresdefault.jpg",
      },
      {
        id: 6,
        rank: 6,
        image: 
        "https://www.naeponews.co.kr/news/photo/202109/11481_13991_3815.jpg",
      },
      {
        id: 7,
        rank: 7,
        image: "https://i.ytimg.com/vi/eHXCjEdohWc/maxresdefault.jpg",
      },
      {
        id: 8,
        rank: 8,
        image:
          "https://i.ytimg.com/vi/rk-yNZj3qv0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDBqWqEHtO7hvuMdE_pZ3IY3D3H2A",
      },
      {
        id: 9,
        rank: 9,
        image: "https://openads-real.s3.amazonaws.com/openadsAdmin/images/contsThumb/contsThumb_0905122747417_%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.jpg",
      },
      {
        id: 10,
        rank: 10,
        image: "https://i.ytimg.com/vi/w9TON4IwR2w/maxresdefault.jpg",
      },
    ],
  };

export default function RecoYoutube() {
  return (
    <div>
      <SlideBox>
        {rankList.Youtube.slice(0,4).map((props) => {
          return (
            <div key={props.id}>
              <ContentsBox>
                {/* <RankImg>{props.rank}</RankImg> */}
                
                <BannerImg src={props.image} alt="rank" />
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
  width: 1200px;
  height: 200px;
  margin: 0px auto;
  overflow:hidden;
  /* background:white; */
  /* overflow:auto;
    white-space: nowrap; */
  /* overflow-x: scroll;
    scroll-snap-type: x mandatory; */
`;
const ContentsBox = styled.div`
  display: flex;
  margin: 0 auto;
  height: 170px;
  width: 280px;
  /* overflow:hidden; */
  /* position:bottom; */
  @media screen and (max-width: 800px) {
   /* overflow:auto; */
    /* white-space: nowrap; */
    /* width: 100px; */
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
const RankImg = styled.div`
  /* background-color: #e0dede; */

  position: absolute;
  bottom: 0;

  height: 120px;
  color: #1e1e1e;
  -webkit-text-stroke: 2px #acacac;
  font-size: 120px;
  font-weight: 700;
  text-shadow: 3px 4px 5px black;
  z-index: 1;
`;
const BannerImg = styled.img`
  position: absolute;
  right:-1;
  height: 160px; 
  width: 256px; 
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  margin: 0 auto;
  z-index: 98;
  &:hover {
    transform: scale(1.1);
    margin-right:20px;
  } 
`;

const RefreshDiv = styled.span`
  font-size: 23px;
  color: white;
  cursor: pointer;
`;
const RefreshButton = styled.button`
  margin: 0px auto; 
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
