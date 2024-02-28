import { Ship } from './ship.js'
import { gameBoard } from './gameBoard.js'

// const ships = {
//     "battleship": Ship('battleship', 4), 
//     "carrier": Ship('carrier', 5),
//     "cruiser": Ship('cruiser', 3),
//     "patrolBoat": Ship('patrolBoat', 2),
//     "submarine": Ship('submarine', 3),
// }

// if (ships["battleship"].isSunk()) {
//     console.log("battleship not sunk!")
// } else {
//     console.log('not sunk!')
// }

// console.log(ships["battleship"].getShipType());


const gb = gameBoard(6, 6);
gb.printBoard();
console.log("                       ");
gb.placeShip(1,0, "battleship", "horizontal");
gb.printBoard();
console.log("                       ");
gb.placeShip(1,1, "cruiser", "vertical");
gb.printBoard();

// gb.receiveAttack(1,1);
// gb.printBoard();

if (gb.receiveAttack(1,1)) {
    gb.printBoard();
}

gb.receiveAttack(2,1);
gb.printBoard();

console.log(gb.isAllShipSunk())