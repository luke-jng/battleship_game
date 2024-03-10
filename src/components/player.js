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

    return { checkIfTurn, updateTurn, attack, cpuAttack}
}

export default Player