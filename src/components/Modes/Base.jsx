import React from "react";
import Button from "@mui/material/Button";

import CPUBoard from "@/components/Board/CPUBoard";
import PlayerBoard from "@/components/Board/PlayerBoard";
import { Container, Typography, Box } from "@mui/material";
import Credits from "@/components/Credits/Credits";
import Information from "../Information/Information";

function Base({ gameState, handleStart, game_running }) {
    return (
        <main>
            <Container sx={{ maxWidth: "unset" }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <Typography sx={{ display: "inline-block" }} variant="h2">
                        Bananagrams
                    </Typography>
                    <Button
                        sx={{ maxHeight: "40px" }}
                        variant="contained"
                        onClick={handleStart}>
                        {game_running() ? "Reset" : "Start"}{" "}
                    </Button>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        gap: 1,
                        margin: 1,
                    }}>
                    {gameState && (
                        <>
                            {gameState.hand}
                            <CPUBoard
                                name="CPU"
                                width={gameState.cpu.width}
                                height={gameState.cpu.height}
                                board={gameState.cpu.board}
                                hand={gameState.cpu.hand}></CPUBoard>
                            {/* <PlayerBoard
                                name="Player"
                                hand={gameState.player.hand}></PlayerBoard> */}
                        </>
                    )}
                </Box>
            </Container>
            <Container>
                <Information />
                <Credits />
            </Container>
        </main>
    );
}

export default Base;
