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