// Referencias ao DOM (Document Object Model) - Árvore HTML
var inputValue = document.getElementById("inputValue");
var selectFromCoin = document.getElementById("selectFromCoin");
var selectToCoin = document.getElementById("selectToCoin");
var button = document.getElementById("btnConvert");
// console.log(selectToCoin);

// Pegar os valores
button.addEventListener("click", function () {
    var inputContent = parseFloat(inputValue.value)
    var selectFromCoinContent = selectFromCoin.value
    var selectToCoinContent = selectToCoin.value

    if (selectFromCoinContent == "real" && selectToCoinContent == "dollar") {
        var rate = 5.56
        var result = inputContent / rate;
        alert(`USD$ ${result}`)
    }
});
