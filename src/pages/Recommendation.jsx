import React from "react";
import AppBar from "../components/AppBar";
import styled from "styled-components";
import TotalWrap from "../styled-components/TotalWrap";
import WrapBox from "../styled-components/WrapBox";
import SideBar from "../components/SideBar";
import Youtube from "../images/YoutubeLogo.png";
import Netflix from "../images/NetflixLogo.png";
import Disney from "../images/DisneyLogo.png";

import NetflixSlider from "../components/NetflixSlider";
import RecommendationSlider from "../components/RecommendationSlider";
import RecoYoutube from "../components/RecoYoutube";
import { useState } from "react";
import axios from "axios";

export default function Top20() {
  return (
    <div>
      <TotalWrap>
        <AppBar />

        <WrapBox>
          <SideBar />
          <TotalOttBox>
            <OttBox>
              <OttLogoImg>
                <YoutubeImg src={Youtube} alt="youtubeLogo" />
              </OttLogoImg>
              <Top20Div> 유튜브 추천 콘텐츠</Top20Div>

              <SliderBox>
                <RecoYoutube />
              </SliderBox>
            </OttBox>
            <OttBox>
              <OttLogoImg>
                <NetflixImg src={Netflix} alt="NetflixLogo" />
              </OttLogoImg>
              <Top20Div> 넷플릭스 추천 콘텐츠</Top20Div>

              <SliderBox>
                <RecommendationSlider />
              </SliderBox>
            </OttBox>
            <OttBox>
              <OttLogoImg>
                <DisneyImg src={Disney} alt="DisneyLogo" />
              </OttLogoImg>
              <Top20Div> 디즈니 플러스 추천 콘텐츠</Top20Div>

              <SliderBox>
                <RecommendationSlider />
              </SliderBox>
            </OttBox>
          </TotalOttBox>
        </WrapBox>
      </TotalWrap>
    </div>
  );
}
const TotalOttBox = styled.div`
  /* position: relative; */
`;

const OttBox = styled.div``;

const OttLogoImg = styled.div`
  /* display: flex; */
  width: 150px;
  margin: 50px;
`;
const Top20Div = styled.div`
  display: flex;
  color: white;
  margin: 20px 20px 20px 80px;
  font-size: 25px;
  font-weight: 700px;
`;
const YoutubeImg = styled.img`
  width: 100%;
`;
const NetflixImg = styled.img`
  width: 100%;
`;
const DisneyImg = styled.img`
  width: 100%;
`;
const SliderBox = styled.div`
  /* display:flex; */
  /* width:100%; */
  /* height:400px; */
`;
