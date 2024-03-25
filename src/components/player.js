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
            let randomXCoord = Math.floor(Math.random() * boardSize[0]);
            let randomYCoord = Math.floor(Math.random() * boardSize[1]);
            console.log(randomXCoord, randomYCoord);
            while (targetGameBoard.receiveAttack(randomXCoord, randomYCoord) == false) { //if attack is not legal
                // randomize attack coords again
                randomXCoord = Math.floor(Math.random() * boardSize[0]);
                randomYCoord = Math.floor(Math.random() * boardSize[1]);
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
            let randomXCoord = Math.floor(Math.random() * boardSize[0]);
            let randomYCoord = Math.floor(Math.random() * boardSize[1]);
            console.log(randomXCoord, randomYCoord);
            let randomAxis = Math.floor(Math.random() * axises.length)
            while (targetGameBoard.placeShip(randomXCoord, randomYCoord, availableShips[s], axises[randomAxis]) == false) {
                randomXCoord = Math.floor(Math.random() * boardSize[0]);
                randomYCoord = Math.floor(Math.random() * boardSize[1]);
                randomAxis = Math.floor(Math.random() * axises.length)
            }
            console.log(`${availableShips[s]} is set on ${randomXCoord}, ${randomYCoord}`)
        }
    }

    return { checkIfTurn, updateTurn, attack, cpuAttack, cpuGenShipPlacement}
}

export default Player