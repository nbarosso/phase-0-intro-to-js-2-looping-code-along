const nameArray = ["Guadalupe", "Ollie", "Aki"]
const eventName = "surprise"

function writeCards(nameArray, eventName) {
    let finishedCards = []
    for (let i = 0; i < nameArray.length; i++) {
    finishedCards.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`)
    }
    return finishedCards
}

const num1 = 10

function countDown(num1) {
    while (num1 > 0) {
        console.log(num1);
        num1 -=1;
    }
    console.log(num1)
}