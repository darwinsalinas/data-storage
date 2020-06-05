import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import idocument from "./icon-document.svg";
import ifolder from "./icon-folder.svg";
import iupload from "./icon-upload.svg";

const UploadStyled = styled.div`
  width: 90%;
  height: 202px;
  background: #1c285c;
  border-radius: 10px 90px 10px 10px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  box-sizing: border-box;
  margin-bottom: 15px;

  div {
    margin-top: 15px;
    display: flex;
    align-items: flex-start;
  }
  div div {
    height: 45px;
    width: 45px;
    background-color: #0f1326;
    border-radius: 8px;
    margin-right: 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
  }
  div img {
    cursor: pointer;
  }

  @media screen and (min-width: 767px) {
    margin-bottom: 0;
    margin-right: 25px;
  }
`;

export default function Upload() {
  return (
    <UploadStyled>
      <img src={logo} alt="logo" width="125px" />
      <div>
        <div>
          <img src={idocument} alt="icono documento" />
        </div>
        <div>
          <img src={ifolder} alt="icono folder" />
        </div>
        <div>
          <img src={iupload} alt="icono upload" />
        </div>
      </div>
    </UploadStyled>
  );
}
