import styled from "styled-components";

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
  width: 600px;
  background-color: white;
  opacity: 20%;
  margin-left: 50px;
  position: absolute;
  right: 750px;
`;
export const Navigation = styled.div`
  height: 100%;
  width: 800px;
  background-color: white;
  position: absolute;
  
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

export function Navbar() {
  return (
    <>
      <Container>
        <Logo src="src/assets/logo.svg"></Logo>
        <NavContainer>
          <Line></Line>
          <Navigation></Navigation>
        </NavContainer>
      </Container>
    </>
  );
}
