const initialPrice = document.querySelector("#initial-price")
const stockQuantity = document.querySelector("#stocks-quantity")
const currentPrice = document.querySelector("#current-price")
const submit = document.querySelector("#submit")
const result = document.querySelector("#result")

function message(msg) {
    result.innerText = msg
}

function checkProfitLoss() {
    const intial = initialPrice.value;
    const quantity = stockQuantity.value;
    const current = currentPrice.value;

    if (intial > 0 && quantity > 0 && current > 0) {
        if (current > intial) {
            const profit = (current - intial) * quantity

            const profitPercent = (profit / intial) * 100
            result.style.color = "green"
            let output = `Hey, the profit is ${profit} and the percent is ${profitPercent.toFixed(2)}%`
            message(output)

        } else if (intial > current) {
            const loss = intial - current
            const lossPercent = ((loss / intial) * 100) * quantity
            result.style.color = "red"
            let output = `Hey, the loss is ${loss} and the percent is -${lossPercent.toFixed(2)}%`
            message(output)

        } else {
            message("Hey, you are in safe condition.")

        }
    } else {
        message("Please insert valid numbers")
    }
}

submit.addEventListener('click', checkProfitLoss)