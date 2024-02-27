import { Ship } from './ship.js'

const gameBoard = (cols, rows) => {
    let _cols = cols;
    let _rows = rows;

    const genBoard = () => {
        let boardArray = []
        for (let y = 0; y < _rows; y++) {
            let currRow = []
            for (let x = 0; x < _cols; x++) {
                //The tiles would remember if a ship is positioned on it, and if the tile was already attacked or not
                currRow.push({shipType: "None", tileAttacked: false})
            }
            boardArray.push(currRow);
        }
        return boardArray;
    }

    let _board = genBoard();
    const ships = {
        "battleship": Ship('battleship', 4), 
        "carrier": Ship('carrier', 5),
        "cruiser": Ship('cruiser', 3),
        "patrolBoat": Ship('patrolBoat', 2),
        "submarine": Ship('submarine', 3),
    }
    let _sunkenShips = 0;
    let _missAttacks = 0;

    const placeShip = (col, row, shipType, axis) => {
        if ( axis == 'horizontal' ) {
            let unusedTiles = true; //all of the tiles that the ship wants to be placed on should not be taken
            let enoughTiles = false; //there should be enough tiles to place the entire length of the ship
            if (col + ships[shipType].getShipLength() - 1 < _cols) { // check if enough tiles to place ship length, ie doesnt break column bounds
                enoughTiles = true;
                let endCol = col + ships[shipType].getShipLength() -1
                for (let currCol = col; currCol < endCol; currCol++) { // check each tiles to see if its taken
                    let currTile = _board[row][currCol];
                    if (currTile.shipType != 'None') {
                        unusedTiles = false;
                    }
                }
            }
            if (unusedTiles == true && enoughTiles == true) {
                for (let i = 0; i < ships[shipType].getShipLength(); i++) {
                    _board[row][col+i].shipType = shipType;
                }
            }
            else {
                if (unusedTiles == false) {
                    console.log('PICK SOMEWHERE ELSE, TILES ARE ALREADY USED')
                }
                if (enoughTiles == false) {
                    console.log('PICK SOMEHWERE ELSE, NOT ENOUGH TILES!')
                }
            }
        }

        if ( axis == 'vertical' ) {
            let unusedTiles = true; //all of the tiles that the ship wants to be placed on should not be taken
            let enoughTiles = false; //there should be enough tiles to place the entire length of the ship
            if (row + ships[shipType].getShipLength() - 1 < _rows) {
                enoughTiles = true;
                let endRow = row + ships[shipType].getShipLength() - 1;
                for (let currRow = row; currRow < endRow; currRow++) {
                    let currTile = _board[currRow][col];
                    if (currTile.shipType != 'None') {
                        unusedTiles = false;
                    }
                }
            }
            if (unusedTiles == true && enoughTiles == true) {
                for (let i = 0; i < ships[shipType].getShipLength(); i++) {
                    _board[row+i][col].shipType = shipType;
                }
            }
            else {
                if (unusedTiles == false) {
                    console.log('PICK SOMEWHERE ELSE, TILES ARE ALREADY USED')
                }
                if (enoughTiles == false) {
                    console.log('PICK SOMEHWERE ELSE, NOT ENOUGH TILES!')
                }
            }
        }
    }

    const printBoard = () => {
        for (const row of _board) {
            let currRow = []
            for (const tile of row) {
                if (tile.shipType != 'None') {  // if tile occupied by ship
                    if (!tile.tileAttacked) {   // if tile not hit, push [S]
                        currRow.push('[S]');
                    } else {                    // if tile hit, push [H]
                        currRow.push('[H]');
                    }
                }
                else {                          // if tile not occupied by ship
                    if (!tile.tileAttacked) {   // if tile not hit, push [ ]
                        currRow.push('[ ]');
                    } else {                    // if tile hit, push [M]
                        currRow.push('[m]');
                    }
                }
            }
            console.log(currRow);
        }
    }

    // const receiveAttack = (yCoords, xCoords) => {
    //     if (_board[yCoords][xCoords].tileAttacked == false) {
    //         if (_board[yCoords][xCoords].shipType == 'None') {
    //             _board[yCoords][xCoords].tileAttacked = true;
    //         } else {
    //             _board[yCoords][xCoords].tileAttacked = true;
    //             ships[_board[yCoords][xCoords].shipType].isHit();
    //             if (ships[_board[yCoords][xCoords].shipType].isSunk()) {
    //                 _sunkenShips++;
    //             }
    //         }
    //     } else {
    //         console.log("tile already attacked, select another one")
    //     }

    // }
    return {_board, printBoard, placeShip}
}

export { gameBoard }