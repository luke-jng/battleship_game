import Ship from "./components/ship";
import Player from "./components/player";
import gameBoard from "./components/gameBoard";
import loadGame from "./game/game";
import { renderDragItems, renderDragOnTables, renderTables } from "./game/boardDisplay/renderEffects";
import { genBoardDisplay, genShipPiecesDisplay } from "./game/boardDisplay/genDisplay";
import { endGameModal, rulesModal } from "./game/gameStatus/modalPopups";
import errorSound from "./game/soundEffects/error.ogg"
import { updateInfoToSetUpGame, updateInfoToPlayerTurn } from "./game/gameStatus/gameInfo";

const setupGame = function(){
    let p1 = Player(true, false); // actual player and has turn
    let p2 = Player(false, true); // cpu and does not have turn
    let p1gb = gameBoard(10, 10);
    let p2gb = gameBoard(10, 10);

    //randomly generate ship placement for player 2 gameboard
    p2.cpuGenShipPlacement(p2gb);
    p2gb.printBoard(); // print cpu board for debugging

    genBoardDisplay("p1");
    genBoardDisplay("p2");
    genShipPiecesDisplay();

    const flipShipAxis = () => {
        let flipButton = document.getElementById('flip');
        let allDraggableItems = document.querySelectorAll(".draggable");
        flipButton.addEventListener('click', ()=>{
            allDraggableItems.forEach(item => {
                if (item.dataset.axis == "horizontal") {
                    item.dataset.axis = "vertical";
                    item.id = item.id + "_vertical"
                } else {
                    item.dataset.axis = "horizontal";
                    item.id = (item.id).split("_vertical")[0]
                }
            })
        })
    }
    flipShipAxis();

    const checkRules = () => {
        let ruleButton = document.getElementById("check_rules");
        ruleButton.addEventListener("click", ()=>{
            rulesModal();
        })
    }
    checkRules();

    renderDragItems(); //render ship dragging

    renderDragOnTables("p1", p1gb); //render hover effect for ship dragging on player table


    updateInfoToSetUpGame();
    renderTables("p1", p1gb); // render player1 and player 2 gameboards
    renderTables("p2", p2gb);

    let startButton = document.getElementById("start_game");
    startButton.addEventListener("click", ()=>{
        if (startButton.dataset.state == "start") {
            if (p1gb.isAllShipPlaced() == true && p2gb.isAllShipPlaced() == true) {
                updateInfoToPlayerTurn();
                loadGame(p1, p2, p1gb, p2gb);
                // updateInfoToPlayerTurn();
                // console.log("GAME STARTS NOW")
                startButton.innerText = "END GAME";
                startButton.dataset.state = "end";
            }
            // else {
            //     console.log("NOT ALL SHIPS ARE PLACED")
            // }
        } else {
            endGameModal();
        }

    })
}


setupGame();

// export {testingFunc}
