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
    const borderStyle = [];

    if (columna === 0) borderStyle.push("horizontalLeftBorder");
    if (columna === BOARDSIZE - 1) borderStyle.push("horizontalRightBorder");

    if (fila === 0) borderStyle.push("verticalTopBorder");
    if (fila === BOARDSIZE - 1) borderStyle.push("verticalBottomBorder");

    return borderStyle.join(" ");
  }

  function playCell(cellId) {
    const cell = document.getElementById(cellId);
    cell.style.setProperty("--cell-color", "green");
  }

  function createTable() {
    const table = [];
    for (let i = 0; i < BOARDSIZE; i++) {
      const row = [];
      for (let j = 0; j < BOARDSIZE; j++) {
        row.push(
          <div
            className={`tableCell ${checkColor(i, j)}`}
            key={`${i}:${j}`}
            id={`${i}:${j}`}
            onClick={(event) => playCell(event.target.id)}
          />
        );
      }
      table.push(row);
    }

    return table;
  }

  return (
    <div className="game">
      <div className="board">
        {board?.map((row, index) => (
          <div
            key={`row:${index}`}
            style={{ marginLeft: `${index * 25}px` }}
            className="tableRow"
          >
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Game;
