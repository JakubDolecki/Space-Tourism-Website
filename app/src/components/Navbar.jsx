import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Container = styled.div`
  width: 100%;
  height: 100px;
  /* background-color: black; */
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Logo = styled.img`
  background-color: white;
  border-radius: 50%;
  margin-left: 30px;
  height: 50px;
`;
export const Line = styled.div`
  height: 1px;
  width: 500px;
  background-color: white;
  opacity: 20%;
  margin-left: 50px;
  position: absolute;
  right: 850px;
  z-index: 2;
`;
export const Navigation = styled.div`
  height: 100%;
  width: 900px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
  position: absolute;
  display: flex;
`;

export const NavContainer = styled.div`
  display: flex;
  width: 1400px;
  height: 100px;
  align-items: center;
  position: relative;
  justify-content: flex-end;
  overflow: hidden;
`;

export const Link = styled.div`
  height: 95%;
  width: 130px;
  /* background-color: white; */
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 4;
  &:hover {
    border-bottom: 5px solid rgb(135, 135, 135);
    cursor: pointer;
  }
`;

export const Number = styled.span`
  color: white;
  margin-right: 15px;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 400;
  font-size: 16px;
`;

export const Text = styled.span`
  color: white;
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 200;
  font-size: 16px;
`;

export const Links = styled(NavLink)`
  height: 100%;
  width: 650px;
  /* background-color: white; */
  margin-left: 100px;
  display: flex;
  justify-content: space-around;
`;

export function Navbar() {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const boxStyle = {
    borderBottom: isHover? '5px solid rgb(135, 135, 135)' : '0px solid rgb(135, 135, 135)',
    
    // backgroundColor: isHover ? "lightblue" : "rgb(0, 191, 255)",
    height: "95%",
    width: "130px",
    /* background-color: white; */
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };
  const navigateToDestination = () => {
    navigate("/Destination");
  };

  return (
    <>
      <Container>
        <Logo src="src/assets/logo.svg"></Logo>
        <NavContainer>
          <Line></Line>
          <Navigation>
            <Links>
              <NavLink
                style={boxStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Number>00</Number>
                <Text>HOME</Text>
              </NavLink>

              <Link to="/Destination">
                <Number>01</Number>
                <Text>DESTINATION</Text>
              </Link>
              <Link>
                <Number>02</Number>
                <Text>CREW</Text>
              </Link>
              <Link>
                <Number>03</Number>
                <Text>TECHNOLOGY</Text>
              </Link>
            </Links>
          </Navigation>
        </NavContainer>
      </Container>
    </>
  );
}
