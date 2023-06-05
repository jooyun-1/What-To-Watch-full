import React from "react";
import { useState } from "react";
import styled from "styled-components";

import AppBar from "../components/AppBar";
import TotalWrap from "../styled-components/TotalWrap";
import WrapBox from "../styled-components/WrapBox";

const videoList = [
  {
    id: 1206,
    title: "지압판 위로 날아~올라~‼️ 끼-얏❤️‍🔥 | ♨️우리칠 사우나 EP.1♨️",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/aky_Pn65r9Q/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=aky_Pn65r9Q",
  },
  {
    id: 1218,
    title:
      "[GOING SEVENTEEN] EP.77 화이트에서 할 수 있는 모든 것 #1 (Everything Possible in the White Zone #1)",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/8JOCd84Pnas/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=8JOCd84Pnas",
  },
  {
    id: 1219,
    title:
      "우리 영웅이 밥은 잘 먹고 다니나🍚~? 웅 패밀리 어셈블!!👏👏👏 | 마이리틀히어로 EP 01 선공개 2",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/PlzD6Yzona4/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=PlzD6Yzona4",
  },
  {
    id: 1225,
    title:
      "LE SSERAFIM (르세라핌) ‘이브, 프시케 그리고 푸른 수염의 아내’ OFFICIAL M/V",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/dZs_cLHfnNA/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=dZs_cLHfnNA",
  },
  {
    id: 1226,
    title: "[MV] YoungTak(영탁) _ On Your Side(니편이야)",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/fc-lKLdZf1Q/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=fc-lKLdZf1Q",
  },
  {
    id: 1232,
    title:
      "[몬 먹어도 고] EP.13 아낌없이 주는 셔누 part.1 (SHOWNU Gives Generously)",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/z8j4Wo_OvcY/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=z8j4Wo_OvcY",
  },
  {
    id: 1236,
    title:
      "박재범 (Jay Park) - 'Candy (Feat. Zion.T)' Official Music Video (KO/EN/JP/CN)",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/NgYtTTogbQg/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=NgYtTTogbQg",
  },
  {
    id: 1256,
    title:
      "내 영어 선생님이.. 탑티어 원어민급 G.O.A.T인 건에 대하여😲 | 마이리틀히어로 EP 01 선공개 1",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/nyS5g0zpoW8/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=nyS5g0zpoW8",
  },
  {
    id: 1257,
    title:
      "(G)I-DLE ((여자)아이들) - Queencard (퀸카) | Show! MusicCore | MBC230520방송",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/-mkuPvg45Ug/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=-mkuPvg45Ug",
  },
  {
    id: 1271,
    title: "TO DO X TXT - EP.109 Forest Fruits Festival Part 2",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/stgqCjGhRUA/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=stgqCjGhRUA",
  },
  {
    id: 1282,
    title: "DANIELLE - 저곳으로 (인어공주) (인어공주 OST)",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/ho0d4rf1LwY/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=ho0d4rf1LwY",
  },
  {
    id: 1285,
    title: "YOUNGTAK 영탁 [ 니편이야 ]  MV Teaser",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/SuyD5cCLLxg/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=SuyD5cCLLxg",
  },
  {
    id: 1296,
    title: "アイドル (Idol) / Oshi no Ko OP┃Raon cover",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/-EeRwcogblc/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=-EeRwcogblc",
  },
  {
    id: 1298,
    title:
      "(여자)아이들((G)I-DLE)의 킬링보이스를 라이브로! - 퀸카, TOMBOY, 말리지마, POP/STARS, MY BAG, 한, 덤디덤디| 딩고뮤직 | Dingo Music",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/et3VDbL7cIA/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=et3VDbL7cIA",
  },
  {
    id: 1307,
    title:
      "FAST X | Angel Pt. 1 (Official Video) - NLE Choppa, Kodak Black, Jimin of BTS, JVKE, & Muni Long",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/jp0kTw1TCy0/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=jp0kTw1TCy0",
  },
  {
    id: 1309,
    title: "JOOHONEY 주헌 'LIGHTS' Preview",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/OCvTxHQdAvA/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=OCvTxHQdAvA",
  },
  {
    id: 1312,
    title: "(여자)아이들((G)I-DLE) - '퀸카 (Queencard)' Official Music Video",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/7HDeem-JaSY/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=7HDeem-JaSY",
  },
  {
    id: 1323,
    title: "💖이찬원 데뷔 3주년 기념 라이브💖",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/k92C_orhm34/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=k92C_orhm34",
  },
  {
    id: 1324,
    title: "[Lyric Video (리릭비디오)] 이창섭 - 사랑했나봐｜Stone Music+",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/0lLNxTHJK-Q/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=0lLNxTHJK-Q",
  },
  {
    id: 1339,
    title:
      "[ENG/JP] 광야의 힐러(!)로 영입된 만채💫 카&닝&채 삼겹살 패밀리 결성👪 | 은채의 스타일기💫 EP08 | aespa",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/Ib8h3wx_1xY/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=Ib8h3wx_1xY",
  },
  {
    id: 1340,
    title: "[MV] MIJOO (미주) _ Movie Star",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/iSUSSjw3RVc/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=iSUSSjw3RVc",
  },
  {
    id: 1360,
    title: "NIGHT DANCER (BIG Naughty Remix)",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/PHW3GmSPwzU/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=PHW3GmSPwzU",
  },
  {
    id: 1370,
    title: "Halle Bailey - Performs “Part of Your World” at Disneyland",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/BCKna5ZoyN4/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=BCKna5ZoyN4",
  },
  {
    id: 13830,
    title: "ATEEZ(에이티즈) THE WORLD EP.2 : OUTLAW Official Trailer",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/moU0czf12rI/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=moU0czf12rI",
  },
  {
    id: 13883,
    title: "aespa (에스파) - Spicy | Show! MusicCore | MBC230513방송",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/dJ09BiaovoU/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=dJ09BiaovoU",
  },
  {
    id: 13912,
    title: "[MV] 10CM / 십센치 - 부동의 첫사랑 (My Ultimate First Love)",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/6iZyquKcpzg/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=6iZyquKcpzg",
  },
  {
    id: 13971,
    title: "사랑..그게 뭔데 (Love..What is it)",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/crgvbjlLrTc/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=crgvbjlLrTc",
  },
  {
    id: 1400,
    title: "TO DO X TXT - EP.108 Forest Fruits Festival Part 1",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/MxV_GNbRLhs/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=MxV_GNbRLhs",
  },
  {
    id: 13833,
    title: "ATEEZ(에이티즈) THE WORLD EP.2 : OUTLAW Official Trailer",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/moU0czf12rI/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=moU0czf12rI",
  },
  {
    id: 13884,
    title: "aespa (에스파) - Spicy | Show! MusicCore | MBC230513방송",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/dJ09BiaovoU/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=dJ09BiaovoU",
  },
  {
    id: 13291,
    title: "[MV] 10CM / 십센치 - 부동의 첫사랑 (My Ultimate First Love)",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/6iZyquKcpzg/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=6iZyquKcpzg",
  },
  {
    id: 13397,
    title: "사랑..그게 뭔데 (Love..What is it)",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/crgvbjlLrTc/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=crgvbjlLrTc",
  },
  {
    id: 1400,
    title: "TO DO X TXT - EP.108 Forest Fruits Festival Part 1",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/MxV_GNbRLhs/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=MxV_GNbRLhs",
  },
  {
    id: 13833,
    title: "ATEEZ(에이티즈) THE WORLD EP.2 : OUTLAW Official Trailer",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/moU0czf12rI/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=moU0czf12rI",
  },
  {
    id: 138,
    title: "aespa (에스파) - Spicy | Show! MusicCore | MBC230513방송",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/dJ09BiaovoU/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=dJ09BiaovoU",
  },
  {
    id: 144,
    title: "[MV] 10CM / 십센치 - 부동의 첫사랑 (My Ultimate First Love)",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/6iZyquKcpzg/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=6iZyquKcpzg",
  },
  {
    id: 155,
    title: "사랑..그게 뭔데 (Love..What is it)",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/crgvbjlLrTc/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=crgvbjlLrTc",
  },
  {
    id: 13,
    title: "TO DO X TXT - EP.108 Forest Fruits Festival Part 1",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/MxV_GNbRLhs/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=MxV_GNbRLhs",
  },
  {
    id: 12,
    title: "ATEEZ(에이티즈) THE WORLD EP.2 : OUTLAW Official Trailer",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/moU0czf12rI/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=moU0czf12rI",
  },
  {
    id: 5,
    title: "aespa (에스파) - Spicy | Show! MusicCore | MBC230513방송",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/dJ09BiaovoU/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=dJ09BiaovoU",
  },
  {
    id: 4,
    title: "[MV] 10CM / 십센치 - 부동의 첫사랑 (My Ultimate First Love)",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/6iZyquKcpzg/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=6iZyquKcpzg",
  },
  {
    id: 3,
    title: "사랑..그게 뭔데 (Love..What is it)",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/crgvbjlLrTc/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=crgvbjlLrTc",
  },
  {
    id: 2,
    title: "TO DO X TXT - EP.108 Forest Fruits Festival Part 1",
    genre_name: "음악",
    thumbnails: "https://i.ytimg.com/vi/MxV_GNbRLhs/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=MxV_GNbRLhs",
  },
];

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
  overflow: hidden;
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
