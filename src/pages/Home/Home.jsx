import React from "react";
// import { Container } from "./Home.styled";
import { Container, Title,Subtitle } from "../../styles/General.styled";
// import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

function Home() {
  return (
    <Container>
      
      <Title>TicTacToe</Title>
      <Subtitle>Lets Play, higher score wins</Subtitle>
      <Button>Play Now</Button>

    </Container>
  );
}

export default Home;
