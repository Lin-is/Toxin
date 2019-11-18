function changeDateLabel() { 
    let date = document.querySelector(".dateDropdown__input").value.toString(); 
    console.log(date);
    console.log(3 + 5);
    var year = date.slice(0,4);
    var month = date.slice(5,7);
    var day = date.slice(8, date.length);
    var newDate = day + '.' + month + '.' + year;
    console.log(newDate);
    document.querySelector('.dateDropdown__label').innerHTML = newDate;
}

document.querySelector(".dateDropdown__input").addEventListener("change", changeDateLabel());
document.querySelector(".dateDropdown__input").addEventListener("click", document.querySelector(".dateDropdown__input").removeEventListener());
