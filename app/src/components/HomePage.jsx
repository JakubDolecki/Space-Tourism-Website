import styled, { createGlobalStyle } from "styled-components";
import "./HomePage.css";
import { Container, Navbar } from "./Navbar";
import "./DestinationPage.css";

export const BackGround = styled.div`
  /* The image used */
  background-image: url("src/assets/background-home-desktop.jpg");

  /* Full height */
  height: 100vh;
  
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export function HomePage() {
  return (
    <BackGround>
      <span>heca</span>
    </BackGround>
  );
}
