import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Banner1 from "../images/Banner1.png";

const videoList = [
      {
          "id": 1206,
          "title": "지압판 위로 날아~올라~‼️ 끼-얏❤️‍🔥 | ♨️우리칠 사우나 EP.1♨️",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/aky_Pn65r9Q/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=aky_Pn65r9Q"
      },
      {
          "id": 1218,
          "title": "[GOING SEVENTEEN] EP.77 화이트에서 할 수 있는 모든 것 #1 (Everything Possible in the White Zone #1)",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/8JOCd84Pnas/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=8JOCd84Pnas"
      },
      {
          "id": 1219,
          "title": "우리 영웅이 밥은 잘 먹고 다니나🍚~? 웅 패밀리 어셈블!!👏👏👏 | 마이리틀히어로 EP 01 선공개 2",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/PlzD6Yzona4/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=PlzD6Yzona4"
      },
      {
          "id": 1225,
          "title": "LE SSERAFIM (르세라핌) ‘이브, 프시케 그리고 푸른 수염의 아내’ OFFICIAL M/V",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/dZs_cLHfnNA/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=dZs_cLHfnNA"
      },
      {
          "id": 1226,
          "title": "[MV] YoungTak(영탁) _ On Your Side(니편이야)",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/fc-lKLdZf1Q/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=fc-lKLdZf1Q"
      },
      {
          "id": 1232,
          "title": "[몬 먹어도 고] EP.13 아낌없이 주는 셔누 part.1 (SHOWNU Gives Generously)",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/z8j4Wo_OvcY/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=z8j4Wo_OvcY"
      },
      {
          "id": 1236,
          "title": "박재범 (Jay Park) - 'Candy (Feat. Zion.T)' Official Music Video (KO/EN/JP/CN)",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/NgYtTTogbQg/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=NgYtTTogbQg"
      },
      {
          "id": 1256,
          "title": "내 영어 선생님이.. 탑티어 원어민급 G.O.A.T인 건에 대하여😲 | 마이리틀히어로 EP 01 선공개 1",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/nyS5g0zpoW8/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=nyS5g0zpoW8"
      },
      {
          "id": 1257,
          "title": "(G)I-DLE ((여자)아이들) - Queencard (퀸카) | Show! MusicCore | MBC230520방송",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/-mkuPvg45Ug/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=-mkuPvg45Ug"
      },
      {
          "id": 1271,
          "title": "TO DO X TXT - EP.109 Forest Fruits Festival Part 2",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/stgqCjGhRUA/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=stgqCjGhRUA"
      },
      {
          "id": 1282,
          "title": "DANIELLE - 저곳으로 (인어공주) (인어공주 OST)",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/ho0d4rf1LwY/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=ho0d4rf1LwY"
      },
      {
          "id": 1285,
          "title": "YOUNGTAK 영탁 [ 니편이야 ]  MV Teaser",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/SuyD5cCLLxg/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=SuyD5cCLLxg"
      },
      {
          "id": 1296,
          "title": "アイドル (Idol) / Oshi no Ko OP┃Raon cover",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/-EeRwcogblc/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=-EeRwcogblc"
      },
      {
          "id": 1298,
          "title": "(여자)아이들((G)I-DLE)의 킬링보이스를 라이브로! - 퀸카, TOMBOY, 말리지마, POP/STARS, MY BAG, 한, 덤디덤디| 딩고뮤직 | Dingo Music",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/et3VDbL7cIA/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=et3VDbL7cIA"
      },
      {
          "id": 1307,
          "title": "FAST X | Angel Pt. 1 (Official Video) - NLE Choppa, Kodak Black, Jimin of BTS, JVKE, & Muni Long",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/jp0kTw1TCy0/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=jp0kTw1TCy0"
      },
      {
          "id": 1309,
          "title": "JOOHONEY 주헌 'LIGHTS' Preview",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/OCvTxHQdAvA/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=OCvTxHQdAvA"
      },
      {
          "id": 1312,
          "title": "(여자)아이들((G)I-DLE) - '퀸카 (Queencard)' Official Music Video",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/7HDeem-JaSY/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=7HDeem-JaSY"
      },
      {
          "id": 1323,
          "title": "💖이찬원 데뷔 3주년 기념 라이브💖",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/k92C_orhm34/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=k92C_orhm34"
      },
      {
          "id": 1324,
          "title": "[Lyric Video (리릭비디오)] 이창섭 - 사랑했나봐｜Stone Music+",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/0lLNxTHJK-Q/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=0lLNxTHJK-Q"
      },
      {
          "id": 1339,
          "title": "[ENG/JP] 광야의 힐러(!)로 영입된 만채💫 카&닝&채 삼겹살 패밀리 결성👪 | 은채의 스타일기💫 EP08 | aespa",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/Ib8h3wx_1xY/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=Ib8h3wx_1xY"
      },
      {
          "id": 1340,
          "title": "[MV] MIJOO (미주) _ Movie Star",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg  .com/vi/iSUSSjw3RVc/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=iSUSSjw3RVc"
      },
      {
          "id": 1360,
          "title": "NIGHT DANCER (BIG Naughty Remix)",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/PHW3GmSPwzU/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=PHW3GmSPwzU"
      },
      {
          "id": 1370,
          "title": "Halle Bailey - Performs “Part of Your World” at Disneyland",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/BCKna5ZoyN4/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=BCKna5ZoyN4"
      },
      {
          "id": 1383,
          "title": "ATEEZ(에이티즈) THE WORLD EP.2 : OUTLAW Official Trailer",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/moU0czf12rI/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=moU0czf12rI"
      },
      {
          "id": 1388,
          "title": "aespa (에스파) - Spicy | Show! MusicCore | MBC230513방송",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/dJ09BiaovoU/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=dJ09BiaovoU"
      },
      {
          "id": 1391,
          "title": "[MV] 10CM / 십센치 - 부동의 첫사랑 (My Ultimate First Love)",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/6iZyquKcpzg/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=6iZyquKcpzg"
      },
      {
          "id": 1397,
          "title": "사랑..그게 뭔데 (Love..What is it)",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/crgvbjlLrTc/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=crgvbjlLrTc"
      },
      {
          "id": 1400,
          "title": "TO DO X TXT - EP.108 Forest Fruits Festival Part 1",
          "genre_name": "음악",
          "thumbnails": "https://i.ytimg.com/vi/MxV_GNbRLhs/hqdefault.jpg",
          "url": "https://www.youtube.com/watch?v=MxV_GNbRLhs"
      }
    ]


// const rankList = {
  
//   Youtube : [
//     {
//       "id": 1020,
//       "title": "[헤어몬vlog] 굳이?",
//       "genre_name": "엔터테인먼트",
//       "thumbnails": "https://i.ytimg.com/vi/C_uUez09jF8/default.jpg",
//       "url": "https://www.youtube.com/watch?v=C_uUez09jF8"
//     }, 
//     {
//       id: 1,
//       rank: 1,
//       "thumbnails":
//         "https://file.miricanvas.com/template_thumb/2021/06/06/17/10/kasscx5ug4owoktr/thumb.jpg",
//     },
//     {
//       id: 2,
//       rank: 2,
//       "thumbnails": "https://i.ytimg.com/vi/Uidupj_sAO8/maxresdefault.jpg"
//         ,
//     },
//     {
//       id: 3,
//       rank: 3,
//       "thumbnails":
//         "https://i.ytimg.com/vi/0f4G4yAWOv0/maxresdefault.jpg",
//     },
//     {
//       id: 4,
//       rank: 4,
//       "thumbnails":
//         "https://i.ytimg.com/vi/zNB6gpcQXng/maxresdefault.jpg",
//     },
//     {
//       id: 5,
//       rank: 5,
//       "thumbnails":
//         "https://i.ytimg.com/vi/MRIvSNGO4vY/maxresdefault.jpg",
//     },
//     {
//       id: 6,
//       rank: 6,
//       "thumbnails": 
//       "https://www.naeponews.co.kr/news/photo/202109/11481_13991_3815.jpg",
//     },
//     {
//       id: 7,
//       rank: 7,
//       "thumbnails": "https://i.ytimg.com/vi/eHXCjEdohWc/maxresdefault.jpg",
//     },
//     {
//       id: 8,
//       rank: 8,
//       "thumbnails":
//         "https://i.ytimg.com/vi/rk-yNZj3qv0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDBqWqEHtO7hvuMdE_pZ3IY3D3H2A",
//     },
//     {
//       id: 9,
//       rank: 9,
//       "thumbnails": "https://openads-real.s3.amazonaws.com/openadsAdmin/images/contsThumb/contsThumb_0905122747417_%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.jpg",
//     },
//     {
//       id: 10,
//       rank: 10,
//       "thumbnails": "https://i.ytimg.com/vi/w9TON4IwR2w/maxresdefault.jpg",
//     },
//   ],
// };

export default function Youtube20Slider() {
  // const [,]
  // const getAlbum = async () => {
  //   const APIURL = `${API_PATHNAME}/${churchName}/life/1`;
  //   axios.get(APIURL).then((response) => {
  //     setAlbum(response.data);
  //   });
  // };
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    variableWidth: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Container>
        <Slider {...settings}>
        {videoList.map((props,index) => {
          return (
            <div key={props.id}>
              <ContentsBox>
                <RankImg>{index+1}</RankImg>
                <BannerImg src={props.thumbnails} alt="rank" />
              </ContentsBox>
            </div>
          );
        })}
         
        </Slider>
      </Container>
    </div>
  );
}

const Container = styled.div`
  /* background-color: white; */
  width: 1200px;
  margin: 0px auto;
  margin-top: 30px;
  margin-bottom: 160px;
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

// const BannerImg = styled.img`
//   height: 180px;
//   width: 270px;
//   padding: 0px auto;
//   margin: 0px auto;
//   cursor: pointer;
// `;

const SlideBox = styled.div`
  display: flex;
  width: 1300px;
  height: 300px;
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
  padding-top: 20px;
  height: 200px;
  width: 180px;
  /* overflow:hidden; */
  /* position:bottom; */
`;
const RankImg = styled.div`
  /* background-color: #e0dede; */

  position: absolute;
  bottom: 0;
  width: 120px;
  height: 80px;
  color: #1e1e1e;
  -webkit-text-stroke: 2px #acacac;
  font-size: 80px;
  font-weight: 700;
  text-shadow: 3px 4px 5px black;
  z-index: 1;
`;
const BannerImg = styled.img`
  position: absolute;
  right:-1;
  height: 200px; 
  width: 256px; 
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  /* z-index: 98; */
  &:hover {
    transform: scale(1.15);
    margin-left: 10px;
  }
`;



