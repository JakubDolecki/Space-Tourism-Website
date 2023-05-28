import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
body {
  margin: 0px;
  height: 100%;
  overflow: hidden;
}

html {
  background-image: url("src/assets/background-home-desktop.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  overflow: hidden;
}
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-end;
`;
export const TxtContainer = styled.div`
  height: 382px;
  width: 450px;
  margin-bottom: 250px;
  margin-left: 150px;
  display: flex;
  flex-direction: column;
`;
export const TxtTop = styled.span`
  color: #d0d6f9;
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 200;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
`;
export const TxtMid = styled.span`
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 150px;
  line-height: 172px;
  color: #ffffff;
  margin-top: 24px;
  margin-bottom: 24px;
`;
export const TxtBot = styled.span`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
`;

export function HomePage() {
  return (
    <>
      <Global />
      <Container>
        <TxtContainer>
          <TxtTop>SO, YOU WANT TO TRAVEL TO</TxtTop>
          <TxtMid>SPACE</TxtMid>
          <TxtBot>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </TxtBot>
        </TxtContainer>
      </Container>
    </>
  );
}
