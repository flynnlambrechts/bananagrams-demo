import React from "react";
import Base from "./Base";

function LiveMode(props) {
    React.useEffect(() => {
        const fetchData = async () => {
            // console.log("FETCHING GAME STATE");
            try {
                // console.log("Fetching");
                const response = await fetch(
                    "http://127.0.0.1:5000/game_state"
                );
                const jsonData = await response.json();
                // console.log(response);
                setGameState(jsonData);
            } catch (error) {
                console.log(error);
                console.error("Error fetching data:", error);
            }
        };

        // Fetch data initially
        fetchData();
        // console.log(gameState);

        // Polling interval (in milliseconds)
        const interval = setInterval(fetchData, 1000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    });

    const reset = () => {
        const response = fetch("http://127.0.0.1:5000/reset").then(() =>
            console.log("reset")
        );
    };

    const start = () => {
        const response = fetch("http://127.0.0.1:5000/start").then(() =>
            console.log("start")
        );
    };

    const handleStart = () => {
        if (game_running()) {
            reset();
        } else {
            start();
        }
    };

    const game_running = () => {
        console.log(gameState);
        return gameState && gameState.cpu.board.length;
    };
    return (
        <>
            <Base
                gameState={gameState}
                handleStart={handleStart}
                game_running={game_running}
            />
        </>
    );
}

export default LiveMode;
