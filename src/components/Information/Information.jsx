import { Typography } from "@mui/material";
import React from "react";

function Information(props) {
    return (
        <>
            <Typography variant="h4">Information</Typography>
            <Typography>
                For the UNSW course &apos;Advanced Algorithm Design and
                Analysis&apos; (COMP3821) my group created a Bananagrams Engine.
                The Engine is capable of rapidly winning the game in a
                multiplayer and single player environment. An analytical report
                on how we implemented this can be found&nbsp;
                <a
                    style={{ textDecoration: "underline" }}
                    href="https://github.com/flynnlambrechts/bananagrams_engine_comp3821/blob/report/report.pdf">
                    here
                </a>
                .
            </Typography>
            <Typography>
                Due to the computation cost of running the engine for
                potentially multiple users this is just a demo site for our
                Bananagrams engine. The above illustrates a few examples of how
                the engine played in real games with a delay added between
                steps. In reality the engine could complete the game in less
                than 0.1s consistently.
            </Typography>
        </>
    );
}

export default Information;
