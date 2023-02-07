const words = ["siara", "krowa"]

document.getElementById("submit_word").addEventListener("click", () => {
    const user_word = document.getElementById("input_word").value.split("")
    console.log(user_word)
})
