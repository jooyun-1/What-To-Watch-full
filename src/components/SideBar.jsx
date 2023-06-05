import React, { useState, useEffect } from "react";
import Youtube from "../images/YoutubeLogo.png";
import Netflix from "../images/NetflixLogo.png";
import Disney from "../images/DisneyLogo.png";
import { Navigation } from "react-minimal-side-navigation";
// import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { Icon } from "semantic-ui-react";
import styled from "styled-components";
import axios from "axios";
const youtubeSubMenu = [
  {
    id: 1,
    genre_name: "액션",
  },
  {
    id: 2,
    genre_name: "모험",
  },
  {
    id: 3,
    genre_name: "애니메이션",
  },
  {
    id: 4,
    genre_name: "코미디",
  },
  {
    id: 5,
    genre_name: "범죄",
  },
  {
    id: 6,
    genre_name: "다큐멘터리",
  },
  {
    id: 7,
    genre_name: "드라마",
  },
  {
    id: 8,
    genre_name: "가족",
  },
  {
    id: 9,
    genre_name: "판타지",
  },
  {
    id: 10,
    genre_name: "역사",
  },
  {
    id: 11,
    genre_name: "공포",
  },
  {
    id: 12,
    genre_name: "음악",
  },
  {
    id: 13,
    genre_name: "미스터리",
  },
  {
    id: 14,
    genre_name: "로맨스",
  },
  {
    id: 15,
    genre_name: "SF",
  },
  {
    id: 16,
    genre_name: "TV 영화",
  },
  {
    id: 17,
    genre_name: "스릴러",
  },
  {
    id: 18,
    genre_name: "전쟁",
  },
  {
    id: 19,
    genre_name: "서부",
  },
  {
    id: 20,
    genre_name: "액션",
  },
  {
    id: 21,
    genre_name: "모험",
  },
  {
    id: 22,
    genre_name: "애니메이션",
  },
  {
    id: 23,
    genre_name: "코미디",
  },
  {
    id: 24,
    genre_name: "범죄",
  },
  {
    id: 25,
    genre_name: "다큐멘터리",
  },
  {
    id: 26,
    genre_name: "드라마",
  },
];
export default function SideBar({ isOpen }) {
  // const [isOpen, setIsOpen] = useState(false); //menu 초기값을 false로 설정
  // const handleMenu = () => {
  //   setIsOpen (isOpen => !isOpen); // on off 개념
  // }

  const [isMovieSubOpen, setIsMovieSubOpen] = useState(false);
  const [isDramaSubOpen, setIsDramaSubOpen] = useState(false);
  const [isVideoSubOpen, setIsVideoSubOpen] = useState(false);
  const [movieGenre, setMovieGenere] = useState([]);
  const [dramaGenre, setDramaGenre] = useState([]);
  const [youtubeGenre, setYoutubeGenre] = useState([]);

  const getMovieGenre = async () => {
    const MovieGenreUrl = "http://localhost:3100/genres";
    await axios.get(MovieGenreUrl).then((response) => {
      console.log(response.data);
      setMovieGenere(response.data.genresList);
    });
  };
  const getDramaGenre = async () => {
    const DramaGenreUrl = "http://localhost:3100/tvgenres";
    await axios.get(DramaGenreUrl).then((response) => {
      setDramaGenre(response.data.genresList);
    });
  };
  const getYoutubeGenre = async () => {
    const VideoGenreUrl = "http://localhost:3100/video-genres";
    await axios.get(VideoGenreUrl).then((response) => {
      setYoutubeGenre(response.data.videoGenreList);
    });
  };

  // useEffect(() => {
  //   getGenre();
  // }, []);
  const isSubMovieMenuOpen = () => {
    setIsMovieSubOpen((isMovieSubOpen) => !isMovieSubOpen);
  };
  const isSubDramaMenuOpen = () => {
    setIsDramaSubOpen((isDramaSubOpen) => !isDramaSubOpen);
  };
  const isSubVideoMenuOpen = () => {
    setIsVideoSubOpen((isVideoSubOpen) => !isVideoSubOpen);
  };
  // const closeSideBar = () => {

  // };
  return (
    <>
      {isOpen && (
        <SideBarContainer isOpen={isOpen}>
          <CateTitle> 카테고리 </CateTitle>
          <OTTdiv
            onClick={() => {
              isSubMovieMenuOpen();
              isOpen = true;
            }}
          >
            <Subbutton
              onClick={() => {
                getMovieGenre();
              }}
            >
              영화
            </Subbutton>
          </OTTdiv>
          {isMovieSubOpen && (
            <div>
              {movieGenre.map((props) => {
                return (
                  <div key={props.id}>
                    <SubMeunBox>
                      <SubMenu>{props.genre_name}</SubMenu>
                    </SubMeunBox>
                  </div>
                );
              })}
            </div>
          )}
          <OTTdiv
            onClick={() => {
              isSubDramaMenuOpen();
              isOpen = true;
            }}
          >
            <Subbutton
              onClick={() => {
                getDramaGenre();
              }}
            >
              드라마 및 기타
            </Subbutton>
          </OTTdiv>
          {isDramaSubOpen && (
            <div>
              {dramaGenre.map((props) => {
                return (
                  <div key={props.id}>
                    <SubMeunBox>
                      <SubMenu>{props.genre_name}</SubMenu>
                    </SubMeunBox>
                  </div>
                );
              })}
            </div>
          )}
          <OTTdiv
            onClick={() => {
              isSubVideoMenuOpen();
              isOpen = true;
            }}
          >
            <Subbutton
              onClick={() => {
                getYoutubeGenre();
              }}
            >
              유튜브
            </Subbutton>
          </OTTdiv>
          {isVideoSubOpen && (
            <div>
              {youtubeGenre.map((props) => {
                return (
                  <div key={props.id}>
                    <SubMeunBox>
                      <SubMenu>{props.genre_name}</SubMenu>
                    </SubMeunBox>
                  </div>
                );
              })}
            </div>
          )}
        </SideBarContainer>
      )}
    </>
  );
}
const CateTitle = styled.div`
  font-size: 20px;
  text-align: center;

  margin-top: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 900;
`;
const OTTdiv = styled.div`
  border-top: 1px solid rgb(159, 159, 159);
  margin: 20px;
  padding-top: 20px;
  text-align: center;
`;
const YoutubeImg = styled.img`
  width: 50%;
  cursor: pointer;
`;
const NetflixImg = styled.img`
  width: 40%;
  cursor: pointer;
`;
const DisneyImg = styled.img`
  width: 45%;
  cursor: pointer;
`;
const SideBarContainer = styled.div`
  position: fixed;
  inset: 0px;
  /* -webkit-tap-highlight-color: transparent; */
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #000000;
  color: white;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  z-index: 10000;
  overflow-y: scroll !important;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
const SubMeunBox = styled.div`
  font-size: 10px;
`;
const SubMenu = styled.div`
  font-size: 15px;
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`;

const Subbutton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 10px;
  opacity: 0.5;
  cursor: pointer;
  &:hover {
    /* background-color: #717171; */
    color: rgb(255, 255, 255, 100);
    transform: scale(1.3);
  }
`;
