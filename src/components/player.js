const Player = (turnBool, cpuBool) => {
    let _ifCPU = cpuBool;
    let _currTurn = turnBool;

    const checkIfTurn = () => {
        return _currTurn;
    }
    const updateTurn = () => {
        if (_currTurn != true) {
            _currTurn = true;
        } else {
            _currTurn = false;
        }
    }
    const attack = (rowNum, colNum, targetGameBoard) => {
        if (targetGameBoard.receiveAttack(rowNum, colNum) == true) {
            return true;
        } else {
            return false;
        }
    }
    const cpuAttack = (targetGameBoard) => {
        if (_ifCPU == true) {
            // generate random coords for attack
            let boardSize = targetGameBoard.getSize();
            console.log(boardSize[0], boardSize[1])
            let randomRow = Math.floor(Math.random() * boardSize[0]);
            let randomCol = Math.floor(Math.random() * boardSize[1]);
            console.log(randomCol, randomRow);
            while (targetGameBoard.receiveAttack(randomRow, randomCol) == false) { //if attack is not legal
                // randomize attack coords again
                randomCol = Math.floor(Math.random() * boardSize[0]);
                randomRow = Math.floor(Math.random() * boardSize[1]);
                // loop will iterate until receveAttack returns true and breaks
            }
        } else {
            console.log("Not CPU, can't use this method")
        }
    }

        //randomly generate ship placement for player 2 gameboard
    const cpuGenShipPlacement = (targetGameBoard) => {
        let axises = ["horizontal", "vertical"]
        let availableShips = ["battleship", "carrier", "cruiser", "patrolBoat", "submarine"]

        for (let s = 0; s < availableShips.length; s++){
            // generate random coords for ship placement
            let boardSize = targetGameBoard.getSize();
            console.log(boardSize[0], boardSize[1])
            let randomCol = Math.floor(Math.random() * boardSize[0]);
            let randomRow = Math.floor(Math.random() * boardSize[1]);
            console.log("this is for ship placementof ", availableShips[s], randomCol, randomRow);
            let randomAxis = Math.floor(Math.random() * axises.length)
            while (targetGameBoard.placeShip(randomCol, randomRow, availableShips[s], axises[randomAxis]) == false) {
                randomCol = Math.floor(Math.random() * boardSize[0]);
                randomRow = Math.floor(Math.random() * boardSize[1]);
                randomAxis = Math.floor(Math.random() * axises.length)
            }
            console.log(`${availableShips[s]} is set on ${randomCol}, ${randomRow}`)
        }
    }

    return { checkIfTurn, updateTurn, attack, cpuAttack, cpuGenShipPlacement}
}

export default Player