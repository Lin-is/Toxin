/*let likeNumber = 0
$('.likeButton__input').change = function() {
    console.log('chaaaangeeee')
    likeNumber = (this.siblings('.likeButton__labelText').text()).parseInt()
    if (this.checked) {
        ++likeNumber
    } else {
        --likeNumber
    }
    this.siblings('.likeButton__labelText').text(likeNumber)
}*/

let elements = document.querySelectorAll('.likeButton__label')
let inputs = []
for (let elem of elements) {
    console.log(elem.getAttribute('for'))
    inputs.push(document.getElementById(elem.getAttribute('for')))
}
for(let elem of inputs){
    elem.onchange = function(){
        likeNumber =Number($(elem).siblings('.likeButton__label').children('.likeButton__labelText').text())
        if (elem.checked) {
            ++likeNumber
        } else {
            --likeNumber
        }
        $(elem).siblings('.likeButton__label').children('.likeButton__labelText').text(String(likeNumber))
    }
}
