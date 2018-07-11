var buttons = document.querySelectorAll("input[type='button']")
var input = document.getElementById("input")
var button_reset = document.querySelector("input[type='reset']")
var button_solve = document.getElementById("solve")

buttons.forEach(function(element){
    element.addEventListener('click', function(e){
        e.stopPropagation()
        if (this.value != '=') { 
            input.value += this.value
        }
    })
})

button_reset.addEventListener('click', function(e){
    input.value = ''
})

button_solve.addEventListener('click', function(e){
    try {
        input.value = eval(input.value)
    } catch (error) {
        alert('Une erreur s\'est produite.\nVeuillez reessayer.')
        input.value = ''
    }
})