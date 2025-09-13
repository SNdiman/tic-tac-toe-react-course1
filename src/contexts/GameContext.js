import { createContext, useState } from "react";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: ["", "", "", "", "", "", "", "", ""],
    player1: {
      choice: "x",
      name: "Akhil",
    },
    player2: {
      choice: "o",
      name: "Mark",
    },
    turn: "x",
  });

  const updateBoard = (index) => {
    let updatedBoard = [...game.board];
    updatedBoard[index] = game.turn;
    setGame({
      ...game,
      board: updatedBoard,
      turn: game.turn === "x" ? "o" : "x",
    });
  };

  return (
    <GameContext.Provider
      value={{
        game,
        updateBoard,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};
