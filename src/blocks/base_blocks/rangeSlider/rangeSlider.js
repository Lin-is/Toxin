let elements = document.querySelectorAll('.rangeSlider__slider')
let sliders = []
let snapValuesArray = []
for (let elem of elements) {
    sliders.push(document.getElementById(elem.getAttribute('id')))
}
for(let elem of sliders){
    noUiSlider.create(elem, {
        range: {
            'min': 0,
            'max': 15000
        },
        step: 10,
        start: [5000, 10000],
        connect: true,
        behaviour: 'tap-drag',
    });
    var snapValues = [
        $(elem).siblings(['rangeSlider__label-' + elem.getAttribute('id')]).children('p').children('.rangeSlider__lowNumberText'),
        $(elem).siblings(['rangeSlider__label-' + elem.getAttribute('id')]).children('p').children('.rangeSlider__hightNumberText')
    ]; 
    snapValuesArray.push(snapValues) 
}
for(let i = 0; i < sliders.length; i++){
    elem = sliders[i]
    elem.noUiSlider.on('update', function (values, handle) {
        snapValuesArray[i][handle].text(Number((values[handle])).toLocaleString())
    });
}