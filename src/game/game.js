const loadGame = (player1, player2, p1_gameboard, p2_gameboard) => {
    const renderTables = (playerNum) => {
        let currentTable = document.getElementById(`${playerNum}_gameboard`);

        for (let i = 0, row; row = currentTable.rows[i]; i++) {
            for (let j = 0, tile; tile = row.cells[j]; j++) {
                tile.style.backgroundColor = "yellow";
                console.log("LOOP WORKING")
            }
        }
    }
    //add ships for player 1's gameboard
    p1_gameboard.placeShip(0, 0, "battleship", "horizontal")
    p1_gameboard.placeShip(0, 1, "carrier", "horizontal")
    p1_gameboard.placeShip(0, 2, "cruiser", "horizontal")
    p1_gameboard.placeShip(0, 3, "patrolBoat", "horizontal")
    p1_gameboard.placeShip(0, 4, "submarine", "horizontal")


    //add ships for player 2's gameboard
    p2_gameboard.placeShip(0, 0, "battleship", "horizontal")
    p2_gameboard.placeShip(0, 1, "carrier", "horizontal")
    p2_gameboard.placeShip(0, 2, "cruiser", "horizontal")
    p2_gameboard.placeShip(0, 3, "patrolBoat", "horizontal")
    p2_gameboard.placeShip(0, 4, "submarine", "horizontal")

    console.log('p1_gameboard')
    p1_gameboard.printBoard()

    console.log('p2_gameboard')
    p2_gameboard.printBoard()
    
    renderTables("p1");
    renderTables("p2");

}




export default loadGame