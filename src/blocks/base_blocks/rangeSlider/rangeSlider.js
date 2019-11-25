let elements = document.querySelectorAll('.rangeSlider__slider')
let sliders = []
for (let elem of elements) {
    console.log(elem.getAttribute('id'))
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
}
for(let elem of sliders){
    var snapValues = [
        $(elem).siblings('.rangeSlider__label').children('p').children('.rangeSlider__lowNumberText'),
        $(elem).siblings('.rangeSlider__label').children('p').children('.rangeSlider__hightNumberText')
    ];
    elem.noUiSlider.on('update', function (values, handle) {
        elem.noUiSlider.on('update', function (values, handle) {
            snapValues[handle].text((values[handle]).toLocaleString())
        });
    });
}