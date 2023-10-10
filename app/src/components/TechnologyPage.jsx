import { createGlobalStyle } from "styled-components";
import data from "./data.json";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./TechnologyPage.css";

export const Global = createGlobalStyle`
body {
  margin: 0px;
  height: 100%;
  overflow: hidden;
}

html {
  background-image: url("src/assets/background-technology-desktop.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  overflow: hidden;
}
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-end;
  margin-top: 76px;
  margin-left: 150px;
  position: absolute;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.div`
  display: flex;
  margin-bottom: 137px;
`;

export const Number = styled.span`
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 4.725px;
  opacity: 0.25;
`;

export const Txt = styled.span`
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 4.725px;
  margin-left: 24px;
`;

export const Box = styled.div`
  width: 1440px;
  height: 900px;
  display: flex;
  position: relative;
 
`;

export const Info = styled.div`
display: flex;
/* justify-content: space-between; */
width: 100%;
justify-content: flex-end;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 247px;
  position: absolute;
  left: 287px;
`;

export const Header = styled.span`
  color: #d0d6f9;
  font-family: Barlow Condensed;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2.7px;
`;

export const Name = styled.span`
  color: #fff;
  font-family: Bellefair;
  font-size: 56px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  margin-top: 11px;
`;

export const Paragraph = styled.span`
  color: #d0d6f9;
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-top: 17px;
  width: 444px;
`;

export const Photo = styled.img`
height: 515px;
width: 527px;
margin-top: 136px;
margin-left: 156px;
`

export function TechnologyPage() {
  const { tech } = useParams();

  function Render() {
    if (tech === undefined) {
      return data.technology
        .filter((tech) => tech.name === "Launch vehicle")
        .map((tech) => (
          <Info key={tech.name}>
            <Description>
              <Header>THE TERMINOLOGY…</Header>
              <Name>{tech.name}</Name>
              <Paragraph>{tech.description}</Paragraph>
            </Description>
            <Photo src={tech.images.portrait}></Photo>
          </Info>
        ));
    } else {
      return data.technology
        .filter((techs) => techs.name === tech)
        .map((techs) => (
          <Info key={techs.name}>
            <Description>
              <Header>THE TERMINOLOGY…</Header>
              <Name>{techs.name}</Name>
              <Paragraph>{techs.description}</Paragraph>
            </Description>
            <Photo src={techs.images.portrait}></Photo>
          </Info>
        ));
    }
  }

  return (
    <Main>
      <Global />
      <Box>
        <Navigation>
          <Title>
            <Number>03</Number>
            <Txt>SPACE LAUNCH 101</Txt>
          </Title>
          {data.technology.map((tech, index) => (
            <NavLink
              key={tech.name}
              to={`/Technology/${tech.name}`}
              className={(navData) =>
                navData.isActive ? "activestyle navlink" : "navlink"
              }
            >
              {index + 1}
            </NavLink>
          ))}
        </Navigation>
        <Render></Render>
      </Box>
    </Main>
  );
}
