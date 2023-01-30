console.log("Taki tam kalkulator ")

let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value

    let rate;

    switch (currency) {
        case "EUR":
            rate = 4, 71;
            break;
        case "USD":
            rate = 4.32;
            break;
        case "JPY":
            rate = 3.32;
    }

    const result = amount / rate;

    resultElement.innerText = `${result.toFixed(4)} ${currency}`;

});