function rollDice() {
    const numDice = document.getElementById("NoDice").value;
    const result = document.getElementById("diceResult");
    const rollup = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 1; i <= numDice;i++){
        let temp = Math.floor(Math.random()*6) + 1;
        values.push(temp);
        images.push(`<img src = "images/${temp}.png" alt = "Dice ${temp} height = "100" width = "100">`);

    }
    result.textContent = `Dice: ${values.join(', ')}`;
    rollup.innerHTML = images.join(' ')
}
