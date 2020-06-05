import React from "react";
import logo from "./logo.svg";
import fondo from "./bg-mobile.svg";
import fondolg from "./bg-desktop.svg";

import styled from "styled-components";
import Upload from "./Upload";
import Status from "./Status";

const AppStyled = styled.div`
  font-family: "Raleway", sans-serif;
  background-image: url(${fondo});
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%
  }

  @media screen and (min-width: 767px) {
    background-color: #131829;
    background-image: url(${fondolg});
    background-size: 100% 50%;
    background-position: center bottom;
    background-repeat: no-repeat;

    .wrapper {
      flex-direction: row;
      align-items: flex-end;
      max-width: 1200px;
      width: 70%;
    }
  }
`;

function App() {
  return (
    <AppStyled>
      <div className="wrapper">
        <Upload />
        <Status />
      </div>
    </AppStyled>
  );
}

export default App;
