const genBoardDisplay = (playerNum) => {
    let newTable = document.createElement('table');
    newTable.id = `${playerNum}_gameboard`;
    for (let i = 0; i < 10; i++) {
        let currRow = newTable.insertRow(i);
        for (let j = 0; j < 10; j++) {
            let currCell = currRow.insertCell(j)
            currCell.id = `${playerNum}_tile${i}${j}`
        }
    }

    let tableContainer = document.getElementById(`${playerNum}_board`)
    tableContainer.appendChild(newTable);
}

const genShipPiecesDisplay = () => {
    let shipContainer = document.getElementById('ships')
    const genPieceDiv = (piece_id, shipTypeData, divText) => {
        let currPieceDiv = document.createElement("div");
        currPieceDiv.id = `${piece_id}`;
        currPieceDiv.classList.add("draggable")
        currPieceDiv.setAttribute("draggable", true);
        currPieceDiv.dataset.axis = "horizontal";
        currPieceDiv.dataset.shiptype = `${shipTypeData}`
        currPieceDiv.innerText = divText;
        return genPieceDiv;
    }
    let battleshipPieceDiv = genPieceDiv("battleship_piece", "battleship", "battleship")
    let carrierPieceDiv = genPieceDiv("carrier_piece", "carrier", "carrier")
    let cruiserPieceDiv = genPieceDiv("battleship_piece", "cruiser", "cruiser")
    let patrolBoatPieceDiv = genPieceDiv("battleship_piece", "patrolBoat", "patrolBoat")
    let submarinePieceDiv = genPieceDiv("battleship_piece", "submarine", "submarine")

    shipContainer.append(
        battleshipPieceDiv,
        carrierPieceDiv,
        cruiserPieceDiv,
        patrolBoatPieceDiv,
        submarinePieceDiv
    )
}