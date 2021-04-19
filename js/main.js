let memory = 0
var num1 = 0
var num2 = 0
var signId
let numberId
//Capturar números consecutivos en el input
$('.number').click(function(){
    numberId = this.id
    $('input').val(numberId)
    let numberInInput = $('input').val()
    parseFloat(numberInInput) == 0 ? memory += numberInInput : memory = memory + numberInInput
    $('input').val(parseFloat(memory))
})
//Borrar el input
$('#ac').click(() => {
    $('input').val(0)
    num1 = 0
    num2 = 0
    memory = 0
})
//Cambiar el signo del número en el input
$('#change-sign').click(() => {
    let numberToChange = parseFloat($('input').val())
    numberToChange *= -1
    $('input').val(numberToChange)
})
//Función de operaciones
const operation = (num1,num2, signId) =>{
    if (signId === 'sum'){
        return num1 + num2
    }
    else if (signId === 'substraction'){
        return num1 - num2
    }
    else if (signId === 'multiplication'){
        return num1 * num2
    }
    else if (signId === 'division'){
        return num1 / num2
    }
    else if (signId === 'percentage'){
        return num1 * (num2/100)
    }
    else{$('input').val('ERROR')}
    
}
//Recoger el primer operando
$('.sign').click(event =>{
    num1 = parseFloat($('input').val())
    signId = event.target.id
    console.log(signId)
    $('input').val(0)
    console.log(num1)
    memory = 0
})
//Recoger el segundo operando y mostrar resultado
$('#equal').click(() =>{
    num2 = parseFloat($('input').val())
    memory = 0
    $('input').val(operation(num1, num2, signId))
})