const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const tellMeBtn = document.querySelector("#tell-me-btn");
const displayMessage = document.querySelector("#display-message");

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        let loss = (initial - current) * quantity;
        let lossPercentage = (loss / initial) * 100;
        displayMessage.innerText = `Hey!, the loss is ${loss} and the percentage is ${lossPercentage}%`
    } else if (current > initial) {
        let profit = (current - initial) * quantity;
        let profitPercentage = (profit / initial) * quantity;
        displayMessage.innerText = `Hey!, the profit is ${profit} and the percentage is ${profitPercentage}%`
    } else {
       displayMessage.innerText = "No pain no gain and no gain no pain"
    }
}

function clickHandler(){
    calculateProfitAndLoss(initialPrice.value, stocksQuantity.value, currentPrice.value)
}

tellMeBtn.addEventListener('click', clickHandler)