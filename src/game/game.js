const loadGame = (player1, player2, p1_gameboard, p2_gameboard) => {
    //flip ship axis on flip button click
    const flixShipAxis = () => {
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
    flixShipAxis();
    //render draggable items
    const renderDragItems = () => {
        let allDraggableItems = document.querySelectorAll(".draggable");
        allDraggableItems.forEach(item => {
            item.addEventListener("dragstart", ()=>{
                item.classList.add("dragging");
            })
            item.addEventListener("dragend", ()=>{
                item.classList.remove("dragging");
            })
        })
    }
    renderDragItems();
    //remove ship from pieces box
    const removePlacedShip = (currDivElem) => {
        currDivElem.parentNode.removeChild(currDivElem);
    }
    //render hover effect
    const renderDragOnTables = (playerNum, currentGameBoard) => {
        for (let row=0; row < currentGameBoard.getSize()[1]; row++){
            for (let col=0; col<currentGameBoard.getSize()[0]; col++){
                let currentCell = document.getElementById(`${playerNum}_tile${row}${col}`);
                currentCell.addEventListener("dragover", (e)=> {
                    e.preventDefault();
                    console.log("dragging something over tile:", `${playerNum}_tile${row}${col}`)
                    currentCell.style.borderColor = "black"
                })
                currentCell.addEventListener("dragend", (e)=> {
                    e.preventDefault();
                    console.log("dragging something over tile:", `${playerNum}_tile${row}${col}`)
                    currentCell.style.borderColor = "white"
                })
                currentCell.addEventListener("dragleave", (e)=> {
                    e.preventDefault();
                    console.log("dragging something over tile:", `${playerNum}_tile${row}${col}`)
                    currentCell.style.borderColor = "white"
                })
                currentCell.addEventListener("drop", (e)=> {
                    e.preventDefault();
                    let dragItem = document.querySelector('.dragging');
                    console.log(dragItem)
                    console.log("dropping something on tile:", `${playerNum}_tile${row}${col}`)
                    currentCell.style.borderColor = "white"
                    if (currentGameBoard.placeShip(col, row, dragItem.dataset.shiptype, dragItem.dataset.axis) == true) {
                        renderTables(playerNum, currentGameBoard); //update table display
                        removePlacedShip(dragItem);
                    }
                })
            }
        }
    }
    renderDragOnTables("p1", p1_gameboard);
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
    //add ships for player 1's gameboard
    // p1_gameboard.placeShip(0, 0, "battleship", "horizontal")
    // p1_gameboard.placeShip(0, 1, "carrier", "horizontal")
    // p1_gameboard.placeShip(0, 2, "cruiser", "horizontal")
    // p1_gameboard.placeShip(0, 3, "patrolBoat", "horizontal")
    // p1_gameboard.placeShip(0, 4, "submarine", "horizontal")


    //add ships for player 2's gameboard
    // p2_gameboard.placeShip(0, 0, "battleship", "horizontal")
    // p2_gameboard.placeShip(0, 1, "carrier", "horizontal")
    // p2_gameboard.placeShip(0, 2, "cruiser", "horizontal")
    // p2_gameboard.placeShip(0, 3, "patrolBoat", "horizontal")
    // p2_gameboard.placeShip(0, 4, "submarine", "horizontal")

    // console.log('p1_gameboard')
    // p1_gameboard.printBoard()

    // console.log('p2_gameboard')
    // p2_gameboard.printBoard()
    
    renderTables("p1", p1_gameboard);
    renderTables("p2", p2_gameboard);

    // player1.attack(0, 0, p2_gameboard);
    // player2.cpuAttack(p1_gameboard);

    // renderTables("p1", p1_gameboard);
    // renderTables("p2", p2_gameboard);

    //add event listener to enemy board for attack selection
    // let enemyTable = document.getElementById("p2_gameboard");
    // for (let x = 0, row; row = enemyTable.rows[x]; x++){
    //     for (let y = 0, tile; tile = row.cells[y]; y++) {
    //         tile.addEventListener("click", () => {
    //             console.log(`TILE ${JSON.stringify(row), tile}CLICKED!`)
    //         })
    //     }
    // }
    // for (let row = 0; row < p2_gameboard.getSize()[1]; row++) { //row iteration y
    //     for (let col = 0; col < p2_gameboard.getSize()[0]; col++) { // cell iteration x 
    //         let currentCell = document.getElementById(`p2_tile${row}${col}`);
    //         currentCell.addEventListener("click", () => {
    //             console.log(`TILE p2_tile${row}${col} HAS BEEN CLICKED!`)
    //             if (player1.checkIfTurn() == true) {
    //                 if (player1.attack(row, col, p2_gameboard) == true) { // attack is legal and enacted
    //                     console.log(`TILE ${row}${col} has been hit`)
    //                     //RENDER ATTACK
    //                     renderTables("p2", p2_gameboard);
    //                     //UPDATE TURN 
    //                     player1.updateTurn();
    //                     player2.updateTurn();
    //                 } else {
    //                     console.log("TRY ANOTHER TILE");
    //                 }




                    // setTimeout(console.log("CHANGING TURNS"), 15000);
                    // //LET CPU COMMIT ITS TURN
                    // console.log("CPUT ATTACK START")
                    // player2.cpuAttack(p1_gameboard); 
                    // setTimeout(console.log("timing out"), 2000);
                    // player2.updateTurn() // set cpu turn to false, 
                    // player1.updateTurn() // set player turn to true,
                    // renderTables("p1", p1_gameboard); // render player board after cpu attack
                    // console.log("CPU ATTACK END")



    //             } else {
    //                 console.log("NOT YOUR TURN, WAIT UNTIL CPU FINISHES TURN!")
    //             }
    //         })
    //     }
    // }


    // START GAME LOOP(TRY SET INTERVAL INSTEAD OF WHILE LOOP, SO THE CODE DOESN'T TIME OUT)
    // KEEP THE GAME LOOPING UNTIL A VICTOR IS IDENTIFIED IE ONE OF THE GAMEBOARD'S HAS THEIR SHIPS FULLY SUNK
    // while (p1_gameboard.isAllShipSunk() == false && p2_gameboard.isAllShipSunk() == false) {
    //     if (player2.checkIfTurn() == true) {
    //         console.log("CPUT ATTACK START")
    //         player2.cpuAttack(p1_gameboard); //randomly attacks the playerboard
    //         setTimeout(console.log("timing out"), 2000) //update turns after a set amount of time
    //         player2.updateTurn() // set cpu turn to false, 
    //         player1.updateTurn() // set player turn to true,
    //         renderTables("p1", p1_gameboard); // render player board after cpu attack
    //         console.log("CPU ATTACK END")
    //     } 
    // }
    // const gameLoop = setInterval(() => {
    //     console.log("INTERVAL RUNNING")
    //     if (p1_gameboard.isAllShipSunk() == false && p2_gameboard.isAllShipSunk() == false){
    //         if (player2.checkIfTurn() == true) {
    //             console.log("CPUT ATTACK START")
    //             player2.cpuAttack(p1_gameboard); //randomly attacks the playerboard
    //             player2.updateTurn() // set cpu turn to false, 
    //             player1.updateTurn() // set player turn to true,
    //             renderTables("p1", p1_gameboard); // render player board after cpu attack
    //             console.log("CPU ATTACK END")
    //         } 
    //     } else {
    //         console.log("INTERVAL ENDING")
    //         clearInterval(gameLoop)
    //     }
    // }, 1000)
}




export default loadGame

//I will render the table through dom instead of hardcoding it to the html
//I will add event listeners to each cell in the enemy grid to check for button clicks
//when the buttons are clicked, they will check if it is the current player's turn to let the action go through, or ignore the action
// if the action is not on their turn.