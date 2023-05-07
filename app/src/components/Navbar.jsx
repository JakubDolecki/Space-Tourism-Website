import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 100px;
    /* background-color: white; */
    display: flex;
    margin-top: 30px;
    align-items: center;
`

export const Logo = styled.img`
    background-color: white;
    border-radius: 50%;
    margin-left: 40px;
    height: 50px;
`
export const Line = styled.div`
    height: 1px;
    width: 500px;
    background-color: white;
    opacity: 20%;
`

export function Navbar() {
    return (
        <>
        <Container>
            <Logo src="src/assets/logo.svg"></Logo>
            <Line></Line>
        </Container>
        </>
    )
}