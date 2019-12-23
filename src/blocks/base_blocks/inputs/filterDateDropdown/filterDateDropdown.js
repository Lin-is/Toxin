
import 'air-datepicker'

let elements = document.querySelectorAll('.filterDateDropdown__input')
// console.log(elements)
let dateDropdowns = []
let maxWidth = 320;


for (let elem of elements) {
    dateDropdowns.push(document.getElementById(elem.getAttribute('id')))
}
console.log(dateDropdowns)
for(let elem of dateDropdowns){
    $('#' + elem.getAttribute('id')).datepicker({
        classes: 'added_filterDatepicker',
        range: true,
        multipleDatesSeparator: ' - ',
        toggleSelected: false,
        dateFormat: 'd M',
        nextHtml: '<i class="material-icons">arrow_forward</i>',
        prevHtml: '<i class="material-icons">arrow_back</i>',
        clearButton: true,
        onShow (inst, animationCompleted) {
            if (!animationCompleted) {
                if (!inst.$datepicker.find('.datepicker--buttons .datepicker--button-apply').length) {
                    $('<span class="datepicker--button datepicker--button-apply">Применить</span>').on('click', function (e) {
                        e.stopPropagation();
                        inst.hide();
                    }).appendTo(inst.$datepicker.find('.datepicker--buttons'));
                }
            }
        },
    })

    maxWidth = $(elem).parent().parent('.filterDateDropdown__container').innerWidth();  
    $('.added_filterDatepicker').parent().width(maxWidth);   
    // console.log('SSSSSSSSSSS')
}

$(window).resize(function () {
    maxWidth = $('.filterDateDropdown__container').innerWidth();
    $('.added_filterDatepicker').parent().width(maxWidth);
}) 
