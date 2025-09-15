import React from "react";
// import { Container } from "./Home.styled";
import { Container, Title,Subtitle } from "../../styles/General.styled";
// import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate =useNavigate();
  return (
    <Container columnBased>
      
      <Title>TicTacToe</Title>
      <Subtitle>Lets Play, higher score wins</Subtitle>
      <Button onClick={() => navigate("game-on")}>Play Now</Button>

    </Container>
  );
}

export default Home;
