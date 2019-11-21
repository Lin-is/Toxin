/*function openDropdown(){
    this.parentNode.style = 'background-color: orange'
    let inputId = this.id
    let thisInput = document.getElementsByClassName('.dropdown__headerInput').getElementById(inputId)
    if (thisInput.checked) {
       thisInput.parentNode.classList.add('.dropdown__headerContainer_open')
       thisInput.parentNode.parentNode.classList.add('.dropdown__container_open')
    }
}*/
let elements = document.querySelectorAll('.dropdown__headerLabel')
let inputs = []
for (let elem of elements) {
    console.log(elem.getAttribute('for'))
    inputs.push(document.getElementById(elem.getAttribute('for')))
}
console.log(inputs)
for(let elem of inputs){
    elem.onchange = function(){
        if (elem.checked) {
            $(elem).parent().parent().children('.dropdown__lablesContainer').children('.dropdown__conditionLabel').text('expanded')
           if ($(elem).parents('.dropdown_short').length) {
                $(elem).parent().parent().css('height', '182px')
           } else {
                $(elem).parent().parent().css('height', '222px')
           }
        } else {
            $(elem).parent().parent().children('.dropdown__lablesContainer').children('.dropdown__conditionLabel').text('default')
            $(elem).parent().parent().css('height', '64px')
        }
    }
}