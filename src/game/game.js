import { renderTables } from "./boardDisplay/renderEffects";
import hitSound from "./soundEffects/hit.ogg";
import errorSound from "./soundEffects/error.ogg"

const loadGame = (player1, player2, p1_gameboard, p2_gameboard) => {

    for (let row = 0; row < p2_gameboard.getSize()[1]; row++) {
        for (let col = 0; col < p2_gameboard.getSize()[0]; col++) {
            let currentCell = document.getElementById(`p2_tile${row}${col}`);
            currentCell.addEventListener("click", () => {
                if (player1.checkIfTurn() == true) {
                    if (player1.attack(row, col, p2_gameboard) == true) { //PLAYER 1 ENACTS VALID ATTACK
                        //PLAY ATTACK SOUND
                        // const hitSFX = new Audio(hitSound);
                        // hitSFX.play();
                        
                        //RENDER ATTACK ON PLAYER 2 BOARD
                        renderTables("p2", p2_gameboard);
                        //UPDATE TURN 
                        player1.updateTurn();
                        player2.updateTurn();
                    } else {
                        //PLAY ERROR SOUND
                        const errorSFX = new Audio(errorSound);
                        errorSFX.play();
                    }
                } else {
                    // PLAY ERROR SOUND
                    const errorSFX = new Audio(errorSound);
                    errorSFX.play();
                }
            })
        }
    }


    // START GAME LOOP(TRY SET INTERVAL INSTEAD OF WHILE LOOP, SO THE CODE DOESN'T TIME OUT)
    // KEEP THE GAME LOOPING UNTIL A VICTOR IS IDENTIFIED IE ONE OF THE GAMEBOARD'S HAS THEIR SHIPS FULLY SUNK
    const gameLoop = setInterval(() => {
        if (p1_gameboard.isAllShipSunk() == false && p2_gameboard.isAllShipSunk() == false){
            if (player2.checkIfTurn() == true) {
                //PLAYER 2 RANDOMLY ATTACKS PLAYER 1 GAMEBOARD WITH VALID MOVE
                player2.cpuAttack(p1_gameboard);

                //PLAY ATTACK SOUND
                // const hitSFX = new Audio(hitSound);
                // hitSFX.play();

                //RENDER ATTACK ON PLAYER 1 BOARD
                renderTables("p1", p1_gameboard); 

                //UPDATE TURN
                player2.updateTurn();
                player1.updateTurn();
            } 
        } else { //A PLAYER'S SHIPS HAVE ALL SUNK
            if (p1_gameboard.isAllShipSunk() == true) {
                console.log("PLAYER 2 WINS") //use status modal to display victory
            }
            if (p2_gameboard.isAllShipSunk() == true) {
                console.log("PLAYER 1 WINS") //use status modal to display victory
            }
            console.log("INTERVAL ENDING")
            clearInterval(gameLoop)
        }
    }, 3000)
}




export default loadGame
