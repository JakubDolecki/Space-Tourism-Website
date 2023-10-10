import { createGlobalStyle } from "styled-components";
import data from "./data.json";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./CrewPage.css"

export const Global = createGlobalStyle`
body {
  margin: 0px;
  height: 100%;
  overflow: hidden;
}

html {
  background-image: url("src/assets/background-crew-desktop.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  overflow: hidden;
}
`;

export const Role = styled.span`
  color: #fff;
  font-size: 32px;
  font-family: Bellefair;
  text-transform: uppercase;
  opacity: 0.5042492151260376;
`;

export const Bio = styled.div`
  color: #d0d6f9;
  font-size: 18px;
  font-family: Barlow;
  line-height: 32px;
  width: 444px;
  margin-top: 27px;
`;

export const Name = styled.span`
  color: #fff;
  font-size: 56px;
  font-family: Bellefair;
  text-transform: uppercase;
  margin-top: 15px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 126px;
`;

export const Number = styled.span`
  color: #fff;
  font-size: 28px;
  font-family: Barlow Condensed;
  font-weight: 700;
  letter-spacing: 4.725px;
  opacity: 0.25;
  margin-right: 24px;
`;

export const Txt = styled.span`
  color: #fff;
  font-size: 28px;
  font-family: Barlow Condensed;
  letter-spacing: 4.725px;
  text-transform: uppercase;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 140px;
  margin-bottom: 229px;
`;

export const Header = styled.div`
  margin-left: 140px;
  position: absolute;
  top: 220px;
`;

export const Photo = styled.img`
  margin-right: 137px;
`;

export const Navigation = styled.div`
  display: flex;
  z-index: 1;
  position: absolute;
  bottom: 94px;
  margin-left: 115px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
`;

export function CrewPage() {
  const { member } = useParams();

  const [hover, setHover] = useState(false);

  const [myStyle, setMyStyle] = useState({});

  function Render() {
    if (member === undefined) {
      return data.crew
        .filter((person) => person.name === "Douglas Hurley")
        .map((person) => (
          <Container key={person.name}>
            <Description>
              <Role>{person.role}</Role>
              <Name>{person.name}</Name>
              <Bio>{person.bio}</Bio>
            </Description>
            <Photo src={person.images.png}></Photo>
          </Container>
        ));
    } else {
      return data.crew
        .filter((person) => person.name === member)
        .map((person) => (
          <Container key={person.name}>
            <Description>
              <Role>{person.role}</Role>
              <Name>{person.name}</Name>
              <Bio>{person.bio}</Bio>
            </Description>
            <Photo src={person.images.png}></Photo>
          </Container>
        ));
    }
  }

  return (
    <Main>
      <Global />

      <Header>
        <Number>02</Number>
        <Txt>MEET YOUR CREW</Txt>
      </Header>

      <Render />
      <Navigation>
        {data.crew.map((member) => (
          <NavLink
            key={member.name}
            to={`/Crew/${member.name}`}
            onClick={() => {
              
            }}
            className={navData => (navData.isActive ? "active-style nav-link" : "nav-link")}
          />
        ))}
      </Navigation>
    </Main>
  );
}
