const removeModal = () => {
    const dialog = document.getElementById("status_modal");
    dialog.replaceChildren();
}

const endGameModal = () => {
    const dialog = document.getElementById("status_modal");
    
    let content = document.createElement("div");
    content.innerText = "Did you want to end the current game and restart?"

    let affirmButton = document.createElement("button");
    affirmButton.id = "affirm_button";
    affirmButton.innerText = "Affirm"

    let cancelButton = document.createElement("button");
    cancelButton.id = "cancel_button";
    cancelButton.innerText = "Cancel";

    dialog.append(content, 
        affirmButton, 
        cancelButton
    );

    affirmButton.addEventListener("click", ()=>{
        dialog.close();
        removeModal();
        location.reload();
    })

    cancelButton.addEventListener("click", ()=>{
        dialog.close();
        removeModal();
    })

    dialog.showModal();
}

const gameOverModal = (gameOverText) => {
    const dialog = document.getElementById("status_modal");

    let content = document.createElement("div");
    content.innerText = gameOverText;

    let affirmButton = document.createElement("button");
    affirmButton.id = "affirm_button";
    affirmButton.innerText = "Play Again";

    dialog.append(content, affirmButton);

    affirmButton.addEventListener("click", ()=>{
        dialog.close();
        removeModal();
        location.reload();
    })

    dialog.showModal();
}

const victoryModal = () => {
    gameOverModal("YOU WIN. YOU SUNK ALL OF CPU'S SHIPS!");
}

const defeatModal = () => {
    gameOverModal("CPU WIN. CPU SUNK ALL OF YOUR SHIPS!")
}

export {endGameModal, victoryModal, defeatModal}