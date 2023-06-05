import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
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
    {
      id: 8,
      rank: 8,
      image:
        "https://upload.wikimedia.org/wikipedia/ko/thumb/c/ce/%EC%BD%94%EB%93%9C8_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/220px-%EC%BD%94%EB%93%9C8_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
    },
    {
      id: 9,
      rank: 9,
      image:
        "https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2023/01/PS23012500038.jpg",
    },
    {
      id: 10,
      rank: 10,
      image:
        "https://img.vogue.co.kr/vogue/2022/08/style_62ff22470d478-649x930.png",
    },
  ],
};

export default function YoutubeSlider({ provider }) {
  const [top20Movie, setTop20Movie] = useState([]);

  const getTop20Movie = async () => {
    const APIURL = "http://localhost:3100/movies/top20";
    const params = {
      provider_name: provider,
    };
    await axios.get(APIURL, { params }).then((response) => {
      setTop20Movie(response.data.moviesList);
    });
  };

  useEffect(() => {
    getTop20Movie();
  }, [provider]);

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    variableWidth: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div>
      {/* {top20Movie !== undefined &&
        top20Movie !== null &&
        top20Movie.length > 0 && ( */}
      <Container>
        <Slider {...settings}>
          {top20Movie.map((props) => {
            return (
              <div key={props.id}>
                <ContentsBox>
                  <RankImg>{props.rank}</RankImg>
                  <BannerImg src={props.poster_img} alt="rank" />
                </ContentsBox>
              </div>
            );
          })}
        </Slider>
      </Container>
      {/* )} */}
    </div>
  );
}

const Container = styled.div`
  /* background-color: white; */
  width: 1100px;
  margin: 0px auto;
  margin-bottom: 200px;
  /* overflow-x:scroll;
    scroll-snap-type: x mandatory; */

  /* overflow:hidden; */

  .slick-dots {
    .slick-active {
      button::before {
        color: #c1c1c1;
      }
    }
    button::before {
      color: #e9e9e9;
    }
  }
`;

const SlideBox = styled.div`
  display: flex;
  width: 1200px;
  height: 240px;
  margin: 0px auto;
  overflow: hidden;
  /* background:white; */
  /* overflow:auto;
    white-space: nowrap; */
  /* overflow-x: scroll;
    scroll-snap-type: x mandatory; */
`;
const ContentsBox = styled.div`
  display: flex;
  padding-top: 25px;
  height: 300px;
  width: 180px;

  overflow: hidden;
  /* position:bottom; */
`;
const RankImg = styled.div`
  /* background-color: #e0dede; */

  position: absolute;
  bottom: 0;

  height: 120px;
  color: #1e1e1e;
  /* color: white; */
  -webkit-text-stroke: 2px #acacac;
  font-size: 70px;
  font-weight: 700;
  text-shadow: 3px 4px 5px black;
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
    transform: scale(1.18);
    margin-left: 5px;
  }
`;
