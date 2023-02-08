const words = ["siara", "krowa"]
const current_word = words[0].split("")
let boxesNumber = 0
let rowsChildrens = {}

for (let i = 1; i <= 6; i++) {
    rowsNum = `row${i}`
    rowsChildrens[rowsNum] = document.querySelector(`.${rowsNum}`).children
}

document.getElementById("submit_word").addEventListener("click", () => {
    ++boxesNumber
    let user_word = []
    // const user_word = document.getElementById("input_word").value.split("")
    console.log(rowsChildrens["row1"][0].children[0].hasAttribute("disabled"))
    for (let i in rowsChildrens.length) {
        if (rowsChildrens[`row1`][i].children[0].hasAttribute("disabled") === false)
            for (let x = 0; i <= 4; i++) {
                user_word.push(rowsChildrens["row1"][x])
            }
    }
    console.log(user_word, current_word, boxesNumber)

    // for (const [index, user_letter] of user_word.entries()) {
    //     if (current_word.includes(user_letter)) {
    //         const letter_index = current_word.indexOf(user_letter)
    //         console.log(user_letter, letter_index, boxesNumber)
    //         if (index === letter_index) {
    //             document.querySelector(`.box1${letter_index + 1}`).classList.add("correct")
    //         } else {
    //             document.querySelector(`.box1${letter_index + 1}`).classList.add("wrong-place")
    //             document.querySelector(`.box1${letter_index + 1}`).innerHTML = user_letter
    //         }
    //     } else {
    //         console.log(null)
    //     }
    // }
    user_word = []
})

// let duplicate = current_word => current_word.filter((item, index) => current_word.indexOf(item) != index)
