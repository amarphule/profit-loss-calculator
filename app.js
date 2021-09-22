const initialPrice = document.querySelector("#initial-price")
const stockQuantity = document.querySelector("#stocks-quantity")
const currentPrice = document.querySelector("#current-price")
const submit = document.querySelector("#submit")
const result = document.querySelector("#result")

function checkProfitLoss() {
    const intial = initialPrice.value;
    const quantity = stockQuantity.value;
    const current = currentPrice.value;

    function message(msg) {
        result.innerText = msg
    }

    if (intial && quantity && current) {
        if (current > intial) {
            const profit = current - intial

            const profitPercent = ((profit / current) * 100) * quantity
            let output = `Hey, the profit is ${profit} and the percent is ${profitPercent.toFixed(2)}%`
            message(output)

        } else if (intial > current) {
            const loss = intial - current
            const lossPercent = ((loss / current) * 100) * quantity
            let output = `Hey, the loss is ${loss} and the percent is ${lossPercent.toFixed(2)}%`
            message(output)

        } else {
            message("Hey, you are in safe condition.")

        }
    } else {
        message("Please insert numbers")
    }
}

submit.addEventListener('click', checkProfitLoss)