import Board from "./Board";
import Tile from "../Tile/tile";

function CPUBoard(props) {
    return (
        <Board {...props}>
            {props.board.map((tile) => (
                <Tile
                    key={tile.letter + tile.coords[0] + " " + tile.coords[1]}
                    onClick={() => addToHand(tile)}
                    letter={tile.letter}
                    row={tile.coords[0]}
                    col={tile.coords[1]}
                />
            ))}
        </Board>
    );
}

export default CPUBoard;
