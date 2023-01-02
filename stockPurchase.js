const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const tellMeBtn = document.querySelector("#tell-me-btn");
const displayMessage = document.querySelector("#display-message");

function showMessage(message){
    displayMessage.innerHTML = message;
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        let loss = (initial - current) * quantity;
        let lossPercentage = (loss / initial) * 100;
        showMessage(`Hey!, the loss is ${loss} and the percentage is ${lossPercentage}%`)
    } else if (current > initial) {
        let profit = (current - initial) * quantity;
        let profitPercentage = (profit / initial) * quantity;
        showMessage(`Hey!, the profit is ${profit} and the percentage is ${profitPercentage}%`)
    } else {
       showMessage("No pain no gain and no gain no pain")
    }
}

function clickHandler(){
    calculateProfitAndLoss(initialPrice.value, stocksQuantity.value, currentPrice.value)
}

tellMeBtn.addEventListener('click', clickHandler)