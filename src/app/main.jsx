"use client";
import { useState, useEffect } from "react";

import styles from "./page.module.css";

import DemoMode from "@/components/Modes/DemoMode";
import LiveMode from "@/components/Modes/LiveMode";

function Main(props) {
    const [gameState, setGameState] = useState();

    const DEMO = true;
    return DEMO ? <DemoMode /> : <LiveMode />;
}

export default Main;
