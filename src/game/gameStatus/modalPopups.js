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

const rulesModal = () => {
    const dialog = document.getElementById("status_modal");

    const ruleItem = (ruleText) => {
        let item = document.createElement("li");
        item.innerText = ruleText;
        return item;                 
    }

    const nestedSubRuleItems = (subRuleArray) => {
        let unorderedRulesList = document.createElement("ul");
        for (let i = 0; i < subRuleArray.length; i++) {
            let subRule_curr = ruleItem(subRuleArray[i]);
            unorderedRulesList.appendChild(subRule_curr);
        }
        return unorderedRulesList;
    }

    let content = document.createElement("ol");
    content.id = "rules_list";
    
    let rule_one = ruleItem("Place all of your ships on the board either horizontally or vertically by clicking on the flip button to readjust axis of the unplaced ships and drag them on the board with your cursor.");
    rule_one.appendChild(nestedSubRuleItems(["The ships cannot overlap.", "All ships must be placed before the game can begin."]))
    
    let rule_two = ruleItem("On your turn, click on a tile on the enemy's board to attack.");
    rule_two.appendChild(nestedSubRuleItems(["Red tiles indicate a hit, and black tiles indicate a miss.", "Your turn ends upon making an attack."]))
    
    let rule_three = ruleItem("Wait for the enemy to make an attack on their turn.");
    let rule_four = ruleItem("Sink all of your enemy's ships before they sink your ships to win.");

    content.append(
        rule_one,
        rule_two,
        rule_three,
        rule_four
    );

    const closeButton = document.createElement("button");
    closeButton.innerText = "Close"

    dialog.append(content, closeButton);

    closeButton.addEventListener("click", ()=>{
        dialog.close();
        removeModal();
    });

    dialog.showModal();

}
export {endGameModal, victoryModal, defeatModal, rulesModal}