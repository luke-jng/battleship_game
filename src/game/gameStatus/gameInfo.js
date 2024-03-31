const updateGameInfo = (currentInfo_headText, currentInfo_subText) => {
    let gameInfo = document.getElementById("game_info");
    gameInfo.replaceChildren(); //clears out children tag

    let mainText = document.createElement("div");
    mainText.id="turn_text";
    mainText.innerText = currentInfo_headText;

    let subText = document.createElement("p");
    subText.id = "turn_subtext";
    subText.innerText = currentInfo_subText;


    gameInfo.append(
        mainText,
        subText
    )
}

const updateInfoToPlayerTurn = () => {
    updateGameInfo("Player's Turn", "Please make a move.");
}

const updateInfoToCPUTurn = () => {
    updateGameInfo("CPU's Turn", "Please wait for the CPU to make a move.")
}

const updateInfoToSetUpGame = () => {
    updateGameInfo("Set Up Game", "Please place your ships on your board.")
}

export {updateInfoToSetUpGame, updateInfoToPlayerTurn, updateInfoToCPUTurn}