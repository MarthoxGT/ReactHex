import React, { useEffect, useState } from "react";

import "./game.css";

import { tableConfig } from "../../assets/constants";
const BOARDSIZE = tableConfig["BOARDSIZE"];

function Game() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    setBoard(createTable);
  }, []);

  function checkColor(fila, columna) {
    if (fila % 2 === 0) {
      return columna % 2 === 0 ? "whiteCell" : "blackCell";
    }
    return columna % 2 === 0 ? "blackCell" : "whiteCell";
  }

  function createTable() {
    const table = [];
    for (let i = 0; i < BOARDSIZE; i++) {
      const row = [];
      for (let j = 0; j < BOARDSIZE; j++) {
        table.push(
          <div
            className={`tableCell ${checkColor(i, j)}`}
            key={`${i}${j}`}
            id={`${i}${j}`}
          />
        );
      }
      table.push(row);
    }

    return table;
  }

  return (
    <div className="game">
      <div className="board">{board}</div>
    </div>
  );
}

export default Game;
