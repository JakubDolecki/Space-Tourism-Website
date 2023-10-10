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
`;

export const Main = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const Title = styled.div`
  display: flex;
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

export function TechnologyPage() {
  const { tech } = useParams();
  return (
    <Main>
      <Global />

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
    </Main>
  );
}
