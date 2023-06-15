import { createGlobalStyle } from "styled-components";
import data from "./data.json";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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

export const Targets = styled(Link)`
  color: white;
  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
  margin-left: 36px;
  color: #d0d6f9;
`;

export const TargetsContainer = styled.div`
  margin-left: 850px;
  margin-top: 174px;
`

export const DestinationContainer = styled.div`
  
`

export function DestinationPage() {
  const { target } = useParams()
  console.log(target)
  return (
    <>
      <Global />
      <TargetsContainer>
        {data.destinations.map((target) => (
          <Targets key={target.name} to={`/Destination/${target.name}`}>{target.name}</Targets>
        ))}
      </TargetsContainer>
      <DestinationContainer>
      {data.destinations.filter((dst) => (dst.name === target)).map((target) => (
          <span key={target.name}>{target.description}</span>
        ))}
      </DestinationContainer>
    </>
  );
}
