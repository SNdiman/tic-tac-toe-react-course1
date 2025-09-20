import React, { useContext } from "react";
// import { Container } from "./Home.styled";
import { Container, Title, Subtitle } from "../../styles/General.styled";
// import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { SfxContext } from "../../contexts/SfxContext";

function Home() {
  const navigate = useNavigate();
  const { hoverSfx, clickSfx } = useContext(SfxContext);
  return (
    <Container columnBased>
      <Title>TicTacToe</Title>
      <Subtitle>Lets Play, higher score wins</Subtitle>
      <Button
        onClick={() => {
          clickSfx();
          navigate("game-on");
        }}
        onMouseEnter={() => hoverSfx()}
      >
        Play Now
      </Button>
    </Container>
  );
}

export default Home;
