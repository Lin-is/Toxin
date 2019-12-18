
let headers = document.querySelectorAll('.header__navigationContainer');

$('.header__navigationButton').click(function () {
    if(this.classList.contains('header__navigationButton_clicked')) {
        this.classList.remove('header__navigationButton_clicked');
        $(this).parent().siblings('.header__menuList').removeClass('header__menuList_open')
    } 
    else {
        this.classList.add('header__navigationButton_clicked');
        $(this).parent('.header__buttonsContainer').siblings('.header__menuList').addClass('header__menuList_open')
    }
        
})