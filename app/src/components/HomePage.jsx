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


export function HomePage() {
  return (
    <>
      <Global />
      <span>heca</span>
    </>
  );
}
