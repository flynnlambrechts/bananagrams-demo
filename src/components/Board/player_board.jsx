"use client";
import { useState, useEffect } from "react";
import Board from "./Board";
import React from "react";
import Tile from "../Tile/tile";

function PlayerBoard(props) {
    const [board, setBoard] = useState([]);
    const [hand, setHand] = useState(props.hand);
    const [activeTile, setActiveTile] = useState("");
    const [width, setWidth] = useState(20);
    const [height, setHeight] = useState(15);

    const tiles = [];

    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            tiles.push(<Tile letter="" row={row + 1} col={col + 1}/>);
        }
    }

    return (
        <>
            <Board board={board} hand={hand} name={props.name} drag={true}>
                {tiles}
            </Board>
        </>
    );
}

export default PlayerBoard;
