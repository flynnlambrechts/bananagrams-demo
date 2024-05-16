import React, { useState, useEffect, useMemo } from "react";
import Base from "./Base";

const NUM_GAMES = 4;

function DemoMode(props) {
    const [running, setRunning] = useState(false);
    const [gameNumber, setGameNumber] = useState(0);
    const [gameStep, setGameStep] = useState(0);
    const [gameData, setGameData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "bananagrams-data/data-" + gameNumber + ".json"
                );
                const data = await response.json();
                setGameData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [gameNumber]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (running && gameData) {
                if (gameStep >= gameData.length - 1) {
                    setRunning(false);
                } else {
                    setGameStep((prevStep) => prevStep + 1);
                }
            }
        }, 100);

        return () => clearInterval(interval);
    }, [running, gameStep, gameData, gameNumber]);

    const startGame = () => {
        if (running) {
            setRunning(false);
        } else {
            setRunning(true);
            setGameNumber((gameNumber + 1) % NUM_GAMES);
            setGameStep(0);
        }
    };

    return (
        <>
            {
                <Base
                    gameState={gameData && gameData[gameStep]}
                    handleStart={startGame}
                    game_running={() => running}
                />
            }
        </>
    );
}

export default DemoMode;
