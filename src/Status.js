import React from "react";
import styled from "styled-components";

const StatusStyled = styled.div`
  display: block;
  width: 90%;
  border-radius: 10px;
  background: #1c285c;
  color: white;
  padding: 30px 30px 60px 30px;
  box-sizing: border-box;
  font-size: 0.9em;
  position: relative;

  .info {
    font-weight: 700;
  }
  .info-less {
    background-color: #fff;
    color: black;
    padding: 15px;
    text-align: center;
    width: 50%;
    position: absolute;
    box-sizing: border-box;
    right: 25%;
    top: 75%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .info-less p {
    font-size: 2.5em;
    font-weight: 700;
    margin: 0;
    margin-right: 10px;
  }
  .info-left-words {
    text-transform: uppercase;
    font-size: 1em;
    font-weight: 700;
    color: #7a7b80;
  }
  .info-carga {
    margin-top: 15px;
    height: 15px;
    background-color: #141d3f;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 3px;
  }
  .info-text {
    text-align: center;
  }
  .info-indicador {
    height: 15px;
    background-color: red;
    background-image: linear-gradient(to right, #ff908c, #ff4c89);
    width: 80%;
    border-radius: 10px;
    position: relative;
  }
  .info-indicador::after {
    content: "";
    border: 5px solid white;
    display: block;
    position: absolute;
    border-radius: 5px;
    right: 2.5px;
    top: 2.5px;
  }
  .nums-indicador {
    display: flex;
    justify-content: space-between;
    margin-top: 6px;
    text-transform: uppercase;
  }

  .nums-indicador p {
    margin: 0;
  }

  @media screen and (min-width: 767px) {
    .info-less {
      right: 35px;
      top: -25%;
      width: 40%;
    }

    .info-text {
      text-align: left;
    }

    .info-less::after {
      content: "";
      border-left: 15px solid transparent;
      border-right: 15px solid white;
      border-top: 15px solid transparent;
      border-bottom: 15px solid transparent;
      display: block;
      position: absolute;
      right: 0px;
      bottom: -14.5px;
    }
  }
`;

export default function Status() {
  return (
    <StatusStyled>
      <div className="info-text">
        You've used <span className="info">815 GB</span> of your storage
      </div>
      <div className="info-carga">
        <div className="info-indicador"></div>
      </div>
      <div className="nums-indicador">
        <p>0 gb</p>
        <p>1000 gb</p>
      </div>
      <div className="info-less">
        <p>185</p>
        <span className="info-left-words">gb left</span>
      </div>
    </StatusStyled>
  );
}
