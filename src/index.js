import Ship from "./components/ship";
import Player from "./components/player";
import gameBoard from "./components/gameBoard";
import loadGame from "./game/game";


const testingFunc = function(){
    let p1 = Player(true, false); // actual player and has turn
    let p2 = Player(false, true); // cpu and does not have turn
    let p1gb = gameBoard(10, 10);
    let p2gb = gameBoard(10, 10);


    loadGame(p1, p2, p1gb, p2gb);
    console.log("hello world")
}


testingFunc()

// export {testingFunc}
