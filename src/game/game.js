import { renderTables } from "./boardDisplay/renderEffects";

const loadGame = (player1, player2, p1_gameboard, p2_gameboard) => {

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
        console.log(p1_gameboard.isAllShipSunk(), p2_gameboard.isAllShipSunk())
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
            if (p1_gameboard.isAllShipSunk() == true) {
                console.log("PLAYER 2 WINS")
            }
            if (p2_gameboard.isAllShipSunk() == true) {
                console.log("PLAYER 1 WINS")
            }
            console.log("INTERVAL ENDING")
            clearInterval(gameLoop)
        }
    }, 1000)
}




export default loadGame
