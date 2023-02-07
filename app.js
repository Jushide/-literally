const words = ["siara", "krowa"]
const current_word = words[1].split("")

document.getElementById("submit_word").addEventListener("click", () => {
    const user_word = document.getElementById("input_word").value.split("")
    console.log(user_word, current_word)
    for (const [index, user_letter] of user_word.entries()) {
        if (current_word.includes(user_letter)) {
            const letter_index = current_word.indexOf(user_letter)
            console.log(index, letter_index, duplicate(current_word))
            if (index === letter_index) {
                document.querySelector(`.box${letter_index + 1}`).classList.add("correct")
            } else {
                document.querySelector(`.box${letter_index + 1}`).classList.add("wrong-place")
                document.querySelector(`.box${letter_index + 1}`).innerHTML = user_letter
            }
        } else {
            console.log(null)
        }
    }
})

let duplicate = current_word => current_word.filter((item, index) => current_word.indexOf(item) != index)
