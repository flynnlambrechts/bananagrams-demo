import styles from "./styles.module.css";
import Tile from "../Tile/tile";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Hand from "./Hand";

function Board(props) {
    return (
        <Box>
            <Box
                className={styles.board}
                styles={{
                    gridTemplateColumns: "repeat(" + props.width + ", 1fr)",
                    gridTemplateRows: "repeat(" + props.height + ", 1fr)",
                }}>
                {props.children}
            </Box>
            <Typography variant="h3">{props.name}</Typography>
            <Hand hand={props.hand} />
        </Box>
    );
}
export default Board;
