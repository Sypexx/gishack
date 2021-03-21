import "./css/styles.css";
import Home from "./pages/main.js";
import persa from "./img/pers.png";

import React from "react";
import { Switch, Route } from "react-router-dom";

import styled from "styled-components";

const Display = styled.div`
  height: 100%;
  width: 100%;
`;
const Header = styled.div`
  background-color: red;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  flex-direction: column;
  align-items: flex-start;
`;
const Footer = styled.div`
  width: 100%;
  height: 50%;
  background-color: black;
  display: flex;
`;
const Footmid = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  align-content: center;
  flex-direction: row;
  justify-content: space-around;
`;
const Foot1 = styled.div`
  line-height: 200%;
  display: flex;
  flex-direction: column;
  color: white;
  padding-top: 6%;
  width: 6%;
`;
const Foot2 = styled.div`
  line-height: 250%;
  display: flex;
  flex-direction: column;
  color: white;
  padding-top: 6%;
  width: 7%;
`;
const App = () => {
  return (
    <Display>
      <Header style={{ backgroundImage: `url(${persa})` }}></Header>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer>
        <Footmid>
          <Foot1>
            Контактная информация <br></br>
            Sypexofficial@gmail.com <br></br>
            89659940815 <br></br>
            Якутск, СВФУ
          </Foot1>
          <Foot2>
            Социальные сети <br></br>
            Twitter <br></br>
            Instagramm <br></br>
            Facebook
          </Foot2>
        </Footmid>
      </Footer>
    </Display>
  );
};
export default App;
