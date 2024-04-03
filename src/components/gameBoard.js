import Ship from "./ship";
import hitSound from "../game/soundEffects/hit.ogg";
import missSound from "../game/soundEffects/miss.ogg";
import errorSound from "../game/soundEffects/error.ogg";

const gameBoard = (cols, rows) => {
    let _cols = cols;
    let _rows = rows;

    const getSize = () => {
        return [_cols, _rows]
    }

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
    let _placedShips = 0;
    let _sunkenShips = 0;
    let _missAttacks = 0;

    const placeShip = (col, row, shipType, axis) => {
        printBoard();
        if ( axis == 'horizontal' ) {
            let unusedTiles = true; //all of the tiles that the ship wants to be placed on should not be taken
            let enoughTiles = false; //there should be enough tiles to place the entire length of the ship
            if (col + ships[shipType].getShipLength() - 1 < _cols) { // check if enough tiles to place ship length, ie doesnt break column bounds
                enoughTiles = true;
                let endCol = col + ships[shipType].getShipLength() - 1;
                for (let currCol = col; currCol < endCol; currCol++) { // check each tiles to see if its taken
                    let currTile = _board[row][currCol];
                    if (currTile.shipType != 'None') {
                        unusedTiles = false;
                    }
                }
            }
            if (unusedTiles == true && enoughTiles == true) { //place ship on board
                for (let i = 0; i < ships[shipType].getShipLength(); i++) {
                    _board[row][col+i].shipType = shipType;
                }
                _placedShips++;
                return true;
            }
            else {                                            //don't place ship on board, print error
                if (unusedTiles == false) {
                    // console.log('PICK SOMEWHERE ELSE, TILES ARE ALREADY USED')
                    const errorSFX = new Audio(errorSound);
                    errorSFX.play();
                }
                if (enoughTiles == false) {
                    // console.log('PICK SOMEHWERE ELSE, NOT ENOUGH TILES!')
                    const errorSFX = new Audio(errorSound);
                    errorSFX.play();
                }
                return false;
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
                _placedShips++;
                return true;
            }
            else {
                if (unusedTiles == false) {
                    // console.log('PICK SOMEWHERE ELSE, TILES ARE ALREADY USED')
                    const errorSFX = new Audio(errorSound);
                    errorSFX.play();
                }
                if (enoughTiles == false) {
                    // console.log('PICK SOMEHWERE ELSE, NOT ENOUGH TILES!')
                    const errorSFX = new Audio(errorSound);
                    errorSFX.play();
                }
                return false;
            }
        }
    }

    const getBoard = () => {
        return _board;
    }

    const printBoard = () => {
        for (const row of _board) {
            let currRow = []
            for (const tile of row) {
                if (tile.shipType != 'None') {  // if tile occupied by ship
                    if (!tile.tileAttacked) {   // if tile not hit, push [S]
                        switch(tile.shipType) {
                            case "battleship":
                                currRow.push('[B]');
                                break;
                            case "carrier":
                                currRow.push('[C]');
                                break;
                            case "cruiser":
                                currRow.push('[c]');
                                break;
                            case "patrolBoat":
                                currRow.push('[p]');
                                break;
                            case "submarine":
                                currRow.push('[S]')
                                break;
                        }
                        // currRow.push('[S]');
                    } else {                    // if tile hit, push [H]
                        currRow.push('[H]');
                    }
                }
                else {                          // if tile not occupied by ship
                    if (!tile.tileAttacked) {   // if tile not hit, push [ ]
                        currRow.push('[ ]');
                    } else {                    // if tile hit, push [M]
                        currRow.push('[M]');
                    }
                }
            }
            console.log(currRow);
        }
    }
    //yis row, x is col
    const receiveAttack = (rowNum, colNum) => {
        console.log(`${_board[rowNum][colNum].shipType} is on clicked tile`)
        if (_board[rowNum][colNum].tileAttacked == false) {
            console.log(`tile at coords [${rowNum}, ${colNum}] has been hit`)
            if (_board[rowNum][colNum].shipType == 'None') { //if tile has no ship
                _board[rowNum][colNum].tileAttacked = true;   //update tile hit status
                _missAttacks++;                                 //update missed attack count
                console.log('the missile missed.')
                console.log(`amount of missed attacks: ${_missAttacks}`)

                //RENDER MISSED SOUND
                const missSFX = new Audio(missSound);
                missSFX.play();

            } else {                                            //if tile has ship
                _board[rowNum][colNum].tileAttacked = true;   //update tile hit status
                ships[_board[rowNum][colNum].shipType].isHit();   //add hit damage to ship on tile

                //RENDER HIT SOUND
                const hitSFX = new Audio(hitSound);
                hitSFX.play();

                if (ships[_board[rowNum][colNum].shipType].isSunk()) {   //check/ if ship is sunk
                    _sunkenShips++;                                         //increment sunken ships
                    // console.log(_board[rowNum][colNum].shipType)
                    // console.log(_sunkenShips)
                    // console.log(`${_board[rowNum][colNum].shipType} HAS SUNK`)
                }

            }
            return true;
        } else {
            console.log("tile already attacked, select another one")
            return false;
        }

    }

    const isAllShipSunk = () => {
        if (_sunkenShips >= 5) {
            return true;
        }
        else {
            return false;
        }
    }

    const isAllShipPlaced = () => {
        if (_placedShips >= 5) {
            return true;
        }
        else {
            return false;
        }
    }

    const getMissedAttacks = () => {
        return _missAttacks;
    }

    return {getSize, getBoard, printBoard, placeShip, receiveAttack, isAllShipSunk, isAllShipPlaced, getMissedAttacks}
}

export default gameBoard