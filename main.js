let cards = []
let sum=0

let hasBlackjack = false
let isAlive = false

let message=" "

let messageIn = document.getElementById("message")

let sumIn =document.getElementById("sum")

let cardsIn = document.getElementById("cards")

let player = {
     name: "per",
     chips: 145
}


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" +player.chips

function getRandomCard(){
    let randomNumber = Math.floor( Math.random()*13 ) + 1

    if (randomNumber > 10) {
        return 10
    }
     else if(randomNumber === 1){
        return 11
    }
    else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards = [firstCard,secondCard]
    sum=firstCard + secondCard
    renderGame()
}

function renderGame(){
cardsIn.textContent ="Cards: "    

for( let i=0;i<cards.length;i++){
    cardsIn.textContent += cards[i] + " "
}

sumIn.textContent ="Sum: " + sum

if(sum < 20){
    message = "Do you want a new card?"
}
else if(sum === 21){
    message ="You got a Black Jack!"
    hasBlackjack = true
}
else{
    message ="you're out of the game!"
    isAlive = false
}
messageIn.textContent = message
}

function newCard(){
if( isAlive === true && hasBlackjack === false){
    let card=getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}
}