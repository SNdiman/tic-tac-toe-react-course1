import React, { useContext } from "react";
import { Title, Subtitle } from "../../../styles/General.styled";
import { ModalHeader, ModalBody, ModalFooter } from "../Modal.styled";
import ModalTemplate from '../../Modal/ModalTemplate';
import Button from "../../Button/Button";
import { GameContext } from "../../../contexts/GameContext";
import { ModalContext } from "../../../contexts/ModalContext";

function RoundOverModal() {
  const {resetBoard, game} = useContext(GameContext)
  const {handleModal} = useContext(ModalContext)

  return (
    <div>
      <ModalHeader>
        <Title primary>{game.roundWinner.name ? `${game.roundWinner.game} wins the round` : "Draw"} </Title>
      </ModalHeader>
      <ModalBody>
        <Subtitle primary>Choices will be switched</Subtitle>
        <Subtitle primary>{game.player1.name}: {game.player1.score}</Subtitle>
        <Subtitle primary>{game.player2.name}: {game.player2.score}</Subtitle>
      </ModalBody>
      <ModalFooter>
        <Button color = "blue" onClick={() => {
          handleModal();
          resetBoard()

        }}>Continue</Button>
        <Button>Restart</Button>
      </ModalFooter>

    </div>
  );
}

export default RoundOverModal;
