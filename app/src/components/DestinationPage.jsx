import { createGlobalStyle } from "styled-components";
import data from "./data.json";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const Global = createGlobalStyle`
body {
  margin: 0px;
  height: 100%;
  overflow: hidden;
}

html {
  background-image: url("src/assets/background-destination-desktop.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  overflow: hidden;
}
`;

export const Targets = styled(NavLink)`
  color: white;
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  margin-left: 36px;
  color: #d0d6f9;
  text-decoration: none;
  width: 100%;
  height: 100px;
  padding-bottom: 15px;
  &:hover {
    border-bottom: 5px solid rgb(135, 135, 135);
    cursor: pointer;
  }
`;

export const Description = styled.span`
  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #d0d6f9;
  margin-top: 14px;
`;

export const Instructions = styled.div`
  margin-top: 76px;
  margin-left: 145px;
`;

export const Name = styled.span`
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 100px;
  line-height: 115px;
  color: #ffffff;
`;

export const Distance = styled.span`
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Travel = styled.span`
  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Number = styled.span`
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.25;
  margin-right: 28px;
`;

export const Instruction = styled.span`
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 4.725px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Info = styled.div`
  display: flex;
  margin-top: 28px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 79px;
`;

export const Title = styled.span`
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 2.3625px;
  text-transform: uppercase;
  color: #d0d6f9;
  margin-bottom: 12px;
`;

export const Line = styled.div`
  width: 444px;
  height: 1px;
  background: #383b4b;
  margin-top: 54px;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 445px;
  margin-right: 110px;
  margin-top: 37px;
`;

export const Photo = styled.img`
  width: 445px;
  height: 445px;
  margin-left: 208.5px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
  margin-bottom: 250px;
  justify-self: flex-end;
`;

export const Main = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
`;

export const TargetsContainer = styled.div`
  margin-right: 260px;
  margin-top: 174px;
`;

export function DestinationPage() {
  const { target } = useParams();

  function Render() {
    if (target === undefined) {
      return data.destinations
        .filter((dst) => dst.name === "MOON")
        .map((target) => (
          <Content key={target.name}>
            <Photo src={target.images.png}></Photo>
            <Text>
              <Name>{target.name}</Name>
              <Description key={target.name}>{target.description}</Description>
              <Line></Line>
              <Info>
                <Box>
                  <Title>AVG. DISTANCE</Title>
                  <Distance>{target.distance}</Distance>
                </Box>
                <Box>
                  <Title>EST. TRAVEL TIME</Title>
                  <Travel>{target.travel}</Travel>
                </Box>
              </Info>
            </Text>
          </Content>
        ));
    } else {
      return data.destinations
        .filter((dst) => dst.name === target)
        .map((target) => (
          <Content key={target.name}>
            <Photo src={target.images.png}></Photo>
            <Text>
              <Name>{target.name}</Name>
              <Description key={target.name}>{target.description}</Description>
              <Line></Line>
              <Info>
                <Box>
                  <Title>AVG. DISTANCE</Title>
                  <Distance>{target.distance}</Distance>
                </Box>
                <Box>
                  <Title>EST. TRAVEL TIME</Title>
                  <Travel>{target.travel}</Travel>
                </Box>
              </Info>
            </Text>
          </Content>
        ));
    }
  }

  return (
    <>
      <Global />

      <Main>
        <TopSection>
          <Instructions>
            <Number>01</Number>
            <Instruction>PICK YOUR DESTINATION</Instruction>
          </Instructions>
          <TargetsContainer>
            {data.destinations.map((target) => (
              <Targets key={target.name} to={`/Destination/${target.name}`}>
                {target.name}
              </Targets>
            ))}
          </TargetsContainer>
        </TopSection>
        <Render></Render>
      </Main>
    </>
  );
}
