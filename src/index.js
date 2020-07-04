let apComponentButtonActive = document.querySelector('.ap-component__button-content--active');
let apComponentButtonDefault = document.querySelector('.ap-component__button-content--default');
let apComponentButtonBackground = document.querySelector('.ap-component__button--background');

let apComponent = document.querySelector('.ap-component');

let apComponentButtonActiveDesktop = document.querySelector('.desktop-ap-component__button-content--active');

let shareButton = document.querySelector('.ap-component__button-share');
let shareButtonSVG = document.querySelector('.svg-arrow');
let shareButtonBoolean = false;

let windowSize = window.screen.availWidth;
let elementSize = apComponent.offsetWidth + "px";

shareButton.addEventListener('click', function() {

    if(elementSize == '280px') {
        if(!shareButtonBoolean) {
        
        apComponentButtonDefault.style.zIndex = 3;
        apComponentButtonDefault.style.opacity = 0;
        apComponentButtonDefault.style.transition = 'opacity 400ms';

        apComponentButtonActive.style.opacity = 1;
        apComponentButtonActive.style.zIndex = 4;

        apComponentButtonBackground.style.backgroundColor = '#48556A';
        apComponentButtonBackground.style.width = '100%';
        apComponentButtonBackground.style.height = '64px';

        shareButton.style.transform = 'rotate(360deg)';
        shareButton.style.backgroundColor = '#6D7F97';

        shareButtonSVG.style.fill = '#ffffff';
        shareButtonBoolean = true;
        }
        
        else {

        apComponentButtonDefault.style.zIndex = 4;
        apComponentButtonDefault.style.opacity = 1;
        apComponentButtonDefault.style.transition = 'opacity 800ms 400ms';

        apComponentButtonActive.style.opacity = 0;
        apComponentButtonActive.style.zIndex = 3;

        apComponentButtonBackground.style.backgroundColor = '#48556A';
        apComponentButtonBackground.style.width = '0';

        shareButton.style.transform = 'rotate(0deg)'
        shareButton.style.backgroundColor = '#ECF2F8';
        
        shareButtonSVG.style.fill = '#48556A';
        shareButtonBoolean = false;
        }
    }
    else {
        if(!shareButtonBoolean) {         
            apComponentButtonActiveDesktop.style.top = '-80px';
            apComponentButtonActiveDesktop.style.opacity = 1;
            

            shareButton.style.backgroundColor = '#6D7F97';

            shareButtonSVG.style.fill = '#ffffff';
            shareButtonBoolean = true;
        }
        else {
            apComponentButtonActiveDesktop.style.bottom = '-9999px';
            apComponentButtonActiveDesktop.style.opacity = 0;

            shareButton.style.backgroundColor = '#ECF2F8';
    
            shareButtonSVG.style.fill = '#48556A';
            shareButtonBoolean = false;
        }
    }
});
