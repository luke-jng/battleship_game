const loadGame = (player1, player2, p1_gameboard, p2_gameboard) => {

        //render tables
    const renderTables = (playerNum, currentGameBoard) => {
        let currentTable = document.getElementById(`${playerNum}_gameboard`);
    
        for (let i = 0, row; row = currentTable.rows[i]; i++) {
            for (let j = 0, tile; tile = row.cells[j]; j++) {
                if (currentGameBoard.getBoard()[i][j].shipType == "None") {
                    if (currentGameBoard.getBoard()[i][j].tileAttacked == false) {
                        tile.style.backgroundColor = "yellow";
                    } else {
                        tile.style.backgroundColor = "black";
                    }
                }
                else {
                    if (currentGameBoard.getBoard()[i][j].tileAttacked == false) {
                        tile.style.backgroundColor = "green";
                    } else {
                        tile.style.backgroundColor = "red";
                    }
                }
                console.log("LOOP WORKING")
            }
        }
    }

    for (let row = 0; row < p2_gameboard.getSize()[1]; row++) { //row iteration y
        for (let col = 0; col < p2_gameboard.getSize()[0]; col++) { // cell iteration x 
            let currentCell = document.getElementById(`p2_tile${row}${col}`);
            currentCell.addEventListener("click", () => {
                console.log(`TILE p2_tile${row}${col} HAS BEEN CLICKED!`)
                if (player1.checkIfTurn() == true) {
                    if (player1.attack(row, col, p2_gameboard) == true) { // attack is legal and enacted
                        console.log(`TILE ${row}${col} has been hit`)
                        //RENDER ATTACK
                        renderTables("p2", p2_gameboard);
                        //UPDATE TURN 
                        player1.updateTurn();
                        player2.updateTurn();
                    } else {
                        console.log("TRY ANOTHER TILE");
                    }
                } else {
                    console.log("NOT YOUR TURN, WAIT UNTIL CPU FINISHES TURN!")
                }
            })
        }
    }


    // START GAME LOOP(TRY SET INTERVAL INSTEAD OF WHILE LOOP, SO THE CODE DOESN'T TIME OUT)
    // KEEP THE GAME LOOPING UNTIL A VICTOR IS IDENTIFIED IE ONE OF THE GAMEBOARD'S HAS THEIR SHIPS FULLY SUNK
    const gameLoop = setInterval(() => {
        console.log("INTERVAL RUNNING")
        if (p1_gameboard.isAllShipSunk() == false && p2_gameboard.isAllShipSunk() == false){
            if (player2.checkIfTurn() == true) {
                console.log("CPUT ATTACK START")
                player2.cpuAttack(p1_gameboard); //randomly attacks the playerboard
                player2.updateTurn() // set cpu turn to false, 
                player1.updateTurn() // set player turn to true,
                renderTables("p1", p1_gameboard); // render player board after cpu attack
                console.log("CPU ATTACK END")
            } 
        } else {
            console.log("INTERVAL ENDING")
            clearInterval(gameLoop)
        }
    }, 1000)
}




export default loadGame
