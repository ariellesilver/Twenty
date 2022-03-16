alert("Welcome to 20! This is a competition to see which player gets closer to the number 20. You are going to be playing against the computer. You will draw numbers from 1 to 10. The computer will stop at 16. Pay attention to the screen to see what the total is, and if you need another number, press 'y'.");

var play = "y"
var pscore = 0
var cscore = 0
var play2 = "y"

do {

    var playerscore = 0
var compscore = 0



    do {
        var random = Math.floor((Math.random() * 10) +1);
        compscore = compscore + random
        alert(`The computer's new number is ${random}. It's new total is ${compscore}!`)
    } while(compscore < 16)
    alert(`The computer got ${compscore}! The computer will stop now.`)
    if (compscore > 20) {
        pscore = pscore +1
        alert("The computer went over 20. You get a point!")
        play = prompt("Do you want to play again?") 
    } else if (playerscore > 20) {
        cscore = cscore +1
        alert("You went over 20. The computer gets a point!")
    }

    do {
        var random = Math.floor(Math.random() * 10) +1;
        playerscore = playerscore + random
        alert(`Your new number is ${random}. Your new total is ${playerscore}!`)
        play = prompt("Do you want another number? y for yes and n for no!")
    } while((playerscore < 21) && (play == "y"))
    alert(`You got ${playerscore}!`)

    if (playerscore > compscore) {
        pscore = pscore +1;
        alert("You got a point!")
    } 

    else if (playerscore < compscore) {
        cscore = cscore +1;
        alert("The computer got a point!")
    } 
    else {
        ("You tied with the computer!")
    }

    play2 = prompt("Do you want to play again?")
} while (play2 == "y")

alert(`The final score for the computer is ${cscore}! Your final score is ${pscore}!`)