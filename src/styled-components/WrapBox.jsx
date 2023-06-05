import styled from "styled-components";

const WrapBox = styled.div`
  background: linear-gradient(to bottom, #000000, #3b3b3c);
  background-size: cover;
  min-height: 200vh;
  height: 100%;
  /* max-width: 1300px; */
  max-width: 90%;
  margin: 0 auto;
  padding-top:117.5px; //가려지지 않도록 앱바 높이만큼 설정해줌 
  z-index:2;
  overflow: hidden;
`;
export default WrapBox