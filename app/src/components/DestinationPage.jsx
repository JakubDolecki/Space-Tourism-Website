import { createGlobalStyle } from "styled-components";
import data from "./data.json";

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

export function DestinationPage() {
  console.log(data.destinations);
  return (
    <>
      <Global />
    </>
  );
}
