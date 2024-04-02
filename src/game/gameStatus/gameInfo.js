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

let _intervalHolder = null;
let _periodCounter = 0;

const textLoop = () => {
    let currentSubText = document.getElementById("turn_subtext");
    
    if (_periodCounter < 3) {
        currentSubText.innerText += ".";
        _periodCounter++;
    } else {
        currentSubText.innerText = "CPU is thinking."
        _periodCounter = 0;
    }
    console.log("text is looping!")
}

const startCPUSubTextLoop = () => {
    _intervalHolder = setInterval(textLoop, 1000);
}

const stopCPUSubTextLoop = () => {
    clearInterval(_intervalHolder);
    _intervalHolder = null;
}

const updateInfoToPlayerTurn = () => {
    stopCPUSubTextLoop();
    updateGameInfo("Player's Turn", "Please make a move.");
}

const updateInfoToCPUTurn = () => {
    updateGameInfo("CPU's Turn", "CPU is thinking.")
    startCPUSubTextLoop();
}

const updateInfoToSetUpGame = () => {
    updateGameInfo("Set Up Game", "Please place your ships on your board.")
}

export {updateInfoToSetUpGame, updateInfoToPlayerTurn, updateInfoToCPUTurn}