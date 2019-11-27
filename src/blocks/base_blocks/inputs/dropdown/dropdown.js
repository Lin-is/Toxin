/*dropdown expanding animation*/ 

let elements = document.querySelectorAll('.dropdown__headerLabel')
let inputs = []
for (let elem of elements) {
    inputs.push(document.getElementById(elem.getAttribute('for')))
}
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

/*buttons work*/

let lists = document.querySelectorAll('.dropdown__list')
for (let list of lists) {

/*clear button */

    if (Number($(list).children('.dropdown__listItem').children('.dropdown__counterContainer').children('.dropdown__counterLabel').text()) == 0){
        $(list).siblings('.dropdown__buttonsContainer').children('.dropdown__buttonReset').addClass('dropdown__buttonReset_disable')
    }
    $(list).children().click(function () {
        if (Number($(list).children('.dropdown__listItem').children('.dropdown__counterContainer').children('.dropdown__counterLabel').text()) == 0){
            $(list).siblings('.dropdown__buttonsContainer').children('.dropdown__buttonReset').addClass('dropdown__buttonReset_disable')
        } else {
            $(list).siblings('.dropdown__buttonsContainer').children('.dropdown__buttonReset').removeClass('dropdown__buttonReset_disable')
        }
    })
    
    $(list).siblings('.dropdown__buttonsContainer').children('.dropdown__buttonReset').click(function () {
        $(list).children('.dropdown__listItem').children('.dropdown__counterContainer').children('.dropdown__counterLabel').text('0') 
        $(list).children('.dropdown__listItem').children('.dropdown__counterContainer').children('.dropdown__counterDecrement').addClass('dropdown__counterButton_disabled')
        $(list).siblings('.dropdown__buttonsContainer').children('.dropdown__buttonReset').addClass('dropdown__buttonReset_disable')
        $(list).parent().siblings('.dropdown__headerLabel').children('.dropdown__textContainer').children('.dropdown__text').text('Сколько гостей')
    })

/*number of guests calculation*/

    let listItems = list.querySelectorAll('.dropdown__counterContainer')
    for (let listItem of listItems) {
        $(listItem).children('.dropdown__counterDecrement').click(function (){
            if (Number($(listItem).children('.dropdown__counterLabel').text()) == 0) {
                $(listItem).children('.dropdown__counterDecrement').addClass('dropdown__counterButton_disabled')
            }
            else {
                let text = Number($(listItem).children('.dropdown__counterLabel').text())
                --text
                $(listItem).children('.dropdown__counterLabel').text(text)
                if (text == 0) {
                    $(listItem).children('.dropdown__counterDecrement').addClass('dropdown__counterButton_disabled') 
                }
            }
        }) 

        $(listItem).children('.dropdown__counterIncrement').click(function (){
            $(listItem).children('.dropdown__counterDecrement').removeClass('dropdown__counterButton_disabled')
            $(listItem).parent().parent().siblings('.dropdown__buttonsContainer').children('.dropdown__buttonReset').removeClass('dropdown__buttonReset_disable')
            let text = Number($(listItem).children('.dropdown__counterLabel').text())
            ++text
            $(listItem).children('.dropdown__counterLabel').text(text)
        })
    }
    
/*number of guests message*/

    $(list).siblings('.dropdown__buttonsContainer').children('.dropdown__buttonApply').click(function() {
        let guestsNumber = 0
        let infantsNumber = 0
        let message = ''
        let textGuests = $(list).parent().siblings('.dropdown__headerLabel').children('.dropdown__textContainer').children('.dropdown__text')

        for(let listItem of listItems){
            guestsNumber += Number($(listItem).children('.dropdown__counterLabel').text())
            let stringName = $(listItem).siblings('.dropdown__itemName').text().toUpperCase()
            if (stringName == 'МЛАДЕНЦЫ') {
                infantsNumber += Number($(listItem).children('.dropdown__counterLabel').text())
            }
        } 

        let temp = guestsNumber % 10
        let infTemp = infantsNumber % 10
        
        if (guestsNumber === 0){
            message = 'Сколько гостей'
        } else if ((11 <= guestsNumber && guestsNumber <= 20) || ( 5 <= temp && temp <= 9) || temp === 0) {
            message = guestsNumber + ' гостей'
        } else if (temp === 1){
            message = guestsNumber + ' гость'
        } else if (2 <= temp && temp <= 4) {
            message = guestsNumber + ' гостя'
        } 

        if (infantsNumber !== 0) {
            if ((11 <= infantsNumber && infantsNumber <= 20) || ( 5 <= infTemp && infTemp <= 9) || infTemp === 0) {
                message += ', ' + infantsNumber + ' младенцев'
            }
            else if (infTemp === 1){
                message += ', ' + infantsNumber + ' младенец'
            } 
            else if (2 <= infTemp && infTemp <= 4) {
                message += ', ' + infantsNumber + ' младенца'
            }
        }
        textGuests.text(message)
    })

/**number of rooms calculation */
    for(let listItem of listItems) {
        $(listItem).children('.dropdown_short.dropdown__counterButton').on ('click', function (){
            let badroomsNumber = 0
            let badsNumber = 0
            let bathsNumber = 0
            let message = ''
            let textRooms = $(list).parent().siblings('.dropdown_short.dropdown__headerLabel').children('.dropdown_short.dropdown__textContainer').children('.dropdown_short.dropdown__text')

            for(let listItem of listItems){
                let stringName = $(listItem).siblings('.dropdown_short.dropdown__itemName').text().toUpperCase()
                if (stringName == 'СПАЛЬНИ') {
                    badroomsNumber += Number($(listItem).children('.dropdown_short.dropdown__counterLabel').text())
                } else if (stringName == 'КРОВАТИ') {
                    badsNumber += Number($(listItem).children('.dropdown_short.dropdown__counterLabel').text())
                } else if (stringName == 'ВАННЫЕ КОМНАТЫ') {
                    bathsNumber += Number($(listItem).children('.dropdown_short.dropdown__counterLabel').text())
                }
            }

/*number of rooms message */

            let badrTemp = badroomsNumber % 10
            let badsTemp = badsNumber % 10
            let bathsTemp = bathsNumber % 10

            if (badroomsNumber !== 0) {
                if ((11 <= badroomsNumber && badroomsNumber <= 20) || ( 5 <= badrTemp && badrTemp <= 9) || badrTemp === 0) {
                    message += badroomsNumber + ' спален'
                }
                else if (badrTemp === 1){
                    message += badroomsNumber + ' спальня'
                } 
                else if (2 <= badrTemp && badrTemp <= 4) {
                    message += badroomsNumber + ' спальни'
                }
            }
            if (badsNumber !== 0) {
                if (message != '') {
                    message += ', '
                }
                if ((11 <= badsNumber && badsNumber <= 20) || ( 5 <= badsTemp && badsTemp <= 9) || badsTemp === 0) {
                    message += badsNumber + ' кроватей'
                }
                else if (badsTemp === 1){
                    message += badsNumber + ' кровать'
                } 
                else if (2 <= badsTemp && badsTemp <= 4) {
                    message += badsNumber + ' кровати'
                }
            }
            if (bathsNumber !== 0) {
                if (message != '') {
                    message += ', '
                }
                if ((11 <= bathsNumber && bathsNumber <= 20) || ( 5 <= bathsTemp && bathsTemp <= 9) || bathsTemp === 0) {
                    message += bathsNumber + ' ванных комнат'
                }
                else if (bathsTemp === 1){
                    message += bathsNumber + ' ванная комната'
                } 
                else if (2 <= bathsTemp && bathsTemp <= 4) {
                    message += bathsNumber + ' ванных комнаты'
                }
            }
            if (message == '' ) {
                message += 'Сколько комнат'
            }
            textRooms.text(message)
        })
    }
}
