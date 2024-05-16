import styles from "./styles.module.css";

function Tile(props) {
    let style = {
        gridColumn: props.col + "/ span 1",
        gridRow: props.row + "/span 1",
    };

    return props.letter !== "" ?  (
        <div className={styles.tile} style={style} {...props}>
            <div>{props.letter}</div>
        </div>
    ) : (
        <div style={style} {...props} className={`${styles.tile} ${styles.blankTile}`}>
            &nbsp;
        </div>
    );
}

export default Tile;
