function changeDateLabel() {
    var date = document.getElementById('dateDropdown-' + `${name}`).value;

    var year, month, day;

    if (date != '') {
        for (i = 0; i < 4; i++) { 
            year = year + date[i];
        }
        for (i = 5; i < 8; i++) {
            month = month + date[i];
        }
        for (i=9; i<10; i++) {
            day += day + date[i];
        } 
    alert(day + '.' + month + '.' + year);
    document.getElementsByClassName('dateDropdown__label').value = date;//day + '.' + month + '.' + year;
}
}
