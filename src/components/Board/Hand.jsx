import { Box } from "@mui/material";
import Tile from "../Tile/tile";

function Hand(props) {
    return (
        <Box
            sx={{
                display: "flex",
                gap: "2px",
                maxWidth: 400,
                flexWrap: "wrap",
            }}>
            {props.hand.map((letter, i) => (
                <Tile
                    // style={{ width: "50px" }}
                    key={letter + " " + i}
                    letter={letter}></Tile>
            ))}
        </Box>
    );
}

export default Hand;
