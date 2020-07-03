var apComponentButtonActive = document.querySelector('.ap-component__button-content--active');
var apComponentButtonDefault = document.querySelector('.ap-component__button-content--default');
var apComponentButtonBackground = document.querySelector('.ap-component__button--background');

var shareButton = document.querySelector('.ap-component__button-share');
var shareButtonSVG = document.querySelector('.svg-arrow');
var shareButtonBoolean = false;

console.log(shareButton)
/* console.dir(shareButton); */

shareButton.addEventListener("click", function() {
    if(!shareButtonBoolean) {
    
    apComponentButtonDefault.style.display = 'none';
    apComponentButtonActive.style.display = 'flex';
    apComponentButtonBackground.style.backgroundColor = '#48556A'

    shareButton.style.backgroundColor = '#6D7F97';
    shareButton.style.zIndex = 2;
    shareButtonSVG.style.fill = '#ffffff';
    shareButtonBoolean = true;
    console.log(shareButton)
    }
    else {

    apComponentButtonDefault.style.display = 'flex';
    apComponentButtonActive.style.display = 'none';
    apComponentButtonBackground.style.backgroundColor = '#fff'

    shareButton.style.backgroundColor = '#ECF2F8';
    shareButtonSVG.style.fill = '#48556A';
    shareButtonBoolean = false;
    }
});