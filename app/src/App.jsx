import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { Navbar } from "./components/Navbar";
import styled from "styled-components";
import { DestinationPage } from "./components/DestinationPage";
import { CrewPage } from "./components/CrewPage";
import { TechnologyPage } from "./components/TechnologyPage";

export const Wrapper = styled.div`
  body {
    margin: 0px;
  }
`;

function App() {
  return (
    <HashRouter>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/Destination/" element={<DestinationPage />}>
            <Route path=":target"></Route>
          </Route>
          <Route path="/Crew" element={<CrewPage />}>
            <Route path=":member"></Route>
          </Route>
          <Route path="/Technology" element={<TechnologyPage />}>
            <Route path=":tech"></Route>
          </Route>
        </Routes>
      </Wrapper>
    </HashRouter>
  );
}

export default App;
