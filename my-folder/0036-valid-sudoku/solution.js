/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    //keep track of the 3*3 grid (there r 9 of them)
    //keep track of of each row (9)
    //keep track of each column (9)

    let colSets = Array(board.length).fill(null).map(() => new Set());

    let gridSets = Array(9).fill(null).map(() => new Set());

    for (let i = 0; i < board.length; i++) {
        const row = board[i];

        let rowSet = new Set();

        for (let j = 0; j < row.length; j++) {
            const cell = board[i][j];

            if (cell != ".") {
                if (rowSet.has(cell)) {
                    return false;
                } else {
                    rowSet.add(cell);
                }

                if (colSets[j].has(cell)) {
                    return false;
                } else {
                    colSets[j].add(cell);
                }

            
                let gridIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (gridSets[gridIndex].has(cell)) {
                    return false;
                } else {
                    gridSets[gridIndex].add(cell);
                }
            }

        }
    }
    return true;

};
