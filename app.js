"use strict"
import { data } from "./data.js"

const randomizedWordIdx = Math.floor(Math.random() * 5)
const current_word = data[randomizedWordIdx].toLowerCase().split("")
let boxesNumber = 1
let tries = 1
let currentPoints = 0
let rowsChildrens = {}
let correctLetters = Array(5)

for (let i = 1; i <= 6; i++) {
    let rowsNum = `row${i}`
    rowsChildrens[rowsNum] = document.querySelector(`.${rowsNum}`).children
}

function checkWord() {
    if (boxesNumber < 7) {
        let user_word = []

        for (let idx = 0; idx < 1; idx++) {
            if (rowsChildrens[`row${boxesNumber}`][idx].children[0].hasAttribute("disabled") === false) {
                let user_letter

                for (let x = 0; x <= 4; x++) {
                    if (user_word.length < current_word.length) {
                        user_letter = rowsChildrens[`row${boxesNumber}`][x].children[0].value.toLowerCase()
                        user_word.push(user_letter)
                        rowsChildrens[`row${boxesNumber}`][x].children[0].setAttribute("disabled", "disabled")

                        if (user_letter === current_word[x]) {
                            rowsChildrens[`row${boxesNumber}`][x].children[0].style.backgroundColor = "rgb(116, 173, 31)"
                            if (user_letter != correctLetters[x] && current_word[x] === user_letter) {
                                currentPoints++
                                correctLetters[x] = user_letter
                            }
                        } else if (current_word.includes(user_letter))
                            rowsChildrens[`row${boxesNumber}`][x].children[0].style.backgroundColor = "rgb(145, 145, 13)"
                        else rowsChildrens[`row${boxesNumber}`][x].children[0].style.backgroundColor = "grey"
                    }
                }
            }
        }

        if (boxesNumber < 6 && currentPoints < 5)
            for (let idx = 0; idx < 1; idx++) {
                if (rowsChildrens[`row${boxesNumber + 1}`][idx].children[0].hasAttribute("disabled") === true)
                    for (let x = 0; x <= 4; x++)
                        rowsChildrens[`row${boxesNumber + 1}`][x].children[0].removeAttribute("disabled")
            }

        if (currentPoints === current_word.length && tries < 7) {
            document.getElementById("win").innerHTML += ` ${tries} tries`
            document.getElementById("win").style.setProperty("display", "block")
        } else if (currentPoints < current_word.length && tries === 6) {
            document.getElementById("lose").innerHTML =
                `The word was: ${current_word}` + `. ${document.getElementById("lose").innerHTML}`
            document.getElementById("lose").style.setProperty("display", "block")
        } else tries++

        ++boxesNumber
        user_word = []
    }
}

document.body.addEventListener("keyup", e => {
    if (e.keyCode === 13) {
        checkWord()
    }
})

document.getElementById("submit_word").addEventListener("click", checkWord)
document.getElementById("reset_game").addEventListener("click", () => {
    window.location.reload()
})
