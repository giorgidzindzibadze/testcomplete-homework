function generateRandomCardNumber() {
    var cardNumber = "";
    for (var i = 0; i < 16; i++) {
        cardNumber += Math.floor(Math.random() * 10);
    }
    return cardNumber;
}

module.exports.generateRandomCardNumber = generateRandomCardNumber;