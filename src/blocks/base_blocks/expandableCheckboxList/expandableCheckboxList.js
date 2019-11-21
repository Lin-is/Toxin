let inputs = []
let elements = document.querySelectorAll('.expandableCheckboxList__headerLabel')
for (let elem of elements) {
    console.log(elem.getAttribute('for'))
    inputs.push(document.getElementById(elem.getAttribute('for')))
}
console.log(inputs)
for(let elem of inputs){
    elem.onchange = function(){
        if (elem.checked) {
            $(elem).parent().parent().css('height', '277px')
        } else {
            $(elem).parent().parent().css('height', '24px')
        }
    }
}