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
  margin-top: 98px;
`;

export const DestinationContainer = styled.div``;

export const Description = styled.span``;

export const Instructions = styled.div`
margin-top: 76px;
margin-left: 145px;
`;

export const Name = styled.span``;

export const Distance = styled.span``;

export const Travel = styled.span``;

export const Photo = styled.img``;

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

export function DestinationPage() {
  const { target } = useParams();
  console.log(data.destinations);
  return (
    <>
      <Global />
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
      {data.destinations
        .filter((dst) => dst.name === target)
        .map((target) => (
          <div key={target.name}>
            <Name>{target.name}</Name>
            <Description key={target.name}>{target.description}</Description>
            <Photo src={target.images.png}></Photo>
            <Distance>{target.distance}</Distance>
            <Travel>{target.travel}</Travel>
          </div>
        ))}
    </>
  );
}
