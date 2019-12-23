import 'air-datepicker'

let elements = document.querySelectorAll('.dateDropdown__input')
let dateDropdowns = []
let secondInputs = []
let maxWidth = 320;

for (let i = 0; i < elements.length; i++) {
    let temp = $(elements[i]).parent().siblings('.dateDropdown__label').children('.dateDropdown__secondDateInput')[0];
    let firstInput =  elements[i].getAttribute('id');
    let secondInput = temp.getAttribute('id');
    dateDropdowns.push(firstInput);
    secondInputs.push(secondInput);
}

for(let i = 0; i < dateDropdowns.length; i++){
    $('#' + dateDropdowns[i]).datepicker({
        classes: 'added_datepicker',
        nextHtml: '<i class="material-icons">arrow_forward</i>',
        prevHtml: '<i class="material-icons">arrow_back</i>',
        navTitles: {
            days: 'MM <i>yyyy</i>',
        },
        range: true,
        multipleDatesSeparator: '-',
        onSelect: function (fd, d, picker) { 
            $('#' + dateDropdowns[i]).val(fd.split("-")[0]);
            $('#' + secondInputs[i]).val(fd.split("-")[1]);
        },
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
        clearButton: true,
    })
    let dp = $('#' + dateDropdowns[i]).datepicker().data('datepicker');
    $('#' + secondInputs[i]).click(function (){
        dp.show();
    })
    maxWidth = $('#' + dateDropdowns[i]).parent().parent('.dateDropdown__container').innerWidth();  
    $('.added_datepicker').parent().width(maxWidth); 
    // $('.added_datepicker').width(maxWidth);    
}

$(window).resize(function () {
    maxWidth = $('.dateDropdown__container').innerWidth();
    $('.added_datepicker').parent().width(maxWidth);
    // $('.added_datepicker').width(maxWidth); 
})   

