"use strict"

const words = ["siara", "krowa"]
const current_word = words[1].split("")
let boxesNumber = 1
let rowsChildrens = {}

for (let i = 1; i <= 6; i++) {
    let rowsNum = `row${i}`
    rowsChildrens[rowsNum] = document.querySelector(`.${rowsNum}`).children
}

function checkWord() {
    if (boxesNumber < 7) {
        let user_word = []

        for (let idx = 0; idx < 1; idx++) {
            // console.log(rowsChildrens[`row${boxesNumber}`][idx])
            if (rowsChildrens[`row${boxesNumber}`][idx].children[0].hasAttribute("disabled") === false) {
                let user_letter
                for (let x = 0; x <= 4; x++) {
                    if (user_word.length < current_word.length) {
                        user_letter = rowsChildrens[`row${boxesNumber}`][x].children[0].value
                        user_word.push(user_letter)
                        rowsChildrens[`row${boxesNumber}`][x].children[0].setAttribute("disabled", "disabled")
                        if (current_word.includes(user_letter)) {
                            const letter_index_in_current_word = current_word.indexOf(user_letter)
                            const letter_index_in_given_word = user_word.indexOf(user_letter)
                            if (letter_index_in_current_word === letter_index_in_given_word) {
                                rowsChildrens[`row${boxesNumber}`][x].children[0].style.backgroundColor = "rgb(116, 173, 31)"
                            } else
                                rowsChildrens[`row${boxesNumber}`][x].children[0].style.backgroundColor = "rgb(145, 145, 13)"
                        } else rowsChildrens[`row${boxesNumber}`][x].children[0].style.backgroundColor = "grey"
                    }
                }
            }
        }
        console.log(user_word, current_word, boxesNumber)

        user_word = []

        if (boxesNumber < 6)
            for (let idx = 0; idx < 1; idx++) {
                if (rowsChildrens[`row${boxesNumber + 1}`][idx].children[0].hasAttribute("disabled") === true)
                    for (let x = 0; x <= 4; x++)
                        rowsChildrens[`row${boxesNumber + 1}`][x].children[0].removeAttribute("disabled")
            }
        ++boxesNumber
    }
}

document.body.addEventListener("keyup", e => {
    if (e.keyCode === 13) {
        checkWord()
    }
})

document.getElementById("submit_word").addEventListener("click", checkWord)
