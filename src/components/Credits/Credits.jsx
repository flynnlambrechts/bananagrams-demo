import React from "react";
import { Typography } from "@mui/material";

function Credits(props) {
    return (
        <>
            <Typography variant="h4">Credits</Typography>
            <Typography>
                Credit to the following for their work on the backend
            </Typography>
            <ul style={{ marginLeft: "20px" }}>
                <li>Flynn Lambrechts</li>
                <li>Kyler Blackburn</li>
                <li>Julian Zincone</li>
                <li>Tim Tang</li>
            </ul>
        </>
    );
}

export default Credits;
