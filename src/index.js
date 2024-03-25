import Ship from "./components/ship";
import Player from "./components/player";
import gameBoard from "./components/gameBoard";
import loadGame from "./game/game";
import { renderDragItems, renderDragOnTables, renderTables } from "./game/boardDisplay/renderEffects";
import { genBoardDisplay, genShipPiecesDisplay } from "./game/boardDisplay/genDisplay";


const testingFunc = function(){
    let p1 = Player(true, false); // actual player and has turn
    let p2 = Player(false, true); // cpu and does not have turn
    let p1gb = gameBoard(10, 10);
    let p2gb = gameBoard(10, 10);

    //randomly generate ship placement for player 2 gameboard
    p2.cpuGenShipPlacement(p2gb);

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

    renderDragItems();

    renderDragOnTables("p1", p1gb);


    renderTables("p1", p1gb);
    renderTables("p2", p2gb);

    let startButton = document.getElementById("start_game");
    startButton.addEventListener("click", ()=>{
        if (p1gb.isAllShipPlaced() == true && p2gb.isAllShipPlaced() == true) {
            loadGame(p1, p2, p1gb, p2gb);
            console.log("GAME STARTS NOW")
        }
        else {
            console.log("NOT ALL SHIPS ARE PLACED")
        }
    })
    
    console.log("hello world")
}


testingFunc()

// export {testingFunc}
