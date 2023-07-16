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
const roundselection = document.body.querySelectorAll('[name="round"]');
console.log(roundselection);
const buttons = document.body.querySelectorAll('.buttons')
const gameResetButton = document.body.querySelector('.reset')

//outputs aus dem html
const userPunkte = document.body.querySelector('.userpunkte')
const computerPunkte = document.body.querySelector('.computerpunkte')
const winnerOutput = document.body.querySelector('.winner')
const userTakeOutput = document.body.querySelector('.usertake')
const computerTakeOutput = document.body.querySelector('.computertake')


//variable für den punktestand
let userPunktestand = 0;
console.log('userpunkte:',userPunkte);
let computerPunktestand = 0;
console.log('computerpunkte:',computerPunkte);

// variable für die runden anzahl
let maxRunden = 0;

// function zum Begrenzen der Rundenanzahl
roundselection.forEach(round => {
    round.addEventListener('click', () => {
    maxRunden = parseInt(round.value);
    });
    });
    

//spielfunction
function spielfunction(userauswahl, computertake) {
    if (userPunktestand + computerPunktestand === maxRunden) {
    buttons.forEach(button => {
    button.disabled = true;
    });
    return 'das Spiel zu ende es ist';
    }
    if (userauswahl === computertake) {
        return 'der Sieg ungewiss er ist';
    } else if (
        (userauswahl === '🪨' && computertake === '✂️') ||
        (userauswahl === '🧻' && computertake === '🪨') ||
        (userauswahl === '✂️' && computertake === '🧻')
        ) {
            userPunktestand ++;
            return 'gewonnen du hast';
        } else {
            computerPunktestand ++;
            return 'verloren du hast'; 
        }
    }
//button funktion /userauswahl
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (maxRunden === 0) {
                winnerOutput.textContent = 'Die Anzahl der Runden du wählen musst !';
                return;
                }
            const userauswahl = button.textContent;
            userTakeOutput.textContent = `${userauswahl} gewählt du hast`;
            const computertake = computerauswahl();
            computerTakeOutput.textContent =`${computertake} gewählt der Gegner hat`
            const ergebniss = spielfunction(userauswahl, computertake);
            winnerOutput.textContent = ergebniss; 
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
//funktion zum zählen der siege und niederlagen und ausgeben des ergebnisses in das html
    function updatePunktestand() {
        userPunkte.textContent = `${userPunktestand}`;
        computerPunkte.textContent = `${computerPunktestand}`;
    }
//function zum zurücksetzen des spiels
function gameResetButtonFunction() {
    userPunktestand = 0;
    computerPunktestand = 0;
    maxRunden = 0;
    buttons.forEach(button => {
    button.disabled = false;
    });
    winnerOutput.textContent = '';
    userTakeOutput.textContent = '';
    computerTakeOutput.textContent ='';
    updatePunktestand();
    }
//gameResetButton 
gameResetButton.addEventListener('click', () => {
    gameResetButtonFunction();
    });