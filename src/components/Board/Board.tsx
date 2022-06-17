import React, { useEffect, useState } from "react";
import { constants } from "../../assets";
import "./board.css";

const { boardConfig } = constants;
const BOARDSIZE = boardConfig["BOARDSIZE"];

function Board() {
  const [board, setBoard] = useState<Array<Array<JSX.Element>>>([]);
  const [player, _setPlayer] = useState(true);

  useEffect(() => {
    setBoard(createTable);
  }, []);

  function checkColor(fila: Number, columna: Number) {
    const borderStyle: string[] = [];

    if (columna === 0) borderStyle.push("horizontalLeftBorder");
    if (columna === BOARDSIZE - 1) borderStyle.push("horizontalRightBorder");

    if (fila === 0) borderStyle.push("verticalTopBorder");
    if (fila === BOARDSIZE - 1) borderStyle.push("verticalBottomBorder");

    return borderStyle.join(" ");
  }

  function playCell(cellId: string) {
    const cell = document.getElementById(cellId);
    cell?.style.setProperty("--cell-color", player ? "green" : "red");
    // setPlayer((player) => !player);
  }

  function createTable() {
    const table: JSX.Element[][] = [];
    for (let i = 0; i < BOARDSIZE; i++) {
      const row: JSX.Element[] = [];
      for (let j = 0; j < BOARDSIZE; j++) {
        row.push(
          <div
            className={`tableCell ${checkColor(i, j)}`}
            key={`${i}:${j}`}
            id={`${i}:${j}`}
            onClick={(event) => {
              const target = event.target as HTMLElement;
              playCell(target.id);
            }}
          />
        );
      }
      table.push(row);
    }

    return table;
  }

  return (
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
  );
}

export default Board;
