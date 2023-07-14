"use strict";
/*
Aufgabenstellung:

Jeder hat in seinem Leben schon einmal "Rock, Paper, Scissors" (Schnick, Schnack, Schnuck) gespielt. 
Ihr kennt die Regeln also bereits. ;) 

Definiere, wie viele Runden ein User gegen den Computer spielen wird.

Die Farbe sollte sich ändern, wenn es sich um einen Gewinn, ein Unentschieden oder eine Niederlage handelt.

Das Design im Anhang ist nur ein Vorschlag, ihr könnt hier gerne kreativ werden. ;) 

*/
//inputs aus dem html
const roundselection = document.body.querySelectorAll('.roundselection')
console.log(roundselection);
const buttons = document.body.querySelectorAll('.buttons')

//outputs aus dem html
const userpunkte = document.body.querySelector('.userpunkte')
const computerpunkte = document.body.querySelector('.computerpunkte')
const winneroutput = document.body.querySelector('.winner')
const usertakeoutput = document.body.querySelector('.usertake')
const computertakeoutput = document.body.querySelector('.computertake')


//variable für den punktestand
let userPunkte = 0;
console.log('userpunkte:',userPunkte);
let computerPunkte = 0;
console.log('computerpunkte:',computerPunkte);

//funktion zum zählen der siege und niederlagen
function updatePunktestand() {
    userpunkte.textContent = `${userPunkte}`;
    computerpunkte.textContent = `${computerPunkte}`;
}

//button funktion /userauswahl
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const userauswahl = button.textContent;
        usertakeoutput.textContent = `Du hast ${userauswahl} ausgewählt`;
        const computertake = computerauswahl();
        computertakeoutput.textContent =`Der Computer hat ${computertake} ausgewählt`
        const ergebniss = spielfunction(userauswahl, computertake);
        winneroutput.textContent = ergebniss; 
        console.log(ergebniss);
        updatePunktestand()
    });
});

//comp auswahl funktion /computerauswahl
function computerauswahl() {
    const auswahl = ['✂️','🪨','🧻'];
    const randomtake = Math.floor(Math.random() * 3);
    const computertsymbol = auswahl[randomtake];
    return computertsymbol;
}

//spielfunction
function spielfunction(userauswahl, computertake) {
    if (userauswahl === computertake) {
        return 'unentschieden';
    } else if (
        (userauswahl === '🪨' && computertake === '✂️') ||
        (userauswahl === '🧻' && computertake === '🪨') ||
        (userauswahl === '✂️' && computertake === '🧻')
    ) {
        userPunkte ++;
        return 'Du hast gewonnen';
    } else {
        computerPunkte ++;
        return 'Computer hat gewonnen'; 
    }
}
