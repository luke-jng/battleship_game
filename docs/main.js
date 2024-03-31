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

/***/ "./src/game/soundEffects/error.ogg":
/*!*****************************************!*\
  !*** ./src/game/soundEffects/error.ogg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"94f7aa481d74f89c9388c9a7cb15dbb5.ogg\");\n\n//# sourceURL=webpack://battleship_game/./src/game/soundEffects/error.ogg?");

/***/ }),

/***/ "./src/game/soundEffects/hit.ogg":
/*!***************************************!*\
  !*** ./src/game/soundEffects/hit.ogg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"6675451ec4c46d9562a107523da955c7.ogg\");\n\n//# sourceURL=webpack://battleship_game/./src/game/soundEffects/hit.ogg?");

/***/ }),

/***/ "./src/game/soundEffects/miss.ogg":
/*!****************************************!*\
  !*** ./src/game/soundEffects/miss.ogg ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"6658b58685942ef8316c035188c09120.ogg\");\n\n//# sourceURL=webpack://battleship_game/./src/game/soundEffects/miss.ogg?");

/***/ }),

/***/ "./src/components/gameBoard.js":
/*!*************************************!*\
  !*** ./src/components/gameBoard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/components/ship.js\");\n/* harmony import */ var _game_soundEffects_hit_ogg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/soundEffects/hit.ogg */ \"./src/game/soundEffects/hit.ogg\");\n/* harmony import */ var _game_soundEffects_miss_ogg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/soundEffects/miss.ogg */ \"./src/game/soundEffects/miss.ogg\");\n/* harmony import */ var _game_soundEffects_error_ogg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../game/soundEffects/error.ogg */ \"./src/game/soundEffects/error.ogg\");\n\r\n\r\n\r\n\r\n\r\nconst gameBoard = (cols, rows) => {\r\n    let _cols = cols;\r\n    let _rows = rows;\r\n\r\n    const getSize = () => {\r\n        return [_cols, _rows]\r\n    }\r\n\r\n    const genBoard = () => {\r\n        let boardArray = []\r\n        for (let y = 0; y < _rows; y++) {\r\n            let currRow = []\r\n            for (let x = 0; x < _cols; x++) {\r\n                //The tiles would remember if a ship is positioned on it, and if the tile was already attacked or not\r\n                currRow.push({shipType: \"None\", tileAttacked: false})\r\n            }\r\n            boardArray.push(currRow);\r\n        }\r\n        return boardArray;\r\n    }\r\n\r\n    let _board = genBoard();\r\n    const ships = {\r\n        \"battleship\": (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('battleship', 4), \r\n        \"carrier\": (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('carrier', 5),\r\n        \"cruiser\": (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('cruiser', 3),\r\n        \"patrolBoat\": (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('patrolBoat', 2),\r\n        \"submarine\": (0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('submarine', 3),\r\n    }\r\n    let _placedShips = 0;\r\n    let _sunkenShips = 0;\r\n    let _missAttacks = 0;\r\n\r\n    const placeShip = (col, row, shipType, axis) => {\r\n        if ( axis == 'horizontal' ) {\r\n            let unusedTiles = true; //all of the tiles that the ship wants to be placed on should not be taken\r\n            let enoughTiles = false; //there should be enough tiles to place the entire length of the ship\r\n            if (col + ships[shipType].getShipLength() - 1 < _cols) { // check if enough tiles to place ship length, ie doesnt break column bounds\r\n                enoughTiles = true;\r\n                let endCol = col + ships[shipType].getShipLength() - 1;\r\n                for (let currCol = col; currCol < endCol; currCol++) { // check each tiles to see if its taken\r\n                    let currTile = _board[row][currCol];\r\n                    if (currTile.shipType != 'None') {\r\n                        unusedTiles = false;\r\n                    }\r\n                }\r\n            }\r\n            if (unusedTiles == true && enoughTiles == true) { //place ship on board\r\n                for (let i = 0; i < ships[shipType].getShipLength(); i++) {\r\n                    _board[row][col+i].shipType = shipType;\r\n                }\r\n                _placedShips++;\r\n                return true;\r\n            }\r\n            else {                                            //don't place ship on board, print error\r\n                if (unusedTiles == false) {\r\n                    // console.log('PICK SOMEWHERE ELSE, TILES ARE ALREADY USED')\r\n                    const errorSFX = new Audio(_game_soundEffects_error_ogg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n                    errorSFX.play();\r\n                }\r\n                if (enoughTiles == false) {\r\n                    // console.log('PICK SOMEHWERE ELSE, NOT ENOUGH TILES!')\r\n                    const errorSFX = new Audio(_game_soundEffects_error_ogg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n                    errorSFX.play();\r\n                }\r\n                return false;\r\n            }\r\n        }\r\n\r\n        if ( axis == 'vertical' ) {\r\n            let unusedTiles = true; //all of the tiles that the ship wants to be placed on should not be taken\r\n            let enoughTiles = false; //there should be enough tiles to place the entire length of the ship\r\n            if (row + ships[shipType].getShipLength() - 1 < _rows) {\r\n                enoughTiles = true;\r\n                let endRow = row + ships[shipType].getShipLength() - 1;\r\n                for (let currRow = row; currRow < endRow; currRow++) {\r\n                    let currTile = _board[currRow][col];\r\n                    if (currTile.shipType != 'None') {\r\n                        unusedTiles = false;\r\n                    }\r\n                }\r\n            }\r\n            if (unusedTiles == true && enoughTiles == true) {\r\n                for (let i = 0; i < ships[shipType].getShipLength(); i++) {\r\n                    _board[row+i][col].shipType = shipType;\r\n                }\r\n                _placedShips++;\r\n                return true;\r\n            }\r\n            else {\r\n                if (unusedTiles == false) {\r\n                    // console.log('PICK SOMEWHERE ELSE, TILES ARE ALREADY USED')\r\n                    const errorSFX = new Audio(_game_soundEffects_error_ogg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n                    errorSFX.play();\r\n                }\r\n                if (enoughTiles == false) {\r\n                    // console.log('PICK SOMEHWERE ELSE, NOT ENOUGH TILES!')\r\n                    const errorSFX = new Audio(_game_soundEffects_error_ogg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\r\n                    errorSFX.play();\r\n                }\r\n                return false;\r\n            }\r\n        }\r\n    }\r\n\r\n    const getBoard = () => {\r\n        return _board;\r\n    }\r\n\r\n    const printBoard = () => {\r\n        for (const row of _board) {\r\n            let currRow = []\r\n            for (const tile of row) {\r\n                if (tile.shipType != 'None') {  // if tile occupied by ship\r\n                    if (!tile.tileAttacked) {   // if tile not hit, push [S]\r\n                        currRow.push('[S]');\r\n                    } else {                    // if tile hit, push [H]\r\n                        currRow.push('[H]');\r\n                    }\r\n                }\r\n                else {                          // if tile not occupied by ship\r\n                    if (!tile.tileAttacked) {   // if tile not hit, push [ ]\r\n                        currRow.push('[ ]');\r\n                    } else {                    // if tile hit, push [M]\r\n                        currRow.push('[M]');\r\n                    }\r\n                }\r\n            }\r\n            console.log(currRow);\r\n        }\r\n    }\r\n    //yis row, x is col\r\n    const receiveAttack = (rowNum, colNum) => {\r\n        console.log(`${_board[rowNum][colNum].shipType} is on clicked tile`)\r\n        if (_board[rowNum][colNum].tileAttacked == false) {\r\n            console.log(`tile at coords [${rowNum}, ${colNum}] has been hit`)\r\n            if (_board[rowNum][colNum].shipType == 'None') { //if tile has no ship\r\n                _board[rowNum][colNum].tileAttacked = true;   //update tile hit status\r\n                _missAttacks++;                                 //update missed attack count\r\n                console.log('the missile missed.')\r\n                console.log(`amount of missed attacks: ${_missAttacks}`)\r\n\r\n                //RENDER MISSED SOUND\r\n                const missSFX = new Audio(_game_soundEffects_miss_ogg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n                missSFX.play();\r\n\r\n            } else {                                            //if tile has ship\r\n                _board[rowNum][colNum].tileAttacked = true;   //update tile hit status\r\n                ships[_board[rowNum][colNum].shipType].isHit();   //add hit damage to ship on tile\r\n\r\n                //RENDER HIT SOUND\r\n                const hitSFX = new Audio(_game_soundEffects_hit_ogg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n                hitSFX.play();\r\n\r\n                if (ships[_board[rowNum][colNum].shipType].isSunk()) {   //check/ if ship is sunk\r\n                    _sunkenShips++;                                         //increment sunken ships\r\n                    // console.log(_board[rowNum][colNum].shipType)\r\n                    // console.log(_sunkenShips)\r\n                    // console.log(`${_board[rowNum][colNum].shipType} HAS SUNK`)\r\n                }\r\n\r\n            }\r\n            return true;\r\n        } else {\r\n            console.log(\"tile already attacked, select another one\")\r\n            return false;\r\n        }\r\n\r\n    }\r\n\r\n    const isAllShipSunk = () => {\r\n        if (_sunkenShips >= 5) {\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    }\r\n\r\n    const isAllShipPlaced = () => {\r\n        if (_placedShips >= 5) {\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    }\r\n\r\n    const getMissedAttacks = () => {\r\n        return _missAttacks;\r\n    }\r\n\r\n    return {getSize, getBoard, printBoard, placeShip, receiveAttack, isAllShipSunk, isAllShipPlaced, getMissedAttacks}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameBoard);\n\n//# sourceURL=webpack://battleship_game/./src/components/gameBoard.js?");

/***/ }),

/***/ "./src/components/player.js":
/*!**********************************!*\
  !*** ./src/components/player.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Player = (turnBool, cpuBool) => {\r\n    let _ifCPU = cpuBool;\r\n    let _currTurn = turnBool;\r\n\r\n    const checkIfTurn = () => {\r\n        return _currTurn;\r\n    }\r\n    const updateTurn = () => {\r\n        if (_currTurn != true) {\r\n            _currTurn = true;\r\n        } else {\r\n            _currTurn = false;\r\n        }\r\n    }\r\n    const attack = (rowNum, colNum, targetGameBoard) => {\r\n        if (targetGameBoard.receiveAttack(rowNum, colNum) == true) {\r\n            return true;\r\n        } else {\r\n            return false;\r\n        }\r\n    }\r\n    const cpuAttack = (targetGameBoard) => {\r\n        if (_ifCPU == true) {\r\n            // generate random coords for attack\r\n            let boardSize = targetGameBoard.getSize();\r\n            console.log(boardSize[0], boardSize[1])\r\n            let randomXCoord = Math.floor(Math.random() * boardSize[0]);\r\n            let randomYCoord = Math.floor(Math.random() * boardSize[1]);\r\n            console.log(randomXCoord, randomYCoord);\r\n            while (targetGameBoard.receiveAttack(randomXCoord, randomYCoord) == false) { //if attack is not legal\r\n                // randomize attack coords again\r\n                randomXCoord = Math.floor(Math.random() * boardSize[0]);\r\n                randomYCoord = Math.floor(Math.random() * boardSize[1]);\r\n                // loop will iterate until receveAttack returns true and breaks\r\n            }\r\n        } else {\r\n            console.log(\"Not CPU, can't use this method\")\r\n        }\r\n    }\r\n\r\n        //randomly generate ship placement for player 2 gameboard\r\n    const cpuGenShipPlacement = (targetGameBoard) => {\r\n        let axises = [\"horizontal\", \"vertical\"]\r\n        let availableShips = [\"battleship\", \"carrier\", \"cruiser\", \"patrolBoat\", \"submarine\"]\r\n\r\n        for (let s = 0; s < availableShips.length; s++){\r\n            // generate random coords for ship placement\r\n            let boardSize = targetGameBoard.getSize();\r\n            console.log(boardSize[0], boardSize[1])\r\n            let randomXCoord = Math.floor(Math.random() * boardSize[0]);\r\n            let randomYCoord = Math.floor(Math.random() * boardSize[1]);\r\n            console.log(\"this is for ship placementof \", availableShips[s], randomXCoord, randomYCoord);\r\n            let randomAxis = Math.floor(Math.random() * axises.length)\r\n            while (targetGameBoard.placeShip(randomXCoord, randomYCoord, availableShips[s], axises[randomAxis]) == false) {\r\n                randomXCoord = Math.floor(Math.random() * boardSize[0]);\r\n                randomYCoord = Math.floor(Math.random() * boardSize[1]);\r\n                randomAxis = Math.floor(Math.random() * axises.length)\r\n            }\r\n            console.log(`${availableShips[s]} is set on ${randomXCoord}, ${randomYCoord}`)\r\n        }\r\n    }\r\n\r\n    return { checkIfTurn, updateTurn, attack, cpuAttack, cpuGenShipPlacement}\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship_game/./src/components/player.js?");

/***/ }),

/***/ "./src/components/ship.js":
/*!********************************!*\
  !*** ./src/components/ship.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (shipType, shipLength) => {\r\n    let _shipType = shipType;\r\n    let _shipLength = shipLength;\r\n    let _shipSunk = false;\r\n    let _shipDamage = 0\r\n\r\n    const getShipType = () => {\r\n        return _shipType;\r\n    }\r\n    const getShipDamage = () => {\r\n        return _shipDamage;\r\n    }\r\n    const getShipLength = () => {\r\n        return _shipLength;\r\n    }\r\n    const isHit = () => {\r\n        _shipDamage++;\r\n    }\r\n\r\n    const isSunk = () => {\r\n        if (_shipDamage >= _shipLength) {\r\n            _shipSunk = true;\r\n        } \r\n        return _shipSunk;\r\n    }\r\n    return {isHit, isSunk, getShipType, getShipDamage, getShipLength};\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship_game/./src/components/ship.js?");

/***/ }),

/***/ "./src/game/boardDisplay/genDisplay.js":
/*!*********************************************!*\
  !*** ./src/game/boardDisplay/genDisplay.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   genBoardDisplay: () => (/* binding */ genBoardDisplay),\n/* harmony export */   genShipPiecesDisplay: () => (/* binding */ genShipPiecesDisplay)\n/* harmony export */ });\nconst genBoardDisplay = (playerNum) => {\r\n    let newTable = document.createElement('table');\r\n    newTable.id = `${playerNum}_gameboard`;\r\n    for (let i = 0; i < 10; i++) {\r\n        let currRow = newTable.insertRow(i);\r\n        for (let j = 0; j < 10; j++) {\r\n            let currCell = currRow.insertCell(j)\r\n            currCell.id = `${playerNum}_tile${i}${j}`\r\n        }\r\n    }\r\n\r\n    let tableContainer = document.getElementById(`${playerNum}_board`)\r\n    tableContainer.appendChild(newTable);\r\n}\r\n\r\nconst genShipPiecesDisplay = () => {\r\n    let shipContainer = document.getElementById('ships')\r\n    const genPieceDiv = (piece_id, shipTypeData, divText) => {\r\n        let currPieceDiv = document.createElement(\"div\");\r\n        currPieceDiv.id = `${piece_id}`;\r\n        currPieceDiv.classList.add(\"draggable\")\r\n        currPieceDiv.setAttribute(\"draggable\", true);\r\n        currPieceDiv.dataset.axis = \"horizontal\";\r\n        currPieceDiv.dataset.shiptype = `${shipTypeData}`\r\n        currPieceDiv.innerText = divText;\r\n        return currPieceDiv;\r\n    }\r\n    let battleshipPieceDiv = genPieceDiv(\"battleship_piece\", \"battleship\", \"battleship\")\r\n    let carrierPieceDiv = genPieceDiv(\"carrier_piece\", \"carrier\", \"carrier\")\r\n    let cruiserPieceDiv = genPieceDiv(\"cruiser_piece\", \"cruiser\", \"cruiser\")\r\n    let patrolBoatPieceDiv = genPieceDiv(\"patrolboat_piece\", \"patrolBoat\", \"patrolBoat\")\r\n    let submarinePieceDiv = genPieceDiv(\"submarine_piece\", \"submarine\", \"submarine\")\r\n\r\n    shipContainer.append(\r\n        battleshipPieceDiv,\r\n        carrierPieceDiv,\r\n        cruiserPieceDiv,\r\n        patrolBoatPieceDiv,\r\n        submarinePieceDiv\r\n    )\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship_game/./src/game/boardDisplay/genDisplay.js?");

/***/ }),

/***/ "./src/game/boardDisplay/renderEffects.js":
/*!************************************************!*\
  !*** ./src/game/boardDisplay/renderEffects.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderDragItems: () => (/* binding */ renderDragItems),\n/* harmony export */   renderDragOnTables: () => (/* binding */ renderDragOnTables),\n/* harmony export */   renderTables: () => (/* binding */ renderTables)\n/* harmony export */ });\n// renders tables\r\nconst renderTables = (playerNum, currentGameBoard) => {\r\n    let currentTable = document.getElementById(`${playerNum}_gameboard`);\r\n\r\n    for (let i = 0, row; row = currentTable.rows[i]; i++) {\r\n        for (let j = 0, tile; tile = row.cells[j]; j++) {\r\n            if (currentGameBoard.getBoard()[i][j].shipType == \"None\") {\r\n                if (currentGameBoard.getBoard()[i][j].tileAttacked == false) {\r\n                    tile.style.backgroundColor = \"yellow\";\r\n                } else {\r\n                    tile.style.backgroundColor = \"black\";\r\n                }\r\n            }\r\n            else {\r\n                if (currentGameBoard.getBoard()[i][j].tileAttacked == false) {\r\n                    tile.style.backgroundColor = \"green\";\r\n                } else {\r\n                    tile.style.backgroundColor = \"red\";\r\n                }\r\n            }\r\n            console.log(\"RENDER UPDATED TABLE\")\r\n        }\r\n    }\r\n}\r\n\r\n// renders the dragged ship while it is being dragged\r\nconst renderDragItems = () => {\r\n    let allDraggableItems = document.querySelectorAll(\".draggable\");\r\n    allDraggableItems.forEach(item => {\r\n        item.addEventListener(\"dragstart\", ()=>{\r\n            item.classList.add(\"dragging\");\r\n        })\r\n        item.addEventListener(\"dragend\", ()=>{\r\n            item.classList.remove(\"dragging\");\r\n        })\r\n    })\r\n}\r\n\r\n// this function removes ships from standby board after placing on gameboard\r\nconst removePlacedShip = (currDivElem) => {\r\n    currDivElem.parentNode.removeChild(currDivElem);\r\n}\r\n\r\n//renders hover effect on dragged ships over gameboard\r\nconst renderDragOnTables = (playerNum, currentGameBoard) => {\r\n    for (let row=0; row < currentGameBoard.getSize()[1]; row++){\r\n        for (let col=0; col<currentGameBoard.getSize()[0]; col++){\r\n            let currentCell = document.getElementById(`${playerNum}_tile${row}${col}`);\r\n            currentCell.addEventListener(\"dragover\", (e)=> {\r\n                e.preventDefault();\r\n                console.log(\"dragging something over tile:\", `${playerNum}_tile${row}${col}`)\r\n                currentCell.style.borderColor = \"black\"\r\n            })\r\n            currentCell.addEventListener(\"dragend\", (e)=> {\r\n                e.preventDefault();\r\n                console.log(\"dragging something over tile:\", `${playerNum}_tile${row}${col}`)\r\n                currentCell.style.borderColor = \"white\"\r\n            })\r\n            currentCell.addEventListener(\"dragleave\", (e)=> {\r\n                e.preventDefault();\r\n                console.log(\"dragging something over tile:\", `${playerNum}_tile${row}${col}`)\r\n                currentCell.style.borderColor = \"white\"\r\n            })\r\n            currentCell.addEventListener(\"drop\", (e)=> {\r\n                e.preventDefault();\r\n                let dragItem = document.querySelector('.dragging');\r\n                console.log(dragItem)\r\n                console.log(\"dropping something on tile:\", `${playerNum}_tile${row}${col}`)\r\n                currentCell.style.borderColor = \"white\"\r\n                if (currentGameBoard.placeShip(col, row, dragItem.dataset.shiptype, dragItem.dataset.axis) == true) {\r\n                    renderTables(playerNum, currentGameBoard); //update table display\r\n                    removePlacedShip(dragItem);\r\n                }\r\n            })\r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship_game/./src/game/boardDisplay/renderEffects.js?");

/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _boardDisplay_renderEffects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boardDisplay/renderEffects */ \"./src/game/boardDisplay/renderEffects.js\");\n/* harmony import */ var _soundEffects_hit_ogg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./soundEffects/hit.ogg */ \"./src/game/soundEffects/hit.ogg\");\n/* harmony import */ var _soundEffects_error_ogg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./soundEffects/error.ogg */ \"./src/game/soundEffects/error.ogg\");\n/* harmony import */ var _gameStatus_modalPopups__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameStatus/modalPopups */ \"./src/game/gameStatus/modalPopups.js\");\n/* harmony import */ var _gameStatus_gameInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameStatus/gameInfo */ \"./src/game/gameStatus/gameInfo.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst loadGame = (player1, player2, p1_gameboard, p2_gameboard) => {\r\n\r\n    for (let row = 0; row < p2_gameboard.getSize()[1]; row++) {\r\n        for (let col = 0; col < p2_gameboard.getSize()[0]; col++) {\r\n            let currentCell = document.getElementById(`p2_tile${row}${col}`);\r\n            currentCell.addEventListener(\"click\", () => {\r\n                if (player1.checkIfTurn() == true) {\r\n                    if (player1.attack(row, col, p2_gameboard) == true) { //PLAYER 1 ENACTS VALID ATTACK\r\n\r\n                        //RENDER ATTACK ON PLAYER 2 BOARD\r\n                        (0,_boardDisplay_renderEffects__WEBPACK_IMPORTED_MODULE_0__.renderTables)(\"p2\", p2_gameboard);\r\n                        //UPDATE TURN \r\n                        player1.updateTurn();\r\n                        player2.updateTurn();\r\n                        (0,_gameStatus_gameInfo__WEBPACK_IMPORTED_MODULE_4__.updateInfoToCPUTurn)();\r\n                    } else {\r\n                        //PLAY ERROR SOUND\r\n                        const errorSFX = new Audio(_soundEffects_error_ogg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n                        errorSFX.play();\r\n                    }\r\n                } else {\r\n                    // PLAY ERROR SOUND\r\n                    const errorSFX = new Audio(_soundEffects_error_ogg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n                    errorSFX.play();\r\n                }\r\n            })\r\n        }\r\n    }\r\n\r\n\r\n    // START GAME LOOP\r\n    const gameLoop = setInterval(() => {\r\n        if (p1_gameboard.isAllShipSunk() == false && p2_gameboard.isAllShipSunk() == false){\r\n            if (player2.checkIfTurn() == true) {\r\n                //PLAYER 2 RANDOMLY ATTACKS PLAYER 1 GAMEBOARD WITH VALID MOVE\r\n                player2.cpuAttack(p1_gameboard);\r\n\r\n                //RENDER ATTACK ON PLAYER 1 BOARD\r\n                (0,_boardDisplay_renderEffects__WEBPACK_IMPORTED_MODULE_0__.renderTables)(\"p1\", p1_gameboard); \r\n\r\n                //UPDATE TURN\r\n                player2.updateTurn();\r\n                player1.updateTurn();\r\n                (0,_gameStatus_gameInfo__WEBPACK_IMPORTED_MODULE_4__.updateInfoToPlayerTurn)();\r\n            } \r\n        } else { //A PLAYER'S SHIPS HAVE ALL SUNK\r\n            if (p1_gameboard.isAllShipSunk() == true) {\r\n                console.log(\"PLAYER 2 WINS\") //use status modal to display victory\r\n                ;(0,_gameStatus_modalPopups__WEBPACK_IMPORTED_MODULE_3__.defeatModal)();\r\n            }\r\n            if (p2_gameboard.isAllShipSunk() == true) {\r\n                console.log(\"PLAYER 1 WINS\") //use status modal to display victory\r\n                ;(0,_gameStatus_modalPopups__WEBPACK_IMPORTED_MODULE_3__.victoryModal)();\r\n            }\r\n            console.log(\"INTERVAL ENDING\")\r\n            clearInterval(gameLoop)\r\n        }\r\n    }, 3000)\r\n}\r\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadGame);\r\n\n\n//# sourceURL=webpack://battleship_game/./src/game/game.js?");

/***/ }),

/***/ "./src/game/gameStatus/gameInfo.js":
/*!*****************************************!*\
  !*** ./src/game/gameStatus/gameInfo.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateInfoToCPUTurn: () => (/* binding */ updateInfoToCPUTurn),\n/* harmony export */   updateInfoToPlayerTurn: () => (/* binding */ updateInfoToPlayerTurn),\n/* harmony export */   updateInfoToSetUpGame: () => (/* binding */ updateInfoToSetUpGame)\n/* harmony export */ });\nconst updateGameInfo = (currentInfo_headText, currentInfo_subText) => {\r\n    let gameInfo = document.getElementById(\"game_info\");\r\n    gameInfo.replaceChildren(); //clears out children tag\r\n\r\n    let mainText = document.createElement(\"div\");\r\n    mainText.id=\"turn_text\";\r\n    mainText.innerText = currentInfo_headText;\r\n\r\n    let subText = document.createElement(\"p\");\r\n    subText.id = \"turn_subtext\";\r\n    subText.innerText = currentInfo_subText;\r\n\r\n\r\n    gameInfo.append(\r\n        mainText,\r\n        subText\r\n    )\r\n}\r\n\r\nconst updateInfoToPlayerTurn = () => {\r\n    updateGameInfo(\"Player's Turn\", \"Please make a move.\");\r\n}\r\n\r\nconst updateInfoToCPUTurn = () => {\r\n    updateGameInfo(\"CPU's Turn\", \"Please wait for the CPU to make a move.\")\r\n}\r\n\r\nconst updateInfoToSetUpGame = () => {\r\n    updateGameInfo(\"Set Up Game\", \"Please place your ships on your board.\")\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship_game/./src/game/gameStatus/gameInfo.js?");

/***/ }),

/***/ "./src/game/gameStatus/modalPopups.js":
/*!********************************************!*\
  !*** ./src/game/gameStatus/modalPopups.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defeatModal: () => (/* binding */ defeatModal),\n/* harmony export */   endGameModal: () => (/* binding */ endGameModal),\n/* harmony export */   victoryModal: () => (/* binding */ victoryModal)\n/* harmony export */ });\nconst removeModal = () => {\r\n    const dialog = document.getElementById(\"status_modal\");\r\n    dialog.replaceChildren();\r\n}\r\n\r\nconst endGameModal = () => {\r\n    const dialog = document.getElementById(\"status_modal\");\r\n    \r\n    let content = document.createElement(\"div\");\r\n    content.innerText = \"Did you want to end the current game and restart?\"\r\n\r\n    let affirmButton = document.createElement(\"button\");\r\n    affirmButton.id = \"affirm_button\";\r\n    affirmButton.innerText = \"Affirm\"\r\n\r\n    let cancelButton = document.createElement(\"button\");\r\n    cancelButton.id = \"cancel_button\";\r\n    cancelButton.innerText = \"Cancel\";\r\n\r\n    dialog.append(content, \r\n        affirmButton, \r\n        cancelButton\r\n    );\r\n\r\n    affirmButton.addEventListener(\"click\", ()=>{\r\n        dialog.close();\r\n        removeModal();\r\n        location.reload();\r\n    })\r\n\r\n    cancelButton.addEventListener(\"click\", ()=>{\r\n        dialog.close();\r\n        removeModal();\r\n    })\r\n\r\n    dialog.showModal();\r\n}\r\n\r\nconst gameOverModal = (gameOverText) => {\r\n    const dialog = document.getElementById(\"status_modal\");\r\n\r\n    let content = document.createElement(\"div\");\r\n    content.innerText = gameOverText;\r\n\r\n    let affirmButton = document.createElement(\"button\");\r\n    affirmButton.id = \"affirm_button\";\r\n    affirmButton.innerText = \"Play Again\";\r\n\r\n    dialog.append(content, affirmButton);\r\n\r\n    affirmButton.addEventListener(\"click\", ()=>{\r\n        dialog.close();\r\n        removeModal();\r\n        location.reload();\r\n    })\r\n\r\n    dialog.showModal();\r\n}\r\n\r\nconst victoryModal = () => {\r\n    gameOverModal(\"YOU WIN. YOU SUNK ALL OF CPU'S SHIPS!\");\r\n}\r\n\r\nconst defeatModal = () => {\r\n    gameOverModal(\"CPU WIN. CPU SUNK ALL OF YOUR SHIPS!\")\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship_game/./src/game/gameStatus/modalPopups.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ship */ \"./src/components/ship.js\");\n/* harmony import */ var _components_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/player */ \"./src/components/player.js\");\n/* harmony import */ var _components_gameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/gameBoard */ \"./src/components/gameBoard.js\");\n/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game */ \"./src/game/game.js\");\n/* harmony import */ var _game_boardDisplay_renderEffects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/boardDisplay/renderEffects */ \"./src/game/boardDisplay/renderEffects.js\");\n/* harmony import */ var _game_boardDisplay_genDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/boardDisplay/genDisplay */ \"./src/game/boardDisplay/genDisplay.js\");\n/* harmony import */ var _game_gameStatus_modalPopups__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/gameStatus/modalPopups */ \"./src/game/gameStatus/modalPopups.js\");\n/* harmony import */ var _game_soundEffects_error_ogg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/soundEffects/error.ogg */ \"./src/game/soundEffects/error.ogg\");\n/* harmony import */ var _game_gameStatus_gameInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game/gameStatus/gameInfo */ \"./src/game/gameStatus/gameInfo.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst setupGame = function(){\r\n    let p1 = (0,_components_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(true, false); // actual player and has turn\r\n    let p2 = (0,_components_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(false, true); // cpu and does not have turn\r\n    let p1gb = (0,_components_gameBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(10, 10);\r\n    let p2gb = (0,_components_gameBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(10, 10);\r\n\r\n    //randomly generate ship placement for player 2 gameboard\r\n    p2.cpuGenShipPlacement(p2gb);\r\n    p2gb.printBoard(); // print cpu board for debugging\r\n\r\n    (0,_game_boardDisplay_genDisplay__WEBPACK_IMPORTED_MODULE_5__.genBoardDisplay)(\"p1\");\r\n    (0,_game_boardDisplay_genDisplay__WEBPACK_IMPORTED_MODULE_5__.genBoardDisplay)(\"p2\");\r\n    (0,_game_boardDisplay_genDisplay__WEBPACK_IMPORTED_MODULE_5__.genShipPiecesDisplay)();\r\n\r\n    const flipShipAxis = () => {\r\n        let flipButton = document.getElementById('flip');\r\n        let allDraggableItems = document.querySelectorAll(\".draggable\");\r\n        flipButton.addEventListener('click', ()=>{\r\n            allDraggableItems.forEach(item => {\r\n                if (item.dataset.axis == \"horizontal\") {\r\n                    item.dataset.axis = \"vertical\";\r\n                    item.id = item.id + \"_vertical\"\r\n                } else {\r\n                    item.dataset.axis = \"horizontal\";\r\n                    item.id = (item.id).split(\"_vertical\")[0]\r\n                }\r\n            })\r\n        })\r\n    }\r\n    flipShipAxis();\r\n\r\n    (0,_game_boardDisplay_renderEffects__WEBPACK_IMPORTED_MODULE_4__.renderDragItems)(); //render ship dragging\r\n\r\n    (0,_game_boardDisplay_renderEffects__WEBPACK_IMPORTED_MODULE_4__.renderDragOnTables)(\"p1\", p1gb); //render hover effect for ship dragging on player table\r\n\r\n\r\n    (0,_game_gameStatus_gameInfo__WEBPACK_IMPORTED_MODULE_8__.updateInfoToSetUpGame)();\r\n    (0,_game_boardDisplay_renderEffects__WEBPACK_IMPORTED_MODULE_4__.renderTables)(\"p1\", p1gb); // render player1 and player 2 gameboards\r\n    (0,_game_boardDisplay_renderEffects__WEBPACK_IMPORTED_MODULE_4__.renderTables)(\"p2\", p2gb);\r\n\r\n    let startButton = document.getElementById(\"start_game\");\r\n    startButton.addEventListener(\"click\", ()=>{\r\n        if (startButton.dataset.state == \"start\") {\r\n            if (p1gb.isAllShipPlaced() == true && p2gb.isAllShipPlaced() == true) {\r\n                (0,_game_gameStatus_gameInfo__WEBPACK_IMPORTED_MODULE_8__.updateInfoToPlayerTurn)();\r\n                (0,_game_game__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(p1, p2, p1gb, p2gb);\r\n                // updateInfoToPlayerTurn();\r\n                // console.log(\"GAME STARTS NOW\")\r\n                startButton.innerText = \"END GAME\";\r\n                startButton.dataset.state = \"end\";\r\n            }\r\n            // else {\r\n            //     console.log(\"NOT ALL SHIPS ARE PLACED\")\r\n            // }\r\n        } else {\r\n            (0,_game_gameStatus_modalPopups__WEBPACK_IMPORTED_MODULE_6__.endGameModal)();\r\n        }\r\n\r\n    })\r\n}\r\n\r\n\r\nsetupGame();\r\n\r\n// export {testingFunc}\r\n\n\n//# sourceURL=webpack://battleship_game/./src/index.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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