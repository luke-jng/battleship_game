/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/gameBoard.js":
/*!*************************************!*\
  !*** ./src/components/gameBoard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/components/ship.js\");\n\r\n\r\nconst gameBoard = (cols, rows) => {\r\n    let _cols = cols;\r\n    let _rows = rows;\r\n\r\n    const getSize = () => {\r\n        return [_cols, _rows]\r\n    }\r\n\r\n    const genBoard = () => {\r\n        let boardArray = []\r\n        for (let y = 0; y < _rows; y++) {\r\n            let currRow = []\r\n            for (let x = 0; x < _cols; x++) {\r\n                //The tiles would remember if a ship is positioned on it, and if the tile was already attacked or not\r\n                currRow.push({shipType: \"None\", tileAttacked: false})\r\n            }\r\n            boardArray.push(currRow);\r\n        }\r\n        return boardArray;\r\n    }\r\n\r\n    let _board = genBoard();\r\n    const ships = {\r\n        \"battleship\": (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('battleship', 4), \r\n        \"carrier\": (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('carrier', 5),\r\n        \"cruiser\": (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('cruiser', 3),\r\n        \"patrolBoat\": (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('patrolBoat', 2),\r\n        \"submarine\": (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('submarine', 3),\r\n    }\r\n    let _sunkenShips = 0;\r\n    let _missAttacks = 0;\r\n\r\n    const placeShip = (col, row, shipType, axis) => {\r\n        if ( axis == 'horizontal' ) {\r\n            let unusedTiles = true; //all of the tiles that the ship wants to be placed on should not be taken\r\n            let enoughTiles = false; //there should be enough tiles to place the entire length of the ship\r\n            if (col + ships[shipType].getShipLength() - 1 < _cols) { // check if enough tiles to place ship length, ie doesnt break column bounds\r\n                enoughTiles = true;\r\n                let endCol = col + ships[shipType].getShipLength() -1\r\n                for (let currCol = col; currCol < endCol; currCol++) { // check each tiles to see if its taken\r\n                    let currTile = _board[row][currCol];\r\n                    if (currTile.shipType != 'None') {\r\n                        unusedTiles = false;\r\n                    }\r\n                }\r\n            }\r\n            if (unusedTiles == true && enoughTiles == true) { //place ship on board\r\n                for (let i = 0; i < ships[shipType].getShipLength(); i++) {\r\n                    _board[row][col+i].shipType = shipType;\r\n                }\r\n                return true;\r\n            }\r\n            else {                                            //don't place ship on board, print error\r\n                if (unusedTiles == false) {\r\n                    console.log('PICK SOMEWHERE ELSE, TILES ARE ALREADY USED')\r\n                }\r\n                if (enoughTiles == false) {\r\n                    console.log('PICK SOMEHWERE ELSE, NOT ENOUGH TILES!')\r\n                }\r\n                return false;\r\n            }\r\n        }\r\n\r\n        if ( axis == 'vertical' ) {\r\n            let unusedTiles = true; //all of the tiles that the ship wants to be placed on should not be taken\r\n            let enoughTiles = false; //there should be enough tiles to place the entire length of the ship\r\n            if (row + ships[shipType].getShipLength() - 1 < _rows) {\r\n                enoughTiles = true;\r\n                let endRow = row + ships[shipType].getShipLength() - 1;\r\n                for (let currRow = row; currRow < endRow; currRow++) {\r\n                    let currTile = _board[currRow][col];\r\n                    if (currTile.shipType != 'None') {\r\n                        unusedTiles = false;\r\n                    }\r\n                }\r\n            }\r\n            if (unusedTiles == true && enoughTiles == true) {\r\n                for (let i = 0; i < ships[shipType].getShipLength(); i++) {\r\n                    _board[row+i][col].shipType = shipType;\r\n                }\r\n                return true;\r\n            }\r\n            else {\r\n                if (unusedTiles == false) {\r\n                    console.log('PICK SOMEWHERE ELSE, TILES ARE ALREADY USED')\r\n                }\r\n                if (enoughTiles == false) {\r\n                    console.log('PICK SOMEHWERE ELSE, NOT ENOUGH TILES!')\r\n                }\r\n                return false;\r\n            }\r\n        }\r\n    }\r\n\r\n    const getBoard = () => {\r\n        return _board;\r\n    }\r\n\r\n    const printBoard = () => {\r\n        for (const row of _board) {\r\n            let currRow = []\r\n            for (const tile of row) {\r\n                if (tile.shipType != 'None') {  // if tile occupied by ship\r\n                    if (!tile.tileAttacked) {   // if tile not hit, push [S]\r\n                        currRow.push('[S]');\r\n                    } else {                    // if tile hit, push [H]\r\n                        currRow.push('[H]');\r\n                    }\r\n                }\r\n                else {                          // if tile not occupied by ship\r\n                    if (!tile.tileAttacked) {   // if tile not hit, push [ ]\r\n                        currRow.push('[ ]');\r\n                    } else {                    // if tile hit, push [M]\r\n                        currRow.push('[M]');\r\n                    }\r\n                }\r\n            }\r\n            console.log(currRow);\r\n        }\r\n    }\r\n    //yis row, x is col\r\n    const receiveAttack = (rowNum, colNum) => {\r\n        if (_board[rowNum][colNum].tileAttacked == false) {\r\n            console.log(`tile at coords [${rowNum}, ${colNum}] has been hit`)\r\n            if (_board[rowNum][colNum].shipType == 'None') { //if tile has no ship\r\n                _board[rowNum][colNum].tileAttacked = true;   //update tile hit status\r\n                _missAttacks++;                                 //update missed attack count\r\n                console.log('the missile missed.')\r\n            } else {                                            //if tile has ship\r\n                _board[rowNum][colNum].tileAttacked = true;   //update tile hit status\r\n                ships[_board[rowNum][colNum].shipType].isHit();   //add hit damage to ship on tile\r\n                if (ships[_board[rowNum][colNum].shipType].isSunk()) {   //check/ if ship is sunk\r\n                    _sunkenShips++;                                         //increment sunken ships\r\n                }\r\n                console.log('the missile hit a ship!')\r\n            }\r\n            return true;\r\n        } else {\r\n            console.log(\"tile already attacked, select another one\")\r\n            return false;\r\n        }\r\n\r\n    }\r\n\r\n    const isAllShipSunk = () => {\r\n        if (_sunkenShips >= 5) {\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    }\r\n\r\n    const getMissedAttacks = () => {\r\n        return _missAttacks;\r\n    }\r\n\r\n    return {getSize, getBoard, printBoard, placeShip, receiveAttack, isAllShipSunk, getMissedAttacks}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);\n\n//# sourceURL=webpack://battleship_game/./src/components/gameBoard.js?");

/***/ }),

/***/ "./src/components/player.js":
/*!**********************************!*\
  !*** ./src/components/player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Player = (turnBool, cpuBool) => {\r\n    let _ifCPU = cpuBool;\r\n    let _currTurn = turnBool;\r\n\r\n    const checkIfTurn = () => {\r\n        return _currTurn;\r\n    }\r\n    const updateTurn = () => {\r\n        if (_currTurn != true) {\r\n            _currTurn = true;\r\n        } else {\r\n            _currTurn = false;\r\n        }\r\n    }\r\n    const attack = (rowNum, colNum, targetGameBoard) => {\r\n        targetGameBoard.receiveAttack(rowNum, colNum);\r\n    }\r\n    const cpuAttack = (targetGameBoard) => {\r\n        if (_ifCPU == true) {\r\n            // generate random coords for attack\r\n            let boardSize = targetGameBoard.getSize();\r\n            console.log(boardSize[0], boardSize[1])\r\n            let randomXCoord = Math.floor(Math.random() * boardSize[0]);\r\n            let randomYCoord = Math.floor(Math.random() * boardSize[1]);\r\n            console.log(randomXCoord, randomYCoord);\r\n            while (targetGameBoard.receiveAttack(randomXCoord, randomYCoord) == false) { //if attack is not legal\r\n                // randomize attack coords again\r\n                randomXCoord = Math.floor(Math.random * boardSize[0]);\r\n                randomYCoord = Math.floor(Math.random * boardSize[1]);\r\n                // loop will iterate until receveAttack returns true and breaks\r\n            }\r\n        } else {\r\n            console.log(\"Not CPU, can't use this method\")\r\n        }\r\n    }\r\n\r\n    return { checkIfTurn, updateTurn, attack, cpuAttack}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship_game/./src/components/player.js?");

/***/ }),

/***/ "./src/components/ship.js":
/*!********************************!*\
  !*** ./src/components/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (shipType, shipLength) => {\r\n    let _shipType = shipType;\r\n    let _shipLength = shipLength;\r\n    let _shipSunk = false;\r\n    let _shipDamage = 0\r\n\r\n    const getShipType = () => {\r\n        return _shipType;\r\n    }\r\n    const getShipDamage = () => {\r\n        return _shipDamage;\r\n    }\r\n    const getShipLength = () => {\r\n        return _shipLength;\r\n    }\r\n    const isHit = () => {\r\n        _shipDamage++;\r\n    }\r\n\r\n    const isSunk = () => {\r\n        if (_shipDamage >= _shipLength) {\r\n            _shipSunk == true;\r\n        } \r\n        return _shipSunk;\r\n    }\r\n    return {isHit, isSunk, getShipType, getShipDamage, getShipLength};\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship_game/./src/components/ship.js?");

/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadGame = (player1, player2, p1_gameboard, p2_gameboard) => {\r\n    const renderTables = (playerNum, currentGameBoard) => {\r\n        let currentTable = document.getElementById(`${playerNum}_gameboard`);\r\n\r\n        for (let i = 0, row; row = currentTable.rows[i]; i++) {\r\n            for (let j = 0, tile; tile = row.cells[j]; j++) {\r\n                if (currentGameBoard.getBoard()[i][j].shipType == \"None\") {\r\n                    if (currentGameBoard.getBoard()[i][j].tileAttacked == false) {\r\n                        tile.style.backgroundColor = \"yellow\";\r\n                    } else {\r\n                        tile.style.backgroundColor = \"black\";\r\n                    }\r\n                }\r\n                else {\r\n                    if (currentGameBoard.getBoard()[i][j].tileAttacked == false) {\r\n                        tile.style.backgroundColor = \"green\";\r\n                    } else {\r\n                        tile.style.backgroundColor = \"red\";\r\n                    }\r\n                }\r\n                console.log(\"LOOP WORKING\")\r\n            }\r\n        }\r\n    }\r\n    //add ships for player 1's gameboard\r\n    p1_gameboard.placeShip(0, 0, \"battleship\", \"horizontal\")\r\n    p1_gameboard.placeShip(0, 1, \"carrier\", \"horizontal\")\r\n    p1_gameboard.placeShip(0, 2, \"cruiser\", \"horizontal\")\r\n    p1_gameboard.placeShip(0, 3, \"patrolBoat\", \"horizontal\")\r\n    p1_gameboard.placeShip(0, 4, \"submarine\", \"horizontal\")\r\n\r\n\r\n    //add ships for player 2's gameboard\r\n    p2_gameboard.placeShip(0, 0, \"battleship\", \"horizontal\")\r\n    p2_gameboard.placeShip(0, 1, \"carrier\", \"horizontal\")\r\n    p2_gameboard.placeShip(0, 2, \"cruiser\", \"horizontal\")\r\n    p2_gameboard.placeShip(0, 3, \"patrolBoat\", \"horizontal\")\r\n    p2_gameboard.placeShip(0, 4, \"submarine\", \"horizontal\")\r\n\r\n    console.log('p1_gameboard')\r\n    p1_gameboard.printBoard()\r\n\r\n    console.log('p2_gameboard')\r\n    p2_gameboard.printBoard()\r\n    \r\n    renderTables(\"p1\", p1_gameboard);\r\n    renderTables(\"p2\", p2_gameboard);\r\n\r\n    player1.attack(0, 0, p2_gameboard);\r\n    player2.cpuAttack(p1_gameboard);\r\n\r\n    renderTables(\"p1\", p1_gameboard);\r\n    renderTables(\"p2\", p2_gameboard);\r\n\r\n    //add event listener to enemy board for attack selection\r\n    // let enemyTable = document.getElementById(\"p2_gameboard\");\r\n    // for (let x = 0, row; row = enemyTable.rows[x]; x++){\r\n    //     for (let y = 0, tile; tile = row.cells[y]; y++) {\r\n    //         tile.addEventListener(\"click\", () => {\r\n    //             console.log(`TILE ${JSON.stringify(row), tile}CLICKED!`)\r\n    //         })\r\n    //     }\r\n    // }\r\n    for (let row = 0; row < p2_gameboard.getSize()[1]; row++) { //row iteration y\r\n        for (let col = 0; col < p2_gameboard.getSize()[0]; col++) { // cell iteration x \r\n            let currentCell = document.getElementById(`p2_tile${row}${col}`);\r\n            currentCell.addEventListener(\"click\", () => {\r\n                console.log(`TILE p2_tile${row}${col} HAS BEEN CLICKED!`)\r\n                if (player1.checkIfTurn() == true) {\r\n                    player1.attack(row, col, p2_gameboard);\r\n                    console.log(`TILE ${row}${col} has been hit`)\r\n                    //RENDER ATTACK\r\n                    renderTables(\"p2\", p2_gameboard);\r\n                    //UPDATE TURN \r\n                    player1.updateTurn();\r\n                    player2.updateTurn();\r\n\r\n\r\n\r\n                    // setTimeout(console.log(\"CHANGING TURNS\"), 15000);\r\n                    // //LET CPU COMMIT ITS TURN\r\n                    // console.log(\"CPUT ATTACK START\")\r\n                    // player2.cpuAttack(p1_gameboard); \r\n                    // setTimeout(console.log(\"timing out\"), 2000);\r\n                    // player2.updateTurn() // set cpu turn to false, \r\n                    // player1.updateTurn() // set player turn to true,\r\n                    // renderTables(\"p1\", p1_gameboard); // render player board after cpu attack\r\n                    // console.log(\"CPU ATTACK END\")\r\n\r\n\r\n\r\n                } else {\r\n                    console.log(\"NOT YOUR TURN, WAIT UNTIL CPU FINISHES TURN!\")\r\n                }\r\n            })\r\n        }\r\n    }\r\n\r\n\r\n    // START GAME LOOP(TRY SET INTERVAL INSTEAD OF WHILE LOOP, SO THE CODE DOESN'T TIME OUT)\r\n    // KEEP THE GAME LOOPING UNTIL A VICTOR IS IDENTIFIED IE ONE OF THE GAMEBOARD'S HAS THEIR SHIPS FULLY SUNK\r\n    // while (p1_gameboard.isAllShipSunk() == false && p2_gameboard.isAllShipSunk() == false) {\r\n    //     if (player2.checkIfTurn() == true) {\r\n    //         console.log(\"CPUT ATTACK START\")\r\n    //         player2.cpuAttack(p1_gameboard); //randomly attacks the playerboard\r\n    //         setTimeout(console.log(\"timing out\"), 2000) //update turns after a set amount of time\r\n    //         player2.updateTurn() // set cpu turn to false, \r\n    //         player1.updateTurn() // set player turn to true,\r\n    //         renderTables(\"p1\", p1_gameboard); // render player board after cpu attack\r\n    //         console.log(\"CPU ATTACK END\")\r\n    //     } \r\n    // }\r\n    const gameLoop = setInterval(() => {\r\n        console.log(\"INTERVAL RUNNING\")\r\n        if (p1_gameboard.isAllShipSunk() == false && p2_gameboard.isAllShipSunk() == false){\r\n            if (player2.checkIfTurn() == true) {\r\n                console.log(\"CPUT ATTACK START\")\r\n                player2.cpuAttack(p1_gameboard); //randomly attacks the playerboard\r\n                player2.updateTurn() // set cpu turn to false, \r\n                player1.updateTurn() // set player turn to true,\r\n                renderTables(\"p1\", p1_gameboard); // render player board after cpu attack\r\n                console.log(\"CPU ATTACK END\")\r\n            } \r\n        } else {\r\n            console.log(\"INTERVAL ENDING\")\r\n            clearInterval(gameLoop)\r\n        }\r\n    }, 1000)\r\n}\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadGame);\r\n\r\n//I will render the table through dom instead of hardcoding it to the html\r\n//I will add event listeners to each cell in the enemy grid to check for button clicks\r\n//when the buttons are clicked, they will check if it is the current player's turn to let the action go through, or ignore the action\r\n// if the action is not on their turn.\n\n//# sourceURL=webpack://battleship_game/./src/game/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ship */ \"./src/components/ship.js\");\n/* harmony import */ var _components_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/player */ \"./src/components/player.js\");\n/* harmony import */ var _components_gameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/gameBoard */ \"./src/components/gameBoard.js\");\n/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game */ \"./src/game/game.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst testingFunc = function(){\r\n    let p1 = (0,_components_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(true, false); // actual player and has turn\r\n    let p2 = (0,_components_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false, true); // cpu and does not have turn\r\n    let p1gb = (0,_components_gameBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(10, 10);\r\n    let p2gb = (0,_components_gameBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(10, 10);\r\n\r\n\r\n    (0,_game_game__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(p1, p2, p1gb, p2gb);\r\n    console.log(\"hello world\")\r\n}\r\n\r\n\r\ntestingFunc()\r\n\r\n// export {testingFunc}\r\n\n\n//# sourceURL=webpack://battleship_game/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;